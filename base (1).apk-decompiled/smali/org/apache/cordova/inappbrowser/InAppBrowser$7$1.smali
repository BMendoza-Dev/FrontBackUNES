.class Lorg/apache/cordova/inappbrowser/InAppBrowser$7$1;
.super Ljava/lang/Object;
.source "InAppBrowser.java"

# interfaces
.implements Landroid/view/View$OnClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->createCloseButton(I)Landroid/view/View;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;


# direct methods
.method constructor <init>(Lorg/apache/cordova/inappbrowser/InAppBrowser$7;)V
    .locals 0

    .line 772
    iput-object p1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$1;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onClick(Landroid/view/View;)V
    .locals 0

    .line 774
    iget-object p1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$1;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object p1, p1, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-virtual {p1}, Lorg/apache/cordova/inappbrowser/InAppBrowser;->closeDialog()V

    return-void
.end method
