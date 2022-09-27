package de.appplant.cordova.plugin.notification;

import android.app.AlarmManager;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Build;
import android.service.notification.StatusBarNotification;
import android.support.v4.app.NotificationCompat;
import android.support.v4.util.ArraySet;
import android.support.v4.util.Pair;
import android.util.SparseArray;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.Set;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
public final class Notification {
    public static final String EXTRA_ID = "NOTIFICATION_ID";
    public static final String EXTRA_UPDATE = "NOTIFICATION_UPDATE";
    static final String PREF_KEY_ID = "NOTIFICATION_ID";
    private static final String PREF_KEY_PID = "NOTIFICATION_PID";
    private static SparseArray<NotificationCompat.Builder> cache;
    private final NotificationCompat.Builder builder;
    private final Context context;
    private final Options options;

    /* loaded from: classes.dex */
    public enum Type {
        ALL,
        SCHEDULED,
        TRIGGERED
    }

    public Notification(Context context, Options options, NotificationCompat.Builder builder) {
        this.context = context;
        this.options = options;
        this.builder = builder;
    }

    public Notification(Context context, Options options) {
        this.context = context;
        this.options = options;
        this.builder = null;
    }

    public Context getContext() {
        return this.context;
    }

    public Options getOptions() {
        return this.options;
    }

    public int getId() {
        return this.options.getId().intValue();
    }

    private boolean isRepeating() {
        return getOptions().getTrigger().has("every");
    }

    public Type getType() {
        StatusBarNotification[] activeNotifications = Manager.getInstance(this.context).getActiveNotifications();
        int id = getId();
        for (StatusBarNotification statusBarNotification : activeNotifications) {
            if (statusBarNotification.getId() == id) {
                return Type.TRIGGERED;
            }
        }
        return Type.SCHEDULED;
    }

    public void schedule(Request request, Class<?> cls) {
        ArrayList<Pair> arrayList = new ArrayList();
        ArraySet arraySet = new ArraySet();
        AlarmManager alarmMgr = getAlarmMgr();
        cancelScheduledAlarms();
        do {
            Date triggerDate = request.getTriggerDate();
            if (triggerDate != null) {
                Intent intent = new Intent(this.context, cls);
                Intent putExtra = intent.setAction("NOTIFICATION_ID" + request.getIdentifier()).putExtra("NOTIFICATION_ID", this.options.getId()).putExtra("NOTIFICATION_OCCURRENCE", request.getOccurrence());
                arraySet.add(putExtra.getAction());
                arrayList.add(new Pair(triggerDate, putExtra));
            }
        } while (request.moveNext());
        if (arrayList.isEmpty()) {
            unpersist();
            return;
        }
        persist(arraySet);
        if (!this.options.isInfiniteTrigger()) {
            ((Intent) ((Pair) arrayList.get(arrayList.size() - 1)).second).putExtra(Request.EXTRA_LAST, true);
        }
        for (Pair pair : arrayList) {
            Date date = (Date) pair.first;
            long time = date.getTime();
            Intent intent2 = (Intent) pair.second;
            if (date.after(new Date()) || !trigger(intent2, cls)) {
                PendingIntent broadcast = PendingIntent.getBroadcast(this.context, 0, intent2, 268435456);
                try {
                    int priority = this.options.getPriority();
                    if (priority == 1) {
                        alarmMgr.setExact(1, time, broadcast);
                    } else if (priority == 5) {
                        if (Build.VERSION.SDK_INT >= 23) {
                            alarmMgr.setExactAndAllowWhileIdle(0, time, broadcast);
                        } else {
                            alarmMgr.setExact(1, time, broadcast);
                        }
                    } else {
                        alarmMgr.setExact(0, time, broadcast);
                    }
                } catch (Exception unused) {
                }
            }
        }
    }

    private boolean trigger(Intent intent, Class<?> cls) {
        try {
            ((BroadcastReceiver) cls.newInstance()).onReceive(this.context, intent);
            return true;
        } catch (IllegalAccessException unused) {
            return false;
        } catch (InstantiationException unused2) {
            return false;
        }
    }

    public void clear() {
        getNotMgr().cancel(getId());
        if (isRepeating()) {
            return;
        }
        unpersist();
    }

    public void cancel() {
        cancelScheduledAlarms();
        unpersist();
        getNotMgr().cancel(getId());
        clearCache();
    }

    private void cancelScheduledAlarms() {
        Set<String> stringSet = getPrefs(PREF_KEY_PID).getStringSet(this.options.getIdentifier(), null);
        if (stringSet == null) {
            return;
        }
        for (String str : stringSet) {
            PendingIntent broadcast = PendingIntent.getBroadcast(this.context, 0, new Intent(str), 0);
            if (broadcast != null) {
                getAlarmMgr().cancel(broadcast);
            }
        }
    }

    public void show() {
        if (this.builder == null) {
            return;
        }
        if (this.options.isWithProgressBar()) {
            cacheBuilder();
        }
        grantPermissionToPlaySoundFromExternal();
        getNotMgr().notify(getId(), this.builder.build());
    }

    public void update(JSONObject jSONObject, Class<?> cls) {
        mergeJSONObjects(jSONObject);
        persist(null);
        if (getType() != Type.TRIGGERED) {
            return;
        }
        Intent intent = new Intent(this.context, cls);
        trigger(intent.setAction("NOTIFICATION_ID" + this.options.getId()).putExtra("NOTIFICATION_ID", this.options.getId()).putExtra(EXTRA_UPDATE, true), cls);
    }

    public String toString() {
        JSONObject dict = this.options.getDict();
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject = new JSONObject(dict.toString());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject.toString();
    }

    private void persist(Set<String> set) {
        String identifier = this.options.getIdentifier();
        SharedPreferences.Editor edit = getPrefs("NOTIFICATION_ID").edit();
        edit.putString(identifier, this.options.toString());
        edit.apply();
        if (set == null) {
            return;
        }
        SharedPreferences.Editor edit2 = getPrefs(PREF_KEY_PID).edit();
        edit2.putStringSet(identifier, set);
        edit2.apply();
    }

    private void unpersist() {
        String[] strArr = {"NOTIFICATION_ID", PREF_KEY_PID};
        String identifier = this.options.getIdentifier();
        for (String str : strArr) {
            SharedPreferences.Editor edit = getPrefs(str).edit();
            edit.remove(identifier);
            edit.apply();
        }
    }

    private void grantPermissionToPlaySoundFromExternal() {
        NotificationCompat.Builder builder = this.builder;
        if (builder == null) {
            return;
        }
        this.context.grantUriPermission("com.android.systemui", Uri.parse(builder.getExtras().getString("NOTIFICATION_SOUND")), 1);
    }

    private void mergeJSONObjects(JSONObject jSONObject) {
        JSONObject dict = this.options.getDict();
        Iterator<String> keys = jSONObject.keys();
        while (keys.hasNext()) {
            try {
                String next = keys.next();
                dict.put(next, jSONObject.opt(next));
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }

    private void cacheBuilder() {
        if (cache == null) {
            cache = new SparseArray<>();
        }
        cache.put(getId(), this.builder);
    }

    public static NotificationCompat.Builder getCachedBuilder(int i) {
        SparseArray<NotificationCompat.Builder> sparseArray = cache;
        if (sparseArray != null) {
            return sparseArray.get(i);
        }
        return null;
    }

    private void clearCache() {
        SparseArray<NotificationCompat.Builder> sparseArray = cache;
        if (sparseArray != null) {
            sparseArray.delete(getId());
        }
    }

    private SharedPreferences getPrefs(String str) {
        return this.context.getSharedPreferences(str, 0);
    }

    private NotificationManager getNotMgr() {
        return (NotificationManager) this.context.getSystemService("notification");
    }

    private AlarmManager getAlarmMgr() {
        return (AlarmManager) this.context.getSystemService(NotificationCompat.CATEGORY_ALARM);
    }
}
