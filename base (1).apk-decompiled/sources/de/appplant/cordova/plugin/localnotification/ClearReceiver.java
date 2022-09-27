package de.appplant.cordova.plugin.localnotification;

import android.os.Bundle;
import de.appplant.cordova.plugin.notification.Notification;
import de.appplant.cordova.plugin.notification.Request;
import de.appplant.cordova.plugin.notification.receiver.AbstractClearReceiver;
/* loaded from: classes.dex */
public class ClearReceiver extends AbstractClearReceiver {
    @Override // de.appplant.cordova.plugin.notification.receiver.AbstractClearReceiver
    public void onClear(Notification notification, Bundle bundle) {
        if (bundle.getBoolean(Request.EXTRA_LAST, false)) {
            notification.cancel();
        } else {
            notification.clear();
        }
        LocalNotification.fireEvent("clear", notification);
    }
}
