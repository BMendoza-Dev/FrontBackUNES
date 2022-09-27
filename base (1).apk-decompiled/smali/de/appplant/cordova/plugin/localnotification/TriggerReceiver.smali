.class public Lde/appplant/cordova/plugin/localnotification/TriggerReceiver;
.super Lde/appplant/cordova/plugin/notification/receiver/AbstractTriggerReceiver;
.source "TriggerReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 45
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/receiver/AbstractTriggerReceiver;-><init>()V

    return-void
.end method

.method private wakeUp(Landroid/content/Context;)V
    .locals 2

    const-string v0, "power"

    .line 87
    invoke-virtual {p1, v0}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/os/PowerManager;

    if-nez p1, :cond_0

    return-void

    :cond_0
    const v0, 0x10000006

    const-string v1, "LocalNotification"

    .line 95
    invoke-virtual {p1, v0, v1}, Landroid/os/PowerManager;->newWakeLock(ILjava/lang/String;)Landroid/os/PowerManager$WakeLock;

    move-result-object p1

    const/4 v0, 0x0

    .line 98
    invoke-virtual {p1, v0}, Landroid/os/PowerManager$WakeLock;->setReferenceCounted(Z)V

    const-wide/16 v0, 0x3e8

    .line 99
    invoke-virtual {p1, v0, v1}, Landroid/os/PowerManager$WakeLock;->acquire(J)V

    .line 101
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x15

    if-lt v0, v1, :cond_1

    const/4 v0, 0x1

    .line 102
    invoke-virtual {p1, v0}, Landroid/os/PowerManager$WakeLock;->release(I)V

    goto :goto_0

    .line 104
    :cond_1
    invoke-virtual {p1}, Landroid/os/PowerManager$WakeLock;->release()V

    :goto_0
    return-void
.end method


# virtual methods
.method public buildNotification(Lde/appplant/cordova/plugin/notification/Builder;Landroid/os/Bundle;)Lde/appplant/cordova/plugin/notification/Notification;
    .locals 1

    .line 116
    const-class v0, Lde/appplant/cordova/plugin/localnotification/ClickReceiver;

    .line 117
    invoke-virtual {p1, v0}, Lde/appplant/cordova/plugin/notification/Builder;->setClickActivity(Ljava/lang/Class;)Lde/appplant/cordova/plugin/notification/Builder;

    move-result-object p1

    const-class v0, Lde/appplant/cordova/plugin/localnotification/ClearReceiver;

    .line 118
    invoke-virtual {p1, v0}, Lde/appplant/cordova/plugin/notification/Builder;->setClearReceiver(Ljava/lang/Class;)Lde/appplant/cordova/plugin/notification/Builder;

    move-result-object p1

    .line 119
    invoke-virtual {p1, p2}, Lde/appplant/cordova/plugin/notification/Builder;->setExtras(Landroid/os/Bundle;)Lde/appplant/cordova/plugin/notification/Builder;

    move-result-object p1

    .line 120
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Builder;->build()Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object p1

    return-object p1
.end method

.method public onTrigger(Lde/appplant/cordova/plugin/notification/Notification;Landroid/os/Bundle;)V
    .locals 4

    const-string v0, "NOTIFICATION_UPDATE"

    const/4 v1, 0x0

    .line 56
    invoke-virtual {p2, v0, v1}, Landroid/os/Bundle;->getBoolean(Ljava/lang/String;Z)Z

    move-result p2

    .line 57
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->getContext()Landroid/content/Context;

    move-result-object v0

    .line 58
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->getOptions()Lde/appplant/cordova/plugin/notification/Options;

    move-result-object v1

    .line 59
    invoke-static {v0}, Lde/appplant/cordova/plugin/notification/Manager;->getInstance(Landroid/content/Context;)Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v2

    .line 60
    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Options;->getBadgeNumber()I

    move-result v3

    if-lez v3, :cond_0

    .line 63
    invoke-virtual {v2, v3}, Lde/appplant/cordova/plugin/notification/Manager;->setBadge(I)V

    .line 66
    :cond_0
    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Options;->shallWakeUp()Z

    move-result v3

    if-eqz v3, :cond_1

    .line 67
    invoke-direct {p0, v0}, Lde/appplant/cordova/plugin/localnotification/TriggerReceiver;->wakeUp(Landroid/content/Context;)V

    .line 70
    :cond_1
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->show()V

    .line 72
    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Options;->isInfiniteTrigger()Z

    move-result v0

    if-eqz v0, :cond_2

    .line 73
    new-instance v0, Lde/appplant/cordova/plugin/notification/Request;

    invoke-direct {v0, v1}, Lde/appplant/cordova/plugin/notification/Request;-><init>(Lde/appplant/cordova/plugin/notification/Options;)V

    invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v1

    invoke-virtual {v2, v0, v1}, Lde/appplant/cordova/plugin/notification/Manager;->schedule(Lde/appplant/cordova/plugin/notification/Request;Ljava/lang/Class;)Lde/appplant/cordova/plugin/notification/Notification;

    :cond_2
    if-nez p2, :cond_3

    const-string p2, "trigger"

    .line 77
    invoke-static {p2, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;)V

    :cond_3
    return-void
.end method
