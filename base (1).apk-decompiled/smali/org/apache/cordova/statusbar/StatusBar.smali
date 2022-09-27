.class public Lorg/apache/cordova/statusbar/StatusBar;
.super Lorg/apache/cordova/CordovaPlugin;
.source "StatusBar.java"


# static fields
.field private static final TAG:Ljava/lang/String; = "StatusBar"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 39
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lorg/apache/cordova/statusbar/StatusBar;)Lorg/apache/cordova/CordovaPreferences;
    .locals 0

    .line 39
    iget-object p0, p0, Lorg/apache/cordova/statusbar/StatusBar;->preferences:Lorg/apache/cordova/CordovaPreferences;

    return-object p0
.end method

.method static synthetic access$100(Lorg/apache/cordova/statusbar/StatusBar;Ljava/lang/String;)V
    .locals 0

    .line 39
    invoke-direct {p0, p1}, Lorg/apache/cordova/statusbar/StatusBar;->setStatusBarBackgroundColor(Ljava/lang/String;)V

    return-void
.end method

.method static synthetic access$200(Lorg/apache/cordova/statusbar/StatusBar;)Lorg/apache/cordova/CordovaPreferences;
    .locals 0

    .line 39
    iget-object p0, p0, Lorg/apache/cordova/statusbar/StatusBar;->preferences:Lorg/apache/cordova/CordovaPreferences;

    return-object p0
.end method

.method static synthetic access$300(Lorg/apache/cordova/statusbar/StatusBar;Ljava/lang/String;)V
    .locals 0

    .line 39
    invoke-direct {p0, p1}, Lorg/apache/cordova/statusbar/StatusBar;->setStatusBarStyle(Ljava/lang/String;)V

    return-void
.end method

.method static synthetic access$400(Lorg/apache/cordova/statusbar/StatusBar;Z)V
    .locals 0

    .line 39
    invoke-direct {p0, p1}, Lorg/apache/cordova/statusbar/StatusBar;->setStatusBarTransparent(Z)V

    return-void
.end method

.method private setStatusBarBackgroundColor(Ljava/lang/String;)V
    .locals 7

    .line 210
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x15

    if-lt v0, v1, :cond_0

    if-eqz p1, :cond_0

    .line 211
    invoke-virtual {p1}, Ljava/lang/String;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_0

    .line 212
    iget-object v0, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v0

    const/high16 v1, 0x4000000

    .line 214
    invoke-virtual {v0, v1}, Landroid/view/Window;->clearFlags(I)V

    const/high16 v1, -0x80000000

    .line 215
    invoke-virtual {v0, v1}, Landroid/view/Window;->addFlags(I)V

    .line 218
    :try_start_0
    invoke-virtual {v0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v1

    const-string v2, "setStatusBarColor"

    const/4 v3, 0x1

    new-array v4, v3, [Ljava/lang/Class;

    sget-object v5, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    const/4 v6, 0x0

    aput-object v5, v4, v6

    invoke-virtual {v1, v2, v4}, Ljava/lang/Class;->getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v1

    new-array v2, v3, [Ljava/lang/Object;

    invoke-static {p1}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result p1

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    aput-object p1, v2, v6

    invoke-virtual {v1, v0, v2}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;
    :try_end_0
    .catch Ljava/lang/IllegalArgumentException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    const-string p1, "StatusBar"

    .line 223
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    const-string v1, "Method window.setStatusBarColor not found for SDK level "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    sget v1, Landroid/os/Build$VERSION;->SDK_INT:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {p1, v0}, Lorg/apache/cordova/LOG;->w(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_0

    :catch_1
    const-string p1, "StatusBar"

    const-string v0, "Invalid hexString argument, use f.i. \'#999999\'"

    .line 220
    invoke-static {p1, v0}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;)V

    :cond_0
    :goto_0
    return-void
.end method

.method private setStatusBarStyle(Ljava/lang/String;)V
    .locals 6

    .line 247
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x17

    if-lt v0, v1, :cond_2

    if-eqz p1, :cond_2

    .line 248
    invoke-virtual {p1}, Ljava/lang/String;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_2

    .line 249
    iget-object v0, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v0

    .line 250
    invoke-virtual {v0}, Landroid/view/View;->getSystemUiVisibility()I

    move-result v1

    const-string v2, "default"

    .line 252
    filled-new-array {v2}, [Ljava/lang/String;

    move-result-object v2

    const-string v3, "lightcontent"

    const-string v4, "blacktranslucent"

    const-string v5, "blackopaque"

    .line 256
    filled-new-array {v3, v4, v5}, [Ljava/lang/String;

    move-result-object v3

    .line 262
    invoke-static {v2}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v2

    invoke-virtual {p1}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object v4

    invoke-interface {v2, v4}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_0

    or-int/lit16 p1, v1, 0x2000

    .line 263
    invoke-virtual {v0, p1}, Landroid/view/View;->setSystemUiVisibility(I)V

    return-void

    .line 267
    :cond_0
    invoke-static {v3}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v2

    invoke-virtual {p1}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object p1

    invoke-interface {v2, p1}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_1

    and-int/lit16 p1, v1, -0x2001

    .line 268
    invoke-virtual {v0, p1}, Landroid/view/View;->setSystemUiVisibility(I)V

    return-void

    :cond_1
    const-string p1, "StatusBar"

    const-string v0, "Invalid style, must be either \'default\', \'lightcontent\' or the deprecated \'blacktranslucent\' and \'blackopaque\'"

    .line 272
    invoke-static {p1, v0}, Lorg/apache/cordova/LOG;->e(Ljava/lang/String;Ljava/lang/String;)V

    :cond_2
    return-void
.end method

.method private setStatusBarTransparent(Z)V
    .locals 2

    .line 230
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x15

    if-lt v0, v1, :cond_1

    .line 231
    iget-object v0, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v0

    if-eqz p1, :cond_0

    .line 233
    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object p1

    const/16 v1, 0x500

    invoke-virtual {p1, v1}, Landroid/view/View;->setSystemUiVisibility(I)V

    const/4 p1, 0x0

    .line 236
    invoke-virtual {v0, p1}, Landroid/view/Window;->setStatusBarColor(I)V

    goto :goto_0

    .line 239
    :cond_0
    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object p1

    const/16 v0, 0x100

    invoke-virtual {p1, v0}, Landroid/view/View;->setSystemUiVisibility(I)V

    :cond_1
    :goto_0
    return-void
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/apache/cordova/CordovaArgs;Lorg/apache/cordova/CallbackContext;)Z
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const-string v0, "StatusBar"

    .line 81
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v2, "Executing action: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lorg/apache/cordova/LOG;->v(Ljava/lang/String;Ljava/lang/String;)V

    .line 82
    iget-object v0, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    .line 83
    invoke-virtual {v0}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v0

    const-string v1, "_ready"

    .line 85
    invoke-virtual {v1, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    const/4 v2, 0x0

    const/4 v3, 0x1

    if-eqz v1, :cond_1

    .line 86
    invoke-virtual {v0}, Landroid/view/Window;->getAttributes()Landroid/view/WindowManager$LayoutParams;

    move-result-object p1

    iget p1, p1, Landroid/view/WindowManager$LayoutParams;->flags:I

    and-int/lit16 p1, p1, 0x400

    if-nez p1, :cond_0

    const/4 v2, 0x1

    .line 87
    :cond_0
    new-instance p1, Lorg/apache/cordova/PluginResult;

    sget-object p2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p1, p2, v2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Z)V

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return v3

    :cond_1
    const-string p3, "show"

    .line 91
    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_2

    .line 92
    iget-object p1, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    new-instance p2, Lorg/apache/cordova/statusbar/StatusBar$2;

    invoke-direct {p2, p0, v0}, Lorg/apache/cordova/statusbar/StatusBar$2;-><init>(Lorg/apache/cordova/statusbar/StatusBar;Landroid/view/Window;)V

    invoke-virtual {p1, p2}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return v3

    :cond_2
    const-string p3, "hide"

    .line 113
    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_3

    .line 114
    iget-object p1, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    new-instance p2, Lorg/apache/cordova/statusbar/StatusBar$3;

    invoke-direct {p2, p0, v0}, Lorg/apache/cordova/statusbar/StatusBar$3;-><init>(Lorg/apache/cordova/statusbar/StatusBar;Landroid/view/Window;)V

    invoke-virtual {p1, p2}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return v3

    :cond_3
    const-string p3, "backgroundColorByHexString"

    .line 135
    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_4

    .line 136
    iget-object p1, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    new-instance p3, Lorg/apache/cordova/statusbar/StatusBar$4;

    invoke-direct {p3, p0, p2}, Lorg/apache/cordova/statusbar/StatusBar$4;-><init>(Lorg/apache/cordova/statusbar/StatusBar;Lorg/apache/cordova/CordovaArgs;)V

    invoke-virtual {p1, p3}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return v3

    :cond_4
    const-string p3, "overlaysWebView"

    .line 149
    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_6

    .line 150
    sget p1, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 p3, 0x15

    if-lt p1, p3, :cond_5

    .line 151
    iget-object p1, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    new-instance p3, Lorg/apache/cordova/statusbar/StatusBar$5;

    invoke-direct {p3, p0, p2}, Lorg/apache/cordova/statusbar/StatusBar$5;-><init>(Lorg/apache/cordova/statusbar/StatusBar;Lorg/apache/cordova/CordovaArgs;)V

    invoke-virtual {p1, p3}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return v3

    .line 163
    :cond_5
    invoke-virtual {p2, v2}, Lorg/apache/cordova/CordovaArgs;->getBoolean(I)Z

    move-result p1

    xor-int/2addr p1, v3

    return p1

    :cond_6
    const-string p2, "styleDefault"

    .line 166
    invoke-virtual {p2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_7

    .line 167
    iget-object p1, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    new-instance p2, Lorg/apache/cordova/statusbar/StatusBar$6;

    invoke-direct {p2, p0}, Lorg/apache/cordova/statusbar/StatusBar$6;-><init>(Lorg/apache/cordova/statusbar/StatusBar;)V

    invoke-virtual {p1, p2}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return v3

    :cond_7
    const-string p2, "styleLightContent"

    .line 176
    invoke-virtual {p2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_8

    .line 177
    iget-object p1, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    new-instance p2, Lorg/apache/cordova/statusbar/StatusBar$7;

    invoke-direct {p2, p0}, Lorg/apache/cordova/statusbar/StatusBar$7;-><init>(Lorg/apache/cordova/statusbar/StatusBar;)V

    invoke-virtual {p1, p2}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return v3

    :cond_8
    const-string p2, "styleBlackTranslucent"

    .line 186
    invoke-virtual {p2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_9

    .line 187
    iget-object p1, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    new-instance p2, Lorg/apache/cordova/statusbar/StatusBar$8;

    invoke-direct {p2, p0}, Lorg/apache/cordova/statusbar/StatusBar$8;-><init>(Lorg/apache/cordova/statusbar/StatusBar;)V

    invoke-virtual {p1, p2}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return v3

    :cond_9
    const-string p2, "styleBlackOpaque"

    .line 196
    invoke-virtual {p2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_a

    .line 197
    iget-object p1, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    new-instance p2, Lorg/apache/cordova/statusbar/StatusBar$9;

    invoke-direct {p2, p0}, Lorg/apache/cordova/statusbar/StatusBar$9;-><init>(Lorg/apache/cordova/statusbar/StatusBar;)V

    invoke-virtual {p1, p2}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return v3

    :cond_a
    return v2
.end method

.method public initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
    .locals 2

    const-string v0, "StatusBar"

    const-string v1, "StatusBar: initialization"

    .line 51
    invoke-static {v0, v1}, Lorg/apache/cordova/LOG;->v(Ljava/lang/String;Ljava/lang/String;)V

    .line 52
    invoke-super {p0, p1, p2}, Lorg/apache/cordova/CordovaPlugin;->initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V

    .line 54
    iget-object p2, p0, Lorg/apache/cordova/statusbar/StatusBar;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p2

    new-instance v0, Lorg/apache/cordova/statusbar/StatusBar$1;

    invoke-direct {v0, p0, p1}, Lorg/apache/cordova/statusbar/StatusBar$1;-><init>(Lorg/apache/cordova/statusbar/StatusBar;Lorg/apache/cordova/CordovaInterface;)V

    invoke-virtual {p2, v0}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return-void
.end method
