.class Lorg/apache/cordova/file/FileUtils$21;
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

    .line 505
    iput-object p1, p0, Lorg/apache/cordova/file/FileUtils$21;->this$0:Lorg/apache/cordova/file/FileUtils;

    iput-object p2, p0, Lorg/apache/cordova/file/FileUtils$21;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run(Lorg/json/JSONArray;)V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;,
            Lorg/apache/cordova/file/NoModificationAllowedException;,
            Ljava/io/IOException;,
            Lorg/apache/cordova/file/InvalidModificationException;,
            Lorg/apache/cordova/file/EncodingException;,
            Lorg/apache/cordova/file/FileExistsException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 507
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x1

    .line 508
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v2

    const/4 v3, 0x2

    .line 509
    invoke-virtual {p1, v3}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    .line 510
    iget-object v3, p0, Lorg/apache/cordova/file/FileUtils$21;->this$0:Lorg/apache/cordova/file/FileUtils;

    invoke-static {v3, v0, v2, p1, v1}, Lorg/apache/cordova/file/FileUtils;->access$1300(Lorg/apache/cordova/file/FileUtils;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)Lorg/json/JSONObject;

    move-result-object p1

    .line 511
    iget-object v0, p0, Lorg/apache/cordova/file/FileUtils$21;->val$callbackContext:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0, p1}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    return-void
.end method
