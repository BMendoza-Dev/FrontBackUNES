.class Lorg/apache/cordova/file/FileUtils$8;
.super Ljava/lang/Object;
.source "FileUtils.java"

# interfaces
.implements Lorg/apache/cordova/file/FileUtils$FileOp;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/file/FileUtils;->execute(Ljava/lang/String;Ljava/lang/String;Lorg/apache/cordova/CallbackContext;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/file/FileUtils;

.field final synthetic val$callbackContext:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lorg/apache/cordova/file/FileUtils;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 342
    iput-object p1, p0, Lorg/apache/cordova/file/FileUtils$8;->this$0:Lorg/apache/cordova/file/FileUtils;

    iput-object p2, p0, Lorg/apache/cordova/file/FileUtils$8;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run(Lorg/json/JSONArray;)V
    .locals 8
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;,
            Ljava/net/MalformedURLException;
        }
    .end annotation

    const/4 v0, 0x1

    .line 344
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getInt(I)I

    move-result v3

    const/4 v0, 0x2

    .line 345
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getInt(I)I

    move-result v4

    const/4 v0, 0x0

    .line 346
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v2

    .line 347
    iget-object v1, p0, Lorg/apache/cordova/file/FileUtils$8;->this$0:Lorg/apache/cordova/file/FileUtils;

    iget-object v5, p0, Lorg/apache/cordova/file/FileUtils$8;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    const/4 v6, 0x0

    const/4 v7, 0x7

    invoke-virtual/range {v1 .. v7}, Lorg/apache/cordova/file/FileUtils;->readFileAs(Ljava/lang/String;IILorg/apache/cordova/CallbackContext;Ljava/lang/String;I)V

    return-void
.end method
