.class Lcom/silkimen/http/HttpRequest$6;
.super Lcom/silkimen/http/HttpRequest$CloseOperation;
.source "HttpRequest.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/silkimen/http/HttpRequest;->copy(Ljava/io/InputStream;Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Lcom/silkimen/http/HttpRequest$CloseOperation<",
        "Lcom/silkimen/http/HttpRequest;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Lcom/silkimen/http/HttpRequest;

.field final synthetic val$input:Ljava/io/InputStream;

.field final synthetic val$output:Ljava/io/OutputStream;


# direct methods
.method constructor <init>(Lcom/silkimen/http/HttpRequest;Ljava/io/Closeable;ZLjava/io/InputStream;Ljava/io/OutputStream;)V
    .locals 0

    .line 2486
    iput-object p1, p0, Lcom/silkimen/http/HttpRequest$6;->this$0:Lcom/silkimen/http/HttpRequest;

    iput-object p4, p0, Lcom/silkimen/http/HttpRequest$6;->val$input:Ljava/io/InputStream;

    iput-object p5, p0, Lcom/silkimen/http/HttpRequest$6;->val$output:Ljava/io/OutputStream;

    invoke-direct {p0, p2, p3}, Lcom/silkimen/http/HttpRequest$CloseOperation;-><init>(Ljava/io/Closeable;Z)V

    return-void
.end method


# virtual methods
.method public run()Lcom/silkimen/http/HttpRequest;
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 2490
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest$6;->this$0:Lcom/silkimen/http/HttpRequest;

    invoke-static {v0}, Lcom/silkimen/http/HttpRequest;->access$100(Lcom/silkimen/http/HttpRequest;)I

    move-result v0

    new-array v0, v0, [B

    .line 2492
    :goto_0
    iget-object v1, p0, Lcom/silkimen/http/HttpRequest$6;->val$input:Ljava/io/InputStream;

    invoke-virtual {v1, v0}, Ljava/io/InputStream;->read([B)I

    move-result v1

    const/4 v2, -0x1

    if-eq v1, v2, :cond_0

    .line 2493
    iget-object v2, p0, Lcom/silkimen/http/HttpRequest$6;->val$output:Ljava/io/OutputStream;

    const/4 v3, 0x0

    invoke-virtual {v2, v0, v3, v1}, Ljava/io/OutputStream;->write([BII)V

    .line 2494
    iget-object v2, p0, Lcom/silkimen/http/HttpRequest$6;->this$0:Lcom/silkimen/http/HttpRequest;

    invoke-static {v2}, Lcom/silkimen/http/HttpRequest;->access$200(Lcom/silkimen/http/HttpRequest;)J

    move-result-wide v3

    int-to-long v5, v1

    add-long/2addr v3, v5

    invoke-static {v2, v3, v4}, Lcom/silkimen/http/HttpRequest;->access$202(Lcom/silkimen/http/HttpRequest;J)J

    .line 2495
    iget-object v1, p0, Lcom/silkimen/http/HttpRequest$6;->this$0:Lcom/silkimen/http/HttpRequest;

    invoke-static {v1}, Lcom/silkimen/http/HttpRequest;->access$400(Lcom/silkimen/http/HttpRequest;)Lcom/silkimen/http/HttpRequest$UploadProgress;

    move-result-object v1

    iget-object v2, p0, Lcom/silkimen/http/HttpRequest$6;->this$0:Lcom/silkimen/http/HttpRequest;

    invoke-static {v2}, Lcom/silkimen/http/HttpRequest;->access$200(Lcom/silkimen/http/HttpRequest;)J

    move-result-wide v2

    iget-object v4, p0, Lcom/silkimen/http/HttpRequest$6;->this$0:Lcom/silkimen/http/HttpRequest;

    invoke-static {v4}, Lcom/silkimen/http/HttpRequest;->access$300(Lcom/silkimen/http/HttpRequest;)J

    move-result-wide v4

    invoke-interface {v1, v2, v3, v4, v5}, Lcom/silkimen/http/HttpRequest$UploadProgress;->onUpload(JJ)V

    goto :goto_0

    .line 2497
    :cond_0
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest$6;->this$0:Lcom/silkimen/http/HttpRequest;

    return-object v0
.end method

.method public bridge synthetic run()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 2486
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest$6;->run()Lcom/silkimen/http/HttpRequest;

    move-result-object v0

    return-object v0
.end method
