.class public Lde/appplant/cordova/plugin/localnotification/ClearReceiver;
.super Lde/appplant/cordova/plugin/notification/receiver/AbstractClearReceiver;
.source "ClearReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 36
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/receiver/AbstractClearReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onClear(Lde/appplant/cordova/plugin/notification/Notification;Landroid/os/Bundle;)V
    .locals 2

    const-string v0, "NOTIFICATION_LAST"

    const/4 v1, 0x0

    .line 46
    invoke-virtual {p2, v0, v1}, Landroid/os/Bundle;->getBoolean(Ljava/lang/String;Z)Z

    move-result p2

    if-eqz p2, :cond_0

    .line 49
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->cancel()V

    goto :goto_0

    .line 51
    :cond_0
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->clear()V

    :goto_0
    const-string p2, "clear"

    .line 54
    invoke-static {p2, p1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;)V

    return-void
.end method
