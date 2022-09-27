package org.apache.cordova.file;

import android.net.Uri;
/* loaded from: classes.dex */
public class LocalFilesystemURL {
    public static final String FILESYSTEM_PROTOCOL = "cdvfile";
    public final String fsName;
    public final boolean isDirectory;
    public final String path;
    public final Uri uri;

    private LocalFilesystemURL(Uri uri, String str, String str2, boolean z) {
        this.uri = uri;
        this.fsName = str;
        this.path = str2;
        this.isDirectory = z;
    }

    public static LocalFilesystemURL parse(Uri uri) {
        int indexOf;
        if (!FILESYSTEM_PROTOCOL.equals(uri.getScheme())) {
            return null;
        }
        String path = uri.getPath();
        boolean z = true;
        if (path.length() < 1 || (indexOf = path.indexOf(47, 1)) < 0) {
            return null;
        }
        String substring = path.substring(1, indexOf);
        String substring2 = path.substring(indexOf);
        if (substring2.charAt(substring2.length() - 1) != '/') {
            z = false;
        }
        return new LocalFilesystemURL(uri, substring, substring2, z);
    }

    public static LocalFilesystemURL parse(String str) {
        return parse(Uri.parse(str));
    }

    public String toString() {
        return this.uri.toString();
    }
}
