.class Lde/appplant/cordova/plugin/badge/Badge$3;
.super Ljava/lang/Object;
.source "Badge.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lde/appplant/cordova/plugin/badge/Badge;->clearBadge(Lorg/apache/cordova/CallbackContext;)V
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

    .line 119
    iput-object p1, p0, Lde/appplant/cordova/plugin/badge/Badge$3;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    iput-object p2, p0, Lde/appplant/cordova/plugin/badge/Badge$3;->val$callback:Lorg/apache/cordova/CallbackContext;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 122
    iget-object v0, p0, Lde/appplant/cordova/plugin/badge/Badge$3;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    invoke-static {v0}, Lde/appplant/cordova/plugin/badge/Badge;->access$000(Lde/appplant/cordova/plugin/badge/Badge;)Lde/appplant/cordova/plugin/badge/BadgeImpl;

    move-result-object v0

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/badge/BadgeImpl;->clearBadge()V

    .line 123
    iget-object v0, p0, Lde/appplant/cordova/plugin/badge/Badge$3;->this$0:Lde/appplant/cordova/plugin/badge/Badge;

    invoke-static {v0}, Lde/appplant/cordova/plugin/badge/Badge;->access$000(Lde/appplant/cordova/plugin/badge/Badge;)Lde/appplant/cordova/plugin/badge/BadgeImpl;

    move-result-object v0

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/badge/BadgeImpl;->getBadge()I

    move-result v0

    .line 124
    iget-object v1, p0, Lde/appplant/cordova/plugin/badge/Badge$3;->val$callback:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->success(I)V

    return-void
.end method
