package org.apache.cordova.inappbrowser;

import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.ResolveInfo;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcelable;
import android.support.v4.view.MotionEventCompat;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;
import android.webkit.CookieManager;
import android.webkit.CookieSyncManager;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import com.ionicframework.cordova.webview.WebViewLocalServer;
import com.silkimen.http.HttpRequest;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.StringTokenizer;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.Config;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginManager;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
@SuppressLint({"SetJavaScriptEnabled"})
/* loaded from: classes.dex */
public class InAppBrowser extends CordovaPlugin {
    private static final String BEFORELOAD = "beforeload";
    private static final String CLEAR_ALL_CACHE = "clearcache";
    private static final String CLEAR_SESSION_CACHE = "clearsessioncache";
    private static final String EXIT_EVENT = "exit";
    private static final int FILECHOOSER_REQUESTCODE = 1;
    private static final int FILECHOOSER_REQUESTCODE_LOLLIPOP = 2;
    private static final String FOOTER = "footer";
    private static final String HARDWARE_BACK_BUTTON = "hardwareback";
    private static final String HIDDEN = "hidden";
    private static final String HIDE_NAVIGATION = "hidenavigationbuttons";
    private static final String HIDE_URL = "hideurlbar";
    private static final String LEFT_TO_RIGHT = "lefttoright";
    private static final String LOAD_ERROR_EVENT = "loaderror";
    private static final String LOAD_START_EVENT = "loadstart";
    private static final String LOAD_STOP_EVENT = "loadstop";
    private static final String LOCATION = "location";
    protected static final String LOG_TAG = "InAppBrowser";
    private static final String MEDIA_PLAYBACK_REQUIRES_USER_ACTION = "mediaPlaybackRequiresUserAction";
    private static final String MESSAGE_EVENT = "message";
    private static final String NULL = "null";
    private static final String SELF = "_self";
    private static final String SHOULD_PAUSE = "shouldPauseOnSuspend";
    private static final String SYSTEM = "_system";
    private static final String USER_WIDE_VIEW_PORT = "useWideViewPort";
    private static final String ZOOM = "zoom";
    private String[] allowedSchemes;
    private CallbackContext callbackContext;
    private InAppBrowserClient currentClient;
    private InAppBrowserDialog dialog;
    private EditText edittext;
    private WebView inAppWebView;
    private ValueCallback<Uri> mUploadCallback;
    private ValueCallback<Uri[]> mUploadCallbackLollipop;
    private static final Boolean DEFAULT_HARDWARE_BACK = true;
    private static final String CLOSE_BUTTON_CAPTION = "closebuttoncaption";
    private static final String TOOLBAR_COLOR = "toolbarcolor";
    private static final String NAVIGATION_COLOR = "navigationbuttoncolor";
    private static final String CLOSE_BUTTON_COLOR = "closebuttoncolor";
    private static final String FOOTER_COLOR = "footercolor";
    private static final List customizableOptions = Arrays.asList(CLOSE_BUTTON_CAPTION, TOOLBAR_COLOR, NAVIGATION_COLOR, CLOSE_BUTTON_COLOR, FOOTER_COLOR);
    private boolean showLocationBar = true;
    private boolean showZoomControls = true;
    private boolean openWindowHidden = false;
    private boolean clearAllCache = false;
    private boolean clearSessionCache = false;
    private boolean hadwareBackButton = true;
    private boolean mediaPlaybackRequiresUserGesture = false;
    private boolean shouldPauseInAppBrowser = false;
    private boolean useWideViewPort = true;
    private String closeButtonCaption = "";
    private String closeButtonColor = "";
    private boolean leftToRight = false;
    private int toolbarColor = -3355444;
    private boolean hideNavigationButtons = false;
    private String navigationButtonColor = "";
    private boolean hideUrlBar = false;
    private boolean showFooter = false;
    private String footerColor = "";
    private String beforeload = "";

    public InAppBrowser getInAppBrowser() {
        return this;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, CordovaArgs cordovaArgs, final CallbackContext callbackContext) throws JSONException {
        if (str.equals("open")) {
            this.callbackContext = callbackContext;
            final String string = cordovaArgs.getString(0);
            String optString = cordovaArgs.optString(1);
            final String str2 = (optString == null || optString.equals("") || optString.equals(NULL)) ? SELF : optString;
            final HashMap<String, String> parseFeature = parseFeature(cordovaArgs.optString(2));
            LOG.d(LOG_TAG, "target = " + str2);
            this.f0cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.1
                @Override // java.lang.Runnable
                public void run() {
                    String str3 = "";
                    if (InAppBrowser.SELF.equals(str2)) {
                        LOG.d(InAppBrowser.LOG_TAG, "in self");
                        Boolean bool = string.startsWith("javascript:") ? true : null;
                        if (bool == null) {
                            try {
                                bool = (Boolean) Config.class.getMethod("isUrlWhiteListed", String.class).invoke(null, string);
                            } catch (IllegalAccessException e) {
                                LOG.d(InAppBrowser.LOG_TAG, e.getLocalizedMessage());
                            } catch (NoSuchMethodException e2) {
                                LOG.d(InAppBrowser.LOG_TAG, e2.getLocalizedMessage());
                            } catch (InvocationTargetException e3) {
                                LOG.d(InAppBrowser.LOG_TAG, e3.getLocalizedMessage());
                            }
                        }
                        if (bool == null) {
                            try {
                                PluginManager pluginManager = (PluginManager) InAppBrowser.this.webView.getClass().getMethod("getPluginManager", new Class[0]).invoke(InAppBrowser.this.webView, new Object[0]);
                                bool = (Boolean) pluginManager.getClass().getMethod("shouldAllowNavigation", String.class).invoke(pluginManager, string);
                            } catch (IllegalAccessException e4) {
                                LOG.d(InAppBrowser.LOG_TAG, e4.getLocalizedMessage());
                            } catch (NoSuchMethodException e5) {
                                LOG.d(InAppBrowser.LOG_TAG, e5.getLocalizedMessage());
                            } catch (InvocationTargetException e6) {
                                LOG.d(InAppBrowser.LOG_TAG, e6.getLocalizedMessage());
                            }
                        }
                        if (Boolean.TRUE.equals(bool)) {
                            LOG.d(InAppBrowser.LOG_TAG, "loading in webview");
                            InAppBrowser.this.webView.loadUrl(string);
                        } else if (string.startsWith("tel:")) {
                            try {
                                LOG.d(InAppBrowser.LOG_TAG, "loading in dialer");
                                Intent intent = new Intent("android.intent.action.DIAL");
                                intent.setData(Uri.parse(string));
                                InAppBrowser.this.f0cordova.getActivity().startActivity(intent);
                            } catch (ActivityNotFoundException e7) {
                                LOG.e(InAppBrowser.LOG_TAG, "Error dialing " + string + ": " + e7.toString());
                            }
                        } else {
                            LOG.d(InAppBrowser.LOG_TAG, "loading in InAppBrowser");
                            str3 = InAppBrowser.this.showWebPage(string, parseFeature);
                        }
                    } else if (InAppBrowser.SYSTEM.equals(str2)) {
                        LOG.d(InAppBrowser.LOG_TAG, "in system");
                        str3 = InAppBrowser.this.openExternal(string);
                    } else {
                        LOG.d(InAppBrowser.LOG_TAG, "in blank");
                        str3 = InAppBrowser.this.showWebPage(string, parseFeature);
                    }
                    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, str3);
                    pluginResult.setKeepCallback(true);
                    callbackContext.sendPluginResult(pluginResult);
                }
            });
        } else if (str.equals("close")) {
            closeDialog();
        } else if (str.equals("loadAfterBeforeload")) {
            if (this.beforeload == null) {
                LOG.e(LOG_TAG, "unexpected loadAfterBeforeload called without feature beforeload=yes");
            }
            final String string2 = cordovaArgs.getString(0);
            this.f0cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.2
                @Override // java.lang.Runnable
                @SuppressLint({"NewApi"})
                public void run() {
                    if (Build.VERSION.SDK_INT < 26) {
                        InAppBrowser.this.currentClient.waitForBeforeload = false;
                        InAppBrowser.this.inAppWebView.setWebViewClient(InAppBrowser.this.currentClient);
                    } else {
                        ((InAppBrowserClient) InAppBrowser.this.inAppWebView.getWebViewClient()).waitForBeforeload = false;
                    }
                    InAppBrowser.this.inAppWebView.loadUrl(string2);
                }
            });
        } else if (str.equals("injectScriptCode")) {
            String str3 = null;
            if (cordovaArgs.getBoolean(1)) {
                str3 = String.format("(function(){prompt(JSON.stringify([eval(%%s)]), 'gap-iab://%s')})()", callbackContext.getCallbackId());
            }
            injectDeferredObject(cordovaArgs.getString(0), str3);
        } else if (str.equals("injectScriptFile")) {
            injectDeferredObject(cordovaArgs.getString(0), cordovaArgs.getBoolean(1) ? String.format("(function(d) { var c = d.createElement('script'); c.src = %%s; c.onload = function() { prompt('', 'gap-iab://%s'); }; d.body.appendChild(c); })(document)", callbackContext.getCallbackId()) : "(function(d) { var c = d.createElement('script'); c.src = %s; d.body.appendChild(c); })(document)");
        } else if (str.equals("injectStyleCode")) {
            injectDeferredObject(cordovaArgs.getString(0), cordovaArgs.getBoolean(1) ? String.format("(function(d) { var c = d.createElement('style'); c.innerHTML = %%s; d.body.appendChild(c); prompt('', 'gap-iab://%s');})(document)", callbackContext.getCallbackId()) : "(function(d) { var c = d.createElement('style'); c.innerHTML = %s; d.body.appendChild(c); })(document)");
        } else if (str.equals("injectStyleFile")) {
            injectDeferredObject(cordovaArgs.getString(0), cordovaArgs.getBoolean(1) ? String.format("(function(d) { var c = d.createElement('link'); c.rel='stylesheet'; c.type='text/css'; c.href = %%s; d.head.appendChild(c); prompt('', 'gap-iab://%s');})(document)", callbackContext.getCallbackId()) : "(function(d) { var c = d.createElement('link'); c.rel='stylesheet'; c.type='text/css'; c.href = %s; d.head.appendChild(c); })(document)");
        } else if (str.equals("show")) {
            this.f0cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.3
                @Override // java.lang.Runnable
                public void run() {
                    InAppBrowser.this.dialog.show();
                }
            });
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
            pluginResult.setKeepCallback(true);
            this.callbackContext.sendPluginResult(pluginResult);
        } else if (!str.equals("hide")) {
            return false;
        } else {
            this.f0cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.4
                @Override // java.lang.Runnable
                public void run() {
                    InAppBrowser.this.dialog.hide();
                }
            });
            PluginResult pluginResult2 = new PluginResult(PluginResult.Status.OK);
            pluginResult2.setKeepCallback(true);
            this.callbackContext.sendPluginResult(pluginResult2);
        }
        return true;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onReset() {
        closeDialog();
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onPause(boolean z) {
        if (this.shouldPauseInAppBrowser) {
            this.inAppWebView.onPause();
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onResume(boolean z) {
        if (this.shouldPauseInAppBrowser) {
            this.inAppWebView.onResume();
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onDestroy() {
        closeDialog();
    }

    public void injectDeferredObject(final String str, String str2) {
        if (this.inAppWebView != null) {
            if (str2 != null) {
                JSONArray jSONArray = new JSONArray();
                jSONArray.put(str);
                String jSONArray2 = jSONArray.toString();
                str = String.format(str2, jSONArray2.substring(1, jSONArray2.length() - 1));
            }
            this.f0cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.5
                @Override // java.lang.Runnable
                @SuppressLint({"NewApi"})
                public void run() {
                    if (Build.VERSION.SDK_INT < 19) {
                        WebView webView = InAppBrowser.this.inAppWebView;
                        webView.loadUrl("javascript:" + str);
                        return;
                    }
                    InAppBrowser.this.inAppWebView.evaluateJavascript(str, null);
                }
            });
            return;
        }
        LOG.d(LOG_TAG, "Can't inject code into the system browser");
    }

    private HashMap<String, String> parseFeature(String str) {
        if (str.equals(NULL)) {
            return null;
        }
        HashMap<String, String> hashMap = new HashMap<>();
        StringTokenizer stringTokenizer = new StringTokenizer(str, ",");
        while (stringTokenizer.hasMoreElements()) {
            StringTokenizer stringTokenizer2 = new StringTokenizer(stringTokenizer.nextToken(), "=");
            if (stringTokenizer2.hasMoreElements()) {
                String nextToken = stringTokenizer2.nextToken();
                String nextToken2 = stringTokenizer2.nextToken();
                if (!customizableOptions.contains(nextToken) && !nextToken2.equals("yes") && !nextToken2.equals("no")) {
                    nextToken2 = "yes";
                }
                hashMap.put(nextToken, nextToken2);
            }
        }
        return hashMap;
    }

    public String openExternal(String str) {
        try {
            Intent intent = new Intent("android.intent.action.VIEW");
            Uri parse = Uri.parse(str);
            if ("file".equals(parse.getScheme())) {
                intent.setDataAndType(parse, this.webView.getResourceApi().getMimeType(parse));
            } else {
                intent.setData(parse);
            }
            intent.putExtra("com.android.browser.application_id", this.f0cordova.getActivity().getPackageName());
            openExternalExcludeCurrentApp(intent);
            return "";
        } catch (RuntimeException e) {
            LOG.d(LOG_TAG, "InAppBrowser: Error loading url " + str + ":" + e.toString());
            return e.toString();
        }
    }

    private void openExternalExcludeCurrentApp(Intent intent) {
        String packageName = this.f0cordova.getActivity().getPackageName();
        List<ResolveInfo> queryIntentActivities = this.f0cordova.getActivity().getPackageManager().queryIntentActivities(intent, 0);
        ArrayList arrayList = new ArrayList();
        boolean z = false;
        for (ResolveInfo resolveInfo : queryIntentActivities) {
            if (!packageName.equals(resolveInfo.activityInfo.packageName)) {
                Intent intent2 = (Intent) intent.clone();
                intent2.setPackage(resolveInfo.activityInfo.packageName);
                arrayList.add(intent2);
            } else {
                z = true;
            }
        }
        if (!z || arrayList.size() == 0) {
            this.f0cordova.getActivity().startActivity(intent);
        } else if (arrayList.size() == 1) {
            this.f0cordova.getActivity().startActivity((Intent) arrayList.get(0));
        } else if (arrayList.size() > 0) {
            Intent createChooser = Intent.createChooser((Intent) arrayList.remove(arrayList.size() - 1), null);
            createChooser.putExtra("android.intent.extra.INITIAL_INTENTS", (Parcelable[]) arrayList.toArray(new Parcelable[0]));
            this.f0cordova.getActivity().startActivity(createChooser);
        }
    }

    public void closeDialog() {
        this.f0cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.6
            @Override // java.lang.Runnable
            public void run() {
                WebView webView = InAppBrowser.this.inAppWebView;
                if (webView == null) {
                    return;
                }
                webView.setWebViewClient(new WebViewClient() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.6.1
                    @Override // android.webkit.WebViewClient
                    public void onPageFinished(WebView webView2, String str) {
                        if (InAppBrowser.this.dialog != null) {
                            InAppBrowser.this.dialog.dismiss();
                            InAppBrowser.this.dialog = null;
                        }
                    }
                });
                webView.loadUrl("about:blank");
                try {
                    JSONObject jSONObject = new JSONObject();
                    jSONObject.put("type", InAppBrowser.EXIT_EVENT);
                    InAppBrowser.this.sendUpdate(jSONObject, false);
                } catch (JSONException unused) {
                    LOG.d(InAppBrowser.LOG_TAG, "Should never happen");
                }
            }
        });
    }

    public void goBack() {
        if (this.inAppWebView.canGoBack()) {
            this.inAppWebView.goBack();
        }
    }

    public boolean canGoBack() {
        return this.inAppWebView.canGoBack();
    }

    public boolean hardwareBack() {
        return this.hadwareBackButton;
    }

    public void goForward() {
        if (this.inAppWebView.canGoForward()) {
            this.inAppWebView.goForward();
        }
    }

    public void navigate(String str) {
        ((InputMethodManager) this.f0cordova.getActivity().getSystemService("input_method")).hideSoftInputFromWindow(this.edittext.getWindowToken(), 0);
        if (!str.startsWith(WebViewLocalServer.httpScheme) && !str.startsWith("file:")) {
            WebView webView = this.inAppWebView;
            webView.loadUrl("http://" + str);
        } else {
            this.inAppWebView.loadUrl(str);
        }
        this.inAppWebView.requestFocus();
    }

    public boolean getShowLocationBar() {
        return this.showLocationBar;
    }

    public String showWebPage(final String str, HashMap<String, String> hashMap) {
        this.showLocationBar = true;
        this.showZoomControls = true;
        this.openWindowHidden = false;
        this.mediaPlaybackRequiresUserGesture = false;
        if (hashMap != null) {
            String str2 = hashMap.get(LOCATION);
            if (str2 != null) {
                this.showLocationBar = str2.equals("yes");
            }
            if (this.showLocationBar) {
                String str3 = hashMap.get(HIDE_NAVIGATION);
                String str4 = hashMap.get(HIDE_URL);
                if (str3 != null) {
                    this.hideNavigationButtons = str3.equals("yes");
                }
                if (str4 != null) {
                    this.hideUrlBar = str4.equals("yes");
                }
            }
            String str5 = hashMap.get(ZOOM);
            if (str5 != null) {
                this.showZoomControls = str5.equals("yes");
            }
            String str6 = hashMap.get(HIDDEN);
            if (str6 != null) {
                this.openWindowHidden = str6.equals("yes");
            }
            String str7 = hashMap.get(HARDWARE_BACK_BUTTON);
            if (str7 != null) {
                this.hadwareBackButton = str7.equals("yes");
            } else {
                this.hadwareBackButton = DEFAULT_HARDWARE_BACK.booleanValue();
            }
            String str8 = hashMap.get(MEDIA_PLAYBACK_REQUIRES_USER_ACTION);
            if (str8 != null) {
                this.mediaPlaybackRequiresUserGesture = str8.equals("yes");
            }
            String str9 = hashMap.get(CLEAR_ALL_CACHE);
            if (str9 != null) {
                this.clearAllCache = str9.equals("yes");
            } else {
                String str10 = hashMap.get(CLEAR_SESSION_CACHE);
                if (str10 != null) {
                    this.clearSessionCache = str10.equals("yes");
                }
            }
            String str11 = hashMap.get(SHOULD_PAUSE);
            if (str11 != null) {
                this.shouldPauseInAppBrowser = str11.equals("yes");
            }
            String str12 = hashMap.get(USER_WIDE_VIEW_PORT);
            if (str12 != null) {
                this.useWideViewPort = str12.equals("yes");
            }
            String str13 = hashMap.get(CLOSE_BUTTON_CAPTION);
            if (str13 != null) {
                this.closeButtonCaption = str13;
            }
            String str14 = hashMap.get(CLOSE_BUTTON_COLOR);
            if (str14 != null) {
                this.closeButtonColor = str14;
            }
            String str15 = hashMap.get(LEFT_TO_RIGHT);
            if (str15 != null) {
                this.leftToRight = str15.equals("yes");
            }
            String str16 = hashMap.get(TOOLBAR_COLOR);
            if (str16 != null) {
                this.toolbarColor = Color.parseColor(str16);
            }
            String str17 = hashMap.get(NAVIGATION_COLOR);
            if (str17 != null) {
                this.navigationButtonColor = str17;
            }
            String str18 = hashMap.get(FOOTER);
            if (str18 != null) {
                this.showFooter = str18.equals("yes");
            }
            String str19 = hashMap.get(FOOTER_COLOR);
            if (str19 != null) {
                this.footerColor = str19;
            }
            if (hashMap.get(BEFORELOAD) != null) {
                this.beforeload = hashMap.get(BEFORELOAD);
            }
        }
        final CordovaWebView cordovaWebView = this.webView;
        this.f0cordova.getActivity().runOnUiThread(new Runnable() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7
            private int dpToPixels(int i) {
                return (int) TypedValue.applyDimension(1, i, InAppBrowser.this.f0cordova.getActivity().getResources().getDisplayMetrics());
            }

            /* JADX WARN: Multi-variable type inference failed */
            private View createCloseButton(int i) {
                ImageButton imageButton;
                Resources resources = InAppBrowser.this.f0cordova.getActivity().getResources();
                if (InAppBrowser.this.closeButtonCaption != "") {
                    TextView textView = new TextView(InAppBrowser.this.f0cordova.getActivity());
                    textView.setText(InAppBrowser.this.closeButtonCaption);
                    textView.setTextSize(20.0f);
                    if (InAppBrowser.this.closeButtonColor != "") {
                        textView.setTextColor(Color.parseColor(InAppBrowser.this.closeButtonColor));
                    }
                    textView.setGravity(16);
                    textView.setPadding(dpToPixels(10), 0, dpToPixels(10), 0);
                    imageButton = textView;
                } else {
                    ImageButton imageButton2 = new ImageButton(InAppBrowser.this.f0cordova.getActivity());
                    Drawable drawable = resources.getDrawable(resources.getIdentifier("ic_action_remove", "drawable", InAppBrowser.this.f0cordova.getActivity().getPackageName()));
                    if (InAppBrowser.this.closeButtonColor != "") {
                        imageButton2.setColorFilter(Color.parseColor(InAppBrowser.this.closeButtonColor));
                    }
                    imageButton2.setImageDrawable(drawable);
                    imageButton2.setScaleType(ImageView.ScaleType.FIT_CENTER);
                    if (Build.VERSION.SDK_INT >= 16) {
                        imageButton2.getAdjustViewBounds();
                    }
                    imageButton = imageButton2;
                }
                RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(-2, -1);
                if (InAppBrowser.this.leftToRight) {
                    layoutParams.addRule(9);
                } else {
                    layoutParams.addRule(11);
                }
                imageButton.setLayoutParams(layoutParams);
                if (Build.VERSION.SDK_INT >= 16) {
                    imageButton.setBackground(null);
                } else {
                    imageButton.setBackgroundDrawable(null);
                }
                imageButton.setContentDescription("Close Button");
                imageButton.setId(Integer.valueOf(i).intValue());
                imageButton.setOnClickListener(new View.OnClickListener() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.1
                    @Override // android.view.View.OnClickListener
                    public void onClick(View view) {
                        InAppBrowser.this.closeDialog();
                    }
                });
                return imageButton;
            }

            @Override // java.lang.Runnable
            @SuppressLint({"NewApi"})
            public void run() {
                if (InAppBrowser.this.dialog != null) {
                    InAppBrowser.this.dialog.dismiss();
                }
                InAppBrowser inAppBrowser = InAppBrowser.this;
                inAppBrowser.dialog = new InAppBrowserDialog(inAppBrowser.f0cordova.getActivity(), 16973830);
                InAppBrowser.this.dialog.getWindow().getAttributes().windowAnimations = 16973826;
                InAppBrowser.this.dialog.requestWindowFeature(1);
                InAppBrowser.this.dialog.getWindow().setFlags(1024, 1024);
                InAppBrowser.this.dialog.setCancelable(true);
                InAppBrowser.this.dialog.setInAppBroswer(InAppBrowser.this.getInAppBrowser());
                LinearLayout linearLayout = new LinearLayout(InAppBrowser.this.f0cordova.getActivity());
                linearLayout.setOrientation(1);
                RelativeLayout relativeLayout = new RelativeLayout(InAppBrowser.this.f0cordova.getActivity());
                relativeLayout.setBackgroundColor(InAppBrowser.this.toolbarColor);
                relativeLayout.setLayoutParams(new RelativeLayout.LayoutParams(-1, dpToPixels(44)));
                relativeLayout.setPadding(dpToPixels(2), dpToPixels(2), dpToPixels(2), dpToPixels(2));
                if (InAppBrowser.this.leftToRight) {
                    relativeLayout.setHorizontalGravity(3);
                } else {
                    relativeLayout.setHorizontalGravity(5);
                }
                relativeLayout.setVerticalGravity(48);
                RelativeLayout relativeLayout2 = new RelativeLayout(InAppBrowser.this.f0cordova.getActivity());
                RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(-2, -2);
                if (InAppBrowser.this.leftToRight) {
                    layoutParams.addRule(11);
                } else {
                    layoutParams.addRule(9);
                }
                relativeLayout2.setLayoutParams(layoutParams);
                relativeLayout2.setHorizontalGravity(3);
                relativeLayout2.setVerticalGravity(16);
                relativeLayout2.setId((InAppBrowser.this.leftToRight ? 5 : 1).intValue());
                ImageButton imageButton = new ImageButton(InAppBrowser.this.f0cordova.getActivity());
                RelativeLayout.LayoutParams layoutParams2 = new RelativeLayout.LayoutParams(-2, -1);
                layoutParams2.addRule(5);
                imageButton.setLayoutParams(layoutParams2);
                imageButton.setContentDescription("Back Button");
                Integer num = 2;
                imageButton.setId(num.intValue());
                Resources resources = InAppBrowser.this.f0cordova.getActivity().getResources();
                Drawable drawable = resources.getDrawable(resources.getIdentifier("ic_action_previous_item", "drawable", InAppBrowser.this.f0cordova.getActivity().getPackageName()));
                if (InAppBrowser.this.navigationButtonColor != "") {
                    imageButton.setColorFilter(Color.parseColor(InAppBrowser.this.navigationButtonColor));
                }
                if (Build.VERSION.SDK_INT >= 16) {
                    imageButton.setBackground(null);
                } else {
                    imageButton.setBackgroundDrawable(null);
                }
                imageButton.setImageDrawable(drawable);
                imageButton.setScaleType(ImageView.ScaleType.FIT_CENTER);
                imageButton.setPadding(0, dpToPixels(10), 0, dpToPixels(10));
                if (Build.VERSION.SDK_INT >= 16) {
                    imageButton.getAdjustViewBounds();
                }
                imageButton.setOnClickListener(new View.OnClickListener() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.2
                    @Override // android.view.View.OnClickListener
                    public void onClick(View view) {
                        InAppBrowser.this.goBack();
                    }
                });
                ImageButton imageButton2 = new ImageButton(InAppBrowser.this.f0cordova.getActivity());
                RelativeLayout.LayoutParams layoutParams3 = new RelativeLayout.LayoutParams(-2, -1);
                layoutParams3.addRule(1, 2);
                imageButton2.setLayoutParams(layoutParams3);
                imageButton2.setContentDescription("Forward Button");
                Integer num2 = 3;
                imageButton2.setId(num2.intValue());
                Drawable drawable2 = resources.getDrawable(resources.getIdentifier("ic_action_next_item", "drawable", InAppBrowser.this.f0cordova.getActivity().getPackageName()));
                if (InAppBrowser.this.navigationButtonColor != "") {
                    imageButton2.setColorFilter(Color.parseColor(InAppBrowser.this.navigationButtonColor));
                }
                if (Build.VERSION.SDK_INT >= 16) {
                    imageButton2.setBackground(null);
                } else {
                    imageButton2.setBackgroundDrawable(null);
                }
                imageButton2.setImageDrawable(drawable2);
                imageButton2.setScaleType(ImageView.ScaleType.FIT_CENTER);
                imageButton2.setPadding(0, dpToPixels(10), 0, dpToPixels(10));
                if (Build.VERSION.SDK_INT >= 16) {
                    imageButton2.getAdjustViewBounds();
                }
                imageButton2.setOnClickListener(new View.OnClickListener() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.3
                    @Override // android.view.View.OnClickListener
                    public void onClick(View view) {
                        InAppBrowser.this.goForward();
                    }
                });
                InAppBrowser inAppBrowser2 = InAppBrowser.this;
                inAppBrowser2.edittext = new EditText(inAppBrowser2.f0cordova.getActivity());
                RelativeLayout.LayoutParams layoutParams4 = new RelativeLayout.LayoutParams(-1, -1);
                layoutParams4.addRule(1, 1);
                int i = 5;
                layoutParams4.addRule(0, 5);
                InAppBrowser.this.edittext.setLayoutParams(layoutParams4);
                Integer num3 = 4;
                InAppBrowser.this.edittext.setId(num3.intValue());
                InAppBrowser.this.edittext.setSingleLine(true);
                InAppBrowser.this.edittext.setText(str);
                InAppBrowser.this.edittext.setInputType(16);
                InAppBrowser.this.edittext.setImeOptions(2);
                InAppBrowser.this.edittext.setInputType(0);
                InAppBrowser.this.edittext.setOnKeyListener(new View.OnKeyListener() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.4
                    @Override // android.view.View.OnKeyListener
                    public boolean onKey(View view, int i2, KeyEvent keyEvent) {
                        if (keyEvent.getAction() == 0 && i2 == 66) {
                            InAppBrowser.this.navigate(InAppBrowser.this.edittext.getText().toString());
                            return true;
                        }
                        return false;
                    }
                });
                if (InAppBrowser.this.leftToRight) {
                    i = 1;
                }
                relativeLayout.addView(createCloseButton(i));
                RelativeLayout relativeLayout3 = new RelativeLayout(InAppBrowser.this.f0cordova.getActivity());
                relativeLayout3.setBackgroundColor(InAppBrowser.this.footerColor != "" ? Color.parseColor(InAppBrowser.this.footerColor) : -3355444);
                RelativeLayout.LayoutParams layoutParams5 = new RelativeLayout.LayoutParams(-1, dpToPixels(44));
                layoutParams5.addRule(12, -1);
                relativeLayout3.setLayoutParams(layoutParams5);
                if (InAppBrowser.this.closeButtonCaption != "") {
                    relativeLayout3.setPadding(dpToPixels(8), dpToPixels(8), dpToPixels(8), dpToPixels(8));
                }
                relativeLayout3.setHorizontalGravity(3);
                relativeLayout3.setVerticalGravity(80);
                relativeLayout3.addView(createCloseButton(7));
                InAppBrowser inAppBrowser3 = InAppBrowser.this;
                inAppBrowser3.inAppWebView = new WebView(inAppBrowser3.f0cordova.getActivity());
                InAppBrowser.this.inAppWebView.setLayoutParams(new LinearLayout.LayoutParams(-1, -1));
                Integer num4 = 6;
                InAppBrowser.this.inAppWebView.setId(num4.intValue());
                InAppBrowser.this.inAppWebView.setWebChromeClient(new InAppChromeClient(cordovaWebView) { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.5
                    @Override // android.webkit.WebChromeClient
                    public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> valueCallback, WebChromeClient.FileChooserParams fileChooserParams) {
                        LOG.d(InAppBrowser.LOG_TAG, "File Chooser 5.0+");
                        if (InAppBrowser.this.mUploadCallbackLollipop != null) {
                            InAppBrowser.this.mUploadCallbackLollipop.onReceiveValue(null);
                        }
                        InAppBrowser.this.mUploadCallbackLollipop = valueCallback;
                        Intent intent = new Intent("android.intent.action.GET_CONTENT");
                        intent.addCategory("android.intent.category.OPENABLE");
                        intent.setType("*/*");
                        InAppBrowser.this.f0cordova.startActivityForResult(InAppBrowser.this, Intent.createChooser(intent, "Select File"), 2);
                        return true;
                    }

                    public void openFileChooser(ValueCallback<Uri> valueCallback, String str20, String str21) {
                        LOG.d(InAppBrowser.LOG_TAG, "File Chooser 4.1+");
                        openFileChooser(valueCallback, str20);
                    }

                    public void openFileChooser(ValueCallback<Uri> valueCallback, String str20) {
                        LOG.d(InAppBrowser.LOG_TAG, "File Chooser 3.0+");
                        InAppBrowser.this.mUploadCallback = valueCallback;
                        Intent intent = new Intent("android.intent.action.GET_CONTENT");
                        intent.addCategory("android.intent.category.OPENABLE");
                        InAppBrowser.this.f0cordova.startActivityForResult(InAppBrowser.this, Intent.createChooser(intent, "Select File"), 1);
                    }
                });
                InAppBrowser inAppBrowser4 = InAppBrowser.this;
                inAppBrowser4.currentClient = new InAppBrowserClient(cordovaWebView, inAppBrowser4.edittext, InAppBrowser.this.beforeload);
                InAppBrowser.this.inAppWebView.setWebViewClient(InAppBrowser.this.currentClient);
                WebSettings settings = InAppBrowser.this.inAppWebView.getSettings();
                settings.setJavaScriptEnabled(true);
                settings.setJavaScriptCanOpenWindowsAutomatically(true);
                settings.setBuiltInZoomControls(InAppBrowser.this.showZoomControls);
                settings.setPluginState(WebSettings.PluginState.ON);
                if (Build.VERSION.SDK_INT >= 17) {
                    settings.setMediaPlaybackRequiresUserGesture(InAppBrowser.this.mediaPlaybackRequiresUserGesture);
                    InAppBrowser.this.inAppWebView.addJavascriptInterface(new Object() { // from class: org.apache.cordova.inappbrowser.InAppBrowser.7.1JsObject
                        @JavascriptInterface
                        public void postMessage(String str20) {
                            try {
                                JSONObject jSONObject = new JSONObject();
                                jSONObject.put("type", InAppBrowser.MESSAGE_EVENT);
                                jSONObject.put("data", new JSONObject(str20));
                                InAppBrowser.this.sendUpdate(jSONObject, true);
                            } catch (JSONException unused) {
                                LOG.e(InAppBrowser.LOG_TAG, "data object passed to postMessage has caused a JSON error.");
                            }
                        }
                    }, "cordova_iab");
                }
                String string = InAppBrowser.this.preferences.getString("OverrideUserAgent", null);
                String string2 = InAppBrowser.this.preferences.getString("AppendUserAgent", null);
                if (string != null) {
                    settings.setUserAgentString(string);
                }
                if (string2 != null) {
                    settings.setUserAgentString(settings.getUserAgentString() + string2);
                }
                Bundle extras = InAppBrowser.this.f0cordova.getActivity().getIntent().getExtras();
                if (extras == null ? true : extras.getBoolean("InAppBrowserStorageEnabled", true)) {
                    settings.setDatabasePath(InAppBrowser.this.f0cordova.getActivity().getApplicationContext().getDir("inAppBrowserDB", 0).getPath());
                    settings.setDatabaseEnabled(true);
                }
                settings.setDomStorageEnabled(true);
                if (!InAppBrowser.this.clearAllCache) {
                    if (InAppBrowser.this.clearSessionCache) {
                        CookieManager.getInstance().removeSessionCookie();
                    }
                } else {
                    CookieManager.getInstance().removeAllCookie();
                }
                if (Build.VERSION.SDK_INT >= 21) {
                    CookieManager.getInstance().setAcceptThirdPartyCookies(InAppBrowser.this.inAppWebView, true);
                }
                InAppBrowser.this.inAppWebView.loadUrl(str);
                Integer num5 = 6;
                InAppBrowser.this.inAppWebView.setId(num5.intValue());
                InAppBrowser.this.inAppWebView.getSettings().setLoadWithOverviewMode(true);
                InAppBrowser.this.inAppWebView.getSettings().setUseWideViewPort(InAppBrowser.this.useWideViewPort);
                InAppBrowser.this.inAppWebView.requestFocus();
                InAppBrowser.this.inAppWebView.requestFocusFromTouch();
                relativeLayout2.addView(imageButton);
                relativeLayout2.addView(imageButton2);
                if (!InAppBrowser.this.hideNavigationButtons) {
                    relativeLayout.addView(relativeLayout2);
                }
                if (!InAppBrowser.this.hideUrlBar) {
                    relativeLayout.addView(InAppBrowser.this.edittext);
                }
                if (InAppBrowser.this.getShowLocationBar()) {
                    linearLayout.addView(relativeLayout);
                }
                RelativeLayout relativeLayout4 = new RelativeLayout(InAppBrowser.this.f0cordova.getActivity());
                relativeLayout4.addView(InAppBrowser.this.inAppWebView);
                linearLayout.addView(relativeLayout4);
                if (InAppBrowser.this.showFooter) {
                    relativeLayout4.addView(relativeLayout3);
                }
                WindowManager.LayoutParams layoutParams6 = new WindowManager.LayoutParams();
                layoutParams6.copyFrom(InAppBrowser.this.dialog.getWindow().getAttributes());
                layoutParams6.width = -1;
                layoutParams6.height = -1;
                InAppBrowser.this.dialog.setContentView(linearLayout);
                InAppBrowser.this.dialog.show();
                InAppBrowser.this.dialog.getWindow().setAttributes(layoutParams6);
                if (InAppBrowser.this.openWindowHidden) {
                    InAppBrowser.this.dialog.hide();
                }
            }
        });
        return "";
    }

    public void sendUpdate(JSONObject jSONObject, boolean z) {
        sendUpdate(jSONObject, z, PluginResult.Status.OK);
    }

    public void sendUpdate(JSONObject jSONObject, boolean z, PluginResult.Status status) {
        if (this.callbackContext != null) {
            PluginResult pluginResult = new PluginResult(status, jSONObject);
            pluginResult.setKeepCallback(z);
            this.callbackContext.sendPluginResult(pluginResult);
            if (z) {
                return;
            }
            this.callbackContext = null;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onActivityResult(int i, int i2, Intent intent) {
        ValueCallback<Uri> valueCallback;
        Uri uri;
        ValueCallback<Uri[]> valueCallback2;
        if (Build.VERSION.SDK_INT >= 21) {
            LOG.d(LOG_TAG, "onActivityResult (For Android >= 5.0)");
            if (i != 2 || (valueCallback2 = this.mUploadCallbackLollipop) == null) {
                super.onActivityResult(i, i2, intent);
                return;
            }
            valueCallback2.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(i2, intent));
            this.mUploadCallbackLollipop = null;
            return;
        }
        LOG.d(LOG_TAG, "onActivityResult (For Android < 5.0)");
        if (i != 1 || (valueCallback = this.mUploadCallback) == null) {
            super.onActivityResult(i, i2, intent);
        } else if (valueCallback == null) {
        } else {
            if (intent != null) {
                this.f0cordova.getActivity();
                if (i2 == -1) {
                    uri = intent.getData();
                    this.mUploadCallback.onReceiveValue(uri);
                    this.mUploadCallback = null;
                }
            }
            uri = null;
            this.mUploadCallback.onReceiveValue(uri);
            this.mUploadCallback = null;
        }
    }

    /* loaded from: classes.dex */
    public class InAppBrowserClient extends WebViewClient {
        String beforeload;
        EditText edittext;
        boolean waitForBeforeload;
        CordovaWebView webView;

        public WebResourceResponse shouldInterceptRequest(String str, WebResourceResponse webResourceResponse, String str2) {
            return webResourceResponse;
        }

        public InAppBrowserClient(CordovaWebView cordovaWebView, EditText editText, String str) {
            InAppBrowser.this = r1;
            this.webView = cordovaWebView;
            this.edittext = editText;
            this.beforeload = str;
            this.waitForBeforeload = str != null;
        }

        @Override // android.webkit.WebViewClient
        public boolean shouldOverrideUrlLoading(WebView webView, String str) {
            return shouldOverrideUrlLoading(str, (String) null);
        }

        @Override // android.webkit.WebViewClient
        @TargetApi(MotionEventCompat.AXIS_DISTANCE)
        public boolean shouldOverrideUrlLoading(WebView webView, WebResourceRequest webResourceRequest) {
            return shouldOverrideUrlLoading(webResourceRequest.getUrl().toString(), webResourceRequest.getMethod());
        }

        public boolean shouldOverrideUrlLoading(String str, String str2) {
            String str3;
            boolean z;
            String str4;
            String string;
            boolean z2 = false;
            z2 = false;
            z2 = false;
            z2 = false;
            z2 = false;
            z2 = false;
            z2 = false;
            if (this.beforeload.equals("yes") && str2 == null) {
                str3 = null;
                z = true;
            } else if (this.beforeload.equals("yes") && !str2.equals(HttpRequest.METHOD_POST)) {
                str3 = null;
                z = true;
            } else if (this.beforeload.equals("get") && (str2 == null || str2.equals(HttpRequest.METHOD_GET))) {
                str3 = null;
                z = true;
            } else if (!this.beforeload.equals("post") || (str2 != null && !str2.equals(HttpRequest.METHOD_POST))) {
                str3 = null;
                z = false;
            } else {
                str3 = "beforeload doesn't yet support POST requests";
                z = false;
            }
            if (!z || !this.waitForBeforeload || !sendBeforeLoad(str, str2)) {
                if (str3 != null) {
                    try {
                        LOG.e(InAppBrowser.LOG_TAG, str3);
                        JSONObject jSONObject = new JSONObject();
                        jSONObject.put("type", InAppBrowser.LOAD_ERROR_EVENT);
                        jSONObject.put("url", str);
                        jSONObject.put("code", -1);
                        jSONObject.put(InAppBrowser.MESSAGE_EVENT, str3);
                        InAppBrowser.this.sendUpdate(jSONObject, true, PluginResult.Status.ERROR);
                    } catch (Exception e) {
                        LOG.e(InAppBrowser.LOG_TAG, "Error sending loaderror for " + str + ": " + e.toString());
                    }
                }
                if (str.startsWith("tel:")) {
                    try {
                        Intent intent = new Intent("android.intent.action.DIAL");
                        intent.setData(Uri.parse(str));
                        InAppBrowser.this.f0cordova.getActivity().startActivity(intent);
                        z2 = true;
                    } catch (ActivityNotFoundException e2) {
                        LOG.e(InAppBrowser.LOG_TAG, "Error dialing " + str + ": " + e2.toString());
                    }
                } else if (str.startsWith("geo:") || str.startsWith("mailto:") || str.startsWith("market:") || str.startsWith("intent:")) {
                    try {
                        Intent intent2 = new Intent("android.intent.action.VIEW");
                        intent2.setData(Uri.parse(str));
                        InAppBrowser.this.f0cordova.getActivity().startActivity(intent2);
                        z2 = true;
                    } catch (ActivityNotFoundException e3) {
                        LOG.e(InAppBrowser.LOG_TAG, "Error with " + str + ": " + e3.toString());
                    }
                } else if (str.startsWith("sms:")) {
                    try {
                        Intent intent3 = new Intent("android.intent.action.VIEW");
                        int indexOf = str.indexOf(63);
                        if (indexOf == -1) {
                            str4 = str.substring(4);
                        } else {
                            str4 = str.substring(4, indexOf);
                            String query = Uri.parse(str).getQuery();
                            if (query != null && query.startsWith("body=")) {
                                intent3.putExtra("sms_body", query.substring(5));
                            }
                        }
                        intent3.setData(Uri.parse("sms:" + str4));
                        intent3.putExtra("address", str4);
                        intent3.setType("vnd.android-dir/mms-sms");
                        InAppBrowser.this.f0cordova.getActivity().startActivity(intent3);
                        z2 = true;
                    } catch (ActivityNotFoundException e4) {
                        LOG.e(InAppBrowser.LOG_TAG, "Error sending sms " + str + ":" + e4.toString());
                    }
                } else if (!str.startsWith("http:") && !str.startsWith("https:") && str.matches("^[A-Za-z0-9+.-]*://.*?$")) {
                    if (InAppBrowser.this.allowedSchemes == null && (string = InAppBrowser.this.preferences.getString("AllowedSchemes", null)) != null) {
                        InAppBrowser.this.allowedSchemes = string.split(",");
                    }
                    if (InAppBrowser.this.allowedSchemes != null) {
                        boolean z3 = false;
                        for (String str5 : InAppBrowser.this.allowedSchemes) {
                            if (str.startsWith(str5)) {
                                try {
                                    JSONObject jSONObject2 = new JSONObject();
                                    jSONObject2.put("type", "customscheme");
                                    jSONObject2.put("url", str);
                                    InAppBrowser.this.sendUpdate(jSONObject2, true);
                                    z3 = true;
                                } catch (JSONException unused) {
                                    LOG.e(InAppBrowser.LOG_TAG, "Custom Scheme URI passed in has caused a JSON error.");
                                }
                            }
                        }
                        z2 = z3;
                    }
                }
                if (z) {
                    this.waitForBeforeload = true;
                }
                return z2;
            }
            return true;
        }

        private boolean sendBeforeLoad(String str, String str2) {
            try {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put("type", InAppBrowser.BEFORELOAD);
                jSONObject.put("url", str);
                if (str2 != null) {
                    jSONObject.put("method", str2);
                }
                InAppBrowser.this.sendUpdate(jSONObject, true);
                return true;
            } catch (JSONException unused) {
                LOG.e(InAppBrowser.LOG_TAG, "URI passed in has caused a JSON error.");
                return false;
            }
        }

        @Override // android.webkit.WebViewClient
        public WebResourceResponse shouldInterceptRequest(WebView webView, String str) {
            return shouldInterceptRequest(str, super.shouldInterceptRequest(webView, str), null);
        }

        @Override // android.webkit.WebViewClient
        @TargetApi(MotionEventCompat.AXIS_WHEEL)
        public WebResourceResponse shouldInterceptRequest(WebView webView, WebResourceRequest webResourceRequest) {
            return shouldInterceptRequest(webResourceRequest.getUrl().toString(), super.shouldInterceptRequest(webView, webResourceRequest), webResourceRequest.getMethod());
        }

        @Override // android.webkit.WebViewClient
        public void onPageStarted(WebView webView, String str, Bitmap bitmap) {
            super.onPageStarted(webView, str, bitmap);
            if (!str.startsWith("http:") && !str.startsWith("https:") && !str.startsWith("file:")) {
                LOG.e(InAppBrowser.LOG_TAG, "Possible Uncaught/Unknown URI");
                str = "http://" + str;
            }
            if (!str.equals(this.edittext.getText().toString())) {
                this.edittext.setText(str);
            }
            try {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put("type", InAppBrowser.LOAD_START_EVENT);
                jSONObject.put("url", str);
                InAppBrowser.this.sendUpdate(jSONObject, true);
            } catch (JSONException unused) {
                LOG.e(InAppBrowser.LOG_TAG, "URI passed in has caused a JSON error.");
            }
        }

        @Override // android.webkit.WebViewClient
        public void onPageFinished(WebView webView, String str) {
            super.onPageFinished(webView, str);
            if (Build.VERSION.SDK_INT >= 17) {
                InAppBrowser.this.injectDeferredObject("window.webkit={messageHandlers:{cordova_iab:cordova_iab}}", null);
            }
            if (Build.VERSION.SDK_INT >= 21) {
                CookieManager.getInstance().flush();
            } else {
                CookieSyncManager.getInstance().sync();
            }
            webView.clearFocus();
            webView.requestFocus();
            try {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put("type", InAppBrowser.LOAD_STOP_EVENT);
                jSONObject.put("url", str);
                InAppBrowser.this.sendUpdate(jSONObject, true);
            } catch (JSONException unused) {
                LOG.d(InAppBrowser.LOG_TAG, "Should never happen");
            }
        }

        @Override // android.webkit.WebViewClient
        public void onReceivedError(WebView webView, int i, String str, String str2) {
            super.onReceivedError(webView, i, str, str2);
            try {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put("type", InAppBrowser.LOAD_ERROR_EVENT);
                jSONObject.put("url", str2);
                jSONObject.put("code", i);
                jSONObject.put(InAppBrowser.MESSAGE_EVENT, str);
                InAppBrowser.this.sendUpdate(jSONObject, true, PluginResult.Status.ERROR);
            } catch (JSONException unused) {
                LOG.d(InAppBrowser.LOG_TAG, "Should never happen");
            }
        }

        /* JADX WARN: Removed duplicated region for block: B:18:0x006a  */
        /* JADX WARN: Removed duplicated region for block: B:23:0x003d A[EXC_TOP_SPLITTER, SYNTHETIC] */
        @Override // android.webkit.WebViewClient
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public void onReceivedHttpAuthRequest(android.webkit.WebView r5, android.webkit.HttpAuthHandler r6, java.lang.String r7, java.lang.String r8) {
            /*
                r4 = this;
                org.apache.cordova.CordovaWebView r0 = r4.webView     // Catch: java.lang.reflect.InvocationTargetException -> L1a java.lang.IllegalAccessException -> L25 java.lang.NoSuchMethodException -> L30
                java.lang.Class r0 = r0.getClass()     // Catch: java.lang.reflect.InvocationTargetException -> L1a java.lang.IllegalAccessException -> L25 java.lang.NoSuchMethodException -> L30
                java.lang.String r1 = "getPluginManager"
                r2 = 0
                java.lang.Class[] r3 = new java.lang.Class[r2]     // Catch: java.lang.reflect.InvocationTargetException -> L1a java.lang.IllegalAccessException -> L25 java.lang.NoSuchMethodException -> L30
                java.lang.reflect.Method r0 = r0.getMethod(r1, r3)     // Catch: java.lang.reflect.InvocationTargetException -> L1a java.lang.IllegalAccessException -> L25 java.lang.NoSuchMethodException -> L30
                org.apache.cordova.CordovaWebView r1 = r4.webView     // Catch: java.lang.reflect.InvocationTargetException -> L1a java.lang.IllegalAccessException -> L25 java.lang.NoSuchMethodException -> L30
                java.lang.Object[] r2 = new java.lang.Object[r2]     // Catch: java.lang.reflect.InvocationTargetException -> L1a java.lang.IllegalAccessException -> L25 java.lang.NoSuchMethodException -> L30
                java.lang.Object r0 = r0.invoke(r1, r2)     // Catch: java.lang.reflect.InvocationTargetException -> L1a java.lang.IllegalAccessException -> L25 java.lang.NoSuchMethodException -> L30
                org.apache.cordova.PluginManager r0 = (org.apache.cordova.PluginManager) r0     // Catch: java.lang.reflect.InvocationTargetException -> L1a java.lang.IllegalAccessException -> L25 java.lang.NoSuchMethodException -> L30
                goto L3b
            L1a:
                r0 = move-exception
                java.lang.String r1 = "InAppBrowser"
                java.lang.String r0 = r0.getLocalizedMessage()
                org.apache.cordova.LOG.d(r1, r0)
                goto L3a
            L25:
                r0 = move-exception
                java.lang.String r1 = "InAppBrowser"
                java.lang.String r0 = r0.getLocalizedMessage()
                org.apache.cordova.LOG.d(r1, r0)
                goto L3a
            L30:
                r0 = move-exception
                java.lang.String r1 = "InAppBrowser"
                java.lang.String r0 = r0.getLocalizedMessage()
                org.apache.cordova.LOG.d(r1, r0)
            L3a:
                r0 = 0
            L3b:
                if (r0 != 0) goto L68
                org.apache.cordova.CordovaWebView r1 = r4.webView     // Catch: java.lang.IllegalAccessException -> L53 java.lang.NoSuchFieldException -> L5e
                java.lang.Class r1 = r1.getClass()     // Catch: java.lang.IllegalAccessException -> L53 java.lang.NoSuchFieldException -> L5e
                java.lang.String r2 = "pluginManager"
                java.lang.reflect.Field r1 = r1.getField(r2)     // Catch: java.lang.IllegalAccessException -> L53 java.lang.NoSuchFieldException -> L5e
                org.apache.cordova.CordovaWebView r2 = r4.webView     // Catch: java.lang.IllegalAccessException -> L53 java.lang.NoSuchFieldException -> L5e
                java.lang.Object r1 = r1.get(r2)     // Catch: java.lang.IllegalAccessException -> L53 java.lang.NoSuchFieldException -> L5e
                org.apache.cordova.PluginManager r1 = (org.apache.cordova.PluginManager) r1     // Catch: java.lang.IllegalAccessException -> L53 java.lang.NoSuchFieldException -> L5e
                r0 = r1
                goto L68
            L53:
                r1 = move-exception
                java.lang.String r2 = "InAppBrowser"
                java.lang.String r1 = r1.getLocalizedMessage()
                org.apache.cordova.LOG.d(r2, r1)
                goto L68
            L5e:
                r1 = move-exception
                java.lang.String r2 = "InAppBrowser"
                java.lang.String r1 = r1.getLocalizedMessage()
                org.apache.cordova.LOG.d(r2, r1)
            L68:
                if (r0 == 0) goto L78
                org.apache.cordova.CordovaWebView r1 = r4.webView
                org.apache.cordova.CordovaHttpAuthHandler r2 = new org.apache.cordova.CordovaHttpAuthHandler
                r2.<init>(r6)
                boolean r0 = r0.onReceivedHttpAuthRequest(r1, r2, r7, r8)
                if (r0 == 0) goto L78
                return
            L78:
                super.onReceivedHttpAuthRequest(r5, r6, r7, r8)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: org.apache.cordova.inappbrowser.InAppBrowser.InAppBrowserClient.onReceivedHttpAuthRequest(android.webkit.WebView, android.webkit.HttpAuthHandler, java.lang.String, java.lang.String):void");
        }
    }
}
