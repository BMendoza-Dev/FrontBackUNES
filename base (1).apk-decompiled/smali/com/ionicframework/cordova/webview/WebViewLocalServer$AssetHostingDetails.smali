.class public Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;
.super Ljava/lang/Object;
.source "WebViewLocalServer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/ionicframework/cordova/webview/WebViewLocalServer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "AssetHostingDetails"
.end annotation


# instance fields
.field private httpPrefix:Landroid/net/Uri;

.field private httpsPrefix:Landroid/net/Uri;


# direct methods
.method constructor <init>(Landroid/net/Uri;Landroid/net/Uri;)V
    .locals 0

    .line 142
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 143
    iput-object p1, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;->httpPrefix:Landroid/net/Uri;

    .line 144
    iput-object p2, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;->httpsPrefix:Landroid/net/Uri;

    return-void
.end method


# virtual methods
.method public getHttpPrefix()Landroid/net/Uri;
    .locals 1

    .line 153
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;->httpPrefix:Landroid/net/Uri;

    return-object v0
.end method

.method public getHttpsPrefix()Landroid/net/Uri;
    .locals 1

    .line 162
    iget-object v0, p0, Lcom/ionicframework/cordova/webview/WebViewLocalServer$AssetHostingDetails;->httpsPrefix:Landroid/net/Uri;

    return-object v0
.end method
