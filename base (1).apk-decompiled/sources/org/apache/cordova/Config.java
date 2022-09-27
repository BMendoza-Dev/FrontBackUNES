package org.apache.cordova;

import android.app.Activity;
import java.util.List;
@Deprecated
/* loaded from: classes.dex */
public class Config {
    private static final String TAG = "Config";
    static ConfigXmlParser parser;

    private Config() {
    }

    public static void init(Activity activity) {
        parser = new ConfigXmlParser();
        parser.parse(activity);
        parser.getPreferences().setPreferencesBundle(activity.getIntent().getExtras());
    }

    public static void init() {
        if (parser == null) {
            parser = new ConfigXmlParser();
        }
    }

    public static String getStartUrl() {
        ConfigXmlParser configXmlParser = parser;
        return configXmlParser == null ? "file:///android_asset/www/index.html" : configXmlParser.getLaunchUrl();
    }

    public static String getErrorUrl() {
        return parser.getPreferences().getString("errorurl", null);
    }

    public static List<PluginEntry> getPluginEntries() {
        return parser.getPluginEntries();
    }

    public static CordovaPreferences getPreferences() {
        return parser.getPreferences();
    }

    public static boolean isInitialized() {
        return parser != null;
    }
}
