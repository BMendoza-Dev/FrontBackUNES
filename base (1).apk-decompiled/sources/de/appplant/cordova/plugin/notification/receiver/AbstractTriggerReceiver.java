package de.appplant.cordova.plugin.notification.receiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import de.appplant.cordova.plugin.notification.Builder;
import de.appplant.cordova.plugin.notification.Manager;
import de.appplant.cordova.plugin.notification.Notification;
import de.appplant.cordova.plugin.notification.Options;
/* loaded from: classes.dex */
public abstract class AbstractTriggerReceiver extends BroadcastReceiver {
    public abstract Notification buildNotification(Builder builder, Bundle bundle);

    public abstract void onTrigger(Notification notification, Bundle bundle);

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        Notification buildNotification;
        Bundle extras = intent.getExtras();
        if (extras == null) {
            return;
        }
        Options options = Manager.getInstance(context).getOptions(extras.getInt(Notification.EXTRA_ID, 0));
        if (options == null || (buildNotification = buildNotification(new Builder(options), extras)) == null) {
            return;
        }
        onTrigger(buildNotification, extras);
    }
}
