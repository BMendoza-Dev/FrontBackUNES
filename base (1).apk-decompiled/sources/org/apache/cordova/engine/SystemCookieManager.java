package org.apache.cordova.engine;

import android.annotation.TargetApi;
import android.os.Build;
import android.support.v4.view.MotionEventCompat;
import android.webkit.CookieManager;
import android.webkit.WebView;
import org.apache.cordova.ICordovaCookieManager;
/* loaded from: classes.dex */
class SystemCookieManager implements ICordovaCookieManager {
    private final CookieManager cookieManager = CookieManager.getInstance();
    protected final WebView webView;

    @TargetApi(MotionEventCompat.AXIS_WHEEL)
    public SystemCookieManager(WebView webView) {
        this.webView = webView;
        CookieManager cookieManager = this.cookieManager;
        CookieManager.setAcceptFileSchemeCookies(true);
        if (Build.VERSION.SDK_INT >= 21) {
            this.cookieManager.setAcceptThirdPartyCookies(this.webView, true);
        }
    }

    @Override // org.apache.cordova.ICordovaCookieManager
    public void setCookiesEnabled(boolean z) {
        this.cookieManager.setAcceptCookie(z);
    }

    @Override // org.apache.cordova.ICordovaCookieManager
    public void setCookie(String str, String str2) {
        this.cookieManager.setCookie(str, str2);
    }

    @Override // org.apache.cordova.ICordovaCookieManager
    public String getCookie(String str) {
        return this.cookieManager.getCookie(str);
    }

    @Override // org.apache.cordova.ICordovaCookieManager
    public void clearCookies() {
        if (Build.VERSION.SDK_INT >= 21) {
            this.cookieManager.removeAllCookies(null);
        } else {
            this.cookieManager.removeAllCookie();
        }
    }

    @Override // org.apache.cordova.ICordovaCookieManager
    public void flush() {
        if (Build.VERSION.SDK_INT >= 21) {
            this.cookieManager.flush();
        }
    }
}
