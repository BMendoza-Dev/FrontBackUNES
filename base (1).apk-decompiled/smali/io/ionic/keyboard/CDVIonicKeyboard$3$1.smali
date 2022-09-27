.class Lio/ionic/keyboard/CDVIonicKeyboard$3$1;
.super Ljava/lang/Object;
.source "CDVIonicKeyboard.java"

# interfaces
.implements Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lio/ionic/keyboard/CDVIonicKeyboard$3;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field previousHeightDiff:I

.field final synthetic this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

.field final synthetic val$density:F


# direct methods
.method constructor <init>(Lio/ionic/keyboard/CDVIonicKeyboard$3;F)V
    .locals 0

    .line 76
    iput-object p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iput p2, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->val$density:F

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 p1, 0x0

    .line 77
    iput p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->previousHeightDiff:I

    return-void
.end method

.method private computeUsableHeight()I
    .locals 2

    .line 141
    new-instance v0, Landroid/graphics/Rect;

    invoke-direct {v0}, Landroid/graphics/Rect;-><init>()V

    .line 142
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v1}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$400(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/view/View;->getWindowVisibleDisplayFrame(Landroid/graphics/Rect;)V

    .line 143
    iget v1, v0, Landroid/graphics/Rect;->bottom:I

    iget v0, v0, Landroid/graphics/Rect;->top:I

    sub-int/2addr v1, v0

    return v1
.end method

.method private possiblyResizeChildOfContent()V
    .locals 4

    .line 126
    invoke-direct {p0}, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->computeUsableHeight()I

    move-result v0

    .line 127
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v1}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$300(Lio/ionic/keyboard/CDVIonicKeyboard;)I

    move-result v1

    if-eq v0, v1, :cond_1

    .line 128
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v1}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$400(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/View;->getRootView()Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/View;->getHeight()I

    move-result v1

    sub-int v2, v1, v0

    .line 130
    div-int/lit8 v3, v1, 0x4

    if-le v2, v3, :cond_0

    .line 131
    iget-object v3, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v3, v3, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v3}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$500(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/widget/FrameLayout$LayoutParams;

    move-result-object v3

    sub-int/2addr v1, v2

    iput v1, v3, Landroid/widget/FrameLayout$LayoutParams;->height:I

    goto :goto_0

    .line 133
    :cond_0
    iget-object v2, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v2, v2, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v2}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$500(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/widget/FrameLayout$LayoutParams;

    move-result-object v2

    iput v1, v2, Landroid/widget/FrameLayout$LayoutParams;->height:I

    .line 135
    :goto_0
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v1}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$400(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/View;->requestLayout()V

    .line 136
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v1, v0}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$302(Lio/ionic/keyboard/CDVIonicKeyboard;I)I

    :cond_1
    return-void
.end method


# virtual methods
.method public onGlobalLayout()V
    .locals 5

    .line 80
    iget-object v0, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v0, v0, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v0}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$200(Lio/ionic/keyboard/CDVIonicKeyboard;)Lorg/apache/cordova/CordovaPreferences;

    move-result-object v0

    const-string v1, "resizeOnFullScreen"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/apache/cordova/CordovaPreferences;->getBoolean(Ljava/lang/String;Z)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 82
    invoke-direct {p0}, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->possiblyResizeChildOfContent()V

    .line 84
    :cond_0
    new-instance v0, Landroid/graphics/Rect;

    invoke-direct {v0}, Landroid/graphics/Rect;-><init>()V

    .line 86
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v1}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$000(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/view/View;->getWindowVisibleDisplayFrame(Landroid/graphics/Rect;)V

    .line 91
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    invoke-static {v1}, Lio/ionic/keyboard/CDVIonicKeyboard;->access$000(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/View;->getRootView()Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/View;->getHeight()I

    move-result v1

    .line 92
    iget v0, v0, Landroid/graphics/Rect;->bottom:I

    .line 98
    sget v2, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v3, 0x15

    if-lt v2, v3, :cond_1

    .line 99
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard$3;->this$0:Lio/ionic/keyboard/CDVIonicKeyboard;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1}, Landroid/app/Activity;->getWindowManager()Landroid/view/WindowManager;

    move-result-object v1

    invoke-interface {v1}, Landroid/view/WindowManager;->getDefaultDisplay()Landroid/view/Display;

    move-result-object v1

    .line 100
    new-instance v2, Landroid/graphics/Point;

    invoke-direct {v2}, Landroid/graphics/Point;-><init>()V

    .line 101
    invoke-virtual {v1, v2}, Landroid/view/Display;->getSize(Landroid/graphics/Point;)V

    .line 102
    iget v1, v2, Landroid/graphics/Point;->y:I

    :cond_1
    sub-int/2addr v1, v0

    int-to-float v0, v1

    .line 109
    iget v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->val$density:F

    div-float/2addr v0, v1

    float-to-int v0, v0

    const/4 v1, 0x1

    const/16 v2, 0x64

    if-le v0, v2, :cond_2

    .line 110
    iget v3, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->previousHeightDiff:I

    if-eq v0, v3, :cond_2

    .line 111
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-string v3, "S"

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-static {v0}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    .line 112
    new-instance v3, Lorg/apache/cordova/PluginResult;

    sget-object v4, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v3, v4, v2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Ljava/lang/String;)V

    .line 113
    invoke-virtual {v3, v1}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 114
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard$3;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v1, v3}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    goto :goto_0

    .line 116
    :cond_2
    iget v3, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->previousHeightDiff:I

    if-eq v0, v3, :cond_3

    sub-int/2addr v3, v0

    if-le v3, v2, :cond_3

    const-string v2, "H"

    .line 118
    new-instance v3, Lorg/apache/cordova/PluginResult;

    sget-object v4, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v3, v4, v2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Ljava/lang/String;)V

    .line 119
    invoke-virtual {v3, v1}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 120
    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->this$1:Lio/ionic/keyboard/CDVIonicKeyboard$3;

    iget-object v1, v1, Lio/ionic/keyboard/CDVIonicKeyboard$3;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v1, v3}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    .line 122
    :cond_3
    :goto_0
    iput v0, p0, Lio/ionic/keyboard/CDVIonicKeyboard$3$1;->previousHeightDiff:I

    return-void
.end method
