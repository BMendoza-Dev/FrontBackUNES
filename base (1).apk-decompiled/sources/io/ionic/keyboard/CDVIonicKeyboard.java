package io.ionic.keyboard;

import android.graphics.Point;
import android.graphics.Rect;
import android.os.Build;
import android.util.DisplayMetrics;
import android.view.Display;
import android.view.View;
import android.view.ViewTreeObserver;
import android.view.inputmethod.InputMethodManager;
import android.widget.FrameLayout;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
/* loaded from: classes.dex */
public class CDVIonicKeyboard extends CordovaPlugin {
    private FrameLayout.LayoutParams frameLayoutParams;
    private ViewTreeObserver.OnGlobalLayoutListener list;
    private View mChildOfContent;
    private View rootView;
    private int usableHeightPrevious;

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        super.initialize(cordovaInterface, cordovaWebView);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, final CallbackContext callbackContext) throws JSONException {
        if ("hide".equals(str)) {
            this.f0cordova.getThreadPool().execute(new Runnable() { // from class: io.ionic.keyboard.CDVIonicKeyboard.1
                @Override // java.lang.Runnable
                public void run() {
                    InputMethodManager inputMethodManager = (InputMethodManager) CDVIonicKeyboard.this.f0cordova.getActivity().getSystemService("input_method");
                    View currentFocus = CDVIonicKeyboard.this.f0cordova.getActivity().getCurrentFocus();
                    if (currentFocus == null) {
                        callbackContext.error("No current focus");
                        return;
                    }
                    inputMethodManager.hideSoftInputFromWindow(currentFocus.getWindowToken(), 2);
                    callbackContext.success();
                }
            });
            return true;
        } else if ("show".equals(str)) {
            this.f0cordova.getThreadPool().execute(new Runnable() { // from class: io.ionic.keyboard.CDVIonicKeyboard.2
                @Override // java.lang.Runnable
                public void run() {
                    ((InputMethodManager) CDVIonicKeyboard.this.f0cordova.getActivity().getSystemService("input_method")).toggleSoftInput(0, 1);
                    callbackContext.success();
                }
            });
            return true;
        } else if (!"init".equals(str)) {
            return false;
        } else {
            this.f0cordova.getThreadPool().execute(new Runnable() { // from class: io.ionic.keyboard.CDVIonicKeyboard.3
                @Override // java.lang.Runnable
                public void run() {
                    DisplayMetrics displayMetrics = new DisplayMetrics();
                    CDVIonicKeyboard.this.f0cordova.getActivity().getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
                    final float f = displayMetrics.density;
                    FrameLayout frameLayout = (FrameLayout) CDVIonicKeyboard.this.f0cordova.getActivity().findViewById(16908290);
                    CDVIonicKeyboard.this.rootView = frameLayout.getRootView();
                    CDVIonicKeyboard.this.list = new ViewTreeObserver.OnGlobalLayoutListener() { // from class: io.ionic.keyboard.CDVIonicKeyboard.3.1
                        int previousHeightDiff = 0;

                        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
                        public void onGlobalLayout() {
                            if (CDVIonicKeyboard.this.preferences.getBoolean("resizeOnFullScreen", false)) {
                                possiblyResizeChildOfContent();
                            }
                            Rect rect = new Rect();
                            CDVIonicKeyboard.this.rootView.getWindowVisibleDisplayFrame(rect);
                            int height = CDVIonicKeyboard.this.rootView.getRootView().getHeight();
                            int i = rect.bottom;
                            if (Build.VERSION.SDK_INT >= 21) {
                                Display defaultDisplay = CDVIonicKeyboard.this.f0cordova.getActivity().getWindowManager().getDefaultDisplay();
                                Point point = new Point();
                                defaultDisplay.getSize(point);
                                height = point.y;
                            }
                            int i2 = (int) ((height - i) / f);
                            if (i2 > 100 && i2 != this.previousHeightDiff) {
                                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, "S" + Integer.toString(i2));
                                pluginResult.setKeepCallback(true);
                                callbackContext.sendPluginResult(pluginResult);
                            } else {
                                int i3 = this.previousHeightDiff;
                                if (i2 != i3 && i3 - i2 > 100) {
                                    PluginResult pluginResult2 = new PluginResult(PluginResult.Status.OK, "H");
                                    pluginResult2.setKeepCallback(true);
                                    callbackContext.sendPluginResult(pluginResult2);
                                }
                            }
                            this.previousHeightDiff = i2;
                        }

                        private void possiblyResizeChildOfContent() {
                            int computeUsableHeight = computeUsableHeight();
                            if (computeUsableHeight != CDVIonicKeyboard.this.usableHeightPrevious) {
                                int height = CDVIonicKeyboard.this.mChildOfContent.getRootView().getHeight();
                                int i = height - computeUsableHeight;
                                if (i > height / 4) {
                                    CDVIonicKeyboard.this.frameLayoutParams.height = height - i;
                                } else {
                                    CDVIonicKeyboard.this.frameLayoutParams.height = height;
                                }
                                CDVIonicKeyboard.this.mChildOfContent.requestLayout();
                                CDVIonicKeyboard.this.usableHeightPrevious = computeUsableHeight;
                            }
                        }

                        private int computeUsableHeight() {
                            Rect rect = new Rect();
                            CDVIonicKeyboard.this.mChildOfContent.getWindowVisibleDisplayFrame(rect);
                            return rect.bottom - rect.top;
                        }
                    };
                    CDVIonicKeyboard.this.mChildOfContent = frameLayout.getChildAt(0);
                    CDVIonicKeyboard.this.rootView.getViewTreeObserver().addOnGlobalLayoutListener(CDVIonicKeyboard.this.list);
                    CDVIonicKeyboard cDVIonicKeyboard = CDVIonicKeyboard.this;
                    cDVIonicKeyboard.frameLayoutParams = (FrameLayout.LayoutParams) cDVIonicKeyboard.mChildOfContent.getLayoutParams();
                    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
                    pluginResult.setKeepCallback(true);
                    callbackContext.sendPluginResult(pluginResult);
                }
            });
            return true;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onDestroy() {
        this.rootView.getViewTreeObserver().removeOnGlobalLayoutListener(this.list);
    }
}
