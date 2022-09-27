package io.github.pwlin.cordova.plugins.fileopener2;

import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.support.v4.app.NotificationCompat;
import java.io.File;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
public class FileOpener2 extends CordovaPlugin {
    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        if (str.equals("open")) {
            String string = jSONArray.getString(0);
            String string2 = jSONArray.getString(1);
            boolean z = true;
            if (jSONArray.length() > 2) {
                z = Boolean.valueOf(jSONArray.getBoolean(2));
            }
            _open(string, string2, z, callbackContext);
        } else if (str.equals("uninstall")) {
            _uninstall(jSONArray.getString(0), callbackContext);
        } else if (str.equals("appIsInstalled")) {
            JSONObject jSONObject = new JSONObject();
            if (_appIsInstalled(jSONArray.getString(0))) {
                jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.OK.ordinal());
                jSONObject.put("message", "Installed");
            } else {
                jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.NO_RESULT.ordinal());
                jSONObject.put("message", "Not installed");
            }
            callbackContext.success(jSONObject);
        } else {
            JSONObject jSONObject2 = new JSONObject();
            jSONObject2.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.INVALID_ACTION.ordinal());
            jSONObject2.put("message", "Invalid action");
            callbackContext.error(jSONObject2);
        }
        return true;
    }

    private void _open(String str, String str2, Boolean bool, CallbackContext callbackContext) throws JSONException {
        Intent intent;
        Uri uri;
        try {
            str = this.webView.getResourceApi().remapUri(Uri.parse(str)).getPath();
        } catch (Exception unused) {
        }
        File file = new File(str);
        if (file.exists()) {
            try {
                if (str2.equals("application/vnd.android.package-archive")) {
                    intent = new Intent("android.intent.action.INSTALL_PACKAGE");
                    if (Build.VERSION.SDK_INT < 24) {
                        uri = Uri.fromFile(file);
                    } else {
                        Context applicationContext = this.f0cordova.getActivity().getApplicationContext();
                        uri = FileProvider.getUriForFile(applicationContext, this.f0cordova.getActivity().getPackageName() + ".opener.provider", file);
                    }
                    intent.setDataAndType(uri, str2);
                    intent.setFlags(268435457);
                } else {
                    intent = new Intent("android.intent.action.VIEW");
                    Context applicationContext2 = this.f0cordova.getActivity().getApplicationContext();
                    intent.setDataAndType(FileProvider.getUriForFile(applicationContext2, this.f0cordova.getActivity().getPackageName() + ".opener.provider", file), str2);
                    intent.setFlags(1073741827);
                }
                if (bool.booleanValue()) {
                    this.f0cordova.getActivity().startActivity(intent);
                } else {
                    this.f0cordova.getActivity().startActivity(Intent.createChooser(intent, "Open File in..."));
                }
                callbackContext.success();
                return;
            } catch (ActivityNotFoundException e) {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.ERROR.ordinal());
                jSONObject.put("message", "Activity not found: " + e.getMessage());
                callbackContext.error(jSONObject);
                return;
            }
        }
        JSONObject jSONObject2 = new JSONObject();
        jSONObject2.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.ERROR.ordinal());
        jSONObject2.put("message", "File not found");
        callbackContext.error(jSONObject2);
    }

    private void _uninstall(String str, CallbackContext callbackContext) throws JSONException {
        if (_appIsInstalled(str)) {
            Intent intent = new Intent("android.intent.action.UNINSTALL_PACKAGE");
            intent.setData(Uri.parse("package:" + str));
            this.f0cordova.getActivity().startActivity(intent);
            callbackContext.success();
            return;
        }
        JSONObject jSONObject = new JSONObject();
        jSONObject.put(NotificationCompat.CATEGORY_STATUS, PluginResult.Status.ERROR.ordinal());
        jSONObject.put("message", "This package is not installed");
        callbackContext.error(jSONObject);
    }

    private boolean _appIsInstalled(String str) {
        try {
            this.f0cordova.getActivity().getPackageManager().getPackageInfo(str, 1);
            return true;
        } catch (PackageManager.NameNotFoundException unused) {
            return false;
        }
    }
}
