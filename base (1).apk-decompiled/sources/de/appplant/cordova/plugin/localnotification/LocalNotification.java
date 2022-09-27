package de.appplant.cordova.plugin.localnotification;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.KeyguardManager;
import android.support.v4.app.NotificationCompat;
import android.support.v4.os.EnvironmentCompat;
import android.util.Pair;
import de.appplant.cordova.plugin.notification.Manager;
import de.appplant.cordova.plugin.notification.Notification;
import de.appplant.cordova.plugin.notification.Options;
import de.appplant.cordova.plugin.notification.Request;
import de.appplant.cordova.plugin.notification.action.ActionGroup;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
public class LocalNotification extends CordovaPlugin {
    private static Boolean deviceready = false;
    private static ArrayList<String> eventQueue = new ArrayList<>();
    private static Pair<Integer, String> launchDetails;
    private static WeakReference<CordovaWebView> webView;

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        webView = new WeakReference<>(cordovaWebView);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onResume(boolean z) {
        super.onResume(z);
        deviceready();
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onDestroy() {
        deviceready = false;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(final String str, final JSONArray jSONArray, final CallbackContext callbackContext) throws JSONException {
        if (str.equals("launch")) {
            launch(callbackContext);
            return true;
        }
        this.f0cordova.getThreadPool().execute(new Runnable() { // from class: de.appplant.cordova.plugin.localnotification.LocalNotification.1
            @Override // java.lang.Runnable
            public void run() {
                if (str.equals("ready")) {
                    LocalNotification.deviceready();
                } else if (str.equalsIgnoreCase("check")) {
                    LocalNotification.this.check(callbackContext);
                } else if (str.equalsIgnoreCase("request")) {
                    LocalNotification.this.request(callbackContext);
                } else if (str.equalsIgnoreCase("actions")) {
                    LocalNotification.this.actions(jSONArray.optJSONObject(0));
                    callbackContext.success();
                } else if (str.equalsIgnoreCase("schedule")) {
                    LocalNotification.this.schedule(jSONArray);
                    LocalNotification.this.check(callbackContext);
                } else if (str.equals("update")) {
                    LocalNotification.this.update(jSONArray);
                    LocalNotification.this.check(callbackContext);
                } else if (str.equals("cancel")) {
                    LocalNotification.this.cancel(jSONArray);
                    callbackContext.success();
                } else if (str.equals("cancelAll")) {
                    LocalNotification.this.cancelAll();
                    callbackContext.success();
                } else if (str.equals("clear")) {
                    LocalNotification.this.clear(jSONArray);
                    callbackContext.success();
                } else if (str.equals("clearAll")) {
                    LocalNotification.this.clearAll();
                    callbackContext.success();
                } else if (str.equals("type")) {
                    LocalNotification.this.type(jSONArray.optInt(0), callbackContext);
                } else if (str.equals("ids")) {
                    LocalNotification.this.ids(callbackContext);
                } else if (str.equals("scheduledIds")) {
                    LocalNotification.this.scheduledIds(callbackContext);
                } else if (str.equals("triggeredIds")) {
                    LocalNotification.this.triggeredIds(callbackContext);
                } else if (str.equals("notification")) {
                    LocalNotification.this.notification(jSONArray.optInt(0), callbackContext);
                } else if (str.equals("notifications")) {
                    LocalNotification.this.notifications(jSONArray, callbackContext);
                } else if (str.equals("scheduledNotifications")) {
                    LocalNotification.this.scheduledNotifications(callbackContext);
                } else if (!str.equals("triggeredNotifications")) {
                } else {
                    LocalNotification.this.triggeredNotifications(callbackContext);
                }
            }
        });
        return true;
    }

    @SuppressLint({"DefaultLocale"})
    private void launch(CallbackContext callbackContext) {
        if (launchDetails == null) {
            return;
        }
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put("id", launchDetails.first);
            jSONObject.put("action", launchDetails.second);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        callbackContext.success(jSONObject);
        launchDetails = null;
    }

    public void check(CallbackContext callbackContext) {
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, getNotMgr().hasPermission()));
    }

    public void request(CallbackContext callbackContext) {
        check(callbackContext);
    }

    public void actions(JSONObject jSONObject) {
        ActionGroup parse = ActionGroup.parse(this.f0cordova.getActivity(), jSONObject);
        if (parse != null) {
            ActionGroup.register(parse);
        }
    }

    public void schedule(JSONArray jSONArray) {
        Manager notMgr = getNotMgr();
        for (int i = 0; i < jSONArray.length(); i++) {
            Notification schedule = notMgr.schedule(new Request(new Options(jSONArray.optJSONObject(i))), TriggerReceiver.class);
            if (schedule != null) {
                fireEvent("add", schedule);
            }
        }
    }

    public void update(JSONArray jSONArray) {
        for (int i = 0; i < jSONArray.length(); i++) {
            JSONObject optJSONObject = jSONArray.optJSONObject(i);
            Notification update = getNotMgr().update(optJSONObject.optInt("id", 0), optJSONObject, TriggerReceiver.class);
            if (update != null) {
                fireEvent("update", update);
            }
        }
    }

    public void cancel(JSONArray jSONArray) {
        for (int i = 0; i < jSONArray.length(); i++) {
            Notification cancel = getNotMgr().cancel(jSONArray.optInt(i, 0));
            if (cancel != null) {
                fireEvent("cancel", cancel);
            }
        }
    }

    public void cancelAll() {
        getNotMgr().cancelAll();
        fireEvent("cancelall");
    }

    public void clear(JSONArray jSONArray) {
        for (int i = 0; i < jSONArray.length(); i++) {
            Notification clear = getNotMgr().clear(jSONArray.optInt(i, 0));
            if (clear != null) {
                fireEvent("clear", clear);
            }
        }
    }

    public void clearAll() {
        getNotMgr().clearAll();
        fireEvent("clearall");
    }

    public void type(int i, CallbackContext callbackContext) {
        if (getNotMgr().get(i) == null) {
            callbackContext.success(EnvironmentCompat.MEDIA_UNKNOWN);
            return;
        }
        switch (r2.getType()) {
            case SCHEDULED:
                callbackContext.success("scheduled");
                return;
            case TRIGGERED:
                callbackContext.success("triggered");
                return;
            default:
                callbackContext.success(EnvironmentCompat.MEDIA_UNKNOWN);
                return;
        }
    }

    public void ids(CallbackContext callbackContext) {
        callbackContext.success(new JSONArray((Collection) getNotMgr().getIds()));
    }

    public void scheduledIds(CallbackContext callbackContext) {
        callbackContext.success(new JSONArray((Collection) getNotMgr().getIdsByType(Notification.Type.SCHEDULED)));
    }

    public void triggeredIds(CallbackContext callbackContext) {
        callbackContext.success(new JSONArray((Collection) getNotMgr().getIdsByType(Notification.Type.TRIGGERED)));
    }

    public void notification(int i, CallbackContext callbackContext) {
        Options options = getNotMgr().getOptions(i);
        if (options != null) {
            callbackContext.success(options.getDict());
        } else {
            callbackContext.success();
        }
    }

    public void notifications(JSONArray jSONArray, CallbackContext callbackContext) {
        List<JSONObject> list;
        if (jSONArray.length() == 0) {
            list = getNotMgr().getOptions();
        } else {
            list = getNotMgr().getOptionsById(toList(jSONArray));
        }
        callbackContext.success(new JSONArray((Collection) list));
    }

    public void scheduledNotifications(CallbackContext callbackContext) {
        callbackContext.success(new JSONArray((Collection) getNotMgr().getOptionsByType(Notification.Type.SCHEDULED)));
    }

    public void triggeredNotifications(CallbackContext callbackContext) {
        callbackContext.success(new JSONArray((Collection) getNotMgr().getOptionsByType(Notification.Type.TRIGGERED)));
    }

    public static synchronized void deviceready() {
        synchronized (LocalNotification.class) {
            deviceready = true;
            Iterator<String> it = eventQueue.iterator();
            while (it.hasNext()) {
                sendJavascript(it.next());
            }
            eventQueue.clear();
        }
    }

    private void fireEvent(String str) {
        fireEvent(str, null, new JSONObject());
    }

    public static void fireEvent(String str, Notification notification) {
        fireEvent(str, notification, new JSONObject());
    }

    public static void fireEvent(String str, Notification notification, JSONObject jSONObject) {
        String str2;
        try {
            jSONObject.put(NotificationCompat.CATEGORY_EVENT, str);
            jSONObject.put("foreground", isInForeground());
            jSONObject.put("queued", !deviceready.booleanValue());
            if (notification != null) {
                jSONObject.put("notification", notification.getId());
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        if (notification != null) {
            str2 = notification.toString() + "," + jSONObject.toString();
        } else {
            str2 = jSONObject.toString();
        }
        String str3 = "cordova.plugins.notification.local.core.fireEvent(\"" + str + "\"," + str2 + ")";
        if (launchDetails == null && !deviceready.booleanValue() && notification != null) {
            launchDetails = new Pair<>(Integer.valueOf(notification.getId()), str);
        }
        sendJavascript(str3);
    }

    private static synchronized void sendJavascript(final String str) {
        synchronized (LocalNotification.class) {
            if (deviceready.booleanValue() && webView != null) {
                final CordovaWebView cordovaWebView = webView.get();
                ((Activity) cordovaWebView.getContext()).runOnUiThread(new Runnable() { // from class: de.appplant.cordova.plugin.localnotification.LocalNotification.2
                    @Override // java.lang.Runnable
                    public void run() {
                        CordovaWebView cordovaWebView2 = cordovaWebView;
                        cordovaWebView2.loadUrl("javascript:" + str);
                    }
                });
                return;
            }
            eventQueue.add(str);
        }
    }

    private static boolean isInForeground() {
        WeakReference<CordovaWebView> weakReference;
        if (!deviceready.booleanValue() || (weakReference = webView) == null) {
            return false;
        }
        CordovaWebView cordovaWebView = weakReference.get();
        KeyguardManager keyguardManager = (KeyguardManager) cordovaWebView.getContext().getSystemService("keyguard");
        return (keyguardManager == null || !keyguardManager.isKeyguardLocked()) && cordovaWebView.getView().getWindowVisibility() == 0;
    }

    private List<Integer> toList(JSONArray jSONArray) {
        ArrayList arrayList = new ArrayList();
        for (int i = 0; i < jSONArray.length(); i++) {
            arrayList.add(Integer.valueOf(jSONArray.optInt(i)));
        }
        return arrayList;
    }

    private Manager getNotMgr() {
        return Manager.getInstance(this.f0cordova.getActivity());
    }
}
