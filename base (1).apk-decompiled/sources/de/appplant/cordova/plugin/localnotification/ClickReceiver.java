package de.appplant.cordova.plugin.localnotification;

import android.os.Bundle;
import android.support.v4.app.RemoteInput;
import de.appplant.cordova.plugin.notification.Notification;
import de.appplant.cordova.plugin.notification.Options;
import de.appplant.cordova.plugin.notification.Request;
import de.appplant.cordova.plugin.notification.receiver.AbstractClickReceiver;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
public class ClickReceiver extends AbstractClickReceiver {
    @Override // de.appplant.cordova.plugin.notification.receiver.AbstractClickReceiver
    public void onClick(Notification notification, Bundle bundle) {
        String action = getAction();
        JSONObject jSONObject = new JSONObject();
        setTextInput(action, jSONObject);
        launchAppIf();
        LocalNotification.fireEvent(action, notification, jSONObject);
        if (notification.getOptions().isSticky().booleanValue()) {
            return;
        }
        if (isLast()) {
            notification.cancel();
        } else {
            notification.clear();
        }
    }

    private void setTextInput(String str, JSONObject jSONObject) {
        Bundle resultsFromIntent = RemoteInput.getResultsFromIntent(getIntent());
        if (resultsFromIntent == null) {
            return;
        }
        try {
            jSONObject.put("text", resultsFromIntent.getString(str));
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    private void launchAppIf() {
        if (!getIntent().getBooleanExtra(Options.EXTRA_LAUNCH, true)) {
            return;
        }
        launchApp();
    }

    private boolean isLast() {
        return getIntent().getBooleanExtra(Request.EXTRA_LAST, false);
    }
}
