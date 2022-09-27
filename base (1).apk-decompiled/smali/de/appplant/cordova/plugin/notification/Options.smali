.class public final Lde/appplant/cordova/plugin/notification/Options;
.super Ljava/lang/Object;
.source "Options.java"


# static fields
.field private static final DEFAULT_ICON:Ljava/lang/String; = "res://icon"

.field public static final EXTRA_LAUNCH:Ljava/lang/String; = "NOTIFICATION_LAUNCH"

.field static final EXTRA_SOUND:Ljava/lang/String; = "NOTIFICATION_SOUND"


# instance fields
.field private final assets:Lde/appplant/cordova/plugin/notification/util/AssetUtil;

.field private final context:Landroid/content/Context;

.field private final options:Lorg/json/JSONObject;


# direct methods
.method constructor <init>(Landroid/content/Context;Lorg/json/JSONObject;)V
    .locals 0

    .line 94
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 95
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Options;->context:Landroid/content/Context;

    .line 96
    iput-object p2, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    .line 97
    invoke-static {p1}, Lde/appplant/cordova/plugin/notification/util/AssetUtil;->getInstance(Landroid/content/Context;)Lde/appplant/cordova/plugin/notification/util/AssetUtil;

    move-result-object p1

    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Options;->assets:Lde/appplant/cordova/plugin/notification/util/AssetUtil;

    return-void
.end method

.method public constructor <init>(Lorg/json/JSONObject;)V
    .locals 0

    .line 82
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 83
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const/4 p1, 0x0

    .line 84
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Options;->context:Landroid/content/Context;

    .line 85
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Options;->assets:Lde/appplant/cordova/plugin/notification/util/AssetUtil;

    return-void
.end method

.method private isWithDefaultLights()Z
    .locals 3

    .line 424
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    const/4 v1, 0x1

    if-eqz v0, :cond_0

    .line 425
    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    invoke-virtual {v0, v2}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :goto_0
    return v1
.end method

.method private isWithDefaultSound()Z
    .locals 3

    .line 408
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "sound"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    const/4 v1, 0x1

    if-eqz v0, :cond_0

    .line 409
    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    invoke-virtual {v0, v2}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :goto_0
    return v1
.end method

.method private isWithVibration()Z
    .locals 3

    .line 393
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "vibrate"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method private isWithoutLights()Z
    .locals 3

    .line 416
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    .line 417
    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    invoke-virtual {v0, v2}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    :cond_0
    const/4 v1, 0x1

    :cond_1
    return v1
.end method

.method private isWithoutSound()Z
    .locals 3

    .line 400
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "sound"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    .line 401
    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    invoke-virtual {v0, v2}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    :cond_0
    const/4 v1, 0x1

    :cond_1
    return v1
.end method

.method private stripHex(Ljava/lang/String;)Ljava/lang/String;
    .locals 2

    const/4 v0, 0x0

    .line 656
    invoke-virtual {p1, v0}, Ljava/lang/String;->charAt(I)C

    move-result v0

    const/16 v1, 0x23

    if-ne v0, v1, :cond_0

    const/4 v0, 0x1

    invoke-virtual {p1, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p1

    :cond_0
    return-object p1
.end method


# virtual methods
.method getActions()[Lde/appplant/cordova/plugin/notification/action/Action;
    .locals 4

    .line 581
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "actionGroupId"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 582
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v3, "actions"

    invoke-virtual {v1, v3}, Lorg/json/JSONObject;->optJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v1

    if-eqz v1, :cond_0

    .line 585
    invoke-virtual {v1}, Lorg/json/JSONArray;->length()I

    move-result v1

    if-lez v1, :cond_0

    .line 586
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Options;->context:Landroid/content/Context;

    iget-object v3, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    invoke-static {v1, v3}, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->parse(Landroid/content/Context;Lorg/json/JSONObject;)Lde/appplant/cordova/plugin/notification/action/ActionGroup;

    move-result-object v1

    goto :goto_0

    :cond_0
    move-object v1, v2

    :goto_0
    if-nez v1, :cond_1

    if-eqz v0, :cond_1

    .line 590
    invoke-static {v0}, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->lookup(Ljava/lang/String;)Lde/appplant/cordova/plugin/notification/action/ActionGroup;

    move-result-object v1

    :cond_1
    if-eqz v1, :cond_2

    .line 594
    invoke-static {v1}, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->register(Lde/appplant/cordova/plugin/notification/action/ActionGroup;)V

    .line 595
    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->getActions()[Lde/appplant/cordova/plugin/notification/action/Action;

    move-result-object v0

    return-object v0

    :cond_2
    return-object v2
.end method

.method getAttachments()Ljava/util/List;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroid/graphics/Bitmap;",
            ">;"
        }
    .end annotation

    .line 553
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "attachments"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v0

    .line 554
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    if-nez v0, :cond_0

    return-object v1

    :cond_0
    const/4 v2, 0x0

    .line 559
    :goto_0
    invoke-virtual {v0}, Lorg/json/JSONArray;->length()I

    move-result v3

    if-ge v2, v3, :cond_2

    .line 560
    iget-object v3, p0, Lde/appplant/cordova/plugin/notification/Options;->assets:Lde/appplant/cordova/plugin/notification/util/AssetUtil;

    invoke-virtual {v0, v2}, Lorg/json/JSONArray;->optString(I)Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v3, v4}, Lde/appplant/cordova/plugin/notification/util/AssetUtil;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v3

    .line 562
    sget-object v4, Landroid/net/Uri;->EMPTY:Landroid/net/Uri;

    if-ne v3, v4, :cond_1

    goto :goto_1

    .line 566
    :cond_1
    :try_start_0
    iget-object v4, p0, Lde/appplant/cordova/plugin/notification/Options;->assets:Lde/appplant/cordova/plugin/notification/util/AssetUtil;

    invoke-virtual {v4, v3}, Lde/appplant/cordova/plugin/notification/util/AssetUtil;->getIconFromUri(Landroid/net/Uri;)Landroid/graphics/Bitmap;

    move-result-object v3

    .line 567
    invoke-interface {v1, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_2

    :catch_0
    move-exception v3

    .line 570
    invoke-virtual {v3}, Ljava/io/IOException;->printStackTrace()V

    :goto_1
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_2
    :goto_2
    return-object v1
.end method

.method public getBadgeNumber()I
    .locals 3

    .line 143
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "badge"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    return v0
.end method

.method getChannel()Ljava/lang/String;
    .locals 3

    .line 206
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "channel"

    const-string v2, "default-channel-id"

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public getColor()I
    .locals 4

    .line 308
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "color"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    if-nez v0, :cond_0

    return v1

    .line 314
    :cond_0
    :try_start_0
    invoke-direct {p0, v0}, Lde/appplant/cordova/plugin/notification/Options;->stripHex(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v3, "[^0-9]*"

    .line 316
    invoke-virtual {v0, v3}, Ljava/lang/String;->matches(Ljava/lang/String;)Z

    move-result v3

    if-eqz v3, :cond_1

    .line 317
    const-class v3, Landroid/graphics/Color;

    .line 318
    invoke-virtual {v0}, Ljava/lang/String;->toUpperCase()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v3, v0}, Ljava/lang/Class;->getDeclaredField(Ljava/lang/String;)Ljava/lang/reflect/Field;

    move-result-object v0

    .line 319
    invoke-virtual {v0, v2}, Ljava/lang/reflect/Field;->getInt(Ljava/lang/Object;)I

    move-result v0

    return v0

    :cond_1
    const/16 v2, 0x10

    .line 322
    invoke-static {v0, v2}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;I)I

    move-result v0
    :try_end_0
    .catch Ljava/lang/NumberFormatException; {:try_start_0 .. :try_end_0} :catch_2
    .catch Ljava/lang/NoSuchFieldException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/IllegalAccessException; {:try_start_0 .. :try_end_0} :catch_0

    const/high16 v1, -0x1000000

    add-int/2addr v0, v1

    return v0

    :catch_0
    move-exception v0

    .line 329
    invoke-virtual {v0}, Ljava/lang/IllegalAccessException;->printStackTrace()V

    goto :goto_0

    :catch_1
    move-exception v0

    .line 327
    invoke-virtual {v0}, Ljava/lang/NoSuchFieldException;->printStackTrace()V

    goto :goto_0

    :catch_2
    move-exception v0

    .line 325
    invoke-virtual {v0}, Ljava/lang/NumberFormatException;->printStackTrace()V

    :goto_0
    return v1
.end method

.method public getContext()Landroid/content/Context;
    .locals 1

    .line 104
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->context:Landroid/content/Context;

    return-object v0
.end method

.method getDefaults()I
    .locals 3

    .line 434
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "defaults"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    .line 436
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Options;->isWithVibration()Z

    move-result v1

    if-eqz v1, :cond_0

    or-int/lit8 v0, v0, 0x2

    goto :goto_0

    :cond_0
    and-int/lit8 v0, v0, 0x2

    .line 442
    :goto_0
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Options;->isWithDefaultSound()Z

    move-result v1

    if-eqz v1, :cond_1

    or-int/lit8 v0, v0, 0x1

    goto :goto_1

    .line 445
    :cond_1
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Options;->isWithoutSound()Z

    move-result v1

    if-eqz v1, :cond_2

    and-int/lit8 v0, v0, 0x1

    .line 449
    :cond_2
    :goto_1
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Options;->isWithDefaultLights()Z

    move-result v1

    if-eqz v1, :cond_3

    or-int/lit8 v0, v0, 0x4

    goto :goto_2

    .line 452
    :cond_3
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Options;->isWithoutLights()Z

    move-result v1

    if-eqz v1, :cond_4

    and-int/lit8 v0, v0, 0x4

    :cond_4
    :goto_2
    return v0
.end method

.method public getDict()Lorg/json/JSONObject;
    .locals 1

    .line 111
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    return-object v0
.end method

.method getGroup()Ljava/lang/String;
    .locals 3

    .line 185
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "group"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method getGroupSummary()Z
    .locals 3

    .line 213
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "groupSummary"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method public getId()Ljava/lang/Integer;
    .locals 3

    .line 127
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "id"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    return-object v0
.end method

.method getIdentifier()Ljava/lang/String;
    .locals 1

    .line 136
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Options;->getId()Ljava/lang/Integer;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Integer;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method getLargeIcon()Landroid/graphics/Bitmap;
    .locals 3

    .line 354
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "icon"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 355
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Options;->assets:Lde/appplant/cordova/plugin/notification/util/AssetUtil;

    invoke-virtual {v1, v0}, Lde/appplant/cordova/plugin/notification/util/AssetUtil;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v0

    .line 359
    :try_start_0
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Options;->assets:Lde/appplant/cordova/plugin/notification/util/AssetUtil;

    invoke-virtual {v1, v0}, Lde/appplant/cordova/plugin/notification/util/AssetUtil;->getIconFromUri(Landroid/net/Uri;)Landroid/graphics/Bitmap;

    move-result-object v2
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 361
    invoke-virtual {v0}, Ljava/lang/Exception;->printStackTrace()V

    :goto_0
    return-object v2
.end method

.method getLedColor()I
    .locals 3

    .line 242
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    .line 245
    instance-of v1, v0, Ljava/lang/String;

    const/4 v2, 0x0

    if-eqz v1, :cond_0

    .line 246
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    goto :goto_0

    .line 248
    :cond_0
    instance-of v1, v0, Lorg/json/JSONArray;

    if-eqz v1, :cond_1

    .line 249
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v0

    invoke-virtual {v0, v2}, Lorg/json/JSONArray;->optString(I)Ljava/lang/String;

    move-result-object v0

    goto :goto_0

    .line 251
    :cond_1
    instance-of v0, v0, Lorg/json/JSONObject;

    if-eqz v0, :cond_2

    .line 252
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "color"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    goto :goto_0

    :cond_2
    const/4 v0, 0x0

    :goto_0
    if-nez v0, :cond_3

    return v2

    .line 259
    :cond_3
    :try_start_0
    invoke-direct {p0, v0}, Lde/appplant/cordova/plugin/notification/Options;->stripHex(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const/16 v1, 0x10

    .line 260
    invoke-static {v0, v1}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;I)I

    move-result v0
    :try_end_0
    .catch Ljava/lang/NumberFormatException; {:try_start_0 .. :try_end_0} :catch_0

    const/high16 v1, -0x1000000

    add-int/2addr v0, v1

    return v0

    :catch_0
    move-exception v0

    .line 264
    invoke-virtual {v0}, Ljava/lang/NumberFormatException;->printStackTrace()V

    return v2
.end method

.method getLedOff()I
    .locals 3

    .line 290
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    .line 293
    instance-of v1, v0, Lorg/json/JSONArray;

    const/16 v2, 0x3e8

    if-eqz v1, :cond_0

    .line 294
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v0

    const/4 v1, 0x2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONArray;->optInt(II)I

    move-result v0

    return v0

    .line 296
    :cond_0
    instance-of v0, v0, Lorg/json/JSONObject;

    if-eqz v0, :cond_1

    .line 297
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "off"

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    return v0

    :cond_1
    return v2
.end method

.method getLedOn()I
    .locals 3

    .line 274
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    .line 277
    instance-of v1, v0, Lorg/json/JSONArray;

    const/16 v2, 0x3e8

    if-eqz v1, :cond_0

    .line 278
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v0

    const/4 v1, 0x1

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONArray;->optInt(II)I

    move-result v0

    return v0

    .line 280
    :cond_0
    instance-of v0, v0, Lorg/json/JSONObject;

    if-eqz v0, :cond_1

    .line 281
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "led"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "on"

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    return v0

    :cond_1
    return v2
.end method

.method getMediaSessionToken()Landroid/support/v4/media/session/MediaSessionCompat$Token;
    .locals 3

    .line 638
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "mediaSession"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    return-object v2

    .line 643
    :cond_0
    new-instance v1, Landroid/support/v4/media/session/MediaSessionCompat;

    iget-object v2, p0, Lde/appplant/cordova/plugin/notification/Options;->context:Landroid/content/Context;

    invoke-direct {v1, v2, v0}, Landroid/support/v4/media/session/MediaSessionCompat;-><init>(Landroid/content/Context;Ljava/lang/String;)V

    .line 645
    invoke-virtual {v1}, Landroid/support/v4/media/session/MediaSessionCompat;->getSessionToken()Landroid/support/v4/media/session/MediaSessionCompat$Token;

    move-result-object v0

    return-object v0
.end method

.method getMessages()[Landroid/support/v4/app/NotificationCompat$MessagingStyle$Message;
    .locals 11

    .line 607
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "text"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    const/4 v1, 0x0

    if-eqz v0, :cond_3

    .line 609
    instance-of v2, v0, Ljava/lang/String;

    if-eqz v2, :cond_0

    goto :goto_1

    .line 612
    :cond_0
    check-cast v0, Lorg/json/JSONArray;

    .line 614
    invoke-virtual {v0}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-nez v2, :cond_1

    return-object v1

    .line 617
    :cond_1
    invoke-virtual {v0}, Lorg/json/JSONArray;->length()I

    move-result v2

    new-array v2, v2, [Landroid/support/v4/app/NotificationCompat$MessagingStyle$Message;

    .line 618
    new-instance v3, Ljava/util/Date;

    invoke-direct {v3}, Ljava/util/Date;-><init>()V

    invoke-virtual {v3}, Ljava/util/Date;->getTime()J

    move-result-wide v3

    const/4 v5, 0x0

    .line 620
    :goto_0
    array-length v6, v2

    if-ge v5, v6, :cond_2

    .line 621
    invoke-virtual {v0, v5}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object v6

    const-string v7, "message"

    .line 622
    invoke-virtual {v6, v7}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    const-string v8, "date"

    .line 623
    invoke-virtual {v6, v8, v3, v4}, Lorg/json/JSONObject;->optLong(Ljava/lang/String;J)J

    move-result-wide v8

    const-string v10, "person"

    .line 624
    invoke-virtual {v6, v10, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v6

    .line 626
    new-instance v10, Landroid/support/v4/app/NotificationCompat$MessagingStyle$Message;

    invoke-direct {v10, v7, v8, v9, v6}, Landroid/support/v4/app/NotificationCompat$MessagingStyle$Message;-><init>(Ljava/lang/CharSequence;JLjava/lang/CharSequence;)V

    aput-object v10, v2, v5

    add-int/lit8 v5, v5, 0x1

    goto :goto_0

    :cond_2
    return-object v2

    :cond_3
    :goto_1
    return-object v1
.end method

.method public getNumber()I
    .locals 3

    .line 150
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "number"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    return v0
.end method

.method getPriority()I
    .locals 2

    .line 476
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "priority"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;)I

    move-result v0

    const/4 v1, -0x2

    .line 478
    invoke-static {v0, v1}, Ljava/lang/Math;->max(II)I

    move-result v0

    const/4 v1, 0x2

    invoke-static {v0, v1}, Ljava/lang/Math;->min(II)I

    move-result v0

    return v0
.end method

.method getProgressMaxValue()I
    .locals 3

    .line 514
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "progressBar"

    .line 515
    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "maxValue"

    const/16 v2, 0x64

    .line 516
    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    return v0
.end method

.method getProgressValue()I
    .locals 3

    .line 503
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "progressBar"

    .line 504
    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "value"

    const/4 v2, 0x0

    .line 505
    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    return v0
.end method

.method getShowWhen()Z
    .locals 3

    .line 485
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "showWhen"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method getSmallIcon()I
    .locals 3

    .line 371
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "smallIcon"

    const-string v2, "res://icon"

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 372
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Options;->assets:Lde/appplant/cordova/plugin/notification/util/AssetUtil;

    invoke-virtual {v1, v0}, Lde/appplant/cordova/plugin/notification/util/AssetUtil;->getResId(Ljava/lang/String;)I

    move-result v0

    if-nez v0, :cond_0

    .line 375
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->assets:Lde/appplant/cordova/plugin/notification/util/AssetUtil;

    const-string v1, "res://icon"

    invoke-virtual {v0, v1}, Lde/appplant/cordova/plugin/notification/util/AssetUtil;->getResId(Ljava/lang/String;)I

    move-result v0

    :cond_0
    if-nez v0, :cond_1

    .line 379
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->context:Landroid/content/Context;

    invoke-virtual {v0}, Landroid/content/Context;->getApplicationInfo()Landroid/content/pm/ApplicationInfo;

    move-result-object v0

    iget v0, v0, Landroid/content/pm/ApplicationInfo;->icon:I

    :cond_1
    if-nez v0, :cond_2

    const v0, 0x108005e

    :cond_2
    return v0
.end method

.method getSound()Landroid/net/Uri;
    .locals 4

    .line 339
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->assets:Lde/appplant/cordova/plugin/notification/util/AssetUtil;

    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v2, "sound"

    const/4 v3, 0x0

    invoke-virtual {v1, v2, v3}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lde/appplant/cordova/plugin/notification/util/AssetUtil;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v0

    return-object v0
.end method

.method getSummary()Ljava/lang/String;
    .locals 3

    .line 543
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "summary"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public getText()Ljava/lang/String;
    .locals 2

    .line 220
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "text"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    .line 221
    instance-of v1, v0, Ljava/lang/String;

    if-eqz v1, :cond_0

    check-cast v0, Ljava/lang/String;

    goto :goto_0

    :cond_0
    const-string v0, ""

    :goto_0
    return-object v0
.end method

.method public getTitle()Ljava/lang/String;
    .locals 3

    .line 228
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "title"

    const-string v2, ""

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 230
    invoke-virtual {v0}, Ljava/lang/String;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_0

    .line 231
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->context:Landroid/content/Context;

    invoke-virtual {v0}, Landroid/content/Context;->getApplicationInfo()Landroid/content/pm/ApplicationInfo;

    move-result-object v0

    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Options;->context:Landroid/content/Context;

    .line 232
    invoke-virtual {v1}, Landroid/content/Context;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    .line 231
    invoke-virtual {v0, v1}, Landroid/content/pm/ApplicationInfo;->loadLabel(Landroid/content/pm/PackageManager;)Ljava/lang/CharSequence;

    move-result-object v0

    .line 232
    invoke-interface {v0}, Ljava/lang/CharSequence;->toString()Ljava/lang/String;

    move-result-object v0

    :cond_0
    return-object v0
.end method

.method public getTrigger()Lorg/json/JSONObject;
    .locals 2

    .line 171
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "trigger"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    return-object v0
.end method

.method getVisibility()I
    .locals 3

    .line 465
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "lockscreen"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    if-eqz v0, :cond_0

    return v2

    :cond_0
    const/4 v0, -0x1

    return v0
.end method

.method hasLargeIcon()Z
    .locals 3

    .line 346
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "icon"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method isAutoClear()Ljava/lang/Boolean;
    .locals 3

    .line 164
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "autoClear"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    return-object v0
.end method

.method isIndeterminateProgress()Z
    .locals 3

    .line 525
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "progressBar"

    .line 526
    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "indeterminate"

    const/4 v2, 0x0

    .line 527
    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method public isInfiniteTrigger()Z
    .locals 3

    .line 534
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "trigger"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "every"

    .line 536
    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    const-string v1, "count"

    const/4 v2, -0x1

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    if-gez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method isLaunchingApp()Z
    .locals 3

    .line 192
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "launch"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method isSilent()Z
    .locals 3

    .line 178
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "silent"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method public isSticky()Ljava/lang/Boolean;
    .locals 3

    .line 157
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "sticky"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    return-object v0
.end method

.method isWithProgressBar()Z
    .locals 3

    .line 492
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "progressBar"

    .line 493
    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "enabled"

    const/4 v2, 0x0

    .line 494
    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method public shallWakeUp()Z
    .locals 3

    .line 199
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    const-string v1, "wakeup"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 1

    .line 118
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Options;->options:Lorg/json/JSONObject;

    invoke-virtual {v0}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
