package org.apache.cordova.file;

import android.app.Activity;
import android.content.Context;
import android.net.Uri;
import android.os.Environment;
import android.util.Base64;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.LOG;
import org.apache.cordova.PermissionHelper;
import org.apache.cordova.PluginResult;
import org.apache.cordova.file.Filesystem;
import org.apache.cordova.file.PendingRequests;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
public class FileUtils extends CordovaPlugin {
    public static int ABORT_ERR = 3;
    public static final int ACTION_GET_DIRECTORY = 2;
    public static final int ACTION_GET_FILE = 0;
    public static final int ACTION_WRITE = 1;
    public static int ENCODING_ERR = 5;
    public static int INVALID_MODIFICATION_ERR = 9;
    public static int INVALID_STATE_ERR = 7;
    private static final String LOG_TAG = "FileUtils";
    public static int NOT_FOUND_ERR = 1;
    public static int NOT_READABLE_ERR = 4;
    public static int NO_MODIFICATION_ALLOWED_ERR = 6;
    public static int PATH_EXISTS_ERR = 12;
    public static int QUOTA_EXCEEDED_ERR = 10;
    public static final int READ = 4;
    public static int SECURITY_ERR = 2;
    public static int SYNTAX_ERR = 8;
    public static int TYPE_MISMATCH_ERR = 11;
    public static int UNKNOWN_ERR = 1000;
    public static final int WRITE = 3;
    private static FileUtils filePlugin;
    private ArrayList<Filesystem> filesystems;
    private PendingRequests pendingRequests;
    private boolean configured = false;
    private String[] permissions = {"android.permission.READ_EXTERNAL_STORAGE", "android.permission.WRITE_EXTERNAL_STORAGE"};

    /* loaded from: classes.dex */
    public interface FileOp {
        void run(JSONArray jSONArray) throws Exception;
    }

    public void registerFilesystem(Filesystem filesystem) {
        if (filesystem == null || filesystemForName(filesystem.name) != null) {
            return;
        }
        this.filesystems.add(filesystem);
    }

    private Filesystem filesystemForName(String str) {
        Iterator<Filesystem> it = this.filesystems.iterator();
        while (it.hasNext()) {
            Filesystem next = it.next();
            if (next != null && next.name != null && next.name.equals(str)) {
                return next;
            }
        }
        return null;
    }

    protected String[] getExtraFileSystemsPreference(Activity activity) {
        return this.preferences.getString("androidextrafilesystems", "files,files-external,documents,sdcard,cache,cache-external,assets,root").split(",");
    }

    protected void registerExtraFileSystems(String[] strArr, HashMap<String, String> hashMap) {
        HashSet hashSet = new HashSet();
        for (String str : strArr) {
            if (!hashSet.contains(str)) {
                String str2 = hashMap.get(str);
                if (str2 != null) {
                    File file = new File(str2);
                    if (file.mkdirs() || file.isDirectory()) {
                        registerFilesystem(new LocalFilesystem(str, this.webView.getContext(), this.webView.getResourceApi(), file));
                        hashSet.add(str);
                    } else {
                        LOG.d(LOG_TAG, "Unable to create root dir for filesystem \"" + str + "\", skipping");
                    }
                } else {
                    LOG.d(LOG_TAG, "Unrecognized extra filesystem identifier: " + str);
                }
            }
        }
    }

    protected HashMap<String, String> getAvailableFileSystems(Activity activity) {
        Context applicationContext = activity.getApplicationContext();
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put("files", applicationContext.getFilesDir().getAbsolutePath());
        hashMap.put("documents", new File(applicationContext.getFilesDir(), "Documents").getAbsolutePath());
        hashMap.put("cache", applicationContext.getCacheDir().getAbsolutePath());
        hashMap.put("root", "/");
        if (Environment.getExternalStorageState().equals("mounted")) {
            try {
                hashMap.put("files-external", applicationContext.getExternalFilesDir(null).getAbsolutePath());
                hashMap.put("sdcard", Environment.getExternalStorageDirectory().getAbsolutePath());
                hashMap.put("cache-external", applicationContext.getExternalCacheDir().getAbsolutePath());
            } catch (NullPointerException unused) {
                LOG.d(LOG_TAG, "External storage unavailable, check to see if USB Mass Storage Mode is on");
            }
        }
        return hashMap;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        String str;
        super.initialize(cordovaInterface, cordovaWebView);
        this.filesystems = new ArrayList<>();
        this.pendingRequests = new PendingRequests();
        Activity activity = cordovaInterface.getActivity();
        String packageName = activity.getPackageName();
        String string = this.preferences.getString("androidpersistentfilelocation", "internal");
        String absolutePath = activity.getCacheDir().getAbsolutePath();
        if ("internal".equalsIgnoreCase(string)) {
            str = activity.getFilesDir().getAbsolutePath() + "/files/";
            this.configured = true;
        } else if ("compatibility".equalsIgnoreCase(string)) {
            if (Environment.getExternalStorageState().equals("mounted")) {
                absolutePath = Environment.getExternalStorageDirectory().getAbsolutePath() + "/Android/data/" + packageName + "/cache/";
                str = Environment.getExternalStorageDirectory().getAbsolutePath();
            } else {
                str = "/data/data/" + packageName;
            }
            this.configured = true;
        } else {
            str = null;
        }
        if (this.configured) {
            File file = new File(absolutePath);
            File file2 = new File(str);
            file.mkdirs();
            file2.mkdirs();
            registerFilesystem(new LocalFilesystem("temporary", cordovaWebView.getContext(), cordovaWebView.getResourceApi(), file));
            registerFilesystem(new LocalFilesystem("persistent", cordovaWebView.getContext(), cordovaWebView.getResourceApi(), file2));
            registerFilesystem(new ContentFilesystem(cordovaWebView.getContext(), cordovaWebView.getResourceApi()));
            registerFilesystem(new AssetFilesystem(cordovaWebView.getContext().getAssets(), cordovaWebView.getResourceApi()));
            registerExtraFileSystems(getExtraFileSystemsPreference(activity), getAvailableFileSystems(activity));
            if (filePlugin != null) {
                return;
            }
            filePlugin = this;
            return;
        }
        LOG.e(LOG_TAG, "File plugin configuration error: Please set AndroidPersistentFileLocation in config.xml to one of \"internal\" (for new applications) or \"compatibility\" (for compatibility with previous versions)");
        activity.finish();
    }

    public static FileUtils getFilePlugin() {
        return filePlugin;
    }

    private Filesystem filesystemForURL(LocalFilesystemURL localFilesystemURL) {
        if (localFilesystemURL == null) {
            return null;
        }
        return filesystemForName(localFilesystemURL.fsName);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public Uri remapUri(Uri uri) {
        if (!LocalFilesystemURL.FILESYSTEM_PROTOCOL.equals(uri.getScheme())) {
            return null;
        }
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(uri);
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null || filesystemForURL.filesystemPathForURL(parse) == null) {
                return null;
            }
            return Uri.parse("file://" + filesystemForURL.filesystemPathForURL(parse));
        } catch (IllegalArgumentException unused) {
            return null;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, final String str2, final CallbackContext callbackContext) {
        if (!this.configured) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, "File plugin is not configured. Please see the README.md file for details on how to update config.xml"));
            return true;
        }
        if (str.equals("testSaveLocationExists")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.1
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, DirectoryManager.testSaveLocationExists()));
                }
            }, str2, callbackContext);
        } else if (str.equals("getFreeDiskSpace")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.2
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, (float) DirectoryManager.getFreeExternalStorageSpace()));
                }
            }, str2, callbackContext);
        } else if (str.equals("testFileExists")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.3
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, DirectoryManager.testFileExists(jSONArray.getString(0))));
                }
            }, str2, callbackContext);
        } else if (str.equals("testDirectoryExists")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.4
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, DirectoryManager.testFileExists(jSONArray.getString(0))));
                }
            }, str2, callbackContext);
        } else if (str.equals("readAsText")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.5
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException {
                    String string = jSONArray.getString(1);
                    int i = jSONArray.getInt(2);
                    int i2 = jSONArray.getInt(3);
                    FileUtils.this.readFileAs(jSONArray.getString(0), i, i2, callbackContext, string, 1);
                }
            }, str2, callbackContext);
        } else if (str.equals("readAsDataURL")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.6
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException {
                    int i = jSONArray.getInt(1);
                    int i2 = jSONArray.getInt(2);
                    FileUtils.this.readFileAs(jSONArray.getString(0), i, i2, callbackContext, null, -1);
                }
            }, str2, callbackContext);
        } else if (str.equals("readAsArrayBuffer")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.7
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException {
                    int i = jSONArray.getInt(1);
                    int i2 = jSONArray.getInt(2);
                    FileUtils.this.readFileAs(jSONArray.getString(0), i, i2, callbackContext, null, 6);
                }
            }, str2, callbackContext);
        } else if (str.equals("readAsBinaryString")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.8
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, MalformedURLException {
                    int i = jSONArray.getInt(1);
                    int i2 = jSONArray.getInt(2);
                    FileUtils.this.readFileAs(jSONArray.getString(0), i, i2, callbackContext, null, 7);
                }
            }, str2, callbackContext);
        } else if (str.equals("write")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.9
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, FileNotFoundException, IOException, NoModificationAllowedException {
                    String string = jSONArray.getString(0);
                    String string2 = FileUtils.this.resolveLocalFileSystemURI(string).getString("nativeURL");
                    String string3 = jSONArray.getString(1);
                    int i = jSONArray.getInt(2);
                    Boolean valueOf = Boolean.valueOf(jSONArray.getBoolean(3));
                    if (FileUtils.this.needPermission(string2, 3)) {
                        FileUtils.this.getWritePermission(str2, 1, callbackContext);
                        return;
                    }
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, (float) FileUtils.this.write(string, string3, i, valueOf.booleanValue())));
                }
            }, str2, callbackContext);
        } else if (str.equals("truncate")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.10
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, FileNotFoundException, IOException, NoModificationAllowedException {
                    callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, (float) FileUtils.this.truncateFile(jSONArray.getString(0), jSONArray.getInt(1))));
                }
            }, str2, callbackContext);
        } else if (str.equals("requestAllFileSystems")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.11
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws IOException, JSONException {
                    callbackContext.success(FileUtils.this.requestAllFileSystems());
                }
            }, str2, callbackContext);
        } else if (str.equals("requestAllPaths")) {
            this.f0cordova.getThreadPool().execute(new Runnable() { // from class: org.apache.cordova.file.FileUtils.12
                @Override // java.lang.Runnable
                public void run() {
                    try {
                        callbackContext.success(FileUtils.this.requestAllPaths());
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });
        } else if (str.equals("requestFileSystem")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.13
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException {
                    FileUtils.this.requestFileSystem(jSONArray.getInt(0), jSONArray.optLong(1), callbackContext);
                }
            }, str2, callbackContext);
        } else if (str.equals("resolveLocalFileSystemURI")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.14
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws IOException, JSONException {
                    callbackContext.success(FileUtils.this.resolveLocalFileSystemURI(jSONArray.getString(0)));
                }
            }, str2, callbackContext);
        } else if (str.equals("getFileMetadata")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.15
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws FileNotFoundException, JSONException, MalformedURLException {
                    callbackContext.success(FileUtils.this.getFileMetadata(jSONArray.getString(0)));
                }
            }, str2, callbackContext);
        } else if (str.equals("getParent")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.16
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, IOException {
                    callbackContext.success(FileUtils.this.getParent(jSONArray.getString(0)));
                }
            }, str2, callbackContext);
        } else if (str.equals("getDirectory")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.17
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws FileExistsException, IOException, TypeMismatchException, EncodingException, JSONException {
                    boolean z = false;
                    String string = jSONArray.getString(0);
                    String string2 = jSONArray.getString(1);
                    String string3 = FileUtils.this.resolveLocalFileSystemURI(string).getString("nativeURL");
                    if (!jSONArray.isNull(2)) {
                        z = jSONArray.getJSONObject(2).optBoolean("create", false);
                    }
                    if (!z || !FileUtils.this.needPermission(string3, 3)) {
                        if (z || !FileUtils.this.needPermission(string3, 4)) {
                            callbackContext.success(FileUtils.this.getFile(string, string2, jSONArray.optJSONObject(2), true));
                            return;
                        }
                        FileUtils.this.getReadPermission(str2, 2, callbackContext);
                        return;
                    }
                    FileUtils.this.getWritePermission(str2, 2, callbackContext);
                }
            }, str2, callbackContext);
        } else if (str.equals("getFile")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.18
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws FileExistsException, IOException, TypeMismatchException, EncodingException, JSONException {
                    String string = jSONArray.getString(0);
                    String string2 = jSONArray.getString(1);
                    String string3 = FileUtils.this.resolveLocalFileSystemURI(string).getString("nativeURL");
                    boolean optBoolean = jSONArray.isNull(2) ? false : jSONArray.getJSONObject(2).optBoolean("create", false);
                    if (!optBoolean || !FileUtils.this.needPermission(string3, 3)) {
                        if (!optBoolean && FileUtils.this.needPermission(string3, 4)) {
                            FileUtils.this.getReadPermission(str2, 0, callbackContext);
                            return;
                        } else {
                            callbackContext.success(FileUtils.this.getFile(string, string2, jSONArray.optJSONObject(2), false));
                            return;
                        }
                    }
                    FileUtils.this.getWritePermission(str2, 0, callbackContext);
                }
            }, str2, callbackContext);
        } else if (str.equals("remove")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.19
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, NoModificationAllowedException, InvalidModificationException, MalformedURLException {
                    if (FileUtils.this.remove(jSONArray.getString(0))) {
                        callbackContext.success();
                    } else {
                        callbackContext.error(FileUtils.NO_MODIFICATION_ALLOWED_ERR);
                    }
                }
            }, str2, callbackContext);
        } else if (str.equals("removeRecursively")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.20
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, FileExistsException, MalformedURLException, NoModificationAllowedException {
                    if (FileUtils.this.removeRecursively(jSONArray.getString(0))) {
                        callbackContext.success();
                    } else {
                        callbackContext.error(FileUtils.NO_MODIFICATION_ALLOWED_ERR);
                    }
                }
            }, str2, callbackContext);
        } else if (str.equals("moveTo")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.21
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, NoModificationAllowedException, IOException, InvalidModificationException, EncodingException, FileExistsException {
                    callbackContext.success(FileUtils.this.transferTo(jSONArray.getString(0), jSONArray.getString(1), jSONArray.getString(2), true));
                }
            }, str2, callbackContext);
        } else if (str.equals("copyTo")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.22
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws JSONException, NoModificationAllowedException, IOException, InvalidModificationException, EncodingException, FileExistsException {
                    callbackContext.success(FileUtils.this.transferTo(jSONArray.getString(0), jSONArray.getString(1), jSONArray.getString(2), false));
                }
            }, str2, callbackContext);
        } else if (str.equals("readEntries")) {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.23
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws FileNotFoundException, JSONException, MalformedURLException {
                    callbackContext.success(FileUtils.this.readEntries(jSONArray.getString(0)));
                }
            }, str2, callbackContext);
        } else if (!str.equals("_getLocalFilesystemPath")) {
            return false;
        } else {
            threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.24
                @Override // org.apache.cordova.file.FileUtils.FileOp
                public void run(JSONArray jSONArray) throws FileNotFoundException, JSONException, MalformedURLException {
                    callbackContext.success(FileUtils.this.filesystemPathForURL(jSONArray.getString(0)));
                }
            }, str2, callbackContext);
        }
        return true;
    }

    public void getReadPermission(String str, int i, CallbackContext callbackContext) {
        PermissionHelper.requestPermission(this, this.pendingRequests.createRequest(str, i, callbackContext), "android.permission.READ_EXTERNAL_STORAGE");
    }

    public void getWritePermission(String str, int i, CallbackContext callbackContext) {
        PermissionHelper.requestPermission(this, this.pendingRequests.createRequest(str, i, callbackContext), "android.permission.WRITE_EXTERNAL_STORAGE");
    }

    private boolean hasReadPermission() {
        return PermissionHelper.hasPermission(this, "android.permission.READ_EXTERNAL_STORAGE");
    }

    private boolean hasWritePermission() {
        return PermissionHelper.hasPermission(this, "android.permission.WRITE_EXTERNAL_STORAGE");
    }

    public boolean needPermission(String str, int i) throws JSONException {
        JSONObject requestAllPaths = requestAllPaths();
        ArrayList arrayList = new ArrayList();
        arrayList.add(requestAllPaths.getString("applicationDirectory"));
        arrayList.add(requestAllPaths.getString("applicationStorageDirectory"));
        if (requestAllPaths.has("externalApplicationStorageDirectory")) {
            arrayList.add(requestAllPaths.getString("externalApplicationStorageDirectory"));
        }
        if (i != 4 || !hasReadPermission()) {
            if (i == 3 && hasWritePermission()) {
                return false;
            }
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                if (str.startsWith((String) it.next())) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    public LocalFilesystemURL resolveNativeUri(Uri uri) {
        Iterator<Filesystem> it = this.filesystems.iterator();
        LocalFilesystemURL localFilesystemURL = null;
        while (it.hasNext()) {
            LocalFilesystemURL localUri = it.next().toLocalUri(uri);
            if (localUri != null && (localFilesystemURL == null || localUri.uri.toString().length() < localFilesystemURL.toString().length())) {
                localFilesystemURL = localUri;
            }
        }
        return localFilesystemURL;
    }

    public String filesystemPathForURL(String str) throws MalformedURLException {
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemForURL.filesystemPathForURL(parse);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    public LocalFilesystemURL filesystemURLforLocalPath(String str) {
        Iterator<Filesystem> it = this.filesystems.iterator();
        LocalFilesystemURL localFilesystemURL = null;
        int i = 0;
        while (it.hasNext()) {
            LocalFilesystemURL URLforFilesystemPath = it.next().URLforFilesystemPath(str);
            if (URLforFilesystemPath != null && (localFilesystemURL == null || URLforFilesystemPath.path.length() < i)) {
                i = URLforFilesystemPath.path.length();
                localFilesystemURL = URLforFilesystemPath;
            }
        }
        return localFilesystemURL;
    }

    private void threadhelper(final FileOp fileOp, final String str, final CallbackContext callbackContext) {
        this.f0cordova.getThreadPool().execute(new Runnable() { // from class: org.apache.cordova.file.FileUtils.25
            @Override // java.lang.Runnable
            public void run() {
                try {
                    fileOp.run(new JSONArray(str));
                } catch (Exception e) {
                    boolean z = e instanceof EncodingException;
                    if (z) {
                        callbackContext.error(FileUtils.ENCODING_ERR);
                    } else if (e instanceof FileNotFoundException) {
                        callbackContext.error(FileUtils.NOT_FOUND_ERR);
                    } else if (e instanceof FileExistsException) {
                        callbackContext.error(FileUtils.PATH_EXISTS_ERR);
                    } else if (e instanceof NoModificationAllowedException) {
                        callbackContext.error(FileUtils.NO_MODIFICATION_ALLOWED_ERR);
                    } else if (e instanceof InvalidModificationException) {
                        callbackContext.error(FileUtils.INVALID_MODIFICATION_ERR);
                    } else if (e instanceof MalformedURLException) {
                        callbackContext.error(FileUtils.ENCODING_ERR);
                    } else if (e instanceof IOException) {
                        callbackContext.error(FileUtils.INVALID_MODIFICATION_ERR);
                    } else if (z) {
                        callbackContext.error(FileUtils.ENCODING_ERR);
                    } else if (e instanceof TypeMismatchException) {
                        callbackContext.error(FileUtils.TYPE_MISMATCH_ERR);
                    } else if (e instanceof JSONException) {
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
                    } else if (e instanceof SecurityException) {
                        callbackContext.error(FileUtils.SECURITY_ERR);
                    } else {
                        e.printStackTrace();
                        callbackContext.error(FileUtils.UNKNOWN_ERR);
                    }
                }
            }
        });
    }

    public JSONObject resolveLocalFileSystemURI(String str) throws IOException, JSONException {
        if (str == null) {
            throw new MalformedURLException("Unrecognized filesystem URL");
        }
        Uri parse = Uri.parse(str);
        boolean z = false;
        LocalFilesystemURL parse2 = LocalFilesystemURL.parse(parse);
        if (parse2 == null) {
            parse2 = resolveNativeUri(parse);
            z = true;
        }
        try {
            Filesystem filesystemForURL = filesystemForURL(parse2);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            if (filesystemForURL.exists(parse2)) {
                if (!z) {
                    parse2 = filesystemForURL.toLocalUri(filesystemForURL.toNativeUri(parse2));
                }
                return filesystemForURL.getEntryForLocalURL(parse2);
            }
            throw new FileNotFoundException();
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    public JSONArray readEntries(String str) throws FileNotFoundException, JSONException, MalformedURLException {
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemForURL.readEntriesAtLocalURL(parse);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    public JSONObject transferTo(String str, String str2, String str3, boolean z) throws JSONException, NoModificationAllowedException, IOException, InvalidModificationException, EncodingException, FileExistsException {
        if (str == null || str2 == null) {
            throw new FileNotFoundException();
        }
        LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
        LocalFilesystemURL parse2 = LocalFilesystemURL.parse(str2);
        Filesystem filesystemForURL = filesystemForURL(parse);
        Filesystem filesystemForURL2 = filesystemForURL(parse2);
        if (str3 != null && str3.contains(":")) {
            throw new EncodingException("Bad file name");
        }
        return filesystemForURL2.copyFileToURL(parse2, str3, filesystemForURL, parse, z);
    }

    public boolean removeRecursively(String str) throws FileExistsException, NoModificationAllowedException, MalformedURLException {
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
            if ("".equals(parse.path) || "/".equals(parse.path)) {
                throw new NoModificationAllowedException("You can't delete the root directory");
            }
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemForURL.recursiveRemoveFileAtLocalURL(parse);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    public boolean remove(String str) throws NoModificationAllowedException, InvalidModificationException, MalformedURLException {
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
            if ("".equals(parse.path) || "/".equals(parse.path)) {
                throw new NoModificationAllowedException("You can't delete the root directory");
            }
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemForURL.removeFileAtLocalURL(parse);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    public JSONObject getFile(String str, String str2, JSONObject jSONObject, boolean z) throws FileExistsException, IOException, TypeMismatchException, EncodingException, JSONException {
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemForURL.getFileForLocalURL(parse, str2, jSONObject, z);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    public JSONObject getParent(String str) throws JSONException, IOException {
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemForURL.getParentForLocalURL(parse);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    public JSONObject getFileMetadata(String str) throws FileNotFoundException, JSONException, MalformedURLException {
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemForURL.getFileMetadataForLocalURL(parse);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    public void requestFileSystem(int i, long j, CallbackContext callbackContext) throws JSONException {
        Filesystem filesystem;
        try {
            filesystem = this.filesystems.get(i);
        } catch (ArrayIndexOutOfBoundsException unused) {
            filesystem = null;
        }
        if (filesystem == null) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, NOT_FOUND_ERR));
            return;
        }
        long j2 = 0;
        if (j > 0) {
            j2 = filesystem.getFreeSpaceInBytes();
        }
        if (j2 < j) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, QUOTA_EXCEEDED_ERR));
            return;
        }
        JSONObject jSONObject = new JSONObject();
        jSONObject.put("name", filesystem.name);
        jSONObject.put("root", filesystem.getRootEntry());
        callbackContext.success(jSONObject);
    }

    public JSONArray requestAllFileSystems() throws IOException, JSONException {
        JSONArray jSONArray = new JSONArray();
        Iterator<Filesystem> it = this.filesystems.iterator();
        while (it.hasNext()) {
            jSONArray.put(it.next().getRootEntry());
        }
        return jSONArray;
    }

    private static String toDirUrl(File file) {
        return Uri.fromFile(file).toString() + '/';
    }

    public JSONObject requestAllPaths() throws JSONException {
        Activity activity = this.f0cordova.getActivity();
        JSONObject jSONObject = new JSONObject();
        jSONObject.put("applicationDirectory", "file:///android_asset/");
        jSONObject.put("applicationStorageDirectory", toDirUrl(activity.getFilesDir().getParentFile()));
        jSONObject.put("dataDirectory", toDirUrl(activity.getFilesDir()));
        jSONObject.put("cacheDirectory", toDirUrl(activity.getCacheDir()));
        if (Environment.getExternalStorageState().equals("mounted")) {
            try {
                jSONObject.put("externalApplicationStorageDirectory", toDirUrl(activity.getExternalFilesDir(null).getParentFile()));
                jSONObject.put("externalDataDirectory", toDirUrl(activity.getExternalFilesDir(null)));
                jSONObject.put("externalCacheDirectory", toDirUrl(activity.getExternalCacheDir()));
                jSONObject.put("externalRootDirectory", toDirUrl(Environment.getExternalStorageDirectory()));
            } catch (NullPointerException unused) {
                LOG.d(LOG_TAG, "Unable to access these paths, most liklely due to USB storage");
            }
        }
        return jSONObject;
    }

    public JSONObject getEntryForFile(File file) throws JSONException {
        Iterator<Filesystem> it = this.filesystems.iterator();
        while (it.hasNext()) {
            JSONObject makeEntryForFile = it.next().makeEntryForFile(file);
            if (makeEntryForFile != null) {
                return makeEntryForFile;
            }
        }
        return null;
    }

    @Deprecated
    public static JSONObject getEntry(File file) throws JSONException {
        if (getFilePlugin() != null) {
            return getFilePlugin().getEntryForFile(file);
        }
        return null;
    }

    public void readFileAs(String str, int i, int i2, final CallbackContext callbackContext, final String str2, final int i3) throws MalformedURLException {
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            filesystemForURL.readFileAtURL(parse, i, i2, new Filesystem.ReadFileCallback() { // from class: org.apache.cordova.file.FileUtils.26
                @Override // org.apache.cordova.file.Filesystem.ReadFileCallback
                public void handleData(InputStream inputStream, String str3) {
                    PluginResult pluginResult;
                    try {
                        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                        byte[] bArr = new byte[8192];
                        while (true) {
                            int read = inputStream.read(bArr, 0, 8192);
                            if (read <= 0) {
                                break;
                            }
                            byteArrayOutputStream.write(bArr, 0, read);
                        }
                        int i4 = i3;
                        if (i4 == 1) {
                            pluginResult = new PluginResult(PluginResult.Status.OK, byteArrayOutputStream.toString(str2));
                        } else {
                            switch (i4) {
                                case 6:
                                    pluginResult = new PluginResult(PluginResult.Status.OK, byteArrayOutputStream.toByteArray());
                                    break;
                                case 7:
                                    pluginResult = new PluginResult(PluginResult.Status.OK, byteArrayOutputStream.toByteArray(), true);
                                    break;
                                default:
                                    byte[] encode = Base64.encode(byteArrayOutputStream.toByteArray(), 2);
                                    pluginResult = new PluginResult(PluginResult.Status.OK, "data:" + str3 + ";base64," + new String(encode, "US-ASCII"));
                                    break;
                            }
                        }
                        callbackContext.sendPluginResult(pluginResult);
                    } catch (IOException e) {
                        LOG.d(FileUtils.LOG_TAG, e.getLocalizedMessage());
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.IO_EXCEPTION, FileUtils.NOT_READABLE_ERR));
                    }
                }
            });
        } catch (FileNotFoundException unused) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.IO_EXCEPTION, NOT_FOUND_ERR));
        } catch (IOException e) {
            LOG.d(LOG_TAG, e.getLocalizedMessage());
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.IO_EXCEPTION, NOT_READABLE_ERR));
        } catch (IllegalArgumentException e2) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e2);
            throw malformedURLException;
        }
    }

    public long write(String str, String str2, int i, boolean z) throws FileNotFoundException, IOException, NoModificationAllowedException {
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            long writeToFileAtURL = filesystemForURL.writeToFileAtURL(parse, str2, i, z);
            LOG.d("TEST", str + ": " + writeToFileAtURL);
            return writeToFileAtURL;
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    public long truncateFile(String str, long j) throws FileNotFoundException, IOException, NoModificationAllowedException {
        try {
            LocalFilesystemURL parse = LocalFilesystemURL.parse(str);
            Filesystem filesystemForURL = filesystemForURL(parse);
            if (filesystemForURL == null) {
                throw new MalformedURLException("No installed handlers for this URL");
            }
            return filesystemForURL.truncateFileAtURL(parse, j);
        } catch (IllegalArgumentException e) {
            MalformedURLException malformedURLException = new MalformedURLException("Unrecognized filesystem URL");
            malformedURLException.initCause(e);
            throw malformedURLException;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
        final PendingRequests.Request andRemove = this.pendingRequests.getAndRemove(i);
        if (andRemove != null) {
            for (int i2 : iArr) {
                if (i2 == -1) {
                    andRemove.getCallbackContext().sendPluginResult(new PluginResult(PluginResult.Status.ERROR, SECURITY_ERR));
                    return;
                }
            }
            switch (andRemove.getAction()) {
                case 0:
                    threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.27
                        @Override // org.apache.cordova.file.FileUtils.FileOp
                        public void run(JSONArray jSONArray) throws FileExistsException, IOException, TypeMismatchException, EncodingException, JSONException {
                            andRemove.getCallbackContext().success(FileUtils.this.getFile(jSONArray.getString(0), jSONArray.getString(1), jSONArray.optJSONObject(2), false));
                        }
                    }, andRemove.getRawArgs(), andRemove.getCallbackContext());
                    return;
                case 1:
                    threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.29
                        @Override // org.apache.cordova.file.FileUtils.FileOp
                        public void run(JSONArray jSONArray) throws JSONException, FileNotFoundException, IOException, NoModificationAllowedException {
                            andRemove.getCallbackContext().sendPluginResult(new PluginResult(PluginResult.Status.OK, (float) FileUtils.this.write(jSONArray.getString(0), jSONArray.getString(1), jSONArray.getInt(2), Boolean.valueOf(jSONArray.getBoolean(3)).booleanValue())));
                        }
                    }, andRemove.getRawArgs(), andRemove.getCallbackContext());
                    return;
                case 2:
                    threadhelper(new FileOp() { // from class: org.apache.cordova.file.FileUtils.28
                        @Override // org.apache.cordova.file.FileUtils.FileOp
                        public void run(JSONArray jSONArray) throws FileExistsException, IOException, TypeMismatchException, EncodingException, JSONException {
                            andRemove.getCallbackContext().success(FileUtils.this.getFile(jSONArray.getString(0), jSONArray.getString(1), jSONArray.optJSONObject(2), true));
                        }
                    }, andRemove.getRawArgs(), andRemove.getCallbackContext());
                    return;
                default:
                    return;
            }
        }
        LOG.d(LOG_TAG, "Received permission callback for unknown request code");
    }
}
