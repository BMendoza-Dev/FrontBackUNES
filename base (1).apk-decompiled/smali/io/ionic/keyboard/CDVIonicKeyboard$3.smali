.class Lio/ionic/keyboard/CDVIonicKeyboard$3;
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

    .line 65
    iput-object p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    iput-object p2, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 69
    new-instance v0, Landroid/util/DisplayMetrics;

    invoke-direct {v0}, Landroid/util/DisplayMetrics;-><init>()V

    .line 70
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getWindowManager()Landroid/view/WindowManager;

    move-result-object v1

    invoke-interface {v1}, Landroid/view/WindowManager;->getDefaultDisplay()Landroid/view/Display;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/view/Display;->getMetrics(Landroid/util/DisplayMetrics;)V

    .line 71
    iget v0, v0, Landroid/util/DisplayMetrics;->density:F

    .line 74
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    const v2, 0x1020002

    invoke-virtual {v1, v2}, Landroid/app/Activity;->findViewById(I)Landroid/view/View;

    move-result-object v1

    check-cast v1, Landroid/widget/FrameLayout;

    .line 75
    iget-object v2, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-virtual {v1}, Landroid/widget/FrameLayout;->getRootView()Landroid/view/View;

    move-result-object v3

    invoke-static {v2, v3}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$002(Lio/ionic/keyboard/CDVIonicKeyboard;Landroid/view/View;)Landroid/view/View;

    .line 76
    iget-object v2, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    new-instance v3, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;

    invoke-direct {v3, p0, v0}, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;-><init>(Lio/ionic/keyboard/CDVIonicKeyboard$3;F)V

    invoke-static {v2, v3}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$102(Lio/ionic/keyboard/CDVIonicKeyboard;Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

    .line 147
    iget-object v0, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    const/4 v2, 0x0

    invoke-virtual {v1, v2}, Landroid/widget/FrameLayout;->getChildAt(I)Landroid/view/View;

    move-result-object v1

    invoke-static {v0, v1}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$402(Lio/ionic/keyboard/CDVIonicKeyboard;Landroid/view/View;)Landroid/view/View;

    .line 148
    iget-object v0, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v0}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$000(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/View;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/View;->getViewTreeObserver()Landroid/view/ViewTreeObserver;

    move-result-object v0

    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v1}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$100(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/view/ViewTreeObserver;->addOnGlobalLayoutListener(Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)V

    .line 149
    iget-object v0, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v0}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$400(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/View;->getLayoutParams()Landroid/view/ViewGroup$LayoutParams;

    move-result-object v1

    check-cast v1, Landroid/widget/FrameLayout$LayoutParams;

    invoke-static {v0, v1}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$502(Lio/ionic/keyboard/CDVIonicKeyboard;Landroid/widget/FrameLayout$LayoutParams;)Landroid/widget/FrameLayout$LayoutParams;

    .line 150
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v0, v1}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    const/4 v1, 0x1

    .line 151
    invoke-virtual {v0, v1}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 152
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void
.end method
