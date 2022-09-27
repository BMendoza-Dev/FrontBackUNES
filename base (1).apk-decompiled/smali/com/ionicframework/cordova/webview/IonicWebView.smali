.class public Lcom/ionicframework/cordova/webview/IonicWebView;
.super Lorg/apache/cordova/CordovaPlugin;
.source "IonicWebView.java"


# static fields
.field public static final CDV_SERVER_PATH:Ljava/lang/String; = "serverBasePath"

.field public static final WEBVIEW_PREFS_NAME:Ljava/lang/String; = "WebViewSettings"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 11
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

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

    const-string v0, "setServerBasePath"

    .line 18
    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    const/4 v1, 0x1

    const/4 v2, 0x0

    if-eqz v0, :cond_0

    .line 19
    invoke-virtual {p2, v2}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    .line 20
    iget-object p2, p0, Lcom/ionicframework/cordova/webview/IonicWebView;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p2

    new-instance p3, Lcom/ionicframework/cordova/webview/IonicWebView$1;

    invoke-direct {p3, p0, p1}, Lcom/ionicframework/cordova/webview/IonicWebView$1;-><init>(Lcom/ionicframework/cordova/webview/IonicWebView;Ljava/lang/String;)V

    invoke-virtual {p2, p3}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return v1

    :cond_0
    const-string p2, "getServerBasePath"

    .line 26
    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_1

    .line 27
    iget-object p1, p0, Lcom/ionicframework/cordova/webview/IonicWebView;->webView:Lorg/apache/cordova/CordovaWebView;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaWebView;->getEngine()Lorg/apache/cordova/CordovaWebViewEngine;

    move-result-object p1

    check-cast p1, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;

    invoke-virtual {p1}, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->getServerBasePath()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    return v1

    :cond_1
    const-string p2, "persistServerBasePath"

    .line 29
    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_2

    .line 30
    iget-object p1, p0, Lcom/ionicframework/cordova/webview/IonicWebView;->webView:Lorg/apache/cordova/CordovaWebView;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaWebView;->getEngine()Lorg/apache/cordova/CordovaWebViewEngine;

    move-result-object p1

    check-cast p1, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;

    invoke-virtual {p1}, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->getServerBasePath()Ljava/lang/String;

    move-result-object p1

    .line 31
    iget-object p2, p0, Lcom/ionicframework/cordova/webview/IonicWebView;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p2

    invoke-virtual {p2}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;

    move-result-object p2

    const-string p3, "WebViewSettings"

    invoke-virtual {p2, p3, v2}, Landroid/content/Context;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object p2

    .line 32
    invoke-interface {p2}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object p2

    const-string p3, "serverBasePath"

    .line 33
    invoke-interface {p2, p3, p1}, Landroid/content/SharedPreferences$Editor;->putString(Ljava/lang/String;Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 34
    invoke-interface {p2}, Landroid/content/SharedPreferences$Editor;->apply()V

    return v1

    :cond_2
    return v2
.end method
