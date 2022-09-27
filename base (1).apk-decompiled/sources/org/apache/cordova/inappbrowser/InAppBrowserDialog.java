package org.apache.cordova.inappbrowser;

import android.app.Dialog;
import android.content.Context;
/* loaded from: classes.dex */
public class InAppBrowserDialog extends Dialog {
    Context context;
    InAppBrowser inAppBrowser = null;

    public InAppBrowserDialog(Context context, int i) {
        super(context, i);
        this.context = context;
    }

    public void setInAppBroswer(InAppBrowser inAppBrowser) {
        this.inAppBrowser = inAppBrowser;
    }

    @Override // android.app.Dialog
    public void onBackPressed() {
        InAppBrowser inAppBrowser = this.inAppBrowser;
        if (inAppBrowser == null) {
            dismiss();
        } else if (inAppBrowser.hardwareBack() && this.inAppBrowser.canGoBack()) {
            this.inAppBrowser.goBack();
        } else {
            this.inAppBrowser.closeDialog();
        }
    }
}
