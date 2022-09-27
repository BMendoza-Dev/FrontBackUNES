.class public Lcom/ionicframework/cordova/webview/IonicWebViewEngine;
.super Lorg/apache/cordova/engine/SystemWebViewEngine;
.source "IonicWebViewEngine.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/ionicframework/cordova/webview/IonicWebViewEngine$ServerClient;
    }
.end annotation


# static fields
.field private static final LAST_BINARY_VERSION_CODE:Ljava/lang/String; = "lastBinaryVersionCode"

.field private static final LAST_BINARY_VERSION_NAME:Ljava/lang/String; = "lastBinaryVersionName"

.field public static final TAG:Ljava/lang/String; = "IonicWebViewEngine"


# instance fields
.field private CDV_LOCAL_SERVER:Ljava/lang/String;

.field private localServer:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

.field private scheme:Ljava/lang/String;


# direct methods
.method public constructor <init>(Landroid/content/Context;Lorg/apache/cordova/CordovaPreferences;)V
    .locals 1

    .line 42
    new-instance v0, Lorg/apache/cordova/engine/SystemWebView;

    invoke-direct {v0, p1}, Lorg/apache/cordova/engine/SystemWebView;-><init>(Landroid/content/Context;)V

    invoke-direct {p0, v0, p2}, Lorg/apache/cordova/engine/SystemWebViewEngine;-><init>(Lorg/apache/cordova/engine/SystemWebView;Lorg/apache/cordova/CordovaPreferences;)V

    const-string p1, "IonicWebViewEngine"

    const-string p2, "Ionic Web View Engine Starting Right Up 1..."

    .line 43
    invoke-static {p1, p2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method public constructor <init>(Lorg/apache/cordova/engine/SystemWebView;)V
    .locals 1

    const/4 v0, 0x0

    .line 47
    invoke-direct {p0, p1, v0}, Lorg/apache/cordova/engine/SystemWebViewEngine;-><init>(Lorg/apache/cordova/engine/SystemWebView;Lorg/apache/cordova/CordovaPreferences;)V

    const-string p1, "IonicWebViewEngine"

    const-string v0, "Ionic Web View Engine Starting Right Up 2..."

    .line 48
    invoke-static {p1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method public constructor <init>(Lorg/apache/cordova/engine/SystemWebView;Lorg/apache/cordova/CordovaPreferences;)V
    .locals 0

    .line 52
    invoke-direct {p0, p1, p2}, Lorg/apache/cordova/engine/SystemWebViewEngine;-><init>(Lorg/apache/cordova/engine/SystemWebView;Lorg/apache/cordova/CordovaPreferences;)V

    const-string p1, "IonicWebViewEngine"

    const-string p2, "Ionic Web View Engine Starting Right Up 3..."

    .line 53
    invoke-static {p1, p2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    return-void
.end method

.method static synthetic access$000(Lcom/ionicframework/cordova/webview/IonicWebViewEngine;)Lcom/ionicframework/cordova/webview/WebViewLocalServer;
    .locals 0

    .line 29
    iget-object p0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->localServer:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    return-object p0
.end method

.method static synthetic access$100(Lcom/ionicframework/cordova/webview/IonicWebViewEngine;)Ljava/lang/String;
    .locals 0

    .line 29
    iget-object p0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->CDV_LOCAL_SERVER:Ljava/lang/String;

    return-object p0
.end method

.method static synthetic access$200(Lcom/ionicframework/cordova/webview/IonicWebViewEngine;)Ljava/lang/String;
    .locals 0

    .line 29
    iget-object p0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->scheme:Ljava/lang/String;

    return-object p0
.end method

.method private isDeployDisabled()Z
    .locals 3

    .line 112
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->preferences:Lorg/apache/cordova/CordovaPreferences;

    const-string v1, "DisableDeploy"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/apache/cordova/CordovaPreferences;->getBoolean(Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method private isNewBinary()Z
    .locals 9

    const-string v0, ""

    const-string v1, ""

    .line 88
    iget-object v2, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v2

    invoke-virtual {v2}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object v2

    const-string v3, "WebViewSettings"

    const/4 v4, 0x0

    invoke-virtual {v2, v3, v4}, Landroid/content/Context;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object v2

    const-string v3, "lastBinaryVersionCode"

    const/4 v5, 0x0

    .line 89
    invoke-interface {v2, v3, v5}, Landroid/content/SharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    const-string v6, "lastBinaryVersionName"

    .line 90
    invoke-interface {v2, v6, v5}, Landroid/content/SharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    .line 93
    :try_start_0
    iget-object v6, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v6}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v6

    invoke-virtual {v6}, Landroid/app/Activity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v6

    iget-object v7, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v7}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v7

    invoke-virtual {v7}, Landroid/app/Activity;->getPackageName()Ljava/lang/String;

    move-result-object v7

    invoke-virtual {v6, v7, v4}, Landroid/content/pm/PackageManager;->getPackageInfo(Ljava/lang/String;I)Landroid/content/pm/PackageInfo;

    move-result-object v6

    .line 94
    iget v7, v6, Landroid/content/pm/PackageInfo;->versionCode:I

    invoke-static {v7}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object v0

    .line 95
    iget-object v1, v6, Landroid/content/pm/PackageInfo;->versionName:Ljava/lang/String;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v6

    const-string v7, "IonicWebViewEngine"

    const-string v8, "Unable to get package info"

    .line 97
    invoke-static {v7, v8, v6}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 100
    :goto_0
    invoke-virtual {v0, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_1

    invoke-virtual {v1, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_0

    goto :goto_1

    :cond_0
    return v4

    .line 101
    :cond_1
    :goto_1
    invoke-interface {v2}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v2

    const-string v3, "lastBinaryVersionCode"

    .line 102
    invoke-interface {v2, v3, v0}, Landroid/content/SharedPreferences$Editor;->putString(Ljava/lang/String;Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    const-string v0, "lastBinaryVersionName"

    .line 103
    invoke-interface {v2, v0, v1}, Landroid/content/SharedPreferences$Editor;->putString(Ljava/lang/String;Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    const-string v0, "serverBasePath"

    const-string v1, ""

    .line 104
    invoke-interface {v2, v0, v1}, Landroid/content/SharedPreferences$Editor;->putString(Ljava/lang/String;Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 105
    invoke-interface {v2}, Landroid/content/SharedPreferences$Editor;->apply()V

    const/4 v0, 0x1

    return v0
.end method


# virtual methods
.method public getServerBasePath()Ljava/lang/String;
    .locals 1

    .line 164
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->localServer:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    invoke-virtual {v0}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->getBasePath()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public init(Lorg/apache/cordova/CordovaWebView;Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebViewEngine$Client;Lorg/apache/cordova/CordovaResourceApi;Lorg/apache/cordova/PluginManager;Lorg/apache/cordova/NativeToJsMessageQueue;)V
    .locals 8

    .line 60
    new-instance v6, Lorg/apache/cordova/ConfigXmlParser;

    invoke-direct {v6}, Lorg/apache/cordova/ConfigXmlParser;-><init>()V

    .line 61
    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v6, v0}, Lorg/apache/cordova/ConfigXmlParser;->parse(Landroid/content/Context;)V

    .line 63
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->preferences:Lorg/apache/cordova/CordovaPreferences;

    const-string v1, "Hostname"

    const-string v2, "localhost"

    invoke-virtual {v0, v1, v2}, Lorg/apache/cordova/CordovaPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    .line 64
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->preferences:Lorg/apache/cordova/CordovaPreferences;

    const-string v1, "Scheme"

    const-string v3, "http"

    invoke-virtual {v0, v1, v3}, Lorg/apache/cordova/CordovaPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->scheme:Ljava/lang/String;

    .line 65
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v1, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->scheme:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string v1, "://"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->CDV_LOCAL_SERVER:Ljava/lang/String;

    .line 67
    new-instance v7, Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    iget-object v5, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->scheme:Ljava/lang/String;

    const/4 v3, 0x1

    move-object v0, v7

    move-object v4, v6

    invoke-direct/range {v0 .. v5}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;-><init>(Landroid/content/Context;Ljava/lang/String;ZLorg/apache/cordova/ConfigXmlParser;Ljava/lang/String;)V

    iput-object v7, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->localServer:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    .line 68
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->localServer:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    const-string v1, "www"

    invoke-virtual {v0, v1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->hostAssets(Ljava/lang/String;)V

    .line 70
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->webView:Lorg/apache/cordova/engine/SystemWebView;

    new-instance v1, Lcom/ionicframework/cordova/webview/IonicWebViewEngine$ServerClient;

    invoke-direct {v1, p0, p0, v6}, Lcom/ionicframework/cordova/webview/IonicWebViewEngine$ServerClient;-><init>(Lcom/ionicframework/cordova/webview/IonicWebViewEngine;Lorg/apache/cordova/engine/SystemWebViewEngine;Lorg/apache/cordova/ConfigXmlParser;)V

    invoke-virtual {v0, v1}, Lorg/apache/cordova/engine/SystemWebView;->setWebViewClient(Landroid/webkit/WebViewClient;)V

    .line 72
    invoke-super/range {p0 .. p6}, Lorg/apache/cordova/engine/SystemWebViewEngine;->init(Lorg/apache/cordova/CordovaWebView;Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebViewEngine$Client;Lorg/apache/cordova/CordovaResourceApi;Lorg/apache/cordova/PluginManager;Lorg/apache/cordova/NativeToJsMessageQueue;)V

    .line 73
    sget p1, Landroid/os/Build$VERSION;->SDK_INT:I

    const/4 p3, 0x0

    const/16 p4, 0x15

    if-lt p1, p4, :cond_0

    .line 74
    iget-object p1, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->webView:Lorg/apache/cordova/engine/SystemWebView;

    invoke-virtual {p1}, Lorg/apache/cordova/engine/SystemWebView;->getSettings()Landroid/webkit/WebSettings;

    move-result-object p1

    .line 75
    iget-object p4, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->preferences:Lorg/apache/cordova/CordovaPreferences;

    const-string p5, "MixedContentMode"

    invoke-virtual {p4, p5, p3}, Lorg/apache/cordova/CordovaPreferences;->getInteger(Ljava/lang/String;I)I

    move-result p4

    .line 76
    invoke-virtual {p1, p4}, Landroid/webkit/WebSettings;->setMixedContentMode(I)V

    .line 78
    :cond_0
    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    invoke-virtual {p1}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object p1

    const-string p2, "WebViewSettings"

    invoke-virtual {p1, p2, p3}, Landroid/content/Context;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object p1

    const-string p2, "serverBasePath"

    const/4 p3, 0x0

    .line 79
    invoke-interface {p1, p2, p3}, Landroid/content/SharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 80
    invoke-direct {p0}, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->isDeployDisabled()Z

    move-result p2

    if-nez p2, :cond_1

    invoke-direct {p0}, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->isNewBinary()Z

    move-result p2

    if-nez p2, :cond_1

    if-eqz p1, :cond_1

    invoke-virtual {p1}, Ljava/lang/String;->isEmpty()Z

    move-result p2

    if-nez p2, :cond_1

    .line 81
    invoke-virtual {p0, p1}, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->setServerBasePath(Ljava/lang/String;)V

    :cond_1
    return-void
.end method

.method public setServerBasePath(Ljava/lang/String;)V
    .locals 1

    .line 159
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->localServer:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    invoke-virtual {v0, p1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->hostFiles(Ljava/lang/String;)V

    .line 160
    iget-object p1, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->webView:Lorg/apache/cordova/engine/SystemWebView;

    iget-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->CDV_LOCAL_SERVER:Ljava/lang/String;

    invoke-virtual {p1, v0}, Lorg/apache/cordova/engine/SystemWebView;->loadUrl(Ljava/lang/String;)V

    return-void
.end method
