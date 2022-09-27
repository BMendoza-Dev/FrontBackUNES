package de.appplant.cordova.plugin.notification.action;

import android.content.Context;
import android.os.Build;
import android.util.Log;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: classes.dex */
public final class ActionGroup {
    private static final String GENERAL_ACTION_GROUP = "DEFAULT_GROUP";
    private static final Map<String, ActionGroup> groups = new HashMap();
    private final Action[] actions;
    private final String id;

    public static ActionGroup lookup(String str) {
        return groups.get(str);
    }

    public static void register(ActionGroup actionGroup) {
        if (!actionGroup.getId().equalsIgnoreCase(GENERAL_ACTION_GROUP)) {
            groups.put(actionGroup.getId(), actionGroup);
        }
    }

    public static ActionGroup parse(Context context, JSONObject jSONObject) {
        String optString = jSONObject.optString("actionGroupId", GENERAL_ACTION_GROUP);
        JSONArray optJSONArray = jSONObject.optJSONArray("actions");
        if (optJSONArray == null || optJSONArray.length() == 0) {
            return null;
        }
        ArrayList arrayList = new ArrayList(optJSONArray.length());
        for (int i = 0; i < optJSONArray.length(); i++) {
            JSONObject optJSONObject = optJSONArray.optJSONObject(i);
            String optString2 = optJSONObject.optString("type", "button");
            if (optString2.equals("input") && Build.VERSION.SDK_INT < 24) {
                Log.w("Action", "Type input is not supported");
            } else if (!optString2.equals("button") && !optString2.equals("input")) {
                Log.w("Action", "Unknown type: " + optString2);
            } else {
                arrayList.add(new Action(context, optJSONObject));
            }
        }
        if (!arrayList.isEmpty()) {
            return new ActionGroup(optString, (Action[]) arrayList.toArray(new Action[arrayList.size()]));
        }
        return null;
    }

    private ActionGroup(String str, Action[] actionArr) {
        this.id = str;
        this.actions = actionArr;
    }

    public String getId() {
        return this.id;
    }

    public Action[] getActions() {
        return this.actions;
    }
}
