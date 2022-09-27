package com.ionicframework.cordova.webview;

import android.content.SharedPreferences;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
/* loaded from: classes.dex */
public class IonicWebView extends CordovaPlugin {
    public static final String CDV_SERVER_PATH = "serverBasePath";
    public static final String WEBVIEW_PREFS_NAME = "WebViewSettings";

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        if (str.equals("setServerBasePath")) {
            final String string = jSONArray.getString(0);
            this.f0cordova.getActivity().runOnUiThread(new Runnable() { // from class: com.ionicframework.cordova.webview.IonicWebView.1
                @Override // java.lang.Runnable
                public void run() {
                    ((IonicWebViewEngine) IonicWebView.this.webView.getEngine()).setServerBasePath(string);
                }
            });
            return true;
        } else if (str.equals("getServerBasePath")) {
            callbackContext.success(((IonicWebViewEngine) this.webView.getEngine()).getServerBasePath());
            return true;
        } else if (!str.equals("persistServerBasePath")) {
            return false;
        } else {
            String serverBasePath = ((IonicWebViewEngine) this.webView.getEngine()).getServerBasePath();
            SharedPreferences.Editor edit = this.f0cordova.getActivity().getApplicationContext().getSharedPreferences(WEBVIEW_PREFS_NAME, 0).edit();
            edit.putString(CDV_SERVER_PATH, serverBasePath);
            edit.apply();
            return true;
        }
    }
}
