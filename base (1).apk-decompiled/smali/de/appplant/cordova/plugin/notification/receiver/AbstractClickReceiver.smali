.class public abstract Lde/appplant/cordova/plugin/notification/receiver/AbstractClickReceiver;
.super Landroid/app/Activity;
.source "AbstractClickReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 41
    invoke-direct {p0}, Landroid/app/Activity;-><init>()V

    return-void
.end method


# virtual methods
.method protected getAction()Ljava/lang/String;
    .locals 3

    .line 90
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/receiver/AbstractClickReceiver;->getIntent()Landroid/content/Intent;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object v0

    const-string v1, "NOTIFICATION_ACTION_ID"

    const-string v2, "click"

    invoke-virtual {v0, v1, v2}, Landroid/os/Bundle;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method protected launchApp()V
    .locals 3

    .line 97
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/receiver/AbstractClickReceiver;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    .line 98
    invoke-virtual {v0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v1

    .line 101
    invoke-virtual {v0}, Landroid/content/Context;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v2

    .line 102
    invoke-virtual {v2, v1}, Landroid/content/pm/PackageManager;->getLaunchIntentForPackage(Ljava/lang/String;)Landroid/content/Intent;

    move-result-object v1

    if-nez v1, :cond_0

    return-void

    :cond_0
    const/high16 v2, 0x20020000

    .line 107
    invoke-virtual {v1, v2}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    .line 110
    invoke-virtual {v0, v1}, Landroid/content/Context;->startActivity(Landroid/content/Intent;)V

    return-void
.end method

.method public abstract onClick(Lde/appplant/cordova/plugin/notification/Notification;Landroid/os/Bundle;)V
.end method

.method public onCreate(Landroid/os/Bundle;)V
    .locals 2

    .line 50
    invoke-super {p0, p1}, Landroid/app/Activity;->onCreate(Landroid/os/Bundle;)V

    .line 52
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/receiver/AbstractClickReceiver;->getIntent()Landroid/content/Intent;

    move-result-object p1

    .line 53
    invoke-virtual {p1}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p1

    .line 54
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/receiver/AbstractClickReceiver;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    if-nez p1, :cond_0

    return-void

    :cond_0
    const-string v1, "NOTIFICATION_ID"

    .line 59
    invoke-virtual {p1, v1}, Landroid/os/Bundle;->getInt(Ljava/lang/String;)I

    move-result v1

    .line 60
    invoke-static {v0}, Lde/appplant/cordova/plugin/notification/Manager;->getInstance(Landroid/content/Context;)Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    invoke-virtual {v0, v1}, Lde/appplant/cordova/plugin/notification/Manager;->get(I)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object v0

    if-nez v0, :cond_1

    return-void

    .line 65
    :cond_1
    invoke-virtual {p0, v0, p1}, Lde/appplant/cordova/plugin/notification/receiver/AbstractClickReceiver;->onClick(Lde/appplant/cordova/plugin/notification/Notification;Landroid/os/Bundle;)V

    return-void
.end method

.method protected onResume()V
    .locals 0

    .line 74
    invoke-super {p0}, Landroid/app/Activity;->onResume()V

    .line 75
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/receiver/AbstractClickReceiver;->finish()V

    return-void
.end method
