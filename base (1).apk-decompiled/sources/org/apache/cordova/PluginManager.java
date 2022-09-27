package org.apache.cordova;

import android.content.Intent;
import android.content.res.Configuration;
import android.net.Uri;
import android.os.Bundle;
import android.os.Debug;
import java.util.Collection;
import java.util.LinkedHashMap;
import org.apache.cordova.PluginResult;
import org.json.JSONException;
/* loaded from: classes.dex */
public class PluginManager {
    private static final int SLOW_EXEC_WARNING_THRESHOLD;
    private static String TAG = "PluginManager";
    private final CordovaWebView app;
    private final CordovaInterface ctx;
    private boolean isInitialized;
    private CordovaPlugin permissionRequester;
    private final LinkedHashMap<String, CordovaPlugin> pluginMap = new LinkedHashMap<>();
    private final LinkedHashMap<String, PluginEntry> entryMap = new LinkedHashMap<>();

    static {
        SLOW_EXEC_WARNING_THRESHOLD = Debug.isDebuggerConnected() ? 60 : 16;
    }

    public PluginManager(CordovaWebView cordovaWebView, CordovaInterface cordovaInterface, Collection<PluginEntry> collection) {
        this.ctx = cordovaInterface;
        this.app = cordovaWebView;
        setPluginEntries(collection);
    }

    public Collection<PluginEntry> getPluginEntries() {
        return this.entryMap.values();
    }

    public void setPluginEntries(Collection<PluginEntry> collection) {
        if (this.isInitialized) {
            onPause(false);
            onDestroy();
            this.pluginMap.clear();
            this.entryMap.clear();
        }
        for (PluginEntry pluginEntry : collection) {
            addService(pluginEntry);
        }
        if (this.isInitialized) {
            startupPlugins();
        }
    }

    public void init() {
        LOG.d(TAG, "init()");
        this.isInitialized = true;
        onPause(false);
        onDestroy();
        this.pluginMap.clear();
        startupPlugins();
    }

    private void startupPlugins() {
        for (PluginEntry pluginEntry : this.entryMap.values()) {
            if (pluginEntry.onload) {
                getPlugin(pluginEntry.service);
            } else {
                this.pluginMap.put(pluginEntry.service, null);
            }
        }
    }

    public void exec(String str, String str2, String str3, String str4) {
        CordovaPlugin plugin = getPlugin(str);
        if (plugin == null) {
            String str5 = TAG;
            LOG.d(str5, "exec() call to unknown plugin: " + str);
            this.app.sendPluginResult(new PluginResult(PluginResult.Status.CLASS_NOT_FOUND_EXCEPTION), str3);
            return;
        }
        CallbackContext callbackContext = new CallbackContext(str3, this.app);
        try {
            long currentTimeMillis = System.currentTimeMillis();
            boolean execute = plugin.execute(str2, str4, callbackContext);
            long currentTimeMillis2 = System.currentTimeMillis() - currentTimeMillis;
            if (currentTimeMillis2 > SLOW_EXEC_WARNING_THRESHOLD) {
                String str6 = TAG;
                LOG.w(str6, "THREAD WARNING: exec() call to " + str + "." + str2 + " blocked the main thread for " + currentTimeMillis2 + "ms. Plugin should use CordovaInterface.getThreadPool().");
            }
            if (execute) {
                return;
            }
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.INVALID_ACTION));
        } catch (JSONException unused) {
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        } catch (Exception e) {
            LOG.e(TAG, "Uncaught exception from plugin", e);
            callbackContext.error(e.getMessage());
        }
    }

    public CordovaPlugin getPlugin(String str) {
        CordovaPlugin cordovaPlugin = this.pluginMap.get(str);
        if (cordovaPlugin == null) {
            PluginEntry pluginEntry = this.entryMap.get(str);
            if (pluginEntry == null) {
                return null;
            }
            if (pluginEntry.plugin != null) {
                cordovaPlugin = pluginEntry.plugin;
            } else {
                cordovaPlugin = instantiatePlugin(pluginEntry.pluginClass);
            }
            CordovaInterface cordovaInterface = this.ctx;
            CordovaWebView cordovaWebView = this.app;
            cordovaPlugin.privateInitialize(str, cordovaInterface, cordovaWebView, cordovaWebView.getPreferences());
            this.pluginMap.put(str, cordovaPlugin);
        }
        return cordovaPlugin;
    }

    public void addService(String str, String str2) {
        addService(new PluginEntry(str, str2, false));
    }

    public void addService(PluginEntry pluginEntry) {
        this.entryMap.put(pluginEntry.service, pluginEntry);
        if (pluginEntry.plugin != null) {
            CordovaPlugin cordovaPlugin = pluginEntry.plugin;
            String str = pluginEntry.service;
            CordovaInterface cordovaInterface = this.ctx;
            CordovaWebView cordovaWebView = this.app;
            cordovaPlugin.privateInitialize(str, cordovaInterface, cordovaWebView, cordovaWebView.getPreferences());
            this.pluginMap.put(pluginEntry.service, pluginEntry.plugin);
        }
    }

    public void onPause(boolean z) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onPause(z);
            }
        }
    }

    public boolean onReceivedHttpAuthRequest(CordovaWebView cordovaWebView, ICordovaHttpAuthHandler iCordovaHttpAuthHandler, String str, String str2) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null && cordovaPlugin.onReceivedHttpAuthRequest(this.app, iCordovaHttpAuthHandler, str, str2)) {
                return true;
            }
        }
        return false;
    }

    public boolean onReceivedClientCertRequest(CordovaWebView cordovaWebView, ICordovaClientCertRequest iCordovaClientCertRequest) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null && cordovaPlugin.onReceivedClientCertRequest(this.app, iCordovaClientCertRequest)) {
                return true;
            }
        }
        return false;
    }

    public void onResume(boolean z) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onResume(z);
            }
        }
    }

    public void onStart() {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onStart();
            }
        }
    }

    public void onStop() {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onStop();
            }
        }
    }

    public void onDestroy() {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onDestroy();
            }
        }
    }

    public Object postMessage(String str, Object obj) {
        Object onMessage;
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null && (onMessage = cordovaPlugin.onMessage(str, obj)) != null) {
                return onMessage;
            }
        }
        return this.ctx.onMessage(str, obj);
    }

    public void onNewIntent(Intent intent) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onNewIntent(intent);
            }
        }
    }

    public boolean shouldAllowRequest(String str) {
        Boolean shouldAllowRequest;
        for (PluginEntry pluginEntry : this.entryMap.values()) {
            CordovaPlugin cordovaPlugin = this.pluginMap.get(pluginEntry.service);
            if (cordovaPlugin != null && (shouldAllowRequest = cordovaPlugin.shouldAllowRequest(str)) != null) {
                return shouldAllowRequest.booleanValue();
            }
        }
        if (str.startsWith("blob:") || str.startsWith("data:") || str.startsWith("about:blank") || str.startsWith("https://ssl.gstatic.com/accessibility/javascript/android/")) {
            return true;
        }
        if (!str.startsWith("file://")) {
            return false;
        }
        return !str.contains("/app_webview/");
    }

    public boolean shouldAllowNavigation(String str) {
        Boolean shouldAllowNavigation;
        for (PluginEntry pluginEntry : this.entryMap.values()) {
            CordovaPlugin cordovaPlugin = this.pluginMap.get(pluginEntry.service);
            if (cordovaPlugin != null && (shouldAllowNavigation = cordovaPlugin.shouldAllowNavigation(str)) != null) {
                return shouldAllowNavigation.booleanValue();
            }
        }
        return str.startsWith("file://") || str.startsWith("about:blank");
    }

    public boolean shouldAllowBridgeAccess(String str) {
        Boolean shouldAllowBridgeAccess;
        for (PluginEntry pluginEntry : this.entryMap.values()) {
            CordovaPlugin cordovaPlugin = this.pluginMap.get(pluginEntry.service);
            if (cordovaPlugin != null && (shouldAllowBridgeAccess = cordovaPlugin.shouldAllowBridgeAccess(str)) != null) {
                return shouldAllowBridgeAccess.booleanValue();
            }
        }
        return str.startsWith("file://");
    }

    public Boolean shouldOpenExternalUrl(String str) {
        Boolean shouldOpenExternalUrl;
        for (PluginEntry pluginEntry : this.entryMap.values()) {
            CordovaPlugin cordovaPlugin = this.pluginMap.get(pluginEntry.service);
            if (cordovaPlugin != null && (shouldOpenExternalUrl = cordovaPlugin.shouldOpenExternalUrl(str)) != null) {
                return shouldOpenExternalUrl;
            }
        }
        return false;
    }

    public boolean onOverrideUrlLoading(String str) {
        for (PluginEntry pluginEntry : this.entryMap.values()) {
            CordovaPlugin cordovaPlugin = this.pluginMap.get(pluginEntry.service);
            if (cordovaPlugin != null && cordovaPlugin.onOverrideUrlLoading(str)) {
                return true;
            }
        }
        return false;
    }

    public void onReset() {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onReset();
            }
        }
    }

    public Uri remapUri(Uri uri) {
        Uri remapUri;
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null && (remapUri = cordovaPlugin.remapUri(uri)) != null) {
                return remapUri;
            }
        }
        return null;
    }

    /* JADX WARN: Removed duplicated region for block: B:11:0x0015  */
    /* JADX WARN: Removed duplicated region for block: B:12:0x0017  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0021 A[Catch: Exception -> 0x0010, TRY_LEAVE, TryCatch #0 {Exception -> 0x0010, blocks: (B:4:0x0003, B:6:0x000b, B:13:0x0018, B:15:0x0021), top: B:19:0x0003 }] */
    /* JADX WARN: Removed duplicated region for block: B:21:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private org.apache.cordova.CordovaPlugin instantiatePlugin(java.lang.String r5) {
        /*
            r4 = this;
            r0 = 0
            if (r5 == 0) goto L12
            java.lang.String r1 = ""
            boolean r1 = r1.equals(r5)     // Catch: java.lang.Exception -> L10
            if (r1 != 0) goto L12
            java.lang.Class r1 = java.lang.Class.forName(r5)     // Catch: java.lang.Exception -> L10
            goto L13
        L10:
            r1 = move-exception
            goto L29
        L12:
            r1 = r0
        L13:
            if (r1 == 0) goto L17
            r2 = 1
            goto L18
        L17:
            r2 = 0
        L18:
            java.lang.Class<org.apache.cordova.CordovaPlugin> r3 = org.apache.cordova.CordovaPlugin.class
            boolean r3 = r3.isAssignableFrom(r1)     // Catch: java.lang.Exception -> L10
            r2 = r2 & r3
            if (r2 == 0) goto L47
            java.lang.Object r1 = r1.newInstance()     // Catch: java.lang.Exception -> L10
            org.apache.cordova.CordovaPlugin r1 = (org.apache.cordova.CordovaPlugin) r1     // Catch: java.lang.Exception -> L10
            r0 = r1
            goto L47
        L29:
            r1.printStackTrace()
            java.io.PrintStream r1 = java.lang.System.out
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            java.lang.String r3 = "Error adding plugin "
            r2.append(r3)
            r2.append(r5)
            java.lang.String r5 = "."
            r2.append(r5)
            java.lang.String r5 = r2.toString()
            r1.println(r5)
        L47:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: org.apache.cordova.PluginManager.instantiatePlugin(java.lang.String):org.apache.cordova.CordovaPlugin");
    }

    public void onConfigurationChanged(Configuration configuration) {
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null) {
                cordovaPlugin.onConfigurationChanged(configuration);
            }
        }
    }

    public Bundle onSaveInstanceState() {
        Bundle onSaveInstanceState;
        Bundle bundle = new Bundle();
        for (CordovaPlugin cordovaPlugin : this.pluginMap.values()) {
            if (cordovaPlugin != null && (onSaveInstanceState = cordovaPlugin.onSaveInstanceState()) != null) {
                bundle.putBundle(cordovaPlugin.getServiceName(), onSaveInstanceState);
            }
        }
        return bundle;
    }
}
