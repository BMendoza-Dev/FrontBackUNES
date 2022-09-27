package de.appplant.cordova.plugin.notification.util;

import android.content.Context;
import android.content.res.AssetManager;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.StrictMode;
import android.util.Log;
import com.ionicframework.cordova.webview.WebViewLocalServer;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.UUID;
/* loaded from: classes.dex */
public final class AssetUtil {
    private static final String STORAGE_FOLDER = "/localnotification";
    private final Context context;

    private AssetUtil(Context context) {
        this.context = context;
    }

    public static AssetUtil getInstance(Context context) {
        return new AssetUtil(context);
    }

    public Uri parse(String str) {
        if (str == null || str.isEmpty()) {
            return Uri.EMPTY;
        }
        if (str.startsWith("res:")) {
            return getUriForResourcePath(str);
        }
        if (str.startsWith("file:///")) {
            return getUriFromPath(str);
        }
        if (str.startsWith("file://")) {
            return getUriFromAsset(str);
        }
        if (str.startsWith(WebViewLocalServer.httpScheme)) {
            return getUriFromRemote(str);
        }
        if (str.startsWith("content://")) {
            return Uri.parse(str);
        }
        return Uri.EMPTY;
    }

    private Uri getUriFromPath(String str) {
        File file = new File(str.replaceFirst("file://", ""));
        if (!file.exists()) {
            Log.e("Asset", "File not found: " + file.getAbsolutePath());
            return Uri.EMPTY;
        }
        return getUriFromFile(file);
    }

    private Uri getUriFromAsset(String str) {
        String replaceFirst = str.replaceFirst("file:/", "www");
        File tmpFile = getTmpFile(replaceFirst.substring(replaceFirst.lastIndexOf(47) + 1));
        if (tmpFile == null) {
            return Uri.EMPTY;
        }
        try {
            AssetManager assets = this.context.getAssets();
            FileOutputStream fileOutputStream = new FileOutputStream(tmpFile);
            copyFile(assets.open(replaceFirst), fileOutputStream);
            fileOutputStream.flush();
            fileOutputStream.close();
            return getUriFromFile(tmpFile);
        } catch (Exception e) {
            Log.e("Asset", "File not found: assets/" + replaceFirst);
            e.printStackTrace();
            return Uri.EMPTY;
        }
    }

    private Uri getUriForResourcePath(String str) {
        Resources resources = this.context.getResources();
        String replaceFirst = str.replaceFirst("res://", "");
        int resId = getResId(replaceFirst);
        if (resId == 0) {
            Log.e("Asset", "File not found: " + replaceFirst);
            return Uri.EMPTY;
        }
        return new Uri.Builder().scheme("android.resource").authority(resources.getResourcePackageName(resId)).appendPath(resources.getResourceTypeName(resId)).appendPath(resources.getResourceEntryName(resId)).build();
    }

    private Uri getUriFromRemote(String str) {
        File tmpFile = getTmpFile();
        if (tmpFile == null) {
            return Uri.EMPTY;
        }
        try {
            HttpURLConnection httpURLConnection = (HttpURLConnection) new URL(str).openConnection();
            StrictMode.setThreadPolicy(new StrictMode.ThreadPolicy.Builder().permitAll().build());
            httpURLConnection.setRequestProperty("Connection", "close");
            httpURLConnection.setConnectTimeout(5000);
            httpURLConnection.connect();
            InputStream inputStream = httpURLConnection.getInputStream();
            FileOutputStream fileOutputStream = new FileOutputStream(tmpFile);
            copyFile(inputStream, fileOutputStream);
            fileOutputStream.flush();
            fileOutputStream.close();
            return getUriFromFile(tmpFile);
        } catch (FileNotFoundException e) {
            Log.e("Asset", "Failed to create new File from HTTP Content");
            e.printStackTrace();
            return Uri.EMPTY;
        } catch (MalformedURLException e2) {
            Log.e("Asset", "Incorrect URL");
            e2.printStackTrace();
            return Uri.EMPTY;
        } catch (IOException e3) {
            Log.e("Asset", "No Input can be created from http Stream");
            e3.printStackTrace();
            return Uri.EMPTY;
        }
    }

    private void copyFile(InputStream inputStream, OutputStream outputStream) throws IOException {
        byte[] bArr = new byte[1024];
        while (true) {
            int read = inputStream.read(bArr);
            if (read != -1) {
                outputStream.write(bArr, 0, read);
            } else {
                return;
            }
        }
    }

    public int getResId(String str) {
        int resId = getResId(this.context.getResources(), str);
        return resId == 0 ? getResId(Resources.getSystem(), str) : resId;
    }

    private int getResId(Resources resources, String str) {
        String pkgName = getPkgName(resources);
        String baseName = getBaseName(str);
        int identifier = resources.getIdentifier(baseName, "mipmap", pkgName);
        if (identifier == 0) {
            identifier = resources.getIdentifier(baseName, "drawable", pkgName);
        }
        return identifier == 0 ? resources.getIdentifier(baseName, "raw", pkgName) : identifier;
    }

    public Bitmap getIconFromUri(Uri uri) throws IOException {
        return BitmapFactory.decodeStream(this.context.getContentResolver().openInputStream(uri));
    }

    private String getBaseName(String str) {
        String substring = str.contains("/") ? str.substring(str.lastIndexOf(47) + 1) : str;
        return str.contains(".") ? substring.substring(0, substring.lastIndexOf(46)) : substring;
    }

    private File getTmpFile() {
        return getTmpFile(UUID.randomUUID().toString());
    }

    private File getTmpFile(String str) {
        File externalCacheDir = this.context.getExternalCacheDir();
        if (externalCacheDir == null) {
            externalCacheDir = this.context.getCacheDir();
        }
        if (externalCacheDir == null) {
            Log.e("Asset", "Missing cache dir");
            return null;
        }
        String str2 = externalCacheDir.toString() + STORAGE_FOLDER;
        new File(str2).mkdir();
        return new File(str2, str);
    }

    private Uri getUriFromFile(File file) {
        try {
            return AssetProvider.getUriForFile(this.context, this.context.getPackageName() + ".provider", file);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return Uri.EMPTY;
        }
    }

    private String getPkgName(Resources resources) {
        return resources == Resources.getSystem() ? "android" : this.context.getPackageName();
    }
}
