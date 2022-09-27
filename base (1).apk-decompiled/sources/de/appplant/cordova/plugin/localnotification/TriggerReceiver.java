package de.appplant.cordova.plugin.localnotification;

import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.os.PowerManager;
import de.appplant.cordova.plugin.notification.Builder;
import de.appplant.cordova.plugin.notification.Manager;
import de.appplant.cordova.plugin.notification.Notification;
import de.appplant.cordova.plugin.notification.Options;
import de.appplant.cordova.plugin.notification.Request;
import de.appplant.cordova.plugin.notification.receiver.AbstractTriggerReceiver;
/* loaded from: classes.dex */
public class TriggerReceiver extends AbstractTriggerReceiver {
    @Override // de.appplant.cordova.plugin.notification.receiver.AbstractTriggerReceiver
    public void onTrigger(Notification notification, Bundle bundle) {
        boolean z = bundle.getBoolean(Notification.EXTRA_UPDATE, false);
        Context context = notification.getContext();
        Options options = notification.getOptions();
        Manager manager = Manager.getInstance(context);
        int badgeNumber = options.getBadgeNumber();
        if (badgeNumber > 0) {
            manager.setBadge(badgeNumber);
        }
        if (options.shallWakeUp()) {
            wakeUp(context);
        }
        notification.show();
        if (options.isInfiniteTrigger()) {
            manager.schedule(new Request(options), getClass());
        }
        if (!z) {
            LocalNotification.fireEvent("trigger", notification);
        }
    }

    private void wakeUp(Context context) {
        PowerManager powerManager = (PowerManager) context.getSystemService("power");
        if (powerManager == null) {
            return;
        }
        PowerManager.WakeLock newWakeLock = powerManager.newWakeLock(268435462, "LocalNotification");
        newWakeLock.setReferenceCounted(false);
        newWakeLock.acquire(1000L);
        if (Build.VERSION.SDK_INT >= 21) {
            newWakeLock.release(1);
        } else {
            newWakeLock.release();
        }
    }

    @Override // de.appplant.cordova.plugin.notification.receiver.AbstractTriggerReceiver
    public Notification buildNotification(Builder builder, Bundle bundle) {
        return builder.setClickActivity(ClickReceiver.class).setClearReceiver(ClearReceiver.class).setExtras(bundle).build();
    }
}
