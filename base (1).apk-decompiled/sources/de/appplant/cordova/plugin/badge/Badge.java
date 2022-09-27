package de.appplant.cordova.plugin.badge;

import android.content.Context;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
public class Badge extends CordovaPlugin {
    private BadgeImpl impl;

    @Override // org.apache.cordova.CordovaPlugin
    protected void pluginInitialize() {
        this.impl = new BadgeImpl(getContext());
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        if (str.equalsIgnoreCase("load")) {
            loadConfig(callbackContext);
        } else if (str.equalsIgnoreCase("save")) {
            saveConfig(jSONArray.getJSONObject(0));
        } else if (str.equalsIgnoreCase("clear")) {
            clearBadge(callbackContext);
        } else if (str.equalsIgnoreCase("get")) {
            getBadge(callbackContext);
        } else if (str.equalsIgnoreCase("set")) {
            setBadge(jSONArray, callbackContext);
        } else if (!str.equalsIgnoreCase("check")) {
            return false;
        } else {
            checkSupport(callbackContext);
        }
        return true;
    }

    private void loadConfig(final CallbackContext callbackContext) {
        this.f0cordova.getThreadPool().execute(new Runnable() { // from class: de.appplant.cordova.plugin.badge.Badge.1
            @Override // java.lang.Runnable
            public void run() {
                callbackContext.success(Badge.this.impl.loadConfig());
            }
        });
    }

    private void saveConfig(final JSONObject jSONObject) {
        this.f0cordova.getThreadPool().execute(new Runnable() { // from class: de.appplant.cordova.plugin.badge.Badge.2
            @Override // java.lang.Runnable
            public void run() {
                Badge.this.impl.saveConfig(jSONObject);
            }
        });
    }

    private void clearBadge(final CallbackContext callbackContext) {
        this.f0cordova.getThreadPool().execute(new Runnable() { // from class: de.appplant.cordova.plugin.badge.Badge.3
            @Override // java.lang.Runnable
            public void run() {
                Badge.this.impl.clearBadge();
                callbackContext.success(Badge.this.impl.getBadge());
            }
        });
    }

    private void getBadge(final CallbackContext callbackContext) {
        this.f0cordova.getThreadPool().execute(new Runnable() { // from class: de.appplant.cordova.plugin.badge.Badge.4
            @Override // java.lang.Runnable
            public void run() {
                callbackContext.success(Badge.this.impl.getBadge());
            }
        });
    }

    private void setBadge(final JSONArray jSONArray, final CallbackContext callbackContext) {
        this.f0cordova.getThreadPool().execute(new Runnable() { // from class: de.appplant.cordova.plugin.badge.Badge.5
            @Override // java.lang.Runnable
            public void run() {
                Badge.this.impl.clearBadge();
                Badge.this.impl.setBadge(jSONArray.optInt(0));
                callbackContext.success(Badge.this.impl.getBadge());
            }
        });
    }

    private void checkSupport(final CallbackContext callbackContext) {
        this.f0cordova.getThreadPool().execute(new Runnable() { // from class: de.appplant.cordova.plugin.badge.Badge.6
            @Override // java.lang.Runnable
            public void run() {
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, Badge.this.impl.isSupported()));
            }
        });
    }

    private Context getContext() {
        return this.f0cordova.getActivity();
    }
}
