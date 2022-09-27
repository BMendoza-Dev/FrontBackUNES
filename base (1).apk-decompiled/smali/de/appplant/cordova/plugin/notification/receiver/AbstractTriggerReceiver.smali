.class public abstract Lde/appplant/cordova/plugin/notification/receiver/AbstractTriggerReceiver;
.super Landroid/content/BroadcastReceiver;
.source "AbstractTriggerReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 38
    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public abstract buildNotification(Lde/appplant/cordova/plugin/notification/Builder;Landroid/os/Bundle;)Lde/appplant/cordova/plugin/notification/Notification;
.end method

.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 2

    .line 48
    invoke-virtual {p2}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p2

    if-nez p2, :cond_0

    return-void

    :cond_0
    const-string v0, "NOTIFICATION_ID"

    const/4 v1, 0x0

    .line 53
    invoke-virtual {p2, v0, v1}, Landroid/os/Bundle;->getInt(Ljava/lang/String;I)I

    move-result v0

    .line 54
    invoke-static {p1}, Lde/appplant/cordova/plugin/notification/Manager;->getInstance(Landroid/content/Context;)Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object p1

    invoke-virtual {p1, v0}, Lde/appplant/cordova/plugin/notification/Manager;->getOptions(I)Lde/appplant/cordova/plugin/notification/Options;

    move-result-object p1

    if-nez p1, :cond_1

    return-void

    .line 59
    :cond_1
    new-instance v0, Lde/appplant/cordova/plugin/notification/Builder;

    invoke-direct {v0, p1}, Lde/appplant/cordova/plugin/notification/Builder;-><init>(Lde/appplant/cordova/plugin/notification/Options;)V

    .line 60
    invoke-virtual {p0, v0, p2}, Lde/appplant/cordova/plugin/notification/receiver/AbstractTriggerReceiver;->buildNotification(Lde/appplant/cordova/plugin/notification/Builder;Landroid/os/Bundle;)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object p1

    if-nez p1, :cond_2

    return-void

    .line 65
    :cond_2
    invoke-virtual {p0, p1, p2}, Lde/appplant/cordova/plugin/notification/receiver/AbstractTriggerReceiver;->onTrigger(Lde/appplant/cordova/plugin/notification/Notification;Landroid/os/Bundle;)V

    return-void
.end method

.method public abstract onTrigger(Lde/appplant/cordova/plugin/notification/Notification;Landroid/os/Bundle;)V
.end method
