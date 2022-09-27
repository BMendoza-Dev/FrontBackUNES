package org.apache.cordova;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.view.KeyEvent;
import android.widget.EditText;
/* loaded from: classes.dex */
public class CordovaDialogsHelper {
    private final Context context;
    private AlertDialog lastHandledDialog;

    /* loaded from: classes.dex */
    public interface Result {
        void gotResult(boolean z, String str);
    }

    public CordovaDialogsHelper(Context context) {
        this.context = context;
    }

    public void showAlert(String str, final Result result) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this.context);
        builder.setMessage(str);
        builder.setTitle("Alert");
        builder.setCancelable(true);
        builder.setPositiveButton(17039370, new DialogInterface.OnClickListener() { // from class: org.apache.cordova.CordovaDialogsHelper.1
            @Override // android.content.DialogInterface.OnClickListener
            public void onClick(DialogInterface dialogInterface, int i) {
                result.gotResult(true, null);
            }
        });
        builder.setOnCancelListener(new DialogInterface.OnCancelListener() { // from class: org.apache.cordova.CordovaDialogsHelper.2
            @Override // android.content.DialogInterface.OnCancelListener
            public void onCancel(DialogInterface dialogInterface) {
                result.gotResult(false, null);
            }
        });
        builder.setOnKeyListener(new DialogInterface.OnKeyListener() { // from class: org.apache.cordova.CordovaDialogsHelper.3
            @Override // android.content.DialogInterface.OnKeyListener
            public boolean onKey(DialogInterface dialogInterface, int i, KeyEvent keyEvent) {
                if (i == 4) {
                    result.gotResult(true, null);
                    return false;
                }
                return true;
            }
        });
        this.lastHandledDialog = builder.show();
    }

    public void showConfirm(String str, final Result result) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this.context);
        builder.setMessage(str);
        builder.setTitle("Confirm");
        builder.setCancelable(true);
        builder.setPositiveButton(17039370, new DialogInterface.OnClickListener() { // from class: org.apache.cordova.CordovaDialogsHelper.4
            @Override // android.content.DialogInterface.OnClickListener
            public void onClick(DialogInterface dialogInterface, int i) {
                result.gotResult(true, null);
            }
        });
        builder.setNegativeButton(17039360, new DialogInterface.OnClickListener() { // from class: org.apache.cordova.CordovaDialogsHelper.5
            @Override // android.content.DialogInterface.OnClickListener
            public void onClick(DialogInterface dialogInterface, int i) {
                result.gotResult(false, null);
            }
        });
        builder.setOnCancelListener(new DialogInterface.OnCancelListener() { // from class: org.apache.cordova.CordovaDialogsHelper.6
            @Override // android.content.DialogInterface.OnCancelListener
            public void onCancel(DialogInterface dialogInterface) {
                result.gotResult(false, null);
            }
        });
        builder.setOnKeyListener(new DialogInterface.OnKeyListener() { // from class: org.apache.cordova.CordovaDialogsHelper.7
            @Override // android.content.DialogInterface.OnKeyListener
            public boolean onKey(DialogInterface dialogInterface, int i, KeyEvent keyEvent) {
                if (i == 4) {
                    result.gotResult(false, null);
                    return false;
                }
                return true;
            }
        });
        this.lastHandledDialog = builder.show();
    }

    public void showPrompt(String str, String str2, final Result result) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this.context);
        builder.setMessage(str);
        final EditText editText = new EditText(this.context);
        if (str2 != null) {
            editText.setText(str2);
        }
        builder.setView(editText);
        builder.setCancelable(false);
        builder.setPositiveButton(17039370, new DialogInterface.OnClickListener() { // from class: org.apache.cordova.CordovaDialogsHelper.8
            @Override // android.content.DialogInterface.OnClickListener
            public void onClick(DialogInterface dialogInterface, int i) {
                result.gotResult(true, editText.getText().toString());
            }
        });
        builder.setNegativeButton(17039360, new DialogInterface.OnClickListener() { // from class: org.apache.cordova.CordovaDialogsHelper.9
            @Override // android.content.DialogInterface.OnClickListener
            public void onClick(DialogInterface dialogInterface, int i) {
                result.gotResult(false, null);
            }
        });
        this.lastHandledDialog = builder.show();
    }

    public void destroyLastDialog() {
        AlertDialog alertDialog = this.lastHandledDialog;
        if (alertDialog != null) {
            alertDialog.cancel();
        }
    }
}
