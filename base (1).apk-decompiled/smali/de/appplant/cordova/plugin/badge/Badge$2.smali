.class Lde/appplant/cordova/plugin/badge/Badge$2;
.super Ljava/lang/Object;
.source "Badge.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lde/appplant/cordova/plugin/badge/Badge;->saveConfig(Lorg/json/JSONObject;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lde/appplant/cordova/plugin/badge/Badge;

.field final synthetic val$config:Lorg/json/JSONObject;


# direct methods
.method constructor <init>(Lde/appplant/cordova/plugin/badge/Badge;Lorg/json/JSONObject;)V
    .locals 0

    .line 105
    iput-object p1, p0, Lde/appplant/cordova/plugin/badge/Badge$2;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    iput-object p2, p0, Lde/appplant/cordova/plugin/badge/Badge$2;->val$config:Lorg/json/JSONObject;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 108
    iget-object v0, p0, Lde/appplant/cordova/plugin/badge/Badge$2;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    invoke-static {v0}, Lde/appplant/cordova/plugin/badge/Badge;->access$000(Lde/appplant/cordova/plugin/badge/Badge;)Lde/appplant/cordova/plugin/badge/BadgeImpl;

    move-result-object v0

    iget-object v1, p0, Lde/appplant/cordova/plugin/badge/Badge$2;->val$config:Lorg/json/JSONObject;

    invoke-virtual {v0, v1}, Lde/appplant/cordova/plugin/badge/BadgeImpl;->saveConfig(Lorg/json/JSONObject;)V

    return-void
.end method
