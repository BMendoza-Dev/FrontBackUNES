.class Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;
.super Lcom/ionicframework/cordova/webview/WebViewLocalServer$LazyInputStream;
.source "WebViewLocalServer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/ionicframework/cordova/webview/WebViewLocalServer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "LollipopLazyInputStream"
.end annotation


# instance fields
.field private is:Ljava/io/InputStream;

.field private uri:Landroid/net/Uri;


# direct methods
.method public constructor <init>(Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;Landroid/net/Uri;)V
    .locals 0

    .line 632
    invoke-direct {p0, p1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$LazyInputStream;-><init>(Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;)V

    .line 633
    iput-object p2, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;->uri:Landroid/net/Uri;

    return-void
.end method


# virtual methods
.method protected handle()Ljava/io/InputStream;
    .locals 2

    .line 638
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;->handler:Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;

    iget-object v1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;->uri:Landroid/net/Uri;

    invoke-virtual {v0, v1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->handle(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object v0

    return-object v0
.end method
