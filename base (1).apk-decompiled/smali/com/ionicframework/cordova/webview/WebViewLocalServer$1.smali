.class Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;
.super Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;
.source "WebViewLocalServer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/ionicframework/cordova/webview/WebViewLocalServer;->createHostingDetails()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

.field final synthetic val$assetPath:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/ionicframework/cordova/webview/WebViewLocalServer;Ljava/lang/String;)V
    .locals 0

    .line 434
    iput-object p1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;->this$0:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    iput-object p2, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;->val$assetPath:Ljava/lang/String;

    invoke-direct {p0}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;-><init>()V

    return-void
.end method


# virtual methods
.method public handle(Landroid/net/Uri;)Ljava/io/InputStream;
    .locals 4

    .line 438
    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v0

    :try_start_0
    const-string v1, "/_app_content_"

    .line 440
    invoke-virtual {v0, v1}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 441
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;->this$0:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    invoke-static {v0}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->access$000(Lcom/ionicframework/cordova/webview/WebViewLocalServer;)Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;->openContentUrl(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object p1

    goto :goto_1

    :cond_0
    const-string v1, "/_app_file_"

    .line 442
    invoke-virtual {v0, v1}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v1

    if-nez v1, :cond_2

    iget-object v1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;->this$0:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    invoke-static {v1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->access$100(Lcom/ionicframework/cordova/webview/WebViewLocalServer;)Z

    move-result v1

    if-nez v1, :cond_1

    goto :goto_0

    .line 448
    :cond_1
    iget-object v1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;->this$0:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    invoke-static {v1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->access$000(Lcom/ionicframework/cordova/webview/WebViewLocalServer;)Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;

    move-result-object v1

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v3, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;->val$assetPath:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;->openAsset(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object p1

    goto :goto_1

    :cond_2
    :goto_0
    const-string v1, "/_app_file_"

    .line 443
    invoke-virtual {v0, v1}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v1

    if-nez v1, :cond_3

    .line 444
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;->this$0:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    invoke-static {v1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->access$200(Lcom/ionicframework/cordova/webview/WebViewLocalServer;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 446
    :cond_3
    iget-object v1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;->this$0:Lcom/ionicframework/cordova/webview/WebViewLocalServer;

    invoke-static {v1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->access$000(Lcom/ionicframework/cordova/webview/WebViewLocalServer;)Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;

    move-result-object v1

    invoke-virtual {v1, v0}, Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;->openFile(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object p1
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    :goto_1
    return-object p1

    .line 451
    :catch_0
    invoke-static {}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->access$300()Ljava/lang/String;

    move-result-object v0

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v2, "Unable to open asset URL: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    const/4 p1, 0x0

    return-object p1
.end method
