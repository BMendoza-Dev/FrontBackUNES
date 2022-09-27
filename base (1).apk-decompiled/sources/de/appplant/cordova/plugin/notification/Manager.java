package de.appplant.cordova.plugin.notification;

import android.annotation.SuppressLint;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import android.service.notification.StatusBarNotification;
import android.support.v4.app.NotificationManagerCompat;
import de.appplant.cordova.plugin.badge.BadgeImpl;
import de.appplant.cordova.plugin.notification.Notification;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
public final class Manager {
    static final String CHANNEL_ID = "default-channel-id";
    private static final CharSequence CHANNEL_NAME = "Default channel";
    private Context context;

    private Manager(Context context) {
        this.context = context;
        createDefaultChannel();
    }

    public static Manager getInstance(Context context) {
        return new Manager(context);
    }

    public boolean hasPermission() {
        return getNotCompMgr().areNotificationsEnabled();
    }

    public Notification schedule(Request request, Class<?> cls) {
        Notification notification = new Notification(this.context, request.getOptions());
        notification.schedule(request, cls);
        return notification;
    }

    @SuppressLint({"WrongConstant"})
    private void createDefaultChannel() {
        NotificationManager notMgr = getNotMgr();
        if (Build.VERSION.SDK_INT >= 26 && notMgr.getNotificationChannel(CHANNEL_ID) == null) {
            notMgr.createNotificationChannel(new NotificationChannel(CHANNEL_ID, CHANNEL_NAME, 3));
        }
    }

    public Notification update(int i, JSONObject jSONObject, Class<?> cls) {
        Notification notification = get(i);
        if (notification == null) {
            return null;
        }
        notification.update(jSONObject, cls);
        return notification;
    }

    public Notification clear(int i) {
        Notification notification = get(i);
        if (notification != null) {
            notification.clear();
        }
        return notification;
    }

    public void clearAll() {
        for (Notification notification : getByType(Notification.Type.TRIGGERED)) {
            notification.clear();
        }
        getNotCompMgr().cancelAll();
        setBadge(0);
    }

    public Notification cancel(int i) {
        Notification notification = get(i);
        if (notification != null) {
            notification.cancel();
        }
        return notification;
    }

    public void cancelAll() {
        for (Notification notification : getAll()) {
            notification.cancel();
        }
        getNotCompMgr().cancelAll();
        setBadge(0);
    }

    public List<Integer> getIds() {
        Set<String> keySet = getPrefs().getAll().keySet();
        ArrayList arrayList = new ArrayList();
        for (String str : keySet) {
            try {
                arrayList.add(Integer.valueOf(Integer.parseInt(str)));
            } catch (NumberFormatException e) {
                e.printStackTrace();
            }
        }
        return arrayList;
    }

    public List<Integer> getIdsByType(Notification.Type type) {
        if (type == Notification.Type.ALL) {
            return getIds();
        }
        StatusBarNotification[] activeNotifications = getActiveNotifications();
        ArrayList arrayList = new ArrayList();
        for (StatusBarNotification statusBarNotification : activeNotifications) {
            arrayList.add(Integer.valueOf(statusBarNotification.getId()));
        }
        if (type == Notification.Type.TRIGGERED) {
            return arrayList;
        }
        List<Integer> ids = getIds();
        ids.removeAll(arrayList);
        return ids;
    }

    private List<Notification> getByIds(List<Integer> list) {
        ArrayList arrayList = new ArrayList();
        for (Integer num : list) {
            Notification notification = get(num.intValue());
            if (notification != null) {
                arrayList.add(notification);
            }
        }
        return arrayList;
    }

    public List<Notification> getAll() {
        return getByIds(getIds());
    }

    private List<Notification> getByType(Notification.Type type) {
        if (type == Notification.Type.ALL) {
            return getAll();
        }
        return getByIds(getIdsByType(type));
    }

    public List<JSONObject> getOptions() {
        return getOptionsById(getIds());
    }

    public List<JSONObject> getOptionsById(List<Integer> list) {
        ArrayList arrayList = new ArrayList();
        for (Integer num : list) {
            Options options = getOptions(num.intValue());
            if (options != null) {
                arrayList.add(options.getDict());
            }
        }
        return arrayList;
    }

    public List<JSONObject> getOptionsByType(Notification.Type type) {
        ArrayList arrayList = new ArrayList();
        for (Notification notification : getByType(type)) {
            arrayList.add(notification.getOptions().getDict());
        }
        return arrayList;
    }

    public Options getOptions(int i) {
        SharedPreferences prefs = getPrefs();
        String num = Integer.toString(i);
        if (!prefs.contains(num)) {
            return null;
        }
        try {
            return new Options(this.context, new JSONObject(prefs.getString(num, null)));
        } catch (JSONException e) {
            e.printStackTrace();
            return null;
        }
    }

    public Notification get(int i) {
        Options options = getOptions(i);
        if (options == null) {
            return null;
        }
        return new Notification(this.context, options);
    }

    public void setBadge(int i) {
        if (i == 0) {
            new BadgeImpl(this.context).clearBadge();
        } else {
            new BadgeImpl(this.context).setBadge(i);
        }
    }

    public StatusBarNotification[] getActiveNotifications() {
        if (Build.VERSION.SDK_INT >= 23) {
            return getNotMgr().getActiveNotifications();
        }
        return new StatusBarNotification[0];
    }

    private SharedPreferences getPrefs() {
        return this.context.getSharedPreferences(Notification.EXTRA_ID, 0);
    }

    private NotificationManager getNotMgr() {
        return (NotificationManager) this.context.getSystemService("notification");
    }

    private NotificationManagerCompat getNotCompMgr() {
        return NotificationManagerCompat.from(this.context);
    }
}
