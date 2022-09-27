.class public Lcom/rohithvaranasi/callnumber/CFCallNumber;
.super Lorg/apache/cordova/CordovaPlugin;
.source "CFCallNumber.java"


# static fields
.field public static final CALL_PHONE:Ljava/lang/String; = "android.permission.CALL_PHONE"

.field public static final CALL_REQ_CODE:I = 0x0

.field public static final PERMISSION_DENIED_ERROR:I = 0x14


# instance fields
.field private callbackContext:Lorg/apache/cordova/CallbackContext;

.field private executeArgs:Lorg/json/JSONArray;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 18
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method private callPhone(Lorg/json/JSONArray;)V
    .locals 5
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 66
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v1

    const-string v2, "#"

    const-string v3, "%23"

    .line 67
    invoke-virtual {v1, v2, v3}, Ljava/lang/String;->replaceAll(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v2, "tel:"

    .line 69
    invoke-virtual {v1, v2}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v2

    const/4 v3, 0x1

    if-nez v2, :cond_0

    const-string v2, "tel:%s"

    .line 70
    new-array v4, v3, [Ljava/lang/Object;

    aput-object v1, v4, v0

    invoke-static {v2, v4}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v1

    .line 73
    :cond_0
    :try_start_0
    new-instance v0, Landroid/content/Intent;

    invoke-direct {p0}, Lcom/rohithvaranasi/callnumber/CFCallNumber;->isTelephonyEnabled()Z

    move-result v2

    if-eqz v2, :cond_1

    const-string v2, "android.intent.action.CALL"

    goto :goto_0

    :cond_1
    const-string v2, "android.intent.action.VIEW"

    :goto_0
    invoke-direct {v0, v2}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 74
    invoke-static {v1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/content/Intent;->setData(Landroid/net/Uri;)Landroid/content/Intent;

    .line 76
    invoke-virtual {p1, v3}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Ljava/lang/Boolean;->parseBoolean(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_2

    .line 78
    invoke-direct {p0, v0}, Lcom/rohithvaranasi/callnumber/CFCallNumber;->getDialerPackage(Landroid/content/Intent;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Landroid/content/Intent;->setPackage(Ljava/lang/String;)Landroid/content/Intent;

    .line 81
    :cond_2
    iget-object p1, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    invoke-virtual {p1, v0}, Landroid/app/Activity;->startActivity(Landroid/content/Intent;)V

    .line 82
    iget-object p1, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p1}, Lorg/apache/cordova/CallbackContext;->success()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    .line 84
    :catch_0
    iget-object p1, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->callbackContext:Lorg/apache/cordova/CallbackContext;

    const-string v0, "CouldNotCallPhoneNumber"

    invoke-virtual {p1, v0}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_1
    return-void
.end method

.method private getDialerPackage(Landroid/content/Intent;)Ljava/lang/String;
    .locals 4

    .line 94
    iget-object v0, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v0

    const/high16 v1, 0x10000

    .line 95
    invoke-virtual {v0, p1, v1}, Landroid/content/pm/PackageManager;->queryIntentActivities(Landroid/content/Intent;I)Ljava/util/List;

    move-result-object p1

    const/4 v0, 0x0

    const/4 v1, 0x0

    .line 97
    :goto_0
    invoke-interface {p1}, Ljava/util/List;->size()I

    move-result v2

    if-ge v1, v2, :cond_3

    .line 98
    invoke-interface {p1, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object v2

    const-string v3, "com.android.server.telecom"

    invoke-virtual {v2, v3}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v2

    if-eqz v2, :cond_0

    const-string p1, "com.android.server.telecom"

    return-object p1

    .line 101
    :cond_0
    invoke-interface {p1, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object v2

    const-string v3, "com.android.phone"

    invoke-virtual {v2, v3}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v2

    if-eqz v2, :cond_1

    const-string p1, "com.android.phone"

    return-object p1

    .line 103
    :cond_1
    invoke-interface {p1, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object v2

    const-string v3, "call"

    invoke-virtual {v2, v3}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v2

    if-eqz v2, :cond_2

    .line 104
    invoke-interface {p1, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v1, "[ ]"

    invoke-virtual {p1, v1}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p1

    const/4 v1, 0x1

    aget-object p1, p1, v1

    const-string v1, "[/]"

    invoke-virtual {p1, v1}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p1

    aget-object p1, p1, v0

    return-object p1

    :cond_2
    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_3
    const-string p1, ""

    return-object p1
.end method

.method private isTelephonyEnabled()Z
    .locals 2

    .line 89
    iget-object v0, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    const-string v1, "phone"

    invoke-virtual {v0, v1}, Landroid/app/Activity;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/telephony/TelephonyManager;

    if-eqz v0, :cond_0

    .line 90
    invoke-virtual {v0}, Landroid/telephony/TelephonyManager;->getPhoneType()I

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 32
    iput-object p3, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->callbackContext:Lorg/apache/cordova/CallbackContext;

    .line 33
    iput-object p2, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->executeArgs:Lorg/json/JSONArray;

    const-string p2, "callNumber"

    .line 35
    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    const/4 p3, 0x0

    if-eqz p2, :cond_1

    .line 36
    iget-object p1, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string p2, "android.permission.CALL_PHONE"

    invoke-interface {p1, p2}, Lorg/apache/cordova/CordovaInterface;->hasPermission(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 37
    iget-object p1, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->executeArgs:Lorg/json/JSONArray;

    invoke-direct {p0, p1}, Lcom/rohithvaranasi/callnumber/CFCallNumber;->callPhone(Lorg/json/JSONArray;)V

    goto :goto_0

    .line 39
    :cond_0
    invoke-virtual {p0, p3}, Lcom/rohithvaranasi/callnumber/CFCallNumber;->getCallPermission(I)V

    goto :goto_0

    :cond_1
    const-string p2, "isCallSupported"

    .line 41
    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_2

    .line 42
    iget-object p1, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->callbackContext:Lorg/apache/cordova/CallbackContext;

    new-instance p2, Lorg/apache/cordova/PluginResult;

    sget-object p3, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p0}, Lcom/rohithvaranasi/callnumber/CFCallNumber;->isTelephonyEnabled()Z

    move-result v0

    invoke-direct {p2, p3, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Z)V

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    :goto_0
    const/4 p1, 0x1

    return p1

    :cond_2
    return p3
.end method

.method protected getCallPermission(I)V
    .locals 2

    .line 27
    iget-object v0, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->cordova:Lorg/apache/cordova/CordovaInterface;

    const-string v1, "android.permission.CALL_PHONE"

    invoke-interface {v0, p0, p1, v1}, Lorg/apache/cordova/CordovaInterface;->requestPermission(Lorg/apache/cordova/CordovaPlugin;ILjava/lang/String;)V

    return-void
.end method

.method public onRequestPermissionResult(I[Ljava/lang/String;[I)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 52
    array-length p2, p3

    const/4 v0, 0x0

    :goto_0
    if-ge v0, p2, :cond_1

    aget v1, p3, v0

    const/4 v2, -0x1

    if-ne v1, v2, :cond_0

    .line 54
    iget-object p1, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->callbackContext:Lorg/apache/cordova/CallbackContext;

    new-instance p2, Lorg/apache/cordova/PluginResult;

    sget-object p3, Lorg/apache/cordova/PluginResult$Status;->ERROR:Lorg/apache/cordova/PluginResult$Status;

    const/16 v0, 0x14

    invoke-direct {p2, p3, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;I)V

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void

    :cond_0
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    :cond_1
    if-eqz p1, :cond_2

    goto :goto_1

    .line 60
    :cond_2
    iget-object p1, p0, Lcom/rohithvaranasi/callnumber/CFCallNumber;->executeArgs:Lorg/json/JSONArray;

    invoke-direct {p0, p1}, Lcom/rohithvaranasi/callnumber/CFCallNumber;->callPhone(Lorg/json/JSONArray;)V

    :goto_1
    return-void
.end method
