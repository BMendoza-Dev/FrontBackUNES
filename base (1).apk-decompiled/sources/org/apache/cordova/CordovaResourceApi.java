package org.apache.cordova;

import android.content.ContentResolver;
import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.content.res.AssetManager;
import android.database.Cursor;
import android.net.Uri;
import android.os.Looper;
import android.util.Base64;
import android.webkit.MimeTypeMap;
import com.ionicframework.cordova.webview.WebViewLocalServer;
import com.silkimen.http.HttpRequest;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.channels.FileChannel;
import java.util.Locale;
/* loaded from: classes.dex */
public class CordovaResourceApi {
    private static final String[] LOCAL_FILE_PROJECTION = {"_data"};
    private static final String LOG_TAG = "CordovaResourceApi";
    public static final String PLUGIN_URI_SCHEME = "cdvplugin";
    public static final int URI_TYPE_ASSET = 1;
    public static final int URI_TYPE_CONTENT = 2;
    public static final int URI_TYPE_DATA = 4;
    public static final int URI_TYPE_FILE = 0;
    public static final int URI_TYPE_HTTP = 5;
    public static final int URI_TYPE_HTTPS = 6;
    public static final int URI_TYPE_PLUGIN = 7;
    public static final int URI_TYPE_RESOURCE = 3;
    public static final int URI_TYPE_UNKNOWN = -1;
    public static Thread jsThread;
    private final AssetManager assetManager;
    private final ContentResolver contentResolver;
    private final PluginManager pluginManager;
    private boolean threadCheckingEnabled = true;

    public CordovaResourceApi(Context context, PluginManager pluginManager) {
        this.contentResolver = context.getContentResolver();
        this.assetManager = context.getAssets();
        this.pluginManager = pluginManager;
    }

    public void setThreadCheckingEnabled(boolean z) {
        this.threadCheckingEnabled = z;
    }

    public boolean isThreadCheckingEnabled() {
        return this.threadCheckingEnabled;
    }

    public static int getUriType(Uri uri) {
        assertNonRelative(uri);
        String scheme = uri.getScheme();
        if ("content".equalsIgnoreCase(scheme)) {
            return 2;
        }
        if ("android.resource".equalsIgnoreCase(scheme)) {
            return 3;
        }
        if ("file".equalsIgnoreCase(scheme)) {
            return uri.getPath().startsWith("/android_asset/") ? 1 : 0;
        } else if ("data".equalsIgnoreCase(scheme)) {
            return 4;
        } else {
            if (WebViewLocalServer.httpScheme.equalsIgnoreCase(scheme)) {
                return 5;
            }
            if (WebViewLocalServer.httpsScheme.equalsIgnoreCase(scheme)) {
                return 6;
            }
            return PLUGIN_URI_SCHEME.equalsIgnoreCase(scheme) ? 7 : -1;
        }
    }

    public Uri remapUri(Uri uri) {
        assertNonRelative(uri);
        Uri remapUri = this.pluginManager.remapUri(uri);
        return remapUri != null ? remapUri : uri;
    }

    public String remapPath(String str) {
        return remapUri(Uri.fromFile(new File(str))).getPath();
    }

    public File mapUriToFile(Uri uri) {
        Cursor query;
        assertBackgroundThread();
        int uriType = getUriType(uri);
        if (uriType != 0) {
            if (uriType != 2 || (query = this.contentResolver.query(uri, LOCAL_FILE_PROJECTION, null, null, null)) == null) {
                return null;
            }
            try {
                int columnIndex = query.getColumnIndex(LOCAL_FILE_PROJECTION[0]);
                if (columnIndex != -1 && query.getCount() > 0) {
                    query.moveToFirst();
                    String string = query.getString(columnIndex);
                    if (string != null) {
                        return new File(string);
                    }
                }
                return null;
            } finally {
                query.close();
            }
        }
        return new File(uri.getPath());
    }

    /* JADX WARN: Removed duplicated region for block: B:14:0x0046 A[ExcHandler: IOException -> 0x0046, RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.String getMimeType(android.net.Uri r3) {
        /*
            r2 = this;
            int r0 = getUriType(r3)
            switch(r0) {
                case 0: goto L3d;
                case 1: goto L3d;
                case 2: goto L36;
                case 3: goto L36;
                case 4: goto L31;
                case 5: goto L8;
                case 6: goto L8;
                default: goto L7;
            }
        L7:
            goto L46
        L8:
            java.net.URL r0 = new java.net.URL     // Catch: java.io.IOException -> L46
            java.lang.String r3 = r3.toString()     // Catch: java.io.IOException -> L46
            r0.<init>(r3)     // Catch: java.io.IOException -> L46
            java.net.URLConnection r3 = r0.openConnection()     // Catch: java.io.IOException -> L46
            java.net.HttpURLConnection r3 = (java.net.HttpURLConnection) r3     // Catch: java.io.IOException -> L46
            r0 = 0
            r3.setDoInput(r0)     // Catch: java.io.IOException -> L46
            java.lang.String r1 = "HEAD"
            r3.setRequestMethod(r1)     // Catch: java.io.IOException -> L46
            java.lang.String r1 = "Content-Type"
            java.lang.String r3 = r3.getHeaderField(r1)     // Catch: java.io.IOException -> L46
            if (r3 == 0) goto L30
            java.lang.String r1 = ";"
            java.lang.String[] r3 = r3.split(r1)     // Catch: java.io.IOException -> L46
            r3 = r3[r0]     // Catch: java.io.IOException -> L46
        L30:
            return r3
        L31:
            java.lang.String r3 = r2.getDataUriMimeType(r3)
            return r3
        L36:
            android.content.ContentResolver r0 = r2.contentResolver
            java.lang.String r3 = r0.getType(r3)
            return r3
        L3d:
            java.lang.String r3 = r3.getPath()
            java.lang.String r3 = r2.getMimeTypeFromPath(r3)
            return r3
        L46:
            r3 = 0
            return r3
        */
        throw new UnsupportedOperationException("Method not decompiled: org.apache.cordova.CordovaResourceApi.getMimeType(android.net.Uri):java.lang.String");
    }

    private String getMimeTypeFromPath(String str) {
        int lastIndexOf = str.lastIndexOf(46);
        if (lastIndexOf != -1) {
            str = str.substring(lastIndexOf + 1);
        }
        String lowerCase = str.toLowerCase(Locale.getDefault());
        return lowerCase.equals("3ga") ? "audio/3gpp" : lowerCase.equals("js") ? "text/javascript" : MimeTypeMap.getSingleton().getMimeTypeFromExtension(lowerCase);
    }

    public OpenForReadResult openForRead(Uri uri) throws IOException {
        return openForRead(uri, false);
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public OpenForReadResult openForRead(Uri uri, boolean z) throws IOException {
        AssetFileDescriptor assetFileDescriptor;
        long j;
        FileInputStream fileInputStream;
        if (!z) {
            assertBackgroundThread();
        }
        switch (getUriType(uri)) {
            case 0:
                FileInputStream fileInputStream2 = new FileInputStream(uri.getPath());
                return new OpenForReadResult(uri, fileInputStream2, getMimeTypeFromPath(uri.getPath()), fileInputStream2.getChannel().size(), null);
            case 1:
                String substring = uri.getPath().substring(15);
                AssetFileDescriptor assetFileDescriptor2 = null;
                try {
                    assetFileDescriptor2 = this.assetManager.openFd(substring);
                    FileInputStream createInputStream = assetFileDescriptor2.createInputStream();
                    j = assetFileDescriptor2.getLength();
                    assetFileDescriptor = assetFileDescriptor2;
                    fileInputStream = createInputStream;
                } catch (FileNotFoundException unused) {
                    InputStream open = this.assetManager.open(substring);
                    j = open.available();
                    assetFileDescriptor = assetFileDescriptor2;
                    fileInputStream = open;
                }
                return new OpenForReadResult(uri, fileInputStream, getMimeTypeFromPath(substring), j, assetFileDescriptor);
            case 2:
            case 3:
                String type = this.contentResolver.getType(uri);
                AssetFileDescriptor openAssetFileDescriptor = this.contentResolver.openAssetFileDescriptor(uri, "r");
                return new OpenForReadResult(uri, openAssetFileDescriptor.createInputStream(), type, openAssetFileDescriptor.getLength(), openAssetFileDescriptor);
            case 4:
                OpenForReadResult readDataUri = readDataUri(uri);
                if (readDataUri != null) {
                    return readDataUri;
                }
                break;
            case 5:
            case 6:
                HttpURLConnection httpURLConnection = (HttpURLConnection) new URL(uri.toString()).openConnection();
                httpURLConnection.setDoInput(true);
                String headerField = httpURLConnection.getHeaderField(HttpRequest.HEADER_CONTENT_TYPE);
                return new OpenForReadResult(uri, httpURLConnection.getInputStream(), headerField != null ? headerField.split(";")[0] : headerField, httpURLConnection.getContentLength(), null);
            case 7:
                CordovaPlugin plugin = this.pluginManager.getPlugin(uri.getHost());
                if (plugin == null) {
                    throw new FileNotFoundException("Invalid plugin ID in URI: " + uri);
                }
                return plugin.handleOpenForRead(uri);
        }
        throw new FileNotFoundException("URI not supported by CordovaResourceApi: " + uri);
    }

    public OutputStream openOutputStream(Uri uri) throws IOException {
        return openOutputStream(uri, false);
    }

    public OutputStream openOutputStream(Uri uri, boolean z) throws IOException {
        assertBackgroundThread();
        int uriType = getUriType(uri);
        if (uriType == 0) {
            File file = new File(uri.getPath());
            File parentFile = file.getParentFile();
            if (parentFile != null) {
                parentFile.mkdirs();
            }
            return new FileOutputStream(file, z);
        }
        switch (uriType) {
            case 2:
            case 3:
                return this.contentResolver.openAssetFileDescriptor(uri, z ? "wa" : "w").createOutputStream();
            default:
                throw new FileNotFoundException("URI not supported by CordovaResourceApi: " + uri);
        }
    }

    public HttpURLConnection createHttpConnection(Uri uri) throws IOException {
        assertBackgroundThread();
        return (HttpURLConnection) new URL(uri.toString()).openConnection();
    }

    public void copyResource(OpenForReadResult openForReadResult, OutputStream outputStream) throws IOException {
        assertBackgroundThread();
        try {
            InputStream inputStream = openForReadResult.inputStream;
            if ((inputStream instanceof FileInputStream) && (outputStream instanceof FileOutputStream)) {
                FileChannel channel = ((FileInputStream) openForReadResult.inputStream).getChannel();
                FileChannel channel2 = ((FileOutputStream) outputStream).getChannel();
                long j = 0;
                long j2 = openForReadResult.length;
                if (openForReadResult.assetFd != null) {
                    j = openForReadResult.assetFd.getStartOffset();
                }
                channel.position(j);
                channel2.transferFrom(channel, 0L, j2);
            } else {
                byte[] bArr = new byte[8192];
                while (true) {
                    int read = inputStream.read(bArr, 0, 8192);
                    if (read <= 0) {
                        break;
                    }
                    outputStream.write(bArr, 0, read);
                }
            }
        } finally {
            openForReadResult.inputStream.close();
            if (outputStream != null) {
                outputStream.close();
            }
        }
    }

    public void copyResource(Uri uri, OutputStream outputStream) throws IOException {
        copyResource(openForRead(uri), outputStream);
    }

    public void copyResource(Uri uri, Uri uri2) throws IOException {
        copyResource(openForRead(uri), openOutputStream(uri2));
    }

    private void assertBackgroundThread() {
        if (this.threadCheckingEnabled) {
            Thread currentThread = Thread.currentThread();
            if (currentThread == Looper.getMainLooper().getThread()) {
                throw new IllegalStateException("Do not perform IO operations on the UI thread. Use CordovaInterface.getThreadPool() instead.");
            }
            if (currentThread == jsThread) {
                throw new IllegalStateException("Tried to perform an IO operation on the WebCore thread. Use CordovaInterface.getThreadPool() instead.");
            }
        }
    }

    private String getDataUriMimeType(Uri uri) {
        String schemeSpecificPart = uri.getSchemeSpecificPart();
        int indexOf = schemeSpecificPart.indexOf(44);
        if (indexOf == -1) {
            return null;
        }
        String[] split = schemeSpecificPart.substring(0, indexOf).split(";");
        if (split.length <= 0) {
            return null;
        }
        return split[0];
    }

    private OpenForReadResult readDataUri(Uri uri) {
        byte[] bytes;
        String schemeSpecificPart = uri.getSchemeSpecificPart();
        int indexOf = schemeSpecificPart.indexOf(44);
        if (indexOf == -1) {
            return null;
        }
        String[] split = schemeSpecificPart.substring(0, indexOf).split(";");
        String str = split.length > 0 ? split[0] : null;
        boolean z = false;
        for (int i = 1; i < split.length; i++) {
            if ("base64".equalsIgnoreCase(split[i])) {
                z = true;
            }
        }
        String substring = schemeSpecificPart.substring(indexOf + 1);
        if (z) {
            bytes = Base64.decode(substring, 0);
        } else {
            try {
                bytes = substring.getBytes(HttpRequest.CHARSET_UTF8);
            } catch (UnsupportedEncodingException unused) {
                bytes = substring.getBytes();
            }
        }
        return new OpenForReadResult(uri, new ByteArrayInputStream(bytes), str, bytes.length, null);
    }

    private static void assertNonRelative(Uri uri) {
        if (uri.isAbsolute()) {
            return;
        }
        throw new IllegalArgumentException("Relative URIs are not supported.");
    }

    /* loaded from: classes.dex */
    public static final class OpenForReadResult {
        public final AssetFileDescriptor assetFd;
        public final InputStream inputStream;
        public final long length;
        public final String mimeType;
        public final Uri uri;

        public OpenForReadResult(Uri uri, InputStream inputStream, String str, long j, AssetFileDescriptor assetFileDescriptor) {
            this.uri = uri;
            this.inputStream = inputStream;
            this.mimeType = str;
            this.length = j;
            this.assetFd = assetFileDescriptor;
        }
    }
}
