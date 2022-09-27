.class public Lcom/ionicframework/cordova/webview/WebViewLocalServer;
.super Ljava/lang/Object;
.source "WebViewLocalServer.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;,
        Lcom/ionicframework/cordova/webview/WebViewLocalServer$LazyInputStream;,
        Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;,
        Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;
    }
.end annotation


# static fields
.field private static TAG:Ljava/lang/String; = "WebViewAssetServer"

.field public static final contentStart:Ljava/lang/String; = "/_app_content_"

.field public static final fileStart:Ljava/lang/String; = "/_app_file_"

.field public static final httpScheme:Ljava/lang/String; = "http"

.field public static final httpsScheme:Ljava/lang/String; = "https"


# instance fields
.field private final authority:Ljava/lang/String;

.field private basePath:Ljava/lang/String;

.field private final customScheme:Ljava/lang/String;

.field private final html5mode:Z

.field private isAsset:Z

.field private parser:Lorg/apache/cordova/ConfigXmlParser;

.field private final protocolHandler:Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;

.field private final uriMatcher:Lcom/ionicframework/cordova/webview/UriMatcher;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method constructor <init>(Landroid/content/Context;Ljava/lang/String;ZLorg/apache/cordova/ConfigXmlParser;Ljava/lang/String;)V
    .locals 2

    .line 166
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 167
    new-instance v0, Lcom/ionicframework/cordova/webview/UriMatcher;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Lcom/ionicframework/cordova/webview/UriMatcher;-><init>(Ljava/lang/Object;)V

    iput-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->uriMatcher:Lcom/ionicframework/cordova/webview/UriMatcher;

    .line 168
    iput-boolean p3, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->html5mode:Z

    .line 169
    iput-object p4, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->parser:Lorg/apache/cordova/ConfigXmlParser;

    .line 170
    new-instance p3, Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;

    invoke-virtual {p1}, Landroid/content/Context;->getApplicationContext()Landroid/content/Context;

    move-result-object p1

    invoke-direct {p3, p1}, Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;-><init>(Landroid/content/Context;)V

    iput-object p3, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->protocolHandler:Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;

    .line 171
    iput-object p2, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->authority:Ljava/lang/String;

    .line 172
    iput-object p5, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->customScheme:Ljava/lang/String;

    return-void
.end method

.method static synthetic access$000(Lcom/ionicframework/cordova/webview/WebViewLocalServer;)Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;
    .locals 0

    .line 49
    iget-object p0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->protocolHandler:Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;

    return-object p0
.end method

.method static synthetic access$100(Lcom/ionicframework/cordova/webview/WebViewLocalServer;)Z
    .locals 0

    .line 49
    iget-boolean p0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->isAsset:Z

    return p0
.end method

.method static synthetic access$200(Lcom/ionicframework/cordova/webview/WebViewLocalServer;)Ljava/lang/String;
    .locals 0

    .line 49
    iget-object p0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->basePath:Ljava/lang/String;

    return-object p0
.end method

.method static synthetic access$300()Ljava/lang/String;
    .locals 1

    .line 49
    sget-object v0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->TAG:Ljava/lang/String;

    return-object v0
.end method

.method private createHostingDetails()V
    .locals 3

    .line 428
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->basePath:Ljava/lang/String;

    const/16 v1, 0x2a

    .line 430
    invoke-virtual {v0, v1}, Ljava/lang/String;->indexOf(I)I

    move-result v1

    const/4 v2, -0x1

    if-ne v1, v2, :cond_1

    .line 434
    new-instance v1, Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;

    invoke-direct {v1, p0, v0}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$1;-><init>(Lcom/ionicframework/cordova/webview/WebViewLocalServer;Ljava/lang/String;)V

    const-string v0, "http"

    .line 459
    iget-object v2, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->authority:Ljava/lang/String;

    invoke-direct {p0, v0, v1, v2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->registerUriForScheme(Ljava/lang/String;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;Ljava/lang/String;)V

    const-string v0, "https"

    .line 460
    iget-object v2, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->authority:Ljava/lang/String;

    invoke-direct {p0, v0, v1, v2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->registerUriForScheme(Ljava/lang/String;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;Ljava/lang/String;)V

    .line 461
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->customScheme:Ljava/lang/String;

    const-string v2, "http"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->customScheme:Ljava/lang/String;

    const-string v2, "https"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 462
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->customScheme:Ljava/lang/String;

    iget-object v2, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->authority:Ljava/lang/String;

    invoke-direct {p0, v0, v1, v2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->registerUriForScheme(Ljava/lang/String;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;Ljava/lang/String;)V

    :cond_0
    return-void

    .line 431
    :cond_1
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "assetPath cannot contain the \'*\' character."

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method private static createWebResourceResponse(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;Ljava/io/InputStream;)Landroid/webkit/WebResourceResponse;
    .locals 7
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
            ">;",
            "Ljava/io/InputStream;",
            ")",
            "Landroid/webkit/WebResourceResponse;"
        }
    .end annotation

    .line 193
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x15

    if-lt v0, v1, :cond_1

    .line 196
    :try_start_0
    invoke-virtual {p5}, Ljava/io/InputStream;->available()I

    move-result v0
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    if-nez v0, :cond_0

    const/16 p2, 0x194

    :cond_0
    move v3, p2

    goto :goto_0

    :catch_0
    const/16 p2, 0x1f4

    const/16 v3, 0x1f4

    .line 202
    :goto_0
    new-instance p2, Landroid/webkit/WebResourceResponse;

    move-object v0, p2

    move-object v1, p0

    move-object v2, p1

    move-object v4, p3

    move-object v5, p4

    move-object v6, p5

    invoke-direct/range {v0 .. v6}, Landroid/webkit/WebResourceResponse;-><init>(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;Ljava/io/InputStream;)V

    return-object p2

    .line 204
    :cond_1
    new-instance p2, Landroid/webkit/WebResourceResponse;

    invoke-direct {p2, p0, p1, p5}, Landroid/webkit/WebResourceResponse;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/io/InputStream;)V

    return-object p2
.end method

.method private getMimeType(Ljava/lang/String;Ljava/io/InputStream;)Ljava/lang/String;
    .locals 4

    .line 358
    :try_start_0
    invoke-static {p1}, Ljava/net/URLConnection;->guessContentTypeFromName(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1

    if-eqz v0, :cond_0

    :try_start_1
    const-string v1, ".js"

    .line 359
    invoke-virtual {p1, v1}, Ljava/lang/String;->endsWith(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    const-string v1, "image/x-icon"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    const-string v1, "IonicWebViewEngine"

    const-string v2, "We shouldn\'t be here"

    .line 360
    invoke-static {v1, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_0

    :catch_0
    move-exception p2

    goto :goto_2

    :cond_0
    :goto_0
    if-nez v0, :cond_4

    const-string v1, ".js"

    .line 363
    invoke-virtual {p1, v1}, Ljava/lang/String;->endsWith(Ljava/lang/String;)Z

    move-result v1

    if-nez v1, :cond_3

    const-string v1, ".mjs"

    invoke-virtual {p1, v1}, Ljava/lang/String;->endsWith(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    goto :goto_1

    :cond_1
    const-string v1, ".wasm"

    .line 366
    invoke-virtual {p1, v1}, Ljava/lang/String;->endsWith(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_2

    const-string v0, "application/wasm"

    goto :goto_3

    .line 369
    :cond_2
    invoke-static {p2}, Ljava/net/URLConnection;->guessContentTypeFromStream(Ljava/io/InputStream;)Ljava/lang/String;

    move-result-object v0

    goto :goto_3

    :cond_3
    :goto_1
    const-string v0, "application/javascript"
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_3

    :catch_1
    move-exception p2

    const/4 v0, 0x0

    .line 373
    :goto_2
    sget-object v1, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->TAG:Ljava/lang/String;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-string v3, "Unable to get mime type"

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v1, p1, p2}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    :cond_4
    :goto_3
    return-object v0
.end method

.method private handleLocalRequest(Landroid/net/Uri;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;Landroid/webkit/WebResourceRequest;)Landroid/webkit/WebResourceResponse;
    .locals 9

    .line 244
    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v0

    .line 245
    sget v1, Landroid/os/Build$VERSION;->SDK_INT:I

    const/4 v2, 0x1

    const/16 v3, 0x15

    if-lt v1, v3, :cond_1

    if-eqz p3, :cond_1

    invoke-interface {p3}, Landroid/webkit/WebResourceRequest;->getRequestHeaders()Ljava/util/Map;

    move-result-object v1

    const-string v3, "Range"

    invoke-interface {v1, v3}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    if-eqz v1, :cond_1

    .line 246
    new-instance v8, Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;

    invoke-direct {v8, p2, p1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;-><init>(Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;Landroid/net/Uri;)V

    .line 247
    invoke-direct {p0, v0, v8}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->getMimeType(Ljava/lang/String;Ljava/io/InputStream;)Ljava/lang/String;

    move-result-object v3

    .line 248
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getResponseHeaders()Ljava/util/Map;

    move-result-object v7

    const/16 p1, 0xce

    .line 251
    :try_start_0
    invoke-virtual {v8}, Ljava/io/InputStream;->available()I

    move-result v0

    .line 252
    invoke-interface {p3}, Landroid/webkit/WebResourceRequest;->getRequestHeaders()Ljava/util/Map;

    move-result-object p3

    const-string v1, "Range"

    invoke-interface {p3, v1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p3

    check-cast p3, Ljava/lang/String;

    const-string v1, "="

    .line 253
    invoke-virtual {p3, v1}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p3

    .line 254
    aget-object p3, p3, v2

    const-string v1, "-"

    invoke-virtual {p3, v1}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p3

    const/4 v1, 0x0

    .line 255
    aget-object v1, p3, v1

    add-int/lit8 v4, v0, -0x1

    .line 257
    array-length v5, p3

    if-le v5, v2, :cond_0

    .line 258
    aget-object p3, p3, v2

    invoke-static {p3}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result v4

    :cond_0
    const-string p3, "Accept-Ranges"

    const-string v2, "bytes"

    .line 260
    invoke-interface {v7, p3, v2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    const-string p3, "Content-Range"

    .line 261
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-string v5, "bytes "

    invoke-virtual {v2, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string v1, "-"

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2, v4}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    const-string v1, "/"

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {v7, p3, v0}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    const/16 v5, 0xce

    goto :goto_0

    :catch_0
    const/16 p1, 0x194

    const/16 v5, 0x194

    .line 265
    :goto_0
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getEncoding()Ljava/lang/String;

    move-result-object v4

    .line 266
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getReasonPhrase()Ljava/lang/String;

    move-result-object v6

    .line 265
    invoke-static/range {v3 .. v8}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->createWebResourceResponse(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;Ljava/io/InputStream;)Landroid/webkit/WebResourceResponse;

    move-result-object p1

    return-object p1

    .line 268
    :cond_1
    invoke-direct {p0, p1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->isLocalFile(Landroid/net/Uri;)Z

    move-result p3

    if-eqz p3, :cond_2

    .line 269
    new-instance v8, Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;

    invoke-direct {v8, p2, p1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;-><init>(Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;Landroid/net/Uri;)V

    .line 270
    invoke-direct {p0, v0, v8}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->getMimeType(Ljava/lang/String;Ljava/io/InputStream;)Ljava/lang/String;

    move-result-object v3

    .line 271
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getEncoding()Ljava/lang/String;

    move-result-object v4

    .line 272
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getStatusCode()I

    move-result v5

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getReasonPhrase()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getResponseHeaders()Ljava/util/Map;

    move-result-object v7

    .line 271
    invoke-static/range {v3 .. v8}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->createWebResourceResponse(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;Ljava/io/InputStream;)Landroid/webkit/WebResourceResponse;

    move-result-object p1

    return-object p1

    :cond_2
    const-string p3, ""

    .line 275
    invoke-virtual {v0, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    const/4 v1, 0x0

    if-nez p3, :cond_5

    const-string p3, "/"

    invoke-virtual {v0, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-nez p3, :cond_5

    invoke-virtual {p1}, Landroid/net/Uri;->getLastPathSegment()Ljava/lang/String;

    move-result-object p3

    const-string v3, "."

    invoke-virtual {p3, v3}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result p3

    if-nez p3, :cond_3

    iget-boolean p3, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->html5mode:Z

    if-eqz p3, :cond_3

    goto :goto_1

    :cond_3
    const-string p3, "."

    .line 296
    invoke-virtual {v0, p3}, Ljava/lang/String;->lastIndexOf(Ljava/lang/String;)I

    move-result p3

    if-ltz p3, :cond_4

    .line 298
    new-instance v7, Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;

    invoke-direct {v7, p2, p1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$LollipopLazyInputStream;-><init>(Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;Landroid/net/Uri;)V

    .line 299
    invoke-direct {p0, v0, v7}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->getMimeType(Ljava/lang/String;Ljava/io/InputStream;)Ljava/lang/String;

    move-result-object v2

    .line 300
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getEncoding()Ljava/lang/String;

    move-result-object v3

    .line 301
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getStatusCode()I

    move-result v4

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getReasonPhrase()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getResponseHeaders()Ljava/util/Map;

    move-result-object v6

    .line 300
    invoke-static/range {v2 .. v7}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->createWebResourceResponse(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;Ljava/io/InputStream;)Landroid/webkit/WebResourceResponse;

    move-result-object p1

    return-object p1

    :cond_4
    return-object v1

    .line 277
    :cond_5
    :goto_1
    iget-object p1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->parser:Lorg/apache/cordova/ConfigXmlParser;

    invoke-virtual {p1}, Lorg/apache/cordova/ConfigXmlParser;->getLaunchUrl()Ljava/lang/String;

    move-result-object p1

    const-string p3, "/"

    .line 278
    invoke-virtual {p1, p3}, Ljava/lang/String;->lastIndexOf(Ljava/lang/String;)I

    move-result p3

    add-int/2addr p3, v2

    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v0

    invoke-virtual {p1, p3, v0}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object p1

    .line 280
    :try_start_1
    new-instance p3, Ljava/lang/StringBuilder;

    invoke-direct {p3}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->basePath:Ljava/lang/String;

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string v0, "/"

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {p3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {p3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p3

    .line 281
    iget-boolean v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->isAsset:Z

    if-eqz v0, :cond_6

    .line 282
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->protocolHandler:Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;

    invoke-virtual {v0, p3}, Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;->openAsset(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object p1

    move-object v5, p1

    goto :goto_2

    .line 284
    :cond_6
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->protocolHandler:Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;

    invoke-virtual {v0, p3}, Lcom/ionicframework/cordova/webview/AndroidProtocolHandler;->openFile(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object p1
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_1

    move-object v5, p1

    :goto_2
    const-string v0, "text/html"

    .line 292
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getEncoding()Ljava/lang/String;

    move-result-object v1

    .line 293
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getStatusCode()I

    move-result v2

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getReasonPhrase()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getResponseHeaders()Ljava/util/Map;

    move-result-object v4

    .line 292
    invoke-static/range {v0 .. v5}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->createWebResourceResponse(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;Ljava/io/InputStream;)Landroid/webkit/WebResourceResponse;

    move-result-object p1

    return-object p1

    :catch_1
    move-exception p2

    .line 288
    sget-object p3, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->TAG:Ljava/lang/String;

    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    const-string v2, "Unable to open "

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p3, p1, p2}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    return-object v1
.end method

.method private handleProxyRequest(Landroid/net/Uri;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;)Landroid/webkit/WebResourceResponse;
    .locals 9

    .line 316
    :try_start_0
    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v0

    .line 317
    new-instance v1, Ljava/net/URL;

    invoke-virtual {p1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-direct {v1, v2}, Ljava/net/URL;-><init>(Ljava/lang/String;)V

    .line 318
    invoke-virtual {v1}, Ljava/net/URL;->openConnection()Ljava/net/URLConnection;

    move-result-object v1

    check-cast v1, Ljava/net/HttpURLConnection;

    const-string v2, "GET"

    .line 319
    invoke-virtual {v1, v2}, Ljava/net/HttpURLConnection;->setRequestMethod(Ljava/lang/String;)V

    const/16 v2, 0x7530

    .line 320
    invoke-virtual {v1, v2}, Ljava/net/HttpURLConnection;->setReadTimeout(I)V

    .line 321
    invoke-virtual {v1, v2}, Ljava/net/HttpURLConnection;->setConnectTimeout(I)V

    .line 323
    invoke-virtual {v1}, Ljava/net/HttpURLConnection;->getInputStream()Ljava/io/InputStream;

    move-result-object v8

    const-string v1, "/"

    .line 325
    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-nez v1, :cond_2

    invoke-virtual {p1}, Landroid/net/Uri;->getLastPathSegment()Ljava/lang/String;

    move-result-object p1

    const-string v1, "."

    invoke-virtual {p1, v1}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result p1

    if-nez p1, :cond_0

    iget-boolean p1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->html5mode:Z

    if-eqz p1, :cond_0

    goto :goto_0

    :cond_0
    const-string p1, "."

    .line 330
    invoke-virtual {v0, p1}, Ljava/lang/String;->lastIndexOf(Ljava/lang/String;)I

    move-result p1

    if-ltz p1, :cond_1

    const-string p1, "."

    .line 332
    invoke-virtual {v0, p1}, Ljava/lang/String;->lastIndexOf(Ljava/lang/String;)I

    move-result p1

    invoke-virtual {v0}, Ljava/lang/String;->length()I

    move-result v1

    invoke-virtual {v0, p1, v1}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object p1

    const-string v1, ".html"

    .line 335
    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    .line 338
    invoke-direct {p0, v0, v8}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->getMimeType(Ljava/lang/String;Ljava/io/InputStream;)Ljava/lang/String;

    move-result-object v3

    .line 340
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getEncoding()Ljava/lang/String;

    move-result-object v4

    .line 341
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getStatusCode()I

    move-result v5

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getReasonPhrase()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getResponseHeaders()Ljava/util/Map;

    move-result-object v7

    .line 340
    invoke-static/range {v3 .. v8}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->createWebResourceResponse(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;Ljava/io/InputStream;)Landroid/webkit/WebResourceResponse;

    move-result-object p1

    return-object p1

    :cond_1
    const-string v3, ""

    .line 344
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getEncoding()Ljava/lang/String;

    move-result-object v4

    .line 345
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getStatusCode()I

    move-result v5

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getReasonPhrase()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getResponseHeaders()Ljava/util/Map;

    move-result-object v7

    .line 344
    invoke-static/range {v3 .. v8}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->createWebResourceResponse(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;Ljava/io/InputStream;)Landroid/webkit/WebResourceResponse;

    move-result-object p1

    return-object p1

    :cond_2
    :goto_0
    const-string v3, "text/html"

    .line 326
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getEncoding()Ljava/lang/String;

    move-result-object v4

    .line 327
    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getStatusCode()I

    move-result v5

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getReasonPhrase()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;->getResponseHeaders()Ljava/util/Map;

    move-result-object v7

    .line 326
    invoke-static/range {v3 .. v8}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->createWebResourceResponse(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Map;Ljava/io/InputStream;)Landroid/webkit/WebResourceResponse;

    move-result-object p1
    :try_end_0
    .catch Ljava/net/SocketTimeoutException; {:try_start_0 .. :try_end_0} :catch_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    const/4 p1, 0x0

    return-object p1
.end method

.method private isLocalFile(Landroid/net/Uri;)Z
    .locals 1

    .line 235
    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object p1

    const-string v0, "/_app_content_"

    .line 236
    invoke-virtual {p1, v0}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    const-string v0, "/_app_file_"

    invoke-virtual {p1, v0}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    return p1

    :cond_1
    :goto_0
    const/4 p1, 0x1

    return p1
.end method

.method private static parseAndVerifyUrl(Ljava/lang/String;)Landroid/net/Uri;
    .locals 4

    const/4 v0, 0x0

    if-nez p0, :cond_0

    return-object v0

    .line 179
    :cond_0
    invoke-static {p0}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v1

    if-nez v1, :cond_1

    .line 181
    sget-object v1, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->TAG:Ljava/lang/String;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-string v3, "Malformed URL: "

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {v1, p0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    return-object v0

    .line 184
    :cond_1
    invoke-virtual {v1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v2

    if-eqz v2, :cond_3

    .line 185
    invoke-virtual {v2}, Ljava/lang/String;->length()I

    move-result v2

    if-nez v2, :cond_2

    goto :goto_0

    :cond_2
    return-object v1

    .line 186
    :cond_3
    :goto_0
    sget-object v1, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->TAG:Ljava/lang/String;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-string v3, "URL does not have a path: "

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {v1, p0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    return-object v0
.end method

.method private registerUriForScheme(Ljava/lang/String;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;Ljava/lang/String;)V
    .locals 1

    .line 468
    new-instance v0, Landroid/net/Uri$Builder;

    invoke-direct {v0}, Landroid/net/Uri$Builder;-><init>()V

    .line 469
    invoke-virtual {v0, p1}, Landroid/net/Uri$Builder;->scheme(Ljava/lang/String;)Landroid/net/Uri$Builder;

    .line 470
    invoke-virtual {v0, p3}, Landroid/net/Uri$Builder;->authority(Ljava/lang/String;)Landroid/net/Uri$Builder;

    const-string p1, ""

    .line 471
    invoke-virtual {v0, p1}, Landroid/net/Uri$Builder;->path(Ljava/lang/String;)Landroid/net/Uri$Builder;

    .line 472
    invoke-virtual {v0}, Landroid/net/Uri$Builder;->build()Landroid/net/Uri;

    move-result-object p1

    const-string p3, "/"

    .line 474
    invoke-static {p1, p3}, Landroid/net/Uri;->withAppendedPath(Landroid/net/Uri;Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p3

    invoke-virtual {p0, p3, p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->register(Landroid/net/Uri;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;)V

    const-string p3, "**"

    .line 475
    invoke-static {p1, p3}, Landroid/net/Uri;->withAppendedPath(Landroid/net/Uri;Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p1

    invoke-virtual {p0, p1, p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->register(Landroid/net/Uri;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;)V

    return-void
.end method


# virtual methods
.method public getAuthority()Ljava/lang/String;
    .locals 1

    .line 68
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->authority:Ljava/lang/String;

    return-object v0
.end method

.method public getBasePath()Ljava/lang/String;
    .locals 1

    .line 643
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->basePath:Ljava/lang/String;

    return-object v0
.end method

.method public hostAssets(Ljava/lang/String;)V
    .locals 1

    .line 405
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->authority:Ljava/lang/String;

    invoke-virtual {p0, v0, p1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->hostAssets(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public hostAssets(Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    const/4 p1, 0x1

    .line 421
    iput-boolean p1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->isAsset:Z

    .line 422
    iput-object p2, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->basePath:Ljava/lang/String;

    .line 424
    invoke-direct {p0}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->createHostingDetails()V

    return-void
.end method

.method public hostFiles(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 569
    iput-boolean v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->isAsset:Z

    .line 570
    iput-object p1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->basePath:Ljava/lang/String;

    .line 571
    invoke-direct {p0}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->createHostingDetails()V

    return-void
.end method

.method public hostResources()Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;
    .locals 3

    .line 485
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->authority:Ljava/lang/String;

    const-string v1, "/res"

    const/4 v2, 0x1

    invoke-virtual {p0, v0, v1, v2, v2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->hostResources(Ljava/lang/String;Ljava/lang/String;ZZ)Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;

    move-result-object v0

    return-object v0
.end method

.method public hostResources(Ljava/lang/String;Ljava/lang/String;ZZ)Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;
    .locals 2

    const/16 v0, 0x2a

    .line 519
    invoke-virtual {p2, v0}, Ljava/lang/String;->indexOf(I)I

    move-result v0

    const/4 v1, -0x1

    if-ne v0, v1, :cond_2

    .line 524
    new-instance v0, Landroid/net/Uri$Builder;

    invoke-direct {v0}, Landroid/net/Uri$Builder;-><init>()V

    const-string v1, "http"

    .line 525
    invoke-virtual {v0, v1}, Landroid/net/Uri$Builder;->scheme(Ljava/lang/String;)Landroid/net/Uri$Builder;

    .line 526
    invoke-virtual {v0, p1}, Landroid/net/Uri$Builder;->authority(Ljava/lang/String;)Landroid/net/Uri$Builder;

    .line 527
    invoke-virtual {v0, p2}, Landroid/net/Uri$Builder;->path(Ljava/lang/String;)Landroid/net/Uri$Builder;

    .line 532
    new-instance p1, Lcom/ionicframework/cordova/webview/WebViewLocalServer$2;

    invoke-direct {p1, p0}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$2;-><init>(Lcom/ionicframework/cordova/webview/WebViewLocalServer;)V

    const/4 p2, 0x0

    if-eqz p3, :cond_0

    .line 548
    invoke-virtual {v0}, Landroid/net/Uri$Builder;->build()Landroid/net/Uri;

    move-result-object p3

    const-string v1, "**"

    .line 549
    invoke-static {p3, v1}, Landroid/net/Uri;->withAppendedPath(Landroid/net/Uri;Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v1

    invoke-virtual {p0, v1, p1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->register(Landroid/net/Uri;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;)V

    goto :goto_0

    :cond_0
    move-object p3, p2

    :goto_0
    if-eqz p4, :cond_1

    const-string p2, "https"

    .line 552
    invoke-virtual {v0, p2}, Landroid/net/Uri$Builder;->scheme(Ljava/lang/String;)Landroid/net/Uri$Builder;

    .line 553
    invoke-virtual {v0}, Landroid/net/Uri$Builder;->build()Landroid/net/Uri;

    move-result-object p2

    const-string p4, "**"

    .line 554
    invoke-static {p2, p4}, Landroid/net/Uri;->withAppendedPath(Landroid/net/Uri;Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p4

    invoke-virtual {p0, p4, p1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->register(Landroid/net/Uri;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;)V

    .line 556
    :cond_1
    new-instance p1, Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;

    invoke-direct {p1, p3, p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;-><init>(Landroid/net/Uri;Landroid/net/Uri;)V

    return-object p1

    .line 520
    :cond_2
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "virtualResourcesPath cannot contain the \'*\' character."

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public hostResources(Ljava/lang/String;ZZ)Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;
    .locals 1

    .line 500
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->authority:Ljava/lang/String;

    invoke-virtual {p0, v0, p1, p2, p3}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->hostResources(Ljava/lang/String;Ljava/lang/String;ZZ)Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;

    move-result-object p1

    return-object p1
.end method

.method register(Landroid/net/Uri;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;)V
    .locals 4

    .line 391
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->uriMatcher:Lcom/ionicframework/cordova/webview/UriMatcher;

    monitor-enter v0

    .line 392
    :try_start_0
    iget-object v1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->uriMatcher:Lcom/ionicframework/cordova/webview/UriMatcher;

    invoke-virtual {p1}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {p1}, Landroid/net/Uri;->getAuthority()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v1, v2, v3, p1, p2}, Lcom/ionicframework/cordova/webview/UriMatcher;->addURI(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V

    .line 393
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method public shouldInterceptRequest(Landroid/net/Uri;Landroid/webkit/WebResourceRequest;)Landroid/webkit/WebResourceResponse;
    .locals 4

    .line 219
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->uriMatcher:Lcom/ionicframework/cordova/webview/UriMatcher;

    monitor-enter v0

    .line 220
    :try_start_0
    iget-object v1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->uriMatcher:Lcom/ionicframework/cordova/webview/UriMatcher;

    invoke-virtual {v1, p1}, Lcom/ionicframework/cordova/webview/UriMatcher;->match(Landroid/net/Uri;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;

    .line 221
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v1, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 226
    :cond_0
    invoke-direct {p0, p1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->isLocalFile(Landroid/net/Uri;)Z

    move-result v0

    if-nez v0, :cond_2

    invoke-virtual {p1}, Landroid/net/Uri;->getAuthority()Ljava/lang/String;

    move-result-object v0

    iget-object v2, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->authority:Ljava/lang/String;

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    goto :goto_0

    .line 230
    :cond_1
    invoke-direct {p0, p1, v1}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->handleProxyRequest(Landroid/net/Uri;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;)Landroid/webkit/WebResourceResponse;

    move-result-object p1

    return-object p1

    :cond_2
    :goto_0
    const-string v0, "SERVER"

    .line 227
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-string v3, "Handling local request: "

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {p1}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v0, v2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 228
    invoke-direct {p0, p1, v1, p2}, Lcom/ionicframework/cordova/webview/WebViewLocalServer;->handleLocalRequest(Landroid/net/Uri;Lcom/ionicframework/cordova/webview/WebViewLocalServer$PathHandler;Landroid/webkit/WebResourceRequest;)Landroid/webkit/WebResourceResponse;

    move-result-object p1

    return-object p1

    :catchall_0
    move-exception p1

    .line 221
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method
