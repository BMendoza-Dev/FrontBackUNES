package de.appplant.cordova.plugin.notification;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.net.Uri;
import android.support.v4.app.NotificationCompat;
import android.support.v4.media.session.MediaSessionCompat;
import android.support.v4.view.ViewCompat;
import de.appplant.cordova.plugin.notification.action.Action;
import de.appplant.cordova.plugin.notification.action.ActionGroup;
import de.appplant.cordova.plugin.notification.util.AssetUtil;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import me.leolin.shortcutbadger.impl.NewHtcHomeBadger;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: classes.dex */
public final class Options {
    private static final String DEFAULT_ICON = "res://icon";
    public static final String EXTRA_LAUNCH = "NOTIFICATION_LAUNCH";
    static final String EXTRA_SOUND = "NOTIFICATION_SOUND";
    private final AssetUtil assets;
    private final Context context;
    private final JSONObject options;

    public Options(JSONObject jSONObject) {
        this.options = jSONObject;
        this.context = null;
        this.assets = null;
    }

    public Options(Context context, JSONObject jSONObject) {
        this.context = context;
        this.options = jSONObject;
        this.assets = AssetUtil.getInstance(context);
    }

    public Context getContext() {
        return this.context;
    }

    public JSONObject getDict() {
        return this.options;
    }

    public String toString() {
        return this.options.toString();
    }

    public Integer getId() {
        return Integer.valueOf(this.options.optInt("id", 0));
    }

    public String getIdentifier() {
        return getId().toString();
    }

    public int getBadgeNumber() {
        return this.options.optInt("badge", 0);
    }

    public int getNumber() {
        return this.options.optInt("number", 0);
    }

    public Boolean isSticky() {
        return Boolean.valueOf(this.options.optBoolean("sticky", false));
    }

    public Boolean isAutoClear() {
        return Boolean.valueOf(this.options.optBoolean("autoClear", false));
    }

    public JSONObject getTrigger() {
        return this.options.optJSONObject("trigger");
    }

    public boolean isSilent() {
        return this.options.optBoolean("silent", false);
    }

    public String getGroup() {
        return this.options.optString("group", null);
    }

    public boolean isLaunchingApp() {
        return this.options.optBoolean("launch", true);
    }

    public boolean shallWakeUp() {
        return this.options.optBoolean("wakeup", true);
    }

    public String getChannel() {
        return this.options.optString("channel", "default-channel-id");
    }

    public boolean getGroupSummary() {
        return this.options.optBoolean("groupSummary", false);
    }

    public String getText() {
        Object opt = this.options.opt("text");
        return opt instanceof String ? (String) opt : "";
    }

    public String getTitle() {
        String optString = this.options.optString("title", "");
        return optString.isEmpty() ? this.context.getApplicationInfo().loadLabel(this.context.getPackageManager()).toString() : optString;
    }

    public int getLedColor() {
        String str;
        Object opt = this.options.opt("led");
        if (opt instanceof String) {
            str = this.options.optString("led");
        } else if (opt instanceof JSONArray) {
            str = this.options.optJSONArray("led").optString(0);
        } else {
            str = opt instanceof JSONObject ? this.options.optJSONObject("led").optString("color") : null;
        }
        if (str == null) {
            return 0;
        }
        try {
            return Integer.parseInt(stripHex(str), 16) + ViewCompat.MEASURED_STATE_MASK;
        } catch (NumberFormatException e) {
            e.printStackTrace();
            return 0;
        }
    }

    public int getLedOn() {
        Object opt = this.options.opt("led");
        if (opt instanceof JSONArray) {
            return this.options.optJSONArray("led").optInt(1, 1000);
        }
        if (!(opt instanceof JSONObject)) {
            return 1000;
        }
        return this.options.optJSONObject("led").optInt("on", 1000);
    }

    public int getLedOff() {
        Object opt = this.options.opt("led");
        if (opt instanceof JSONArray) {
            return this.options.optJSONArray("led").optInt(2, 1000);
        }
        if (!(opt instanceof JSONObject)) {
            return 1000;
        }
        return this.options.optJSONObject("led").optInt("off", 1000);
    }

    public int getColor() {
        String optString = this.options.optString("color", null);
        if (optString == null) {
            return 0;
        }
        try {
            String stripHex = stripHex(optString);
            if (stripHex.matches("[^0-9]*")) {
                return Color.class.getDeclaredField(stripHex.toUpperCase()).getInt(null);
            }
            return Integer.parseInt(stripHex, 16) + ViewCompat.MEASURED_STATE_MASK;
        } catch (IllegalAccessException e) {
            e.printStackTrace();
            return 0;
        } catch (NoSuchFieldException e2) {
            e2.printStackTrace();
            return 0;
        } catch (NumberFormatException e3) {
            e3.printStackTrace();
            return 0;
        }
    }

    public Uri getSound() {
        return this.assets.parse(this.options.optString("sound", null));
    }

    public boolean hasLargeIcon() {
        return this.options.optString("icon", null) != null;
    }

    public Bitmap getLargeIcon() {
        try {
            return this.assets.getIconFromUri(this.assets.parse(this.options.optString("icon", null)));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public int getSmallIcon() {
        int resId = this.assets.getResId(this.options.optString("smallIcon", DEFAULT_ICON));
        if (resId == 0) {
            resId = this.assets.getResId(DEFAULT_ICON);
        }
        if (resId == 0) {
            resId = this.context.getApplicationInfo().icon;
        }
        if (resId == 0) {
            return 17301598;
        }
        return resId;
    }

    private boolean isWithVibration() {
        return this.options.optBoolean("vibrate", true);
    }

    private boolean isWithoutSound() {
        Object opt = this.options.opt("sound");
        return opt == null || opt.equals(false);
    }

    private boolean isWithDefaultSound() {
        Object opt = this.options.opt("sound");
        return opt != null && opt.equals(true);
    }

    private boolean isWithoutLights() {
        Object opt = this.options.opt("led");
        return opt == null || opt.equals(false);
    }

    private boolean isWithDefaultLights() {
        Object opt = this.options.opt("led");
        return opt != null && opt.equals(true);
    }

    public int getDefaults() {
        int optInt = this.options.optInt("defaults", 0);
        int i = isWithVibration() ? optInt | 2 : optInt & 2;
        if (isWithDefaultSound()) {
            i |= 1;
        } else if (isWithoutSound()) {
            i &= 1;
        }
        return isWithDefaultLights() ? i | 4 : isWithoutLights() ? i & 4 : i;
    }

    public int getVisibility() {
        return this.options.optBoolean("lockscreen", true) ? 1 : -1;
    }

    public int getPriority() {
        return Math.min(Math.max(this.options.optInt("priority"), -2), 2);
    }

    public boolean getShowWhen() {
        return this.options.optBoolean("showWhen", true);
    }

    public boolean isWithProgressBar() {
        return this.options.optJSONObject("progressBar").optBoolean("enabled", false);
    }

    public int getProgressValue() {
        return this.options.optJSONObject("progressBar").optInt("value", 0);
    }

    public int getProgressMaxValue() {
        return this.options.optJSONObject("progressBar").optInt("maxValue", 100);
    }

    public boolean isIndeterminateProgress() {
        return this.options.optJSONObject("progressBar").optBoolean("indeterminate", false);
    }

    public boolean isInfiniteTrigger() {
        JSONObject optJSONObject = this.options.optJSONObject("trigger");
        return optJSONObject.has("every") && optJSONObject.optInt(NewHtcHomeBadger.COUNT, -1) < 0;
    }

    public String getSummary() {
        return this.options.optString("summary", null);
    }

    public List<Bitmap> getAttachments() {
        JSONArray optJSONArray = this.options.optJSONArray("attachments");
        ArrayList arrayList = new ArrayList();
        if (optJSONArray == null) {
            return arrayList;
        }
        for (int i = 0; i < optJSONArray.length(); i++) {
            Uri parse = this.assets.parse(optJSONArray.optString(i));
            if (parse != Uri.EMPTY) {
                try {
                    arrayList.add(this.assets.getIconFromUri(parse));
                    break;
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return arrayList;
    }

    public Action[] getActions() {
        String optString = this.options.optString("actionGroupId", null);
        JSONArray optJSONArray = this.options.optJSONArray("actions");
        ActionGroup parse = (optJSONArray == null || optJSONArray.length() <= 0) ? null : ActionGroup.parse(this.context, this.options);
        if (parse == null && optString != null) {
            parse = ActionGroup.lookup(optString);
        }
        if (parse != null) {
            ActionGroup.register(parse);
            return parse.getActions();
        }
        return null;
    }

    public NotificationCompat.MessagingStyle.Message[] getMessages() {
        Object opt = this.options.opt("text");
        if (opt == null || (opt instanceof String)) {
            return null;
        }
        JSONArray jSONArray = (JSONArray) opt;
        if (jSONArray.length() == 0) {
            return null;
        }
        NotificationCompat.MessagingStyle.Message[] messageArr = new NotificationCompat.MessagingStyle.Message[jSONArray.length()];
        long time = new Date().getTime();
        for (int i = 0; i < messageArr.length; i++) {
            JSONObject optJSONObject = jSONArray.optJSONObject(i);
            messageArr[i] = new NotificationCompat.MessagingStyle.Message(optJSONObject.optString("message"), optJSONObject.optLong("date", time), optJSONObject.optString("person", null));
        }
        return messageArr;
    }

    public MediaSessionCompat.Token getMediaSessionToken() {
        String optString = this.options.optString("mediaSession", null);
        if (optString == null) {
            return null;
        }
        return new MediaSessionCompat(this.context, optString).getSessionToken();
    }

    private String stripHex(String str) {
        return str.charAt(0) == '#' ? str.substring(1) : str;
    }
}
