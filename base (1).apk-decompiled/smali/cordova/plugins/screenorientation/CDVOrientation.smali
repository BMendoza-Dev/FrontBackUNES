.class public Lcordova/plugins/screenorientation/CDVOrientation;
.super Lorg/apache/cordova/CordovaPlugin;
.source "CDVOrientation.java"


# static fields
.field private static final ANY:Ljava/lang/String; = "any"

.field private static final LANDSCAPE:Ljava/lang/String; = "landscape"

.field private static final LANDSCAPE_PRIMARY:Ljava/lang/String; = "landscape-primary"

.field private static final LANDSCAPE_SECONDARY:Ljava/lang/String; = "landscape-secondary"

.field private static final PORTRAIT:Ljava/lang/String; = "portrait"

.field private static final PORTRAIT_PRIMARY:Ljava/lang/String; = "portrait-primary"

.field private static final PORTRAIT_SECONDARY:Ljava/lang/String; = "portrait-secondary"

.field private static final TAG:Ljava/lang/String; = "YoikScreenOrientation"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 34
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method private routeScreenOrientation(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 5

    const/4 v0, 0x0

    .line 67
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->optString(I)Ljava/lang/String;

    const/4 v1, 0x1

    .line 71
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->optString(I)Ljava/lang/String;

    move-result-object p1

    const-string v2, "YoikScreenOrientation"

    .line 73
    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    const-string v4, "Requested ScreenOrientation: "

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 75
    iget-object v2, p0, Lcordova/plugins/screenorientation/CDVOrientation;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v2

    const-string v3, "any"

    .line 77
    invoke-virtual {p1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_0

    const/4 p1, -0x1

    .line 78
    invoke-virtual {v2, p1}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_0

    :cond_0
    const-string v3, "landscape-primary"

    .line 79
    invoke-virtual {p1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_1

    .line 80
    invoke-virtual {v2, v0}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_0

    :cond_1
    const-string v0, "portrait-primary"

    .line 81
    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 82
    invoke-virtual {v2, v1}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_0

    :cond_2
    const-string v0, "landscape"

    .line 83
    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_3

    const/4 p1, 0x6

    .line 84
    invoke-virtual {v2, p1}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_0

    :cond_3
    const-string v0, "portrait"

    .line 85
    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_4

    const/4 p1, 0x7

    .line 86
    invoke-virtual {v2, p1}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_0

    :cond_4
    const-string v0, "landscape-secondary"

    .line 87
    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_5

    const/16 p1, 0x8

    .line 88
    invoke-virtual {v2, p1}, Landroid/app/Activity;->setRequestedOrientation(I)V

    goto :goto_0

    :cond_5
    const-string v0, "portrait-secondary"

    .line 89
    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_6

    const/16 p1, 0x9

    .line 90
    invoke-virtual {v2, p1}, Landroid/app/Activity;->setRequestedOrientation(I)V

    .line 93
    :cond_6
    :goto_0
    invoke-virtual {p2}, Lorg/apache/cordova/CallbackContext;->success()V

    return v1
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 3

    const-string v0, "YoikScreenOrientation"

    .line 53
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v2, "execute action: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    const-string v0, "screenOrientation"

    .line 56
    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 57
    invoke-direct {p0, p2, p3}, Lcordova/plugins/screenorientation/CDVOrientation;->routeScreenOrientation(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z

    move-result p1

    return p1

    :cond_0
    const-string p1, "action not recognised"

    .line 61
    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    const/4 p1, 0x0

    return p1
.end method
