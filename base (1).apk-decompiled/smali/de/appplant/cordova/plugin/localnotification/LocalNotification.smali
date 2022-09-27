.class public Lde/appplant/cordova/plugin/localnotification/LocalNotification;
.super Lorg/apache/cordova/CordovaPlugin;
.source "LocalNotification.java"


# static fields
.field private static deviceready:Ljava/lang/Boolean;

.field private static eventQueue:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private static launchDetails:Landroid/util/Pair;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/util/Pair<",
            "Ljava/lang/Integer;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private static webView:Ljava/lang/ref/WeakReference;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/ref/WeakReference<",
            "Lorg/apache/cordova/CordovaWebView;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 1

    const/4 v0, 0x0

    .line 66
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    sput-object v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->deviceready:Ljava/lang/Boolean;

    .line 69
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    sput-object v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->eventQueue:Ljava/util/ArrayList;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 60
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method static synthetic access$000()V
    .locals 0

    .line 60
    invoke-static {}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->deviceready()V

    return-void
.end method

.method static synthetic access$100(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->check(Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$1000(Lde/appplant/cordova/plugin/localnotification/LocalNotification;ILorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1, p2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->type(ILorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$1100(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->ids(Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$1200(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->scheduledIds(Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$1300(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->triggeredIds(Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$1400(Lde/appplant/cordova/plugin/localnotification/LocalNotification;ILorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1, p2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->notification(ILorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$1500(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1, p2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->notifications(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$1600(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->scheduledNotifications(Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$1700(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->triggeredNotifications(Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$200(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->request(Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method static synthetic access$300(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONObject;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->actions(Lorg/json/JSONObject;)V

    return-void
.end method

.method static synthetic access$400(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONArray;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->schedule(Lorg/json/JSONArray;)V

    return-void
.end method

.method static synthetic access$500(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONArray;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->update(Lorg/json/JSONArray;)V

    return-void
.end method

.method static synthetic access$600(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONArray;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->cancel(Lorg/json/JSONArray;)V

    return-void
.end method

.method static synthetic access$700(Lde/appplant/cordova/plugin/localnotification/LocalNotification;)V
    .locals 0

    .line 60
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->cancelAll()V

    return-void
.end method

.method static synthetic access$800(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONArray;)V
    .locals 0

    .line 60
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->clear(Lorg/json/JSONArray;)V

    return-void
.end method

.method static synthetic access$900(Lde/appplant/cordova/plugin/localnotification/LocalNotification;)V
    .locals 0

    .line 60
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->clearAll()V

    return-void
.end method

.method private actions(Lorg/json/JSONObject;)V
    .locals 1

    .line 252
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-static {v0, p1}, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->parse(Landroid/content/Context;Lorg/json/JSONObject;)Lde/appplant/cordova/plugin/notification/action/ActionGroup;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 255
    invoke-static {p1}, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->register(Lde/appplant/cordova/plugin/notification/action/ActionGroup;)V

    :cond_0
    return-void
.end method

.method private cancel(Lorg/json/JSONArray;)V
    .locals 4

    const/4 v0, 0x0

    const/4 v1, 0x0

    .line 307
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-ge v1, v2, :cond_1

    .line 308
    invoke-virtual {p1, v1, v0}, Lorg/json/JSONArray;->optInt(II)I

    move-result v2

    .line 311
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v3

    invoke-virtual {v3, v2}, Lde/appplant/cordova/plugin/notification/Manager;->cancel(I)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object v2

    if-nez v2, :cond_0

    goto :goto_1

    :cond_0
    const-string v3, "cancel"

    .line 316
    invoke-static {v3, v2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;)V

    :goto_1
    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_1
    return-void
.end method

.method private cancelAll()V
    .locals 1

    .line 324
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Manager;->cancelAll()V

    const-string v0, "cancelall"

    .line 325
    invoke-direct {p0, v0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;)V

    return-void
.end method

.method private check(Lorg/apache/cordova/CallbackContext;)V
    .locals 3

    .line 230
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Manager;->hasPermission()Z

    move-result v0

    .line 231
    new-instance v1, Lorg/apache/cordova/PluginResult;

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {v1, v2, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Z)V

    .line 233
    invoke-virtual {p1, v1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void
.end method

.method private clear(Lorg/json/JSONArray;)V
    .locals 4

    const/4 v0, 0x0

    const/4 v1, 0x0

    .line 334
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-ge v1, v2, :cond_1

    .line 335
    invoke-virtual {p1, v1, v0}, Lorg/json/JSONArray;->optInt(II)I

    move-result v2

    .line 338
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v3

    invoke-virtual {v3, v2}, Lde/appplant/cordova/plugin/notification/Manager;->clear(I)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object v2

    if-nez v2, :cond_0

    goto :goto_1

    :cond_0
    const-string v3, "clear"

    .line 343
    invoke-static {v3, v2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;)V

    :goto_1
    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_1
    return-void
.end method

.method private clearAll()V
    .locals 1

    .line 351
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Manager;->clearAll()V

    const-string v0, "clearall"

    .line 352
    invoke-direct {p0, v0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;)V

    return-void
.end method

.method private static declared-synchronized deviceready()V
    .locals 3

    const-class v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    monitor-enter v0

    const/4 v1, 0x1

    .line 478
    :try_start_0
    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    sput-object v1, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->deviceready:Ljava/lang/Boolean;

    .line 480
    sget-object v1, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->eventQueue:Ljava/util/ArrayList;

    invoke-virtual {v1}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v1

    :goto_0
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_0

    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 481
    invoke-static {v2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->sendJavascript(Ljava/lang/String;)V

    goto :goto_0

    .line 484
    :cond_0
    sget-object v1, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->eventQueue:Ljava/util/ArrayList;

    invoke-virtual {v1}, Ljava/util/ArrayList;->clear()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 485
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0

    throw v1

    return-void
.end method

.method private fireEvent(Ljava/lang/String;)V
    .locals 2

    .line 493
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    const/4 v1, 0x0

    invoke-static {p1, v1, v0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;Lorg/json/JSONObject;)V

    return-void
.end method

.method static fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;)V
    .locals 1

    .line 503
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    invoke-static {p0, p1, v0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;Lorg/json/JSONObject;)V

    return-void
.end method

.method static fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;Lorg/json/JSONObject;)V
    .locals 2

    :try_start_0
    const-string v0, "event"

    .line 517
    invoke-virtual {p2, v0, p0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    const-string v0, "foreground"

    .line 518
    invoke-static {}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->isInForeground()Z

    move-result v1

    invoke-virtual {p2, v0, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    const-string v0, "queued"

    .line 519
    sget-object v1, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->deviceready:Ljava/lang/Boolean;

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    if-nez v1, :cond_0

    const/4 v1, 0x1

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :goto_0
    invoke-virtual {p2, v0, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    if-eqz p1, :cond_1

    const-string v0, "notification"

    .line 522
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->getId()I

    move-result v1

    invoke-virtual {p2, v0, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 525
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V

    :cond_1
    :goto_1
    if-eqz p1, :cond_2

    .line 529
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string v1, ","

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {p2}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    goto :goto_2

    .line 531
    :cond_2
    invoke-virtual {p2}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object p2

    .line 534
    :goto_2
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    const-string v1, "cordova.plugins.notification.local.core.fireEvent(\""

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string v1, "\","

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string p2, ")"

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    .line 537
    sget-object v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->launchDetails:Landroid/util/Pair;

    if-nez v0, :cond_3

    sget-object v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->deviceready:Ljava/lang/Boolean;

    invoke-virtual {v0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    if-nez v0, :cond_3

    if-eqz p1, :cond_3

    .line 538
    new-instance v0, Landroid/util/Pair;

    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->getId()I

    move-result p1

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    invoke-direct {v0, p1, p0}, Landroid/util/Pair;-><init>(Ljava/lang/Object;Ljava/lang/Object;)V

    sput-object v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->launchDetails:Landroid/util/Pair;

    .line 541
    :cond_3
    invoke-static {p2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->sendJavascript(Ljava/lang/String;)V

    return-void
.end method

.method private getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;
    .locals 1

    .line 604
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-static {v0}, Lde/appplant/cordova/plugin/notification/Manager;->getInstance(Landroid/content/Context;)Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    return-object v0
.end method

.method private ids(Lorg/apache/cordova/CallbackContext;)V
    .locals 2

    .line 390
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Manager;->getIds()Ljava/util/List;

    move-result-object v0

    .line 391
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1, v0}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    invoke-virtual {p1, v1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONArray;)V

    return-void
.end method

.method private static isInForeground()Z
    .locals 4

    .line 570
    sget-object v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->deviceready:Ljava/lang/Boolean;

    invoke-virtual {v0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    const/4 v1, 0x0

    if-eqz v0, :cond_3

    sget-object v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->webView:Ljava/lang/ref/WeakReference;

    if-nez v0, :cond_0

    goto :goto_0

    .line 573
    :cond_0
    invoke-virtual {v0}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lorg/apache/cordova/CordovaWebView;

    .line 575
    invoke-interface {v0}, Lorg/apache/cordova/CordovaWebView;->getContext()Landroid/content/Context;

    move-result-object v2

    const-string v3, "keyguard"

    .line 576
    invoke-virtual {v2, v3}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Landroid/app/KeyguardManager;

    if-eqz v2, :cond_1

    .line 579
    invoke-virtual {v2}, Landroid/app/KeyguardManager;->isKeyguardLocked()Z

    move-result v2

    if-eqz v2, :cond_1

    return v1

    .line 582
    :cond_1
    invoke-interface {v0}, Lorg/apache/cordova/CordovaWebView;->getView()Landroid/view/View;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/View;->getWindowVisibility()I

    move-result v0

    if-nez v0, :cond_2

    const/4 v1, 0x1

    :cond_2
    return v1

    :cond_3
    :goto_0
    return v1
.end method

.method private launch(Lorg/apache/cordova/CallbackContext;)V
    .locals 3
    .annotation build Landroid/annotation/SuppressLint;
        value = {
            "DefaultLocale"
        }
    .end annotation

    .line 206
    sget-object v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->launchDetails:Landroid/util/Pair;

    if-nez v0, :cond_0

    return-void

    .line 209
    :cond_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    :try_start_0
    const-string v1, "id"

    .line 212
    sget-object v2, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->launchDetails:Landroid/util/Pair;

    iget-object v2, v2, Landroid/util/Pair;->first:Ljava/lang/Object;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    const-string v1, "action"

    .line 213
    sget-object v2, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->launchDetails:Landroid/util/Pair;

    iget-object v2, v2, Landroid/util/Pair;->second:Ljava/lang/Object;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v1

    .line 215
    invoke-virtual {v1}, Lorg/json/JSONException;->printStackTrace()V

    .line 218
    :goto_0
    invoke-virtual {p1, v0}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    const/4 p1, 0x0

    .line 220
    sput-object p1, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->launchDetails:Landroid/util/Pair;

    return-void
.end method

.method private notification(ILorg/apache/cordova/CallbackContext;)V
    .locals 1

    .line 424
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    invoke-virtual {v0, p1}, Lde/appplant/cordova/plugin/notification/Manager;->getOptions(I)Lde/appplant/cordova/plugin/notification/Options;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 427
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Options;->getDict()Lorg/json/JSONObject;

    move-result-object p1

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    goto :goto_0

    .line 429
    :cond_0
    invoke-virtual {p2}, Lorg/apache/cordova/CallbackContext;->success()V

    :goto_0
    return-void
.end method

.method private notifications(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 1

    .line 443
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v0

    if-nez v0, :cond_0

    .line 444
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object p1

    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Manager;->getOptions()Ljava/util/List;

    move-result-object p1

    goto :goto_0

    .line 446
    :cond_0
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->toList(Lorg/json/JSONArray;)Ljava/util/List;

    move-result-object p1

    invoke-virtual {v0, p1}, Lde/appplant/cordova/plugin/notification/Manager;->getOptionsById(Ljava/util/List;)Ljava/util/List;

    move-result-object p1

    .line 449
    :goto_0
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0, p1}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    invoke-virtual {p2, v0}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONArray;)V

    return-void
.end method

.method private request(Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 243
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->check(Lorg/apache/cordova/CallbackContext;)V

    return-void
.end method

.method private schedule(Lorg/json/JSONArray;)V
    .locals 4

    .line 265
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    const/4 v1, 0x0

    .line 267
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-ge v1, v2, :cond_1

    .line 268
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object v2

    .line 269
    new-instance v3, Lde/appplant/cordova/plugin/notification/Options;

    invoke-direct {v3, v2}, Lde/appplant/cordova/plugin/notification/Options;-><init>(Lorg/json/JSONObject;)V

    .line 270
    new-instance v2, Lde/appplant/cordova/plugin/notification/Request;

    invoke-direct {v2, v3}, Lde/appplant/cordova/plugin/notification/Request;-><init>(Lde/appplant/cordova/plugin/notification/Options;)V

    .line 272
    const-class v3, Lde/appplant/cordova/plugin/localnotification/TriggerReceiver;

    .line 273
    invoke-virtual {v0, v2, v3}, Lde/appplant/cordova/plugin/notification/Manager;->schedule(Lde/appplant/cordova/plugin/notification/Request;Ljava/lang/Class;)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object v2

    if-eqz v2, :cond_0

    const-string v3, "add"

    .line 276
    invoke-static {v3, v2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;)V

    :cond_0
    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_1
    return-void
.end method

.method private scheduledIds(Lorg/apache/cordova/CallbackContext;)V
    .locals 2

    .line 401
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    sget-object v1, Lde/appplant/cordova/plugin/notification/Notification$Type;->SCHEDULED:Lde/appplant/cordova/plugin/notification/Notification$Type;

    invoke-virtual {v0, v1}, Lde/appplant/cordova/plugin/notification/Manager;->getIdsByType(Lde/appplant/cordova/plugin/notification/Notification$Type;)Ljava/util/List;

    move-result-object v0

    .line 402
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1, v0}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    invoke-virtual {p1, v1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONArray;)V

    return-void
.end method

.method private scheduledNotifications(Lorg/apache/cordova/CallbackContext;)V
    .locals 2

    .line 459
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    sget-object v1, Lde/appplant/cordova/plugin/notification/Notification$Type;->SCHEDULED:Lde/appplant/cordova/plugin/notification/Notification$Type;

    invoke-virtual {v0, v1}, Lde/appplant/cordova/plugin/notification/Manager;->getOptionsByType(Lde/appplant/cordova/plugin/notification/Notification$Type;)Ljava/util/List;

    move-result-object v0

    .line 460
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1, v0}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    invoke-virtual {p1, v1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONArray;)V

    return-void
.end method

.method private static declared-synchronized sendJavascript(Ljava/lang/String;)V
    .locals 4

    const-class v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    monitor-enter v0

    .line 551
    :try_start_0
    sget-object v1, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->deviceready:Ljava/lang/Boolean;

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    if-eqz v1, :cond_1

    sget-object v1, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->webView:Ljava/lang/ref/WeakReference;

    if-nez v1, :cond_0

    goto :goto_0

    .line 556
    :cond_0
    sget-object v1, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->webView:Ljava/lang/ref/WeakReference;

    invoke-virtual {v1}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/apache/cordova/CordovaWebView;

    .line 558
    invoke-interface {v1}, Lorg/apache/cordova/CordovaWebView;->getContext()Landroid/content/Context;

    move-result-object v2

    check-cast v2, Landroid/app/Activity;

    check-cast v2, Landroid/app/Activity;

    new-instance v3, Lde/appplant/cordova/plugin/localnotification/LocalNotification$2;

    invoke-direct {v3, v1, p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification$2;-><init>(Lorg/apache/cordova/CordovaWebView;Ljava/lang/String;)V

    invoke-virtual {v2, v3}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 563
    monitor-exit v0

    return-void

    .line 552
    :cond_1
    :goto_0
    :try_start_1
    sget-object v1, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->eventQueue:Ljava/util/ArrayList;

    invoke-virtual {v1, p0}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 553
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p0

    monitor-exit v0

    throw p0
.end method

.method private toList(Lorg/json/JSONArray;)Ljava/util/List;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/json/JSONArray;",
            ")",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 591
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    const/4 v1, 0x0

    .line 593
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-ge v1, v2, :cond_0

    .line 594
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->optInt(I)I

    move-result v2

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    invoke-interface {v0, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_0
    return-object v0
.end method

.method private triggeredIds(Lorg/apache/cordova/CallbackContext;)V
    .locals 2

    .line 412
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    sget-object v1, Lde/appplant/cordova/plugin/notification/Notification$Type;->TRIGGERED:Lde/appplant/cordova/plugin/notification/Notification$Type;

    invoke-virtual {v0, v1}, Lde/appplant/cordova/plugin/notification/Manager;->getIdsByType(Lde/appplant/cordova/plugin/notification/Notification$Type;)Ljava/util/List;

    move-result-object v0

    .line 413
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1, v0}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    invoke-virtual {p1, v1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONArray;)V

    return-void
.end method

.method private triggeredNotifications(Lorg/apache/cordova/CallbackContext;)V
    .locals 2

    .line 470
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    sget-object v1, Lde/appplant/cordova/plugin/notification/Notification$Type;->TRIGGERED:Lde/appplant/cordova/plugin/notification/Notification$Type;

    invoke-virtual {v0, v1}, Lde/appplant/cordova/plugin/notification/Manager;->getOptionsByType(Lde/appplant/cordova/plugin/notification/Notification$Type;)Ljava/util/List;

    move-result-object v0

    .line 471
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1, v0}, Lorg/json/JSONArray;-><init>(Ljava/util/Collection;)V

    invoke-virtual {p1, v1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONArray;)V

    return-void
.end method

.method private type(ILorg/apache/cordova/CallbackContext;)V
    .locals 1

    .line 363
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    invoke-virtual {v0, p1}, Lde/appplant/cordova/plugin/notification/Manager;->get(I)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object p1

    if-nez p1, :cond_0

    const-string p1, "unknown"

    .line 366
    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    return-void

    .line 370
    :cond_0
    sget-object v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$3;->$SwitchMap$de$appplant$cordova$plugin$notification$Notification$Type:[I

    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->getType()Lde/appplant/cordova/plugin/notification/Notification$Type;

    move-result-object p1

    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification$Type;->ordinal()I

    move-result p1

    aget p1, v0, p1

    packed-switch p1, :pswitch_data_0

    const-string p1, "unknown"

    .line 378
    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    goto :goto_0

    :pswitch_0
    const-string p1, "triggered"

    .line 375
    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    goto :goto_0

    :pswitch_1
    const-string p1, "scheduled"

    .line 372
    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    :goto_0
    return-void

    nop

    :pswitch_data_0
    .packed-switch 0x1
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method private update(Lorg/json/JSONArray;)V
    .locals 6

    const/4 v0, 0x0

    const/4 v1, 0x0

    .line 287
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-ge v1, v2, :cond_1

    .line 288
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object v2

    const-string v3, "id"

    .line 289
    invoke-virtual {v2, v3, v0}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v3

    .line 292
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->getNotMgr()Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v4

    const-class v5, Lde/appplant/cordova/plugin/localnotification/TriggerReceiver;

    invoke-virtual {v4, v3, v2, v5}, Lde/appplant/cordova/plugin/notification/Manager;->update(ILorg/json/JSONObject;Ljava/lang/Class;)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object v2

    if-nez v2, :cond_0

    goto :goto_1

    :cond_0
    const-string v3, "update"

    .line 297
    invoke-static {v3, v2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;)V

    :goto_1
    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_1
    return-void
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const-string v0, "launch"

    .line 124
    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    const/4 v1, 0x1

    if-eqz v0, :cond_0

    .line 125
    invoke-direct {p0, p3}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->launch(Lorg/apache/cordova/CallbackContext;)V

    return v1

    .line 129
    :cond_0
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object v0

    new-instance v2, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;

    invoke-direct {v2, p0, p1, p3, p2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;-><init>(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Ljava/lang/String;Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)V

    invoke-interface {v0, v2}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    return v1
.end method

.method public initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
    .locals 0

    .line 81
    new-instance p1, Ljava/lang/ref/WeakReference;

    invoke-direct {p1, p2}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    sput-object p1, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->webView:Ljava/lang/ref/WeakReference;

    return-void
.end method

.method public onDestroy()V
    .locals 1

    const/4 v0, 0x0

    .line 100
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    sput-object v0, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->deviceready:Ljava/lang/Boolean;

    return-void
.end method

.method public onResume(Z)V
    .locals 0

    .line 91
    invoke-super {p0, p1}, Lorg/apache/cordova/CordovaPlugin;->onResume(Z)V

    .line 92
    invoke-static {}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->deviceready()V

    return-void
.end method
