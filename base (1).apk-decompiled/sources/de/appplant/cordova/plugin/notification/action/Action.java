package de.appplant.cordova.plugin.notification.action;

import android.content.Context;
import android.support.v4.app.RemoteInput;
import android.support.v4.os.EnvironmentCompat;
import de.appplant.cordova.plugin.notification.util.AssetUtil;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: classes.dex */
public final class Action {
    public static final String CLICK_ACTION_ID = "click";
    public static final String EXTRA_ID = "NOTIFICATION_ACTION_ID";
    private final Context context;
    private final JSONObject options;

    public Action(Context context, JSONObject jSONObject) {
        this.context = context;
        this.options = jSONObject;
    }

    public String getId() {
        return this.options.optString("id", getTitle());
    }

    public String getTitle() {
        return this.options.optString("title", EnvironmentCompat.MEDIA_UNKNOWN);
    }

    public int getIcon() {
        int resId = AssetUtil.getInstance(this.context).getResId(this.options.optString("icon"));
        if (resId == 0) {
            return 17301656;
        }
        return resId;
    }

    public boolean isLaunchingApp() {
        return this.options.optBoolean("launch", false);
    }

    public boolean isWithInput() {
        return this.options.optString("type").equals("input");
    }

    public RemoteInput getInput() {
        return new RemoteInput.Builder(getId()).setLabel(this.options.optString("emptyText")).setAllowFreeFormInput(this.options.optBoolean("editable", true)).setChoices(getChoices()).build();
    }

    private String[] getChoices() {
        JSONArray optJSONArray = this.options.optJSONArray("choices");
        if (optJSONArray == null) {
            return null;
        }
        String[] strArr = new String[optJSONArray.length()];
        for (int i = 0; i < strArr.length; i++) {
            strArr[i] = optJSONArray.optString(i);
        }
        return strArr;
    }
}
