.class public abstract Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;
.super Ljava/lang/Object;
.source "WebViewLocalServer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/ionicframework/cordova/webview/WebViewLocalServer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "PathHandler"
.end annotation


# instance fields
.field private charset:Ljava/lang/String;

.field private encoding:Ljava/lang/String;

.field protected mimeType:Ljava/lang/String;

.field private reasonPhrase:Ljava/lang/String;

.field private responseHeaders:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private statusCode:I


# direct methods
.method public constructor <init>()V
    .locals 6

    const-string v4, "OK"

    const/4 v1, 0x0

    const/4 v2, 0x0

    const/16 v3, 0xc8

    const/4 v5, 0x0

    move-object v0, p0

    .line 93
    invoke-direct/range {v0 .. v5}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;-><init>(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;)V

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "I",
            "Ljava/lang/String;",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 97
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 98
    iput-object p1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->encoding:Ljava/lang/String;

    .line 99
    iput-object p2, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->charset:Ljava/lang/String;

    .line 100
    iput p3, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->statusCode:I

    .line 101
    iput-object p4, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->reasonPhrase:Ljava/lang/String;

    if-nez p5, :cond_0

    .line 104
    new-instance p5, Ljava/util/HashMap;

    invoke-direct {p5}, Ljava/util/HashMap;-><init>()V

    :cond_0
    const-string p1, "Cache-Control"

    const-string p2, "no-cache"

    .line 108
    invoke-interface {p5, p1, p2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 109
    iput-object p5, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->responseHeaders:Ljava/util/Map;

    return-void
.end method


# virtual methods
.method public getCharset()Ljava/lang/String;
    .locals 1

    .line 119
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->charset:Ljava/lang/String;

    return-object v0
.end method

.method public getEncoding()Ljava/lang/String;
    .locals 1

    .line 115
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->encoding:Ljava/lang/String;

    return-object v0
.end method

.method public getReasonPhrase()Ljava/lang/String;
    .locals 1

    .line 127
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->reasonPhrase:Ljava/lang/String;

    return-object v0
.end method

.method public getResponseHeaders()Ljava/util/Map;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 131
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->responseHeaders:Ljava/util/Map;

    return-object v0
.end method

.method public getStatusCode()I
    .locals 1

    .line 123
    iget v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->statusCode:I

    return v0
.end method

.method public abstract handle(Landroid/net/Uri;)Ljava/io/InputStream;
.end method
