.class public Lio/ionic/keyboard/CDVIonicKeyboard;
.super Lorg/apache/cordova/CordovaPlugin;
.source "CDVIonicKeyboard.java"


# instance fields
.field private frameLayoutParams:Landroid/widget/FrameLayout$LayoutParams;

.field private list:Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

.field private mChildOfContent:Landroid/view/View;

.field private rootView:Landroid/view/View;

.field private usableHeightPrevious:I


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 26
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/View;
    .locals 0

    .line 26
    iget-object p0, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->rootView:Landroid/view/View;

    return-object p0
.end method

.method static synthetic access$002(Lio/ionic/keyboard/CDVIonicKeyboard;Landroid/view/View;)Landroid/view/View;
    .locals 0

    .line 26
    iput-object p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->rootView:Landroid/view/View;

    return-object p1
.end method

.method static synthetic access$100(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;
    .locals 0

    .line 26
    iget-object p0, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->list:Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

    return-object p0
.end method

.method static synthetic access$102(Lio/ionic/keyboard/CDVIonicKeyboard;Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;
    .locals 0

    .line 26
    iput-object p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->list:Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

    return-object p1
.end method

.method static synthetic access$200(Lio/ionic/keyboard/CDVIonicKeyboard;)Lorg/apache/cordova/CordovaPreferences;
    .locals 0

    .line 26
    iget-object p0, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->preferences:Lorg/apache/cordova/CordovaPreferences;

    return-object p0
.end method

.method static synthetic access$300(Lio/ionic/keyboard/CDVIonicKeyboard;)I
    .locals 0

    .line 26
    iget p0, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->usableHeightPrevious:I

    return p0
.end method

.method static synthetic access$302(Lio/ionic/keyboard/CDVIonicKeyboard;I)I
    .locals 0

    .line 26
    iput p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->usableHeightPrevious:I

    return p1
.end method

.method static synthetic access$400(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/view/View;
    .locals 0

    .line 26
    iget-object p0, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->mChildOfContent:Landroid/view/View;

    return-object p0
.end method

.method static synthetic access$402(Lio/ionic/keyboard/CDVIonicKeyboard;Landroid/view/View;)Landroid/view/View;
    .locals 0

    .line 26
    iput-object p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->mChildOfContent:Landroid/view/View;

    return-object p1
.end method

.method static synthetic access$500(Lio/ionic/keyboard/CDVIonicKeyboard;)Landroid/widget/FrameLayout$LayoutParams;
    .locals 0

    .line 26
    iget-object p0, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->frameLayoutParams:Landroid/widget/FrameLayout$LayoutParams;

    return-object p0
.end method

.method static synthetic access$502(Lio/ionic/keyboard/CDVIonicKeyboard;Landroid/widget/FrameLayout$LayoutParams;)Landroid/widget/FrameLayout$LayoutParams;
    .locals 0

    .line 26
    iput-object p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->frameLayoutParams:Landroid/widget/FrameLayout$LayoutParams;

    return-object p1
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const-string p2, "hide"

    .line 38
    invoke-virtual {p2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    const/4 v0, 0x1

    if-eqz p2, :cond_0

    .line 39
    iget-object p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    new-instance p2, Lio/ionic/keyboard/CDVIonicKeyboard$1;

    invoke-direct {p2, p0, p3}, Lio/ionic/keyboard/CDVIonicKeyboard$1;-><init>(Lio/ionic/keyboard/CDVIonicKeyboard;Lorg/apache/cordova/CallbackContext;)V

    invoke-interface {p1, p2}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v0

    :cond_0
    const-string p2, "show"

    .line 55
    invoke-virtual {p2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_1

    .line 56
    iget-object p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    new-instance p2, Lio/ionic/keyboard/CDVIonicKeyboard$2;

    invoke-direct {p2, p0, p3}, Lio/ionic/keyboard/CDVIonicKeyboard$2;-><init>(Lio/ionic/keyboard/CDVIonicKeyboard;Lorg/apache/cordova/CallbackContext;)V

    invoke-interface {p1, p2}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v0

    :cond_1
    const-string p2, "init"

    .line 64
    invoke-virtual {p2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_2

    .line 65
    iget-object p1, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object p1

    new-instance p2, Lio/ionic/keyboard/CDVIonicKeyboard$3;

    invoke-direct {p2, p0, p3}, Lio/ionic/keyboard/CDVIonicKeyboard$3;-><init>(Lio/ionic/keyboard/CDVIonicKeyboard;Lorg/apache/cordova/CallbackContext;)V

    invoke-interface {p1, p2}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v0

    :cond_2
    const/4 p1, 0x0

    return p1
.end method

.method public initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
    .locals 0

    .line 34
    invoke-super {p0, p1, p2}, Lorg/apache/cordova/CordovaPlugin;->initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V

    return-void
.end method

.method public onDestroy()V
    .locals 2

    .line 162
    iget-object v0, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->rootView:Landroid/view/View;

    invoke-virtual {v0}, Landroid/view/View;->getViewTreeObserver()Landroid/view/ViewTreeObserver;

    move-result-object v0

    iget-object v1, p0, Lio/ionic/keyboard/CDVIonicKeyboard;->list:Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;

    invoke-virtual {v0, v1}, Landroid/view/ViewTreeObserver;->removeOnGlobalLayoutListener(Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)V

    return-void
.end method
