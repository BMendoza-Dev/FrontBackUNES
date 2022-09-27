package org.apache.cordova.file;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import org.apache.cordova.CordovaResourceApi;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
public class ContentFilesystem extends Filesystem {
    private final Context context;

    @Override // org.apache.cordova.file.Filesystem
    public LocalFilesystemURL URLforFilesystemPath(String str) {
        return null;
    }

    @Override // org.apache.cordova.file.Filesystem
    public boolean canRemoveFileAtLocalURL(LocalFilesystemURL localFilesystemURL) {
        return true;
    }

    public ContentFilesystem(Context context, CordovaResourceApi cordovaResourceApi) {
        super(Uri.parse("content://"), "content", cordovaResourceApi);
        this.context = context;
    }

    @Override // org.apache.cordova.file.Filesystem
    public Uri toNativeUri(LocalFilesystemURL localFilesystemURL) {
        String substring = localFilesystemURL.uri.getEncodedPath().substring(this.name.length() + 2);
        if (substring.length() < 2) {
            return null;
        }
        String str = "content://" + substring;
        String encodedQuery = localFilesystemURL.uri.getEncodedQuery();
        if (encodedQuery != null) {
            str = str + '?' + encodedQuery;
        }
        String encodedFragment = localFilesystemURL.uri.getEncodedFragment();
        if (encodedFragment != null) {
            str = str + '#' + encodedFragment;
        }
        return Uri.parse(str);
    }

    @Override // org.apache.cordova.file.Filesystem
    public LocalFilesystemURL toLocalUri(Uri uri) {
        if (!"content".equals(uri.getScheme())) {
            return null;
        }
        String encodedPath = uri.getEncodedPath();
        if (encodedPath.length() > 0) {
            encodedPath = encodedPath.substring(1);
        }
        Uri.Builder appendPath = new Uri.Builder().scheme(LocalFilesystemURL.FILESYSTEM_PROTOCOL).authority("localhost").path(this.name).appendPath(uri.getAuthority());
        if (encodedPath.length() > 0) {
            appendPath.appendEncodedPath(encodedPath);
        }
        return LocalFilesystemURL.parse(appendPath.encodedQuery(uri.getEncodedQuery()).encodedFragment(uri.getEncodedFragment()).build());
    }

    @Override // org.apache.cordova.file.Filesystem
    public JSONObject getFileForLocalURL(LocalFilesystemURL localFilesystemURL, String str, JSONObject jSONObject, boolean z) throws IOException, TypeMismatchException, JSONException {
        throw new UnsupportedOperationException("getFile() not supported for content:. Use resolveLocalFileSystemURL instead.");
    }

    @Override // org.apache.cordova.file.Filesystem
    public boolean removeFileAtLocalURL(LocalFilesystemURL localFilesystemURL) throws NoModificationAllowedException {
        Uri nativeUri = toNativeUri(localFilesystemURL);
        try {
            this.context.getContentResolver().delete(nativeUri, null, null);
            return true;
        } catch (UnsupportedOperationException e) {
            NoModificationAllowedException noModificationAllowedException = new NoModificationAllowedException("Deleting not supported for content uri: " + nativeUri);
            noModificationAllowedException.initCause(e);
            throw noModificationAllowedException;
        }
    }

    @Override // org.apache.cordova.file.Filesystem
    public boolean recursiveRemoveFileAtLocalURL(LocalFilesystemURL localFilesystemURL) throws NoModificationAllowedException {
        throw new NoModificationAllowedException("Cannot remove content url");
    }

    @Override // org.apache.cordova.file.Filesystem
    public LocalFilesystemURL[] listChildren(LocalFilesystemURL localFilesystemURL) throws FileNotFoundException {
        throw new UnsupportedOperationException("readEntriesAtLocalURL() not supported for content:. Use resolveLocalFileSystemURL instead.");
    }

    /* JADX WARN: Removed duplicated region for block: B:15:0x003a A[DONT_GENERATE] */
    @Override // org.apache.cordova.file.Filesystem
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public org.json.JSONObject getFileMetadataForLocalURL(org.apache.cordova.file.LocalFilesystemURL r8) throws java.io.FileNotFoundException {
        /*
            r7 = this;
            android.net.Uri r0 = r7.toNativeUri(r8)
            org.apache.cordova.CordovaResourceApi r1 = r7.resourceApi
            java.lang.String r1 = r1.getMimeType(r0)
            android.database.Cursor r2 = r7.openCursorForURL(r0)
            r3 = 0
            if (r2 == 0) goto L30
            boolean r5 = r2.moveToFirst()     // Catch: java.lang.Throwable -> L62 java.io.IOException -> L64
            if (r5 == 0) goto L30
            java.lang.Long r0 = r7.resourceSizeForCursor(r2)     // Catch: java.lang.Throwable -> L62 java.io.IOException -> L64
            if (r0 == 0) goto L23
            long r5 = r0.longValue()     // Catch: java.lang.Throwable -> L62 java.io.IOException -> L64
            goto L25
        L23:
            r5 = -1
        L25:
            java.lang.Long r0 = r7.lastModifiedDateForCursor(r2)     // Catch: java.lang.Throwable -> L62 java.io.IOException -> L64
            if (r0 == 0) goto L38
            long r3 = r0.longValue()     // Catch: java.lang.Throwable -> L62 java.io.IOException -> L64
            goto L38
        L30:
            org.apache.cordova.CordovaResourceApi r5 = r7.resourceApi     // Catch: java.lang.Throwable -> L62 java.io.IOException -> L64
            org.apache.cordova.CordovaResourceApi$OpenForReadResult r0 = r5.openForRead(r0)     // Catch: java.lang.Throwable -> L62 java.io.IOException -> L64
            long r5 = r0.length     // Catch: java.lang.Throwable -> L62 java.io.IOException -> L64
        L38:
            if (r2 == 0) goto L3d
            r2.close()
        L3d:
            org.json.JSONObject r0 = new org.json.JSONObject
            r0.<init>()
            java.lang.String r2 = "size"
            r0.put(r2, r5)     // Catch: org.json.JSONException -> L60
            java.lang.String r2 = "type"
            r0.put(r2, r1)     // Catch: org.json.JSONException -> L60
            java.lang.String r1 = "name"
            java.lang.String r2 = r7.name     // Catch: org.json.JSONException -> L60
            r0.put(r1, r2)     // Catch: org.json.JSONException -> L60
            java.lang.String r1 = "fullPath"
            java.lang.String r8 = r8.path     // Catch: org.json.JSONException -> L60
            r0.put(r1, r8)     // Catch: org.json.JSONException -> L60
            java.lang.String r8 = "lastModifiedDate"
            r0.put(r8, r3)     // Catch: org.json.JSONException -> L60
            return r0
        L60:
            r8 = 0
            return r8
        L62:
            r8 = move-exception
            goto L6e
        L64:
            r8 = move-exception
            java.io.FileNotFoundException r0 = new java.io.FileNotFoundException     // Catch: java.lang.Throwable -> L62
            r0.<init>()     // Catch: java.lang.Throwable -> L62
            r0.initCause(r8)     // Catch: java.lang.Throwable -> L62
            throw r0     // Catch: java.lang.Throwable -> L62
        L6e:
            if (r2 == 0) goto L73
            r2.close()
        L73:
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: org.apache.cordova.file.ContentFilesystem.getFileMetadataForLocalURL(org.apache.cordova.file.LocalFilesystemURL):org.json.JSONObject");
    }

    @Override // org.apache.cordova.file.Filesystem
    public long writeToFileAtURL(LocalFilesystemURL localFilesystemURL, String str, int i, boolean z) throws NoModificationAllowedException {
        throw new NoModificationAllowedException("Couldn't write to file given its content URI");
    }

    @Override // org.apache.cordova.file.Filesystem
    public long truncateFileAtURL(LocalFilesystemURL localFilesystemURL, long j) throws NoModificationAllowedException {
        throw new NoModificationAllowedException("Couldn't truncate file given its content URI");
    }

    protected Cursor openCursorForURL(Uri uri) {
        try {
            return this.context.getContentResolver().query(uri, null, null, null, null);
        } catch (UnsupportedOperationException unused) {
            return null;
        }
    }

    private Long resourceSizeForCursor(Cursor cursor) {
        String string;
        int columnIndex = cursor.getColumnIndex("_size");
        if (columnIndex == -1 || (string = cursor.getString(columnIndex)) == null) {
            return null;
        }
        return Long.valueOf(Long.parseLong(string));
    }

    protected Long lastModifiedDateForCursor(Cursor cursor) {
        String string;
        int columnIndex = cursor.getColumnIndex("date_modified");
        if (columnIndex == -1) {
            columnIndex = cursor.getColumnIndex("last_modified");
        }
        if (columnIndex == -1 || (string = cursor.getString(columnIndex)) == null) {
            return null;
        }
        return Long.valueOf(Long.parseLong(string));
    }

    @Override // org.apache.cordova.file.Filesystem
    public String filesystemPathForURL(LocalFilesystemURL localFilesystemURL) {
        File mapUriToFile = this.resourceApi.mapUriToFile(toNativeUri(localFilesystemURL));
        if (mapUriToFile == null) {
            return null;
        }
        return mapUriToFile.getAbsolutePath();
    }
}
