.class Lcom/ionicframework/cordova/webview/IonicWebView$1;
.super Ljava/lang/Object;
.source "IonicWebView.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/ionicframework/cordova/webview/IonicWebView;->execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/ionicframework/cordova/webview/IonicWebView;

.field final synthetic val$path:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/ionicframework/cordova/webview/IonicWebView;Ljava/lang/String;)V
    .locals 0

    .line 20
    iput-object p1, p0, Lcom/ionicframework/cordova/webview/IonicWebView$1;->this$0:Lcom/ionicframework/cordova/webview/IonicWebView;

    iput-object p2, p0, Lcom/ionicframework/cordova/webview/IonicWebView$1;->val$path:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 22
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/IonicWebView$1;->this$0:Lcom/ionicframework/cordova/webview/IonicWebView;

    iget-object v0, v0, Lcom/ionicframework/cordova/webview/IonicWebView;->webView:Lorg/apache/cordova/CordovaWebView;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaWebView;->getEngine()Lorg/apache/cordova/CordovaWebViewEngine;

    move-result-object v0

    check-cast v0, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;

    iget-object v1, p0, Lcom/ionicframework/cordova/webview/IonicWebView$1;->val$path:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/ionicframework/cordova/webview/IonicWebViewEngine;->setServerBasePath(Ljava/lang/String;)V

    return-void
.end method
