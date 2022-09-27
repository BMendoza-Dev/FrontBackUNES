package com.rohithvaranasi.callnumber;

import android.content.Intent;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import android.support.v4.app.NotificationCompat;
import android.telephony.TelephonyManager;
import java.util.List;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
/* loaded from: classes.dex */
public class CFCallNumber extends CordovaPlugin {
    public static final String CALL_PHONE = "android.permission.CALL_PHONE";
    public static final int CALL_REQ_CODE = 0;
    public static final int PERMISSION_DENIED_ERROR = 20;
    private CallbackContext callbackContext;
    private JSONArray executeArgs;

    protected void getCallPermission(int i) {
        this.f0cordova.requestPermission(this, i, CALL_PHONE);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        this.callbackContext = callbackContext;
        this.executeArgs = jSONArray;
        if (str.equals("callNumber")) {
            if (this.f0cordova.hasPermission(CALL_PHONE)) {
                callPhone(this.executeArgs);
                return true;
            }
            getCallPermission(0);
            return true;
        } else if (!str.equals("isCallSupported")) {
            return false;
        } else {
            this.callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, isTelephonyEnabled()));
            return true;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
        for (int i2 : iArr) {
            if (i2 == -1) {
                this.callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, 20));
                return;
            }
        }
        if (i != 0) {
            return;
        }
        callPhone(this.executeArgs);
    }

    private void callPhone(JSONArray jSONArray) throws JSONException {
        String replaceAll = jSONArray.getString(0).replaceAll("#", "%23");
        if (!replaceAll.startsWith("tel:")) {
            replaceAll = String.format("tel:%s", replaceAll);
        }
        try {
            Intent intent = new Intent(isTelephonyEnabled() ? "android.intent.action.CALL" : "android.intent.action.VIEW");
            intent.setData(Uri.parse(replaceAll));
            if (Boolean.parseBoolean(jSONArray.getString(1))) {
                intent.setPackage(getDialerPackage(intent));
            }
            this.f0cordova.getActivity().startActivity(intent);
            this.callbackContext.success();
        } catch (Exception unused) {
            this.callbackContext.error("CouldNotCallPhoneNumber");
        }
    }

    private boolean isTelephonyEnabled() {
        TelephonyManager telephonyManager = (TelephonyManager) this.f0cordova.getActivity().getSystemService("phone");
        return (telephonyManager == null || telephonyManager.getPhoneType() == 0) ? false : true;
    }

    private String getDialerPackage(Intent intent) {
        List<ResolveInfo> queryIntentActivities = this.f0cordova.getActivity().getPackageManager().queryIntentActivities(intent, 65536);
        for (int i = 0; i < queryIntentActivities.size(); i++) {
            if (queryIntentActivities.get(i).toString().toLowerCase().contains("com.android.server.telecom")) {
                return "com.android.server.telecom";
            }
            if (queryIntentActivities.get(i).toString().toLowerCase().contains("com.android.phone")) {
                return "com.android.phone";
            }
            if (queryIntentActivities.get(i).toString().toLowerCase().contains(NotificationCompat.CATEGORY_CALL)) {
                return queryIntentActivities.get(i).toString().split("[ ]")[1].split("[/]")[0];
            }
        }
        return "";
    }
}
