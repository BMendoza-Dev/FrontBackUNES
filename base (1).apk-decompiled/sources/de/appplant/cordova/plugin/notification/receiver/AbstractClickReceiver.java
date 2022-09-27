package de.appplant.cordova.plugin.notification.receiver;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import de.appplant.cordova.plugin.notification.Manager;
import de.appplant.cordova.plugin.notification.Notification;
import de.appplant.cordova.plugin.notification.action.Action;
/* loaded from: classes.dex */
public abstract class AbstractClickReceiver extends Activity {
    public abstract void onClick(Notification notification, Bundle bundle);

    @Override // android.app.Activity
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        Bundle extras = getIntent().getExtras();
        Context applicationContext = getApplicationContext();
        if (extras == null) {
            return;
        }
        Notification notification = Manager.getInstance(applicationContext).get(extras.getInt(Notification.EXTRA_ID));
        if (notification == null) {
            return;
        }
        onClick(notification, extras);
    }

    @Override // android.app.Activity
    protected void onResume() {
        super.onResume();
        finish();
    }

    public String getAction() {
        return getIntent().getExtras().getString(Action.EXTRA_ID, Action.CLICK_ACTION_ID);
    }

    public void launchApp() {
        Context applicationContext = getApplicationContext();
        Intent launchIntentForPackage = applicationContext.getPackageManager().getLaunchIntentForPackage(applicationContext.getPackageName());
        if (launchIntentForPackage == null) {
            return;
        }
        launchIntentForPackage.addFlags(537001984);
        applicationContext.startActivity(launchIntentForPackage);
    }
}
