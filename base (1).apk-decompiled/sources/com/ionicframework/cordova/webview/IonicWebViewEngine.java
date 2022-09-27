package com.ionicframework.cordova.webview;

import android.annotation.TargetApi;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.pm.PackageInfo;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.support.v4.view.MotionEventCompat;
import android.util.Log;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import org.apache.cordova.ConfigXmlParser;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPreferences;
import org.apache.cordova.CordovaResourceApi;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaWebViewEngine;
import org.apache.cordova.NativeToJsMessageQueue;
import org.apache.cordova.PluginManager;
import org.apache.cordova.engine.SystemWebView;
import org.apache.cordova.engine.SystemWebViewClient;
import org.apache.cordova.engine.SystemWebViewEngine;
/* loaded from: classes.dex */
public class IonicWebViewEngine extends SystemWebViewEngine {
    private static final String LAST_BINARY_VERSION_CODE = "lastBinaryVersionCode";
    private static final String LAST_BINARY_VERSION_NAME = "lastBinaryVersionName";
    public static final String TAG = "IonicWebViewEngine";
    private String CDV_LOCAL_SERVER;
    private WebViewLocalServer localServer;
    private String scheme;

    public IonicWebViewEngine(Context context, CordovaPreferences cordovaPreferences) {
        super(new SystemWebView(context), cordovaPreferences);
        Log.d(TAG, "Ionic Web View Engine Starting Right Up 1...");
    }

    public IonicWebViewEngine(SystemWebView systemWebView) {
        super(systemWebView, (CordovaPreferences) null);
        Log.d(TAG, "Ionic Web View Engine Starting Right Up 2...");
    }

    public IonicWebViewEngine(SystemWebView systemWebView, CordovaPreferences cordovaPreferences) {
        super(systemWebView, cordovaPreferences);
        Log.d(TAG, "Ionic Web View Engine Starting Right Up 3...");
    }

    @Override // org.apache.cordova.engine.SystemWebViewEngine, org.apache.cordova.CordovaWebViewEngine
    public void init(CordovaWebView cordovaWebView, CordovaInterface cordovaInterface, CordovaWebViewEngine.Client client, CordovaResourceApi cordovaResourceApi, PluginManager pluginManager, NativeToJsMessageQueue nativeToJsMessageQueue) {
        ConfigXmlParser configXmlParser = new ConfigXmlParser();
        configXmlParser.parse(cordovaInterface.getActivity());
        String string = this.preferences.getString("Hostname", "localhost");
        this.scheme = this.preferences.getString("Scheme", WebViewLocalServer.httpScheme);
        this.CDV_LOCAL_SERVER = this.scheme + "://" + string;
        this.localServer = new WebViewLocalServer(cordovaInterface.getActivity(), string, true, configXmlParser, this.scheme);
        this.localServer.hostAssets("www");
        this.webView.setWebViewClient(new ServerClient(this, configXmlParser));
        super.init(cordovaWebView, cordovaInterface, client, cordovaResourceApi, pluginManager, nativeToJsMessageQueue);
        if (Build.VERSION.SDK_INT >= 21) {
            this.webView.getSettings().setMixedContentMode(this.preferences.getInteger("MixedContentMode", 0));
        }
        String string2 = cordovaInterface.getActivity().getApplicationContext().getSharedPreferences(IonicWebView.WEBVIEW_PREFS_NAME, 0).getString(IonicWebView.CDV_SERVER_PATH, null);
        if (isDeployDisabled() || isNewBinary() || string2 == null || string2.isEmpty()) {
            return;
        }
        setServerBasePath(string2);
    }

    private boolean isNewBinary() {
        String str = "";
        String str2 = "";
        SharedPreferences sharedPreferences = this.f5cordova.getActivity().getApplicationContext().getSharedPreferences(IonicWebView.WEBVIEW_PREFS_NAME, 0);
        String string = sharedPreferences.getString(LAST_BINARY_VERSION_CODE, null);
        String string2 = sharedPreferences.getString(LAST_BINARY_VERSION_NAME, null);
        try {
            PackageInfo packageInfo = this.f5cordova.getActivity().getPackageManager().getPackageInfo(this.f5cordova.getActivity().getPackageName(), 0);
            str = Integer.toString(packageInfo.versionCode);
            str2 = packageInfo.versionName;
        } catch (Exception e) {
            Log.e(TAG, "Unable to get package info", e);
        }
        if (!str.equals(string) || !str2.equals(string2)) {
            SharedPreferences.Editor edit = sharedPreferences.edit();
            edit.putString(LAST_BINARY_VERSION_CODE, str);
            edit.putString(LAST_BINARY_VERSION_NAME, str2);
            edit.putString(IonicWebView.CDV_SERVER_PATH, "");
            edit.apply();
            return true;
        }
        return false;
    }

    private boolean isDeployDisabled() {
        return this.preferences.getBoolean("DisableDeploy", false);
    }

    /* loaded from: classes.dex */
    private class ServerClient extends SystemWebViewClient {
        private ConfigXmlParser parser;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public ServerClient(SystemWebViewEngine systemWebViewEngine, ConfigXmlParser configXmlParser) {
            super(systemWebViewEngine);
            IonicWebViewEngine.this = r1;
            this.parser = configXmlParser;
        }

        @Override // android.webkit.WebViewClient
        @RequiresApi(MotionEventCompat.AXIS_WHEEL)
        public WebResourceResponse shouldInterceptRequest(WebView webView, WebResourceRequest webResourceRequest) {
            return IonicWebViewEngine.this.localServer.shouldInterceptRequest(webResourceRequest.getUrl(), webResourceRequest);
        }

        @Override // org.apache.cordova.engine.SystemWebViewClient, android.webkit.WebViewClient
        @TargetApi(19)
        public WebResourceResponse shouldInterceptRequest(WebView webView, String str) {
            return IonicWebViewEngine.this.localServer.shouldInterceptRequest(Uri.parse(str), null);
        }

        @Override // org.apache.cordova.engine.SystemWebViewClient, android.webkit.WebViewClient
        public void onPageStarted(WebView webView, String str, Bitmap bitmap) {
            super.onPageStarted(webView, str, bitmap);
            String launchUrl = this.parser.getLaunchUrl();
            if (launchUrl.contains(WebViewLocalServer.httpsScheme) || launchUrl.contains(WebViewLocalServer.httpScheme) || !str.equals(launchUrl)) {
                return;
            }
            webView.stopLoading();
            String str2 = IonicWebViewEngine.this.CDV_LOCAL_SERVER;
            if (!IonicWebViewEngine.this.scheme.equalsIgnoreCase(WebViewLocalServer.httpsScheme) && !IonicWebViewEngine.this.scheme.equalsIgnoreCase(WebViewLocalServer.httpScheme)) {
                str2 = str2 + "/";
            }
            webView.loadUrl(str2);
        }

        @Override // org.apache.cordova.engine.SystemWebViewClient, android.webkit.WebViewClient
        public void onPageFinished(WebView webView, String str) {
            super.onPageFinished(webView, str);
            webView.loadUrl("javascript:(function() { window.WEBVIEW_SERVER_URL = '" + IonicWebViewEngine.this.CDV_LOCAL_SERVER + "';})()");
        }
    }

    public void setServerBasePath(String str) {
        this.localServer.hostFiles(str);
        this.webView.loadUrl(this.CDV_LOCAL_SERVER);
    }

    public String getServerBasePath() {
        return this.localServer.getBasePath();
    }
}
