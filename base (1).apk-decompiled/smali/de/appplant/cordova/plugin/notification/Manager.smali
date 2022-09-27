.class public final Lde/appplant/cordova/plugin/notification/Manager;
.super Ljava/lang/Object;
.source "Manager.java"


# static fields
.field static final CHANNEL_ID:Ljava/lang/String; = "default-channel-id"

.field private static final CHANNEL_NAME:Ljava/lang/CharSequence;


# instance fields
.field private context:Landroid/content/Context;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    const-string v0, "Default channel"

    .line 59
    sput-object v0, Lde/appplant/cordova/plugin/notification/Manager;->CHANNEL_NAME:Ljava/lang/CharSequence;

    return-void
.end method

.method private constructor <init>(Landroid/content/Context;)V
    .locals 0

    .line 69
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 70
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Manager;->context:Landroid/content/Context;

    .line 71
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Manager;->createDefaultChannel()V

    return-void
.end method

.method private createDefaultChannel()V
    .locals 5
    .annotation build Landroid/annotation/SuppressLint;
        value = {
            "WrongConstant"
        }
    .end annotation

    .line 110
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getNotMgr()Landroid/app/NotificationManager;

    move-result-object v0

    .line 112
    sget v1, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v2, 0x1a

    if-ge v1, v2, :cond_0

    return-void

    :cond_0
    const-string v1, "default-channel-id"

    .line 115
    invoke-virtual {v0, v1}, Landroid/app/NotificationManager;->getNotificationChannel(Ljava/lang/String;)Landroid/app/NotificationChannel;

    move-result-object v1

    if-eqz v1, :cond_1

    return-void

    .line 120
    :cond_1
    new-instance v1, Landroid/app/NotificationChannel;

    const-string v2, "default-channel-id"

    sget-object v3, Lde/appplant/cordova/plugin/notification/Manager;->CHANNEL_NAME:Ljava/lang/CharSequence;

    const/4 v4, 0x3

    invoke-direct {v1, v2, v3, v4}, Landroid/app/NotificationChannel;-><init>(Ljava/lang/String;Ljava/lang/CharSequence;I)V

    .line 123
    invoke-virtual {v0, v1}, Landroid/app/NotificationManager;->createNotificationChannel(Landroid/app/NotificationChannel;)V

    return-void
.end method

.method private getByIds(Ljava/util/List;)Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;)",
            "Ljava/util/List<",
            "Lde/appplant/cordova/plugin/notification/Notification;",
            ">;"
        }
    .end annotation

    .line 252
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 254
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    .line 255
    invoke-virtual {p0, v1}, Lde/appplant/cordova/plugin/notification/Manager;->get(I)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object v1

    if-eqz v1, :cond_0

    .line 258
    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_0

    :cond_1
    return-object v0
.end method

.method private getByType(Lde/appplant/cordova/plugin/notification/Notification$Type;)Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lde/appplant/cordova/plugin/notification/Notification$Type;",
            ")",
            "Ljava/util/List<",
            "Lde/appplant/cordova/plugin/notification/Notification;",
            ">;"
        }
    .end annotation

    .line 279
    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification$Type;->ALL:Lde/appplant/cordova/plugin/notification/Notification$Type;

    if-ne p1, v0, :cond_0

    .line 280
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getAll()Ljava/util/List;

    move-result-object p1

    return-object p1

    .line 282
    :cond_0
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/Manager;->getIdsByType(Lde/appplant/cordova/plugin/notification/Notification$Type;)Ljava/util/List;

    move-result-object p1

    .line 284
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/notification/Manager;->getByIds(Ljava/util/List;)Ljava/util/List;

    move-result-object p1

    return-object p1
.end method

.method public static getInstance(Landroid/content/Context;)Lde/appplant/cordova/plugin/notification/Manager;
    .locals 1

    .line 80
    new-instance v0, Lde/appplant/cordova/plugin/notification/Manager;

    invoke-direct {v0, p0}, Lde/appplant/cordova/plugin/notification/Manager;-><init>(Landroid/content/Context;)V

    return-object v0
.end method

.method private getNotCompMgr()Landroid/support/v4/app/NotificationManagerCompat;
    .locals 1

    .line 414
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Manager;->context:Landroid/content/Context;

    invoke-static {v0}, Landroid/support/v4/app/NotificationManagerCompat;->from(Landroid/content/Context;)Landroid/support/v4/app/NotificationManagerCompat;

    move-result-object v0

    return-object v0
.end method

.method private getNotMgr()Landroid/app/NotificationManager;
    .locals 2

    .line 406
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Manager;->context:Landroid/content/Context;

    const-string v1, "notification"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/app/NotificationManager;

    return-object v0
.end method

.method private getPrefs()Landroid/content/SharedPreferences;
    .locals 3

    .line 399
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Manager;->context:Landroid/content/Context;

    const-string v1, "NOTIFICATION_ID"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroid/content/Context;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object v0

    return-object v0
.end method


# virtual methods
.method public cancel(I)Lde/appplant/cordova/plugin/notification/Notification;
    .locals 0

    .line 179
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/Manager;->get(I)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 182
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->cancel()V

    :cond_0
    return-object p1
.end method

.method public cancelAll()V
    .locals 2

    .line 192
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getAll()Ljava/util/List;

    move-result-object v0

    .line 194
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lde/appplant/cordova/plugin/notification/Notification;

    .line 195
    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Notification;->cancel()V

    goto :goto_0

    .line 198
    :cond_0
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getNotCompMgr()Landroid/support/v4/app/NotificationManagerCompat;

    move-result-object v0

    invoke-virtual {v0}, Landroid/support/v4/app/NotificationManagerCompat;->cancelAll()V

    const/4 v0, 0x0

    .line 199
    invoke-virtual {p0, v0}, Lde/appplant/cordova/plugin/notification/Manager;->setBadge(I)V

    return-void
.end method

.method public clear(I)Lde/appplant/cordova/plugin/notification/Notification;
    .locals 0

    .line 150
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/Manager;->get(I)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 153
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Notification;->clear()V

    :cond_0
    return-object p1
.end method

.method public clearAll()V
    .locals 2

    .line 163
    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification$Type;->TRIGGERED:Lde/appplant/cordova/plugin/notification/Notification$Type;

    invoke-direct {p0, v0}, Lde/appplant/cordova/plugin/notification/Manager;->getByType(Lde/appplant/cordova/plugin/notification/Notification$Type;)Ljava/util/List;

    move-result-object v0

    .line 165
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lde/appplant/cordova/plugin/notification/Notification;

    .line 166
    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Notification;->clear()V

    goto :goto_0

    .line 169
    :cond_0
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getNotCompMgr()Landroid/support/v4/app/NotificationManagerCompat;

    move-result-object v0

    invoke-virtual {v0}, Landroid/support/v4/app/NotificationManagerCompat;->cancelAll()V

    const/4 v0, 0x0

    .line 170
    invoke-virtual {p0, v0}, Lde/appplant/cordova/plugin/notification/Manager;->setBadge(I)V

    return-void
.end method

.method public get(I)Lde/appplant/cordova/plugin/notification/Notification;
    .locals 2

    .line 363
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/Manager;->getOptions(I)Lde/appplant/cordova/plugin/notification/Options;

    move-result-object p1

    if-nez p1, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 368
    :cond_0
    new-instance v0, Lde/appplant/cordova/plugin/notification/Notification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Manager;->context:Landroid/content/Context;

    invoke-direct {v0, v1, p1}, Lde/appplant/cordova/plugin/notification/Notification;-><init>(Landroid/content/Context;Lde/appplant/cordova/plugin/notification/Options;)V

    return-object v0
.end method

.method getActiveNotifications()[Landroid/service/notification/StatusBarNotification;
    .locals 2

    .line 388
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x17

    if-lt v0, v1, :cond_0

    .line 389
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getNotMgr()Landroid/app/NotificationManager;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/NotificationManager;->getActiveNotifications()[Landroid/service/notification/StatusBarNotification;

    move-result-object v0

    return-object v0

    :cond_0
    const/4 v0, 0x0

    .line 391
    new-array v0, v0, [Landroid/service/notification/StatusBarNotification;

    return-object v0
.end method

.method public getAll()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lde/appplant/cordova/plugin/notification/Notification;",
            ">;"
        }
    .end annotation

    .line 269
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getIds()Ljava/util/List;

    move-result-object v0

    invoke-direct {p0, v0}, Lde/appplant/cordova/plugin/notification/Manager;->getByIds(Ljava/util/List;)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method public getIds()Ljava/util/List;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 206
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getPrefs()Landroid/content/SharedPreferences;

    move-result-object v0

    invoke-interface {v0}, Landroid/content/SharedPreferences;->getAll()Ljava/util/Map;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/Map;->keySet()Ljava/util/Set;

    move-result-object v0

    .line 207
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    .line 209
    invoke-interface {v0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 211
    :try_start_0
    invoke-static {v2}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result v2

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    invoke-interface {v1, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z
    :try_end_0
    .catch Ljava/lang/NumberFormatException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v2

    .line 213
    invoke-virtual {v2}, Ljava/lang/NumberFormatException;->printStackTrace()V

    goto :goto_0

    :cond_0
    return-object v1
.end method

.method public getIdsByType(Lde/appplant/cordova/plugin/notification/Notification$Type;)Ljava/util/List;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lde/appplant/cordova/plugin/notification/Notification$Type;",
            ")",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 227
    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification$Type;->ALL:Lde/appplant/cordova/plugin/notification/Notification$Type;

    if-ne p1, v0, :cond_0

    .line 228
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getIds()Ljava/util/List;

    move-result-object p1

    return-object p1

    .line 230
    :cond_0
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getActiveNotifications()[Landroid/service/notification/StatusBarNotification;

    move-result-object v0

    .line 231
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    .line 233
    array-length v2, v0

    const/4 v3, 0x0

    :goto_0
    if-ge v3, v2, :cond_1

    aget-object v4, v0, v3

    .line 234
    invoke-virtual {v4}, Landroid/service/notification/StatusBarNotification;->getId()I

    move-result v4

    invoke-static {v4}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v4

    invoke-interface {v1, v4}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 237
    :cond_1
    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification$Type;->TRIGGERED:Lde/appplant/cordova/plugin/notification/Notification$Type;

    if-ne p1, v0, :cond_2

    return-object v1

    .line 240
    :cond_2
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getIds()Ljava/util/List;

    move-result-object p1

    .line 241
    invoke-interface {p1, v1}, Ljava/util/List;->removeAll(Ljava/util/Collection;)Z

    return-object p1
.end method

.method public getOptions(I)Lde/appplant/cordova/plugin/notification/Options;
    .locals 3

    .line 338
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getPrefs()Landroid/content/SharedPreferences;

    move-result-object v0

    .line 339
    invoke-static {p1}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object p1

    .line 341
    invoke-interface {v0, p1}, Landroid/content/SharedPreferences;->contains(Ljava/lang/String;)Z

    move-result v1

    const/4 v2, 0x0

    if-nez v1, :cond_0

    return-object v2

    .line 345
    :cond_0
    :try_start_0
    invoke-interface {v0, p1, v2}, Landroid/content/SharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 346
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 348
    new-instance p1, Lde/appplant/cordova/plugin/notification/Options;

    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Manager;->context:Landroid/content/Context;

    invoke-direct {p1, v1, v0}, Lde/appplant/cordova/plugin/notification/Options;-><init>(Landroid/content/Context;Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    move-exception p1

    .line 350
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    return-object v2
.end method

.method public getOptions()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lorg/json/JSONObject;",
            ">;"
        }
    .end annotation

    .line 291
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getIds()Ljava/util/List;

    move-result-object v0

    invoke-virtual {p0, v0}, Lde/appplant/cordova/plugin/notification/Manager;->getOptionsById(Ljava/util/List;)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method public getOptionsById(Ljava/util/List;)Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;)",
            "Ljava/util/List<",
            "Lorg/json/JSONObject;",
            ">;"
        }
    .end annotation

    .line 300
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 302
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    .line 303
    invoke-virtual {p0, v1}, Lde/appplant/cordova/plugin/notification/Manager;->getOptions(I)Lde/appplant/cordova/plugin/notification/Options;

    move-result-object v1

    if-eqz v1, :cond_0

    .line 306
    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Options;->getDict()Lorg/json/JSONObject;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_0

    :cond_1
    return-object v0
.end method

.method public getOptionsByType(Lde/appplant/cordova/plugin/notification/Notification$Type;)Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lde/appplant/cordova/plugin/notification/Notification$Type;",
            ")",
            "Ljava/util/List<",
            "Lorg/json/JSONObject;",
            ">;"
        }
    .end annotation

    .line 320
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 321
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/notification/Manager;->getByType(Lde/appplant/cordova/plugin/notification/Notification$Type;)Ljava/util/List;

    move-result-object p1

    .line 323
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lde/appplant/cordova/plugin/notification/Notification;

    .line 324
    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Notification;->getOptions()Lde/appplant/cordova/plugin/notification/Options;

    move-result-object v1

    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Options;->getDict()Lorg/json/JSONObject;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    goto :goto_0

    :cond_0
    return-object v0
.end method

.method public hasPermission()Z
    .locals 1

    .line 87
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Manager;->getNotCompMgr()Landroid/support/v4/app/NotificationManagerCompat;

    move-result-object v0

    invoke-virtual {v0}, Landroid/support/v4/app/NotificationManagerCompat;->areNotificationsEnabled()Z

    move-result v0

    return v0
.end method

.method public schedule(Lde/appplant/cordova/plugin/notification/Request;Ljava/lang/Class;)Lde/appplant/cordova/plugin/notification/Notification;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lde/appplant/cordova/plugin/notification/Request;",
            "Ljava/lang/Class<",
            "*>;)",
            "Lde/appplant/cordova/plugin/notification/Notification;"
        }
    .end annotation

    .line 97
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Request;->getOptions()Lde/appplant/cordova/plugin/notification/Options;

    move-result-object v0

    .line 98
    new-instance v1, Lde/appplant/cordova/plugin/notification/Notification;

    iget-object v2, p0, Lde/appplant/cordova/plugin/notification/Manager;->context:Landroid/content/Context;

    invoke-direct {v1, v2, v0}, Lde/appplant/cordova/plugin/notification/Notification;-><init>(Landroid/content/Context;Lde/appplant/cordova/plugin/notification/Options;)V

    .line 100
    invoke-virtual {v1, p1, p2}, Lde/appplant/cordova/plugin/notification/Notification;->schedule(Lde/appplant/cordova/plugin/notification/Request;Ljava/lang/Class;)V

    return-object v1
.end method

.method public setBadge(I)V
    .locals 2

    if-nez p1, :cond_0

    .line 378
    new-instance p1, Lde/appplant/cordova/plugin/badge/BadgeImpl;

    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Manager;->context:Landroid/content/Context;

    invoke-direct {p1, v0}, Lde/appplant/cordova/plugin/badge/BadgeImpl;-><init>(Landroid/content/Context;)V

    invoke-virtual {p1}, Lde/appplant/cordova/plugin/badge/BadgeImpl;->clearBadge()V

    goto :goto_0

    .line 380
    :cond_0
    new-instance v0, Lde/appplant/cordova/plugin/badge/BadgeImpl;

    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Manager;->context:Landroid/content/Context;

    invoke-direct {v0, v1}, Lde/appplant/cordova/plugin/badge/BadgeImpl;-><init>(Landroid/content/Context;)V

    invoke-virtual {v0, p1}, Lde/appplant/cordova/plugin/badge/BadgeImpl;->setBadge(I)V

    :goto_0
    return-void
.end method

.method public update(ILorg/json/JSONObject;Ljava/lang/Class;)Lde/appplant/cordova/plugin/notification/Notification;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I",
            "Lorg/json/JSONObject;",
            "Ljava/lang/Class<",
            "*>;)",
            "Lde/appplant/cordova/plugin/notification/Notification;"
        }
    .end annotation

    .line 134
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/Manager;->get(I)Lde/appplant/cordova/plugin/notification/Notification;

    move-result-object p1

    if-nez p1, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 139
    :cond_0
    invoke-virtual {p1, p2, p3}, Lde/appplant/cordova/plugin/notification/Notification;->update(Lorg/json/JSONObject;Ljava/lang/Class;)V

    return-object p1
.end method
