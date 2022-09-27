.class public abstract Lde/appplant/cordova/plugin/notification/receiver/AbstractClearReceiver;
.super Landroid/content/BroadcastReceiver;
.source "AbstractClearReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 36
    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public abstract onClear(Lde/appplant/cordova/plugin/notification/Notification;Landroid/os/Bundle;)V
.end method

.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 1

    .line 46
    invoke-virtual {p2}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p2

    if-nez p2, :cond_0

    return-void

    :cond_0
    const-string v0, "NOTIFICATION_ID"

    .line 51
    invoke-virtual {p2, v0}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v0

    .line 52
    invoke-static {p1}, Lde/appplant/cordova/plugin/notification/Manager;->getInstance(Landroid/content/Context;)Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object p1

    invoke-virtual {p1, v0}, Lde/appplant/cordova/plugin/notification/Manager;->get(I)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object p1

    if-nez p1, :cond_1

    return-void

    .line 57
    :cond_1
    invoke-virtual {p0, p1, p2}, Lde/appplant/cordova/plugin/notification/receiver/AbstractClearReceiver;->onClear(Lde/appplant/cordova/plugin/notification/Notification;Landroid/os/Bundle;)V

    return-void
.end method
