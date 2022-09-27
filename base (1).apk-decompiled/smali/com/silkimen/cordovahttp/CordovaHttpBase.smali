.class abstract Lcom/silkimen/cordovahttp/CordovaHttpBase;
.super Ljava/lang/Object;
.source "CordovaHttpBase.java"

# interfaces
.implements Ljava/lang/Runnable;


# static fields
.field protected static final TAG:Ljava/lang/String; = "Cordova-Plugin-HTTP"


# instance fields
.field protected callbackContext:Lorg/apache/cordova/CallbackContext;

.field protected data:Ljava/lang/Object;

.field protected followRedirects:Z

.field protected headers:Lorg/json/JSONObject;

.field protected method:Ljava/lang/String;

.field protected responseType:Ljava/lang/String;

.field protected serializer:Ljava/lang/String;

.field protected timeout:I

.field protected tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

.field protected url:Ljava/lang/String;


# direct methods
.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;Lorg/json/JSONObject;IZLjava/lang/String;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V
    .locals 1

    .line 43
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const-string v0, "none"

    .line 32
    iput-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    .line 45
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->method:Ljava/lang/String;

    .line 46
    iput-object p2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->url:Ljava/lang/String;

    .line 47
    iput-object p3, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    .line 48
    iput-object p4, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    .line 49
    iput-object p5, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->headers:Lorg/json/JSONObject;

    .line 50
    iput p6, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->timeout:I

    .line 51
    iput-boolean p7, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->followRedirects:Z

    .line 52
    iput-object p8, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->responseType:Ljava/lang/String;

    .line 53
    iput-object p9, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    .line 54
    iput-object p10, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->callbackContext:Lorg/apache/cordova/CallbackContext;

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Lorg/json/JSONObject;IZLjava/lang/String;Lcom/silkimen/http/TLSConfiguration;Lorg/apache/cordova/CallbackContext;)V
    .locals 1

    .line 58
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const-string v0, "none"

    .line 32
    iput-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    .line 60
    iput-object p1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->method:Ljava/lang/String;

    .line 61
    iput-object p2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->url:Ljava/lang/String;

    .line 62
    iput-object p3, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->headers:Lorg/json/JSONObject;

    .line 63
    iput p4, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->timeout:I

    .line 64
    iput-boolean p5, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->followRedirects:Z

    .line 65
    iput-object p6, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->responseType:Ljava/lang/String;

    .line 66
    iput-object p7, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    .line 67
    iput-object p8, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->callbackContext:Lorg/apache/cordova/CallbackContext;

    return-void
.end method


# virtual methods
.method protected createRequest()Lcom/silkimen/http/HttpRequest;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 115
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->url:Ljava/lang/String;

    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->method:Ljava/lang/String;

    invoke-direct {v0, v1, v2}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/lang/CharSequence;Ljava/lang/String;)V

    return-object v0
.end method

.method protected prepareRequest(Lcom/silkimen/http/HttpRequest;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 119
    iget-boolean v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->followRedirects:Z

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->followRedirects(Z)Lcom/silkimen/http/HttpRequest;

    .line 120
    iget v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->timeout:I

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->readTimeout(I)Lcom/silkimen/http/HttpRequest;

    const-string v0, "UTF-8"

    .line 121
    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->acceptCharset(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    const/4 v0, 0x1

    .line 122
    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->uncompress(Z)Lcom/silkimen/http/HttpRequest;

    .line 123
    new-instance v0, Lcom/silkimen/http/OkConnectionFactory;

    invoke-direct {v0}, Lcom/silkimen/http/OkConnectionFactory;-><init>()V

    invoke-static {v0}, Lcom/silkimen/http/HttpRequest;->setConnectionFactory(Lcom/silkimen/http/HttpRequest$ConnectionFactory;)V

    .line 125
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v0}, Lcom/silkimen/http/TLSConfiguration;->getHostnameVerifier()Ljavax/net/ssl/HostnameVerifier;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 126
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v0}, Lcom/silkimen/http/TLSConfiguration;->getHostnameVerifier()Ljavax/net/ssl/HostnameVerifier;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->setHostnameVerifier(Ljavax/net/ssl/HostnameVerifier;)Lcom/silkimen/http/HttpRequest;

    .line 129
    :cond_0
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->tlsConfiguration:Lcom/silkimen/http/TLSConfiguration;

    invoke-virtual {v0}, Lcom/silkimen/http/TLSConfiguration;->getTLSSocketFactory()Ljavax/net/ssl/SSLSocketFactory;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->setSSLSocketFactory(Ljavax/net/ssl/SSLSocketFactory;)Lcom/silkimen/http/HttpRequest;

    .line 132
    invoke-virtual {p0, p1}, Lcom/silkimen/cordovahttp/CordovaHttpBase;->setContentType(Lcom/silkimen/http/HttpRequest;)V

    .line 134
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->headers:Lorg/json/JSONObject;

    invoke-static {v0}, Lcom/silkimen/http/JsonUtils;->getStringMap(Lorg/json/JSONObject;)Ljava/util/HashMap;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->headers(Ljava/util/Map;)Lcom/silkimen/http/HttpRequest;

    return-void
.end method

.method protected processResponse(Lcom/silkimen/http/HttpRequest;Lcom/silkimen/cordovahttp/CordovaHttpResponse;)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 162
    new-instance v0, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v0}, Ljava/io/ByteArrayOutputStream;-><init>()V

    .line 163
    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->receive(Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;

    .line 165
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    invoke-virtual {p2, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 166
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->url()Ljava/net/URL;

    move-result-object v1

    invoke-virtual {v1}, Ljava/net/URL;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p2, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setUrl(Ljava/lang/String;)V

    .line 167
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->headers()Ljava/util/Map;

    move-result-object v1

    invoke-virtual {p2, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setHeaders(Ljava/util/Map;)V

    .line 169
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    const/16 v2, 0xc8

    if-lt v1, v2, :cond_1

    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    const/16 v2, 0x12c

    if-ge v1, v2, :cond_1

    const-string v1, "text"

    .line 170
    iget-object v2, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->responseType:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 171
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object v0

    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->charset()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/silkimen/http/HttpBodyDecoder;->decodeBody([BLjava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 172
    invoke-virtual {p2, p1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setBody(Ljava/lang/String;)V

    goto :goto_0

    .line 174
    :cond_0
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object p1

    invoke-virtual {p2, p1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setData([B)V

    goto :goto_0

    .line 177
    :cond_1
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object v0

    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest;->charset()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/silkimen/http/HttpBodyDecoder;->decodeBody([BLjava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public run()V
    .locals 4

    .line 72
    new-instance v0, Lcom/silkimen/cordovahttp/CordovaHttpResponse;

    invoke-direct {v0}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;-><init>()V

    const/4 v1, -0x1

    .line 75
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/cordovahttp/CordovaHttpBase;->createRequest()Lcom/silkimen/http/HttpRequest;

    move-result-object v2

    .line 76
    invoke-virtual {p0, v2}, Lcom/silkimen/cordovahttp/CordovaHttpBase;->prepareRequest(Lcom/silkimen/http/HttpRequest;)V

    .line 77
    invoke-virtual {p0, v2}, Lcom/silkimen/cordovahttp/CordovaHttpBase;->sendBody(Lcom/silkimen/http/HttpRequest;)V

    .line 78
    invoke-virtual {p0, v2, v0}, Lcom/silkimen/cordovahttp/CordovaHttpBase;->processResponse(Lcom/silkimen/http/HttpRequest;Lcom/silkimen/cordovahttp/CordovaHttpResponse;)V
    :try_end_0
    .catch Lcom/silkimen/http/HttpRequest$HttpRequestException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto/16 :goto_0

    :catch_0
    move-exception v2

    .line 98
    invoke-virtual {v0, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 99
    invoke-virtual {v2}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    const-string v1, "Cordova-Plugin-HTTP"

    const-string v3, "An unexpected error occured"

    .line 100
    invoke-static {v1, v3, v2}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto/16 :goto_0

    :catch_1
    move-exception v2

    .line 80
    invoke-virtual {v2}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getCause()Ljava/io/IOException;

    move-result-object v3

    instance-of v3, v3, Ljavax/net/ssl/SSLException;

    if-eqz v3, :cond_0

    const/4 v1, -0x2

    .line 81
    invoke-virtual {v0, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 82
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v3, "TLS connection could not be established: "

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getMessage()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    const-string v1, "Cordova-Plugin-HTTP"

    const-string v3, "TLS connection could not be established"

    .line 83
    invoke-static {v1, v3, v2}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto/16 :goto_0

    .line 84
    :cond_0
    invoke-virtual {v2}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getCause()Ljava/io/IOException;

    move-result-object v3

    instance-of v3, v3, Ljava/net/UnknownHostException;

    if-eqz v3, :cond_1

    const/4 v1, -0x3

    .line 85
    invoke-virtual {v0, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 86
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v3, "Host could not be resolved: "

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getMessage()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    const-string v1, "Cordova-Plugin-HTTP"

    const-string v3, "Host could not be resolved"

    .line 87
    invoke-static {v1, v3, v2}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto :goto_0

    .line 88
    :cond_1
    invoke-virtual {v2}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getCause()Ljava/io/IOException;

    move-result-object v3

    instance-of v3, v3, Ljava/net/SocketTimeoutException;

    if-eqz v3, :cond_2

    const/4 v1, -0x4

    .line 89
    invoke-virtual {v0, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 90
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v3, "Request timed out: "

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getMessage()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    const-string v1, "Cordova-Plugin-HTTP"

    const-string v3, "Request timed out"

    .line 91
    invoke-static {v1, v3, v2}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto :goto_0

    .line 93
    :cond_2
    invoke-virtual {v0, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setStatus(I)V

    .line 94
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v3, "There was an error with the request: "

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v2}, Lcom/silkimen/http/HttpRequest$HttpRequestException;->getCause()Ljava/io/IOException;

    move-result-object v3

    invoke-virtual {v3}, Ljava/io/IOException;->getMessage()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->setErrorMessage(Ljava/lang/String;)V

    const-string v1, "Cordova-Plugin-HTTP"

    const-string v3, "Generic request error"

    .line 95
    invoke-static {v1, v3, v2}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 104
    :goto_0
    :try_start_1
    invoke-virtual {v0}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->hasFailed()Z

    move-result v1

    if-eqz v1, :cond_3

    .line 105
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->toJSON()Lorg/json/JSONObject;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->error(Lorg/json/JSONObject;)V

    goto :goto_1

    .line 107
    :cond_3
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lcom/silkimen/cordovahttp/CordovaHttpResponse;->toJSON()Lorg/json/JSONObject;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_2

    goto :goto_1

    :catch_2
    move-exception v0

    const-string v1, "Cordova-Plugin-HTTP"

    const-string v2, "An unexpected error occured while creating HTTP response object"

    .line 110
    invoke-static {v1, v2, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    :goto_1
    return-void
.end method

.method protected sendBody(Lcom/silkimen/http/HttpRequest;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 148
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    if-nez v0, :cond_0

    return-void

    :cond_0
    const-string v0, "json"

    .line 152
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 153
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->send(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    goto :goto_0

    :cond_1
    const-string v0, "utf8"

    .line 154
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 155
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    check-cast v0, Lorg/json/JSONObject;

    const-string v1, "text"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->send(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    goto :goto_0

    :cond_2
    const-string v0, "urlencoded"

    .line 156
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_3

    .line 157
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->data:Ljava/lang/Object;

    check-cast v0, Lorg/json/JSONObject;

    invoke-static {v0}, Lcom/silkimen/http/JsonUtils;->getObjectMap(Lorg/json/JSONObject;)Ljava/util/HashMap;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->form(Ljava/util/Map;)Lcom/silkimen/http/HttpRequest;

    :cond_3
    :goto_0
    return-void
.end method

.method protected setContentType(Lcom/silkimen/http/HttpRequest;)V
    .locals 2

    const-string v0, "json"

    .line 138
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    const-string v0, "application/json"

    const-string v1, "UTF-8"

    .line 139
    invoke-virtual {p1, v0, v1}, Lcom/silkimen/http/HttpRequest;->contentType(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    goto :goto_0

    :cond_0
    const-string v0, "utf8"

    .line 140
    iget-object v1, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    const-string v0, "text/plain"

    const-string v1, "UTF-8"

    .line 141
    invoke-virtual {p1, v0, v1}, Lcom/silkimen/http/HttpRequest;->contentType(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    goto :goto_0

    :cond_1
    const-string p1, "urlencoded"

    .line 142
    iget-object v0, p0, Lcom/silkimen/cordovahttp/CordovaHttpBase;->serializer:Ljava/lang/String;

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    :goto_0
    return-void
.end method
