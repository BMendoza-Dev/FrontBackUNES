package de.appplant.cordova.plugin.notification.receiver;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import de.appplant.cordova.plugin.notification.Manager;
import de.appplant.cordova.plugin.notification.Notification;
/* loaded from: classes.dex */
public abstract class AbstractClearReceiver extends BroadcastReceiver {
    public abstract void onClear(Notification notification, Bundle bundle);

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        Bundle extras = intent.getExtras();
        if (extras == null) {
            return;
        }
        Notification notification = Manager.getInstance(context).get(extras.getInt(Notification.EXTRA_ID));
        if (notification == null) {
            return;
        }
        onClear(notification, extras);
    }
}
