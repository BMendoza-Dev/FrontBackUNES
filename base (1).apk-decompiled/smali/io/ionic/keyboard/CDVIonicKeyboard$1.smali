.class Lio/ionic/keyboard/CDVIonicKeyboard$1;
.super Ljava/lang/Object;
.source "CDVIonicKeyboard.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lio/ionic/keyboard/CDVIonicKeyboard;->execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

.field final synthetic val$callbackContext:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lio/ionic/keyboard/CDVIonicKeyboard;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 39
    iput-object p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$1;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    iput-object p2, p0, Lio/ionic/keyboard/CDVIonicKeyboard$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 42
    iget-object v0, p0, Lio/ionic/keyboard/CDVIonicKeyboard$1;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    iget-object v0, v0, Lio/ionic/keyboard/CDVIonicKeyboard;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    const-string v1, "input_method"

    invoke-virtual {v0, v1}, Landroid/app/Activity;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/view/inputmethod/InputMethodManager;

    .line 43
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$1;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getCurrentFocus()Landroid/view/View;

    move-result-object v1

    if-nez v1, :cond_0

    .line 46
    iget-object v0, p0, Lio/ionic/keyboard/CDVIonicKeyboard$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    const-string v1, "No current focus"

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    goto :goto_0

    .line 48
    :cond_0
    invoke-virtual {v1}, Landroid/view/View;->getWindowToken()Landroid/os/IBinder;

    move-result-object v1

    const/4 v2, 0x2

    invoke-virtual {v0, v1, v2}, Landroid/view/inputmethod/InputMethodManager;->hideSoftInputFromWindow(Landroid/os/IBinder;I)Z

    .line 49
    iget-object v0, p0, Lio/ionic/keyboard/CDVIonicKeyboard$1;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V

    :goto_0
    return-void
.end method
