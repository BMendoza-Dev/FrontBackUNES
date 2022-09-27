package cordova.plugins.screenorientation;

import android.app.Activity;
import android.util.Log;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
/* loaded from: classes.dex */
public class CDVOrientation extends CordovaPlugin {
    private static final String ANY = "any";
    private static final String LANDSCAPE = "landscape";
    private static final String LANDSCAPE_PRIMARY = "landscape-primary";
    private static final String LANDSCAPE_SECONDARY = "landscape-secondary";
    private static final String PORTRAIT = "portrait";
    private static final String PORTRAIT_PRIMARY = "portrait-primary";
    private static final String PORTRAIT_SECONDARY = "portrait-secondary";
    private static final String TAG = "YoikScreenOrientation";

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) {
        Log.d(TAG, "execute action: " + str);
        if (str.equals("screenOrientation")) {
            return routeScreenOrientation(jSONArray, callbackContext);
        }
        callbackContext.error("action not recognised");
        return false;
    }

    private boolean routeScreenOrientation(JSONArray jSONArray, CallbackContext callbackContext) {
        jSONArray.optString(0);
        String optString = jSONArray.optString(1);
        Log.d(TAG, "Requested ScreenOrientation: " + optString);
        Activity activity = this.f0cordova.getActivity();
        if (optString.equals(ANY)) {
            activity.setRequestedOrientation(-1);
        } else if (optString.equals(LANDSCAPE_PRIMARY)) {
            activity.setRequestedOrientation(0);
        } else if (optString.equals(PORTRAIT_PRIMARY)) {
            activity.setRequestedOrientation(1);
        } else if (optString.equals(LANDSCAPE)) {
            activity.setRequestedOrientation(6);
        } else if (optString.equals(PORTRAIT)) {
            activity.setRequestedOrientation(7);
        } else if (optString.equals(LANDSCAPE_SECONDARY)) {
            activity.setRequestedOrientation(8);
        } else if (optString.equals(PORTRAIT_SECONDARY)) {
            activity.setRequestedOrientation(9);
        }
        callbackContext.success();
        return true;
    }
}
