.class Lde/appplant/cordova/plugin/badge/Badge$1;
.super Ljava/lang/Object;
.source "Badge.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lde/appplant/cordova/plugin/badge/Badge;->loadConfig(Lorg/apache/cordova/CallbackContext;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lde/appplant/cordova/plugin/badge/Badge;

.field final synthetic val$callback:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lde/appplant/cordova/plugin/badge/Badge;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 90
    iput-object p1, p0, Lde/appplant/cordova/plugin/badge/Badge$1;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    iput-object p2, p0, Lde/appplant/cordova/plugin/badge/Badge$1;->val$callback:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 93
    iget-object v0, p0, Lde/appplant/cordova/plugin/badge/Badge$1;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    invoke-static {v0}, Lde/appplant/cordova/plugin/badge/Badge;->access$000(Lde/appplant/cordova/plugin/badge/Badge;)Lde/appplant/cordova/plugin/badge/BadgeImpl;

    move-result-object v0

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/badge/BadgeImpl;->loadConfig()Lorg/json/JSONObject;

    move-result-object v0

    .line 94
    iget-object v1, p0, Lde/appplant/cordova/plugin/badge/Badge$1;->val$callback:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->success(Lorg/json/JSONObject;)V

    return-void
.end method
