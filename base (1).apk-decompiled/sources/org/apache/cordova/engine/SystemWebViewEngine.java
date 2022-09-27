package org.apache.cordova.engine;

import android.annotation.SuppressLint;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.view.View;
import android.webkit.ValueCallback;
import android.webkit.WebSettings;
import android.webkit.WebView;
import org.apache.cordova.CordovaBridge;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPreferences;
import org.apache.cordova.CordovaResourceApi;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaWebViewEngine;
import org.apache.cordova.ICordovaCookieManager;
import org.apache.cordova.LOG;
import org.apache.cordova.NativeToJsMessageQueue;
import org.apache.cordova.PluginManager;
/* loaded from: classes.dex */
public class SystemWebViewEngine implements CordovaWebViewEngine {
    public static final String TAG = "SystemWebViewEngine";
    protected CordovaBridge bridge;
    protected CordovaWebViewEngine.Client client;
    protected final SystemCookieManager cookieManager;

    /* renamed from: cordova */
    protected CordovaInterface f5cordova;
    protected NativeToJsMessageQueue nativeToJsMessageQueue;
    protected CordovaWebView parentWebView;
    protected PluginManager pluginManager;
    protected CordovaPreferences preferences;
    private BroadcastReceiver receiver;
    protected CordovaResourceApi resourceApi;
    protected final SystemWebView webView;

    public SystemWebViewEngine(Context context, CordovaPreferences cordovaPreferences) {
        this(new SystemWebView(context), cordovaPreferences);
    }

    public SystemWebViewEngine(SystemWebView systemWebView) {
        this(systemWebView, (CordovaPreferences) null);
    }

    public SystemWebViewEngine(SystemWebView systemWebView, CordovaPreferences cordovaPreferences) {
        this.preferences = cordovaPreferences;
        this.webView = systemWebView;
        this.cookieManager = new SystemCookieManager(systemWebView);
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public void init(CordovaWebView cordovaWebView, CordovaInterface cordovaInterface, CordovaWebViewEngine.Client client, CordovaResourceApi cordovaResourceApi, PluginManager pluginManager, NativeToJsMessageQueue nativeToJsMessageQueue) {
        if (this.f5cordova != null) {
            throw new IllegalStateException();
        }
        if (this.preferences == null) {
            this.preferences = cordovaWebView.getPreferences();
        }
        this.parentWebView = cordovaWebView;
        this.f5cordova = cordovaInterface;
        this.client = client;
        this.resourceApi = cordovaResourceApi;
        this.pluginManager = pluginManager;
        this.nativeToJsMessageQueue = nativeToJsMessageQueue;
        this.webView.init(this, cordovaInterface);
        initWebViewSettings();
        nativeToJsMessageQueue.addBridgeMode(new NativeToJsMessageQueue.OnlineEventsBridgeMode(new NativeToJsMessageQueue.OnlineEventsBridgeMode.OnlineEventsBridgeModeDelegate() { // from class: org.apache.cordova.engine.SystemWebViewEngine.1
            @Override // org.apache.cordova.NativeToJsMessageQueue.OnlineEventsBridgeMode.OnlineEventsBridgeModeDelegate
            public void setNetworkAvailable(boolean z) {
                if (SystemWebViewEngine.this.webView != null) {
                    SystemWebViewEngine.this.webView.setNetworkAvailable(z);
                }
            }

            @Override // org.apache.cordova.NativeToJsMessageQueue.OnlineEventsBridgeMode.OnlineEventsBridgeModeDelegate
            public void runOnUiThread(Runnable runnable) {
                SystemWebViewEngine.this.f5cordova.getActivity().runOnUiThread(runnable);
            }
        }));
        nativeToJsMessageQueue.addBridgeMode(new NativeToJsMessageQueue.EvalBridgeMode(this, cordovaInterface));
        this.bridge = new CordovaBridge(pluginManager, nativeToJsMessageQueue);
        exposeJsInterface(this.webView, this.bridge);
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public CordovaWebView getCordovaWebView() {
        return this.parentWebView;
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public ICordovaCookieManager getCookieManager() {
        return this.cookieManager;
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public View getView() {
        return this.webView;
    }

    @SuppressLint({"NewApi", "SetJavaScriptEnabled"})
    private void initWebViewSettings() {
        this.webView.setInitialScale(0);
        this.webView.setVerticalScrollBarEnabled(false);
        final WebSettings settings = this.webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        settings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NORMAL);
        String str = Build.MANUFACTURER;
        LOG.d(TAG, "CordovaWebView is running on device made by: " + str);
        settings.setSaveFormData(false);
        settings.setSavePassword(false);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        String path = this.webView.getContext().getApplicationContext().getDir("database", 0).getPath();
        settings.setDatabaseEnabled(true);
        settings.setDatabasePath(path);
        if ((this.webView.getContext().getApplicationContext().getApplicationInfo().flags & 2) != 0) {
            enableRemoteDebugging();
        }
        settings.setGeolocationDatabasePath(path);
        settings.setDomStorageEnabled(true);
        settings.setGeolocationEnabled(true);
        settings.setAppCacheMaxSize(5242880L);
        settings.setAppCachePath(path);
        settings.setAppCacheEnabled(true);
        String userAgentString = settings.getUserAgentString();
        String string = this.preferences.getString("OverrideUserAgent", null);
        if (string != null) {
            settings.setUserAgentString(string);
        } else {
            String string2 = this.preferences.getString("AppendUserAgent", null);
            if (string2 != null) {
                settings.setUserAgentString(userAgentString + " " + string2);
            }
        }
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("android.intent.action.CONFIGURATION_CHANGED");
        if (this.receiver == null) {
            this.receiver = new BroadcastReceiver() { // from class: org.apache.cordova.engine.SystemWebViewEngine.2
                @Override // android.content.BroadcastReceiver
                public void onReceive(Context context, Intent intent) {
                    settings.getUserAgentString();
                }
            };
            this.webView.getContext().registerReceiver(this.receiver, intentFilter);
        }
    }

    private void enableRemoteDebugging() {
        try {
            WebView.setWebContentsDebuggingEnabled(true);
        } catch (IllegalArgumentException e) {
            LOG.d(TAG, "You have one job! To turn on Remote Web Debugging! YOU HAVE FAILED! ");
            e.printStackTrace();
        }
    }

    @SuppressLint({"AddJavascriptInterface"})
    private static void exposeJsInterface(WebView webView, CordovaBridge cordovaBridge) {
        webView.addJavascriptInterface(new SystemExposedJsApi(cordovaBridge), "_cordovaNative");
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public void loadUrl(String str, boolean z) {
        this.webView.loadUrl(str);
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public String getUrl() {
        return this.webView.getUrl();
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public void stopLoading() {
        this.webView.stopLoading();
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public void clearCache() {
        this.webView.clearCache(true);
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public void clearHistory() {
        this.webView.clearHistory();
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public boolean canGoBack() {
        return this.webView.canGoBack();
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public boolean goBack() {
        if (this.webView.canGoBack()) {
            this.webView.goBack();
            return true;
        }
        return false;
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public void setPaused(boolean z) {
        if (z) {
            this.webView.onPause();
            this.webView.pauseTimers();
            return;
        }
        this.webView.onResume();
        this.webView.resumeTimers();
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public void destroy() {
        this.webView.chromeClient.destroyLastDialog();
        this.webView.destroy();
        if (this.receiver != null) {
            try {
                this.webView.getContext().unregisterReceiver(this.receiver);
            } catch (Exception e) {
                LOG.e(TAG, "Error unregistering configuration receiver: " + e.getMessage(), e);
            }
        }
    }

    @Override // org.apache.cordova.CordovaWebViewEngine
    public void evaluateJavascript(String str, ValueCallback<String> valueCallback) {
        this.webView.evaluateJavascript(str, valueCallback);
    }
}
