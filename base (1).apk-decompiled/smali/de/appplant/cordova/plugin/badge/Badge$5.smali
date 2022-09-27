.class Lde/appplant/cordova/plugin/badge/Badge$5;
.super Ljava/lang/Object;
.source "Badge.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lde/appplant/cordova/plugin/badge/Badge;->setBadge(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lde/appplant/cordova/plugin/badge/Badge;

.field final synthetic val$args:Lorg/json/JSONArray;

.field final synthetic val$callback:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lde/appplant/cordova/plugin/badge/Badge;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 0

    .line 153
    iput-object p1, p0, Lde/appplant/cordova/plugin/badge/Badge$5;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    iput-object p2, p0, Lde/appplant/cordova/plugin/badge/Badge$5;->val$args:Lorg/json/JSONArray;

    iput-object p3, p0, Lde/appplant/cordova/plugin/badge/Badge$5;->val$callback:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 156
    iget-object v0, p0, Lde/appplant/cordova/plugin/badge/Badge$5;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    invoke-static {v0}, Lde/appplant/cordova/plugin/badge/Badge;->access$000(Lde/appplant/cordova/plugin/badge/Badge;)Lde/appplant/cordova/plugin/badge/BadgeImpl;

    move-result-object v0

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/badge/BadgeImpl;->clearBadge()V

    .line 157
    iget-object v0, p0, Lde/appplant/cordova/plugin/badge/Badge$5;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    invoke-static {v0}, Lde/appplant/cordova/plugin/badge/Badge;->access$000(Lde/appplant/cordova/plugin/badge/Badge;)Lde/appplant/cordova/plugin/badge/BadgeImpl;

    move-result-object v0

    iget-object v1, p0, Lde/appplant/cordova/plugin/badge/Badge$5;->val$args:Lorg/json/JSONArray;

    const/4 v2, 0x0

    invoke-virtual {v1, v2}, Lorg/json/JSONArray;->optInt(I)I

    move-result v1

    invoke-virtual {v0, v1}, Lde/appplant/cordova/plugin/badge/BadgeImpl;->setBadge(I)V

    .line 158
    iget-object v0, p0, Lde/appplant/cordova/plugin/badge/Badge$5;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    invoke-static {v0}, Lde/appplant/cordova/plugin/badge/Badge;->access$000(Lde/appplant/cordova/plugin/badge/Badge;)Lde/appplant/cordova/plugin/badge/BadgeImpl;

    move-result-object v0

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/badge/BadgeImpl;->getBadge()I

    move-result v0

    .line 159
    iget-object v1, p0, Lde/appplant/cordova/plugin/badge/Badge$5;->val$callback:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->success(I)V

    return-void
.end method
