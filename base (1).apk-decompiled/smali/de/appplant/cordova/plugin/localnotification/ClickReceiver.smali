.class public Lde/appplant/cordova/plugin/localnotification/ClickReceiver;
.super Lde/appplant/cordova/plugin/notification/receiver/AbstractClickReceiver;
.source "ClickReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 41
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/receiver/AbstractClickReceiver;-><init>()V

    return-void
.end method

.method private isLast()Z
    .locals 3

    .line 104
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/localnotification/ClickReceiver;->getIntent()Landroid/content/Intent;

    move-result-object v0

    const-string v1, "NOTIFICATION_LAST"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroid/content/Intent;->getBooleanExtra(Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method private launchAppIf()V
    .locals 3

    .line 92
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/localnotification/ClickReceiver;->getIntent()Landroid/content/Intent;

    move-result-object v0

    const-string v1, "NOTIFICATION_LAUNCH"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Landroid/content/Intent;->getBooleanExtra(Ljava/lang/String;Z)Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 97
    :cond_0
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/localnotification/ClickReceiver;->launchApp()V

    return-void
.end method

.method private setTextInput(Ljava/lang/String;Lorg/json/JSONObject;)V
    .locals 2

    .line 76
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/localnotification/ClickReceiver;->getIntent()Landroid/content/Intent;

    move-result-object v0

    invoke-static {v0}, Landroid/support/v4/app/RemoteInput;->getResultsFromIntent(Landroid/content/Intent;)Landroid/os/Bundle;

    move-result-object v0

    if-nez v0, :cond_0

    return-void

    :cond_0
    :try_start_0
    const-string v1, "text"

    .line 82
    invoke-virtual {v0, p1}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, v1, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 84
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method


# virtual methods
.method public onClick(Lde/appplant/cordova/plugin/notification/Notification;Landroid/os/Bundle;)V
    .locals 1

    .line 51
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/localnotification/ClickReceiver;->getAction()Ljava/lang/String;

    move-result-object p2

    .line 52
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 54
    invoke-direct {p0, p2, v0}, Lde/appplant/cordova/plugin/localnotification/ClickReceiver;->setTextInput(Ljava/lang/String;Lorg/json/JSONObject;)V

    .line 55
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/ClickReceiver;->launchAppIf()V

    .line 57
    invoke-static {p2, p1, v0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->fireEvent(Ljava/lang/String;Lde/appplant/cordova/plugin/notification/Notification;Lorg/json/JSONObject;)V

    .line 59
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->getOptions()Lde/appplant/cordova/plugin/notification/Options;

    move-result-object p2

    invoke-virtual {p2}, Lde/appplant/cordova/plugin/notification/Options;->isSticky()Ljava/lang/Boolean;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p2

    if-eqz p2, :cond_0

    return-void

    .line 62
    :cond_0
    invoke-direct {p0}, Lde/appplant/cordova/plugin/localnotification/ClickReceiver;->isLast()Z

    move-result p2

    if-eqz p2, :cond_1

    .line 63
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->cancel()V

    goto :goto_0

    .line 65
    :cond_1
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->clear()V

    :goto_0
    return-void
.end method
