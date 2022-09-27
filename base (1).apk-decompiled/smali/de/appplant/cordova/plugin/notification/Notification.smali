.class public final Lde/appplant/cordova/plugin/notification/Notification;
.super Ljava/lang/Object;
.source "Notification.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lde/appplant/cordova/plugin/notification/Notification$Type;
    }
.end annotation


# static fields
.field public static final EXTRA_ID:Ljava/lang/String; = "NOTIFICATION_ID"

.field public static final EXTRA_UPDATE:Ljava/lang/String; = "NOTIFICATION_UPDATE"

.field static final PREF_KEY_ID:Ljava/lang/String; = "NOTIFICATION_ID"

.field private static final PREF_KEY_PID:Ljava/lang/String; = "NOTIFICATION_PID"

.field private static cache:Landroid/util/SparseArray;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/util/SparseArray<",
            "Landroid/support/v4/app/NotificationCompat$Builder;",
            ">;"
        }
    .end annotation
.end field


# instance fields
.field private final builder:Landroid/support/v4/app/NotificationCompat$Builder;

.field private final context:Landroid/content/Context;

.field private final options:Lde/appplant/cordova/plugin/notification/Options;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>(Landroid/content/Context;Lde/appplant/cordova/plugin/notification/Options;)V
    .locals 0

    .line 109
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 110
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    .line 111
    iput-object p2, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    const/4 p1, 0x0

    .line 112
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Notification;->builder:Landroid/support/v4/app/NotificationCompat$Builder;

    return-void
.end method

.method constructor <init>(Landroid/content/Context;Lde/appplant/cordova/plugin/notification/Options;Landroid/support/v4/app/NotificationCompat$Builder;)V
    .locals 0

    .line 97
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 98
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    .line 99
    iput-object p2, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    .line 100
    iput-object p3, p0, Lde/appplant/cordova/plugin/notification/Notification;->builder:Landroid/support/v4/app/NotificationCompat$Builder;

    return-void
.end method

.method private cacheBuilder()V
    .locals 3

    .line 432
    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification;->cache:Landroid/util/SparseArray;

    if-nez v0, :cond_0

    .line 433
    new-instance v0, Landroid/util/SparseArray;

    invoke-direct {v0}, Landroid/util/SparseArray;-><init>()V

    sput-object v0, Lde/appplant/cordova/plugin/notification/Notification;->cache:Landroid/util/SparseArray;

    .line 436
    :cond_0
    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification;->cache:Landroid/util/SparseArray;

    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getId()I

    move-result v1

    iget-object v2, p0, Lde/appplant/cordova/plugin/notification/Notification;->builder:Landroid/support/v4/app/NotificationCompat$Builder;

    invoke-virtual {v0, v1, v2}, Landroid/util/SparseArray;->put(ILjava/lang/Object;)V

    return-void
.end method

.method private cancelScheduledAlarms()V
    .locals 4

    const-string v0, "NOTIFICATION_PID"

    .line 286
    invoke-direct {p0, v0}, Lde/appplant/cordova/plugin/notification/Notification;->getPrefs(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object v0

    .line 287
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Options;->getIdentifier()Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x0

    .line 288
    invoke-interface {v0, v1, v2}, Landroid/content/SharedPreferences;->getStringSet(Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object v0

    if-nez v0, :cond_0

    return-void

    .line 293
    :cond_0
    invoke-interface {v0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :cond_1
    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_2

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    .line 294
    new-instance v2, Landroid/content/Intent;

    invoke-direct {v2, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 296
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    const/4 v3, 0x0

    invoke-static {v1, v3, v2, v3}, Landroid/app/PendingIntent;->getBroadcast(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;

    move-result-object v1

    if-eqz v1, :cond_1

    .line 300
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getAlarmMgr()Landroid/app/AlarmManager;

    move-result-object v2

    invoke-virtual {v2, v1}, Landroid/app/AlarmManager;->cancel(Landroid/app/PendingIntent;)V

    goto :goto_0

    :cond_2
    return-void
.end method

.method private clearCache()V
    .locals 2

    .line 454
    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification;->cache:Landroid/util/SparseArray;

    if-eqz v0, :cond_0

    .line 455
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getId()I

    move-result v1

    invoke-virtual {v0, v1}, Landroid/util/SparseArray;->delete(I)V

    :cond_0
    return-void
.end method

.method private getAlarmMgr()Landroid/app/AlarmManager;
    .locals 2

    .line 478
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    const-string v1, "alarm"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/app/AlarmManager;

    return-object v0
.end method

.method static getCachedBuilder(I)Landroid/support/v4/app/NotificationCompat$Builder;
    .locals 1

    .line 447
    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification;->cache:Landroid/util/SparseArray;

    if-eqz v0, :cond_0

    invoke-virtual {v0, p0}, Landroid/util/SparseArray;->get(I)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Landroid/support/v4/app/NotificationCompat$Builder;

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return-object p0
.end method

.method private getNotMgr()Landroid/app/NotificationManager;
    .locals 2

    .line 470
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    const-string v1, "notification"

    .line 471
    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/app/NotificationManager;

    return-object v0
.end method

.method private getPrefs(Ljava/lang/String;)Landroid/content/SharedPreferences;
    .locals 2

    .line 463
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    const/4 v1, 0x0

    invoke-virtual {v0, p1, v1}, Landroid/content/Context;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object p1

    return-object p1
.end method

.method private grantPermissionToPlaySoundFromExternal()V
    .locals 4

    .line 399
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->builder:Landroid/support/v4/app/NotificationCompat$Builder;

    if-nez v0, :cond_0

    return-void

    .line 402
    :cond_0
    invoke-virtual {v0}, Landroid/support/v4/app/NotificationCompat$Builder;->getExtras()Landroid/os/Bundle;

    move-result-object v0

    const-string v1, "NOTIFICATION_SOUND"

    invoke-virtual {v0, v1}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 403
    invoke-static {v0}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v0

    .line 405
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    const-string v2, "com.android.systemui"

    const/4 v3, 0x1

    invoke-virtual {v1, v2, v0, v3}, Landroid/content/Context;->grantUriPermission(Ljava/lang/String;Landroid/net/Uri;I)V

    return-void
.end method

.method private isRepeating()Z
    .locals 2

    .line 140
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getOptions()Lde/appplant/cordova/plugin/notification/Options;

    move-result-object v0

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Options;->getTrigger()Lorg/json/JSONObject;

    move-result-object v0

    const-string v1, "every"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    return v0
.end method

.method private mergeJSONObjects(Lorg/json/JSONObject;)V
    .locals 4

    .line 414
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Options;->getDict()Lorg/json/JSONObject;

    move-result-object v0

    .line 415
    invoke-virtual {p1}, Lorg/json/JSONObject;->keys()Ljava/util/Iterator;

    move-result-object v1

    .line 417
    :goto_0
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_0

    .line 419
    :try_start_0
    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 420
    invoke-virtual {p1, v2}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v3

    invoke-virtual {v0, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v2

    .line 422
    invoke-virtual {v2}, Lorg/json/JSONException;->printStackTrace()V

    goto :goto_0

    :cond_0
    return-void
.end method

.method private persist(Ljava/util/Set;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 364
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Options;->getIdentifier()Ljava/lang/String;

    move-result-object v0

    const-string v1, "NOTIFICATION_ID"

    .line 367
    invoke-direct {p0, v1}, Lde/appplant/cordova/plugin/notification/Notification;->getPrefs(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object v1

    invoke-interface {v1}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v1

    .line 368
    iget-object v2, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {v2}, Lde/appplant/cordova/plugin/notification/Options;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-interface {v1, v0, v2}, Landroid/content/SharedPreferences$Editor;->putString(Ljava/lang/String;Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 369
    invoke-interface {v1}, Landroid/content/SharedPreferences$Editor;->apply()V

    if-nez p1, :cond_0

    return-void

    :cond_0
    const-string v1, "NOTIFICATION_PID"

    .line 374
    invoke-direct {p0, v1}, Lde/appplant/cordova/plugin/notification/Notification;->getPrefs(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object v1

    invoke-interface {v1}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v1

    .line 375
    invoke-interface {v1, v0, p1}, Landroid/content/SharedPreferences$Editor;->putStringSet(Ljava/lang/String;Ljava/util/Set;)Landroid/content/SharedPreferences$Editor;

    .line 376
    invoke-interface {v1}, Landroid/content/SharedPreferences$Editor;->apply()V

    return-void
.end method

.method private trigger(Landroid/content/Intent;Ljava/lang/Class;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/content/Intent;",
            "Ljava/lang/Class<",
            "*>;)Z"
        }
    .end annotation

    const/4 v0, 0x0

    .line 247
    :try_start_0
    invoke-virtual {p2}, Ljava/lang/Class;->newInstance()Ljava/lang/Object;

    move-result-object p2

    check-cast p2, Landroid/content/BroadcastReceiver;
    :try_end_0
    .catch Ljava/lang/InstantiationException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/IllegalAccessException; {:try_start_0 .. :try_end_0} :catch_0

    .line 254
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    invoke-virtual {p2, v0, p1}, Landroid/content/BroadcastReceiver;->onReceive(Landroid/content/Context;Landroid/content/Intent;)V

    const/4 p1, 0x1

    return p1

    :catch_0
    return v0

    :catch_1
    return v0
.end method

.method private unpersist()V
    .locals 5

    const-string v0, "NOTIFICATION_ID"

    const-string v1, "NOTIFICATION_PID"

    .line 383
    filled-new-array {v0, v1}, [Ljava/lang/String;

    move-result-object v0

    .line 384
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Options;->getIdentifier()Ljava/lang/String;

    move-result-object v1

    .line 387
    array-length v2, v0

    const/4 v3, 0x0

    :goto_0
    if-ge v3, v2, :cond_0

    aget-object v4, v0, v3

    .line 388
    invoke-direct {p0, v4}, Lde/appplant/cordova/plugin/notification/Notification;->getPrefs(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object v4

    invoke-interface {v4}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v4

    .line 389
    invoke-interface {v4, v1}, Landroid/content/SharedPreferences$Editor;->remove(Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 390
    invoke-interface {v4}, Landroid/content/SharedPreferences$Editor;->apply()V

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method


# virtual methods
.method public cancel()V
    .locals 2

    .line 271
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->cancelScheduledAlarms()V

    .line 272
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->unpersist()V

    .line 273
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getNotMgr()Landroid/app/NotificationManager;

    move-result-object v0

    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getId()I

    move-result v1

    invoke-virtual {v0, v1}, Landroid/app/NotificationManager;->cancel(I)V

    .line 274
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->clearCache()V

    return-void
.end method

.method public clear()V
    .locals 2

    .line 262
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getNotMgr()Landroid/app/NotificationManager;

    move-result-object v0

    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getId()I

    move-result v1

    invoke-virtual {v0, v1}, Landroid/app/NotificationManager;->cancel(I)V

    .line 263
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->isRepeating()Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 264
    :cond_0
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->unpersist()V

    return-void
.end method

.method public getContext()Landroid/content/Context;
    .locals 1

    .line 119
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    return-object v0
.end method

.method public getId()I
    .locals 1

    .line 133
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Options;->getId()Ljava/lang/Integer;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    return v0
.end method

.method public getOptions()Lde/appplant/cordova/plugin/notification/Options;
    .locals 1

    .line 126
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    return-object v0
.end method

.method public getType()Lde/appplant/cordova/plugin/notification/Notification$Type;
    .locals 5

    .line 147
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    invoke-static {v0}, Lde/appplant/cordova/plugin/notification/Manager;->getInstance(Landroid/content/Context;)Lde/appplant/cordova/plugin/notification/Manager;

    move-result-object v0

    .line 148
    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Manager;->getActiveNotifications()[Landroid/service/notification/StatusBarNotification;

    move-result-object v0

    .line 149
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getId()I

    move-result v1

    .line 151
    array-length v2, v0

    const/4 v3, 0x0

    :goto_0
    if-ge v3, v2, :cond_1

    aget-object v4, v0, v3

    .line 152
    invoke-virtual {v4}, Landroid/service/notification/StatusBarNotification;->getId()I

    move-result v4

    if-ne v4, v1, :cond_0

    .line 153
    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification$Type;->TRIGGERED:Lde/appplant/cordova/plugin/notification/Notification$Type;

    return-object v0

    :cond_0
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 157
    :cond_1
    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification$Type;->SCHEDULED:Lde/appplant/cordova/plugin/notification/Notification$Type;

    return-object v0
.end method

.method schedule(Lde/appplant/cordova/plugin/notification/Request;Ljava/lang/Class;)V
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lde/appplant/cordova/plugin/notification/Request;",
            "Ljava/lang/Class<",
            "*>;)V"
        }
    .end annotation

    .line 167
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 168
    new-instance v1, Landroid/support/v4/util/ArraySet;

    invoke-direct {v1}, Landroid/support/v4/util/ArraySet;-><init>()V

    .line 169
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getAlarmMgr()Landroid/app/AlarmManager;

    move-result-object v2

    .line 171
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->cancelScheduledAlarms()V

    .line 174
    :cond_0
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Request;->getTriggerDate()Ljava/util/Date;

    move-result-object v3

    if-nez v3, :cond_1

    goto :goto_0

    .line 179
    :cond_1
    new-instance v4, Landroid/content/Intent;

    iget-object v5, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    invoke-direct {v4, v5, p2}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    const-string v6, "NOTIFICATION_ID"

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 180
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Request;->getIdentifier()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v4, v5}, Landroid/content/Intent;->setAction(Ljava/lang/String;)Landroid/content/Intent;

    move-result-object v4

    const-string v5, "NOTIFICATION_ID"

    iget-object v6, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    .line 181
    invoke-virtual {v6}, Lde/appplant/cordova/plugin/notification/Options;->getId()Ljava/lang/Integer;

    move-result-object v6

    invoke-virtual {v4, v5, v6}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/io/Serializable;)Landroid/content/Intent;

    move-result-object v4

    const-string v5, "NOTIFICATION_OCCURRENCE"

    .line 182
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Request;->getOccurrence()I

    move-result v6

    invoke-virtual {v4, v5, v6}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    move-result-object v4

    .line 184
    invoke-virtual {v4}, Landroid/content/Intent;->getAction()Ljava/lang/String;

    move-result-object v5

    invoke-interface {v1, v5}, Ljava/util/Set;->add(Ljava/lang/Object;)Z

    .line 185
    new-instance v5, Landroid/support/v4/util/Pair;

    invoke-direct {v5, v3, v4}, Landroid/support/v4/util/Pair;-><init>(Ljava/lang/Object;Ljava/lang/Object;)V

    invoke-interface {v0, v5}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 187
    :goto_0
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Request;->moveNext()Z

    move-result v3

    if-nez v3, :cond_0

    .line 189
    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result p1

    if-eqz p1, :cond_2

    .line 190
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->unpersist()V

    return-void

    .line 194
    :cond_2
    invoke-direct {p0, v1}, Lde/appplant/cordova/plugin/notification/Notification;->persist(Ljava/util/Set;)V

    .line 196
    iget-object p1, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Options;->isInfiniteTrigger()Z

    move-result p1

    const/4 v1, 0x1

    if-nez p1, :cond_3

    .line 197
    invoke-interface {v0}, Ljava/util/List;->size()I

    move-result p1

    sub-int/2addr p1, v1

    invoke-interface {v0, p1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/support/v4/util/Pair;

    iget-object p1, p1, Landroid/support/v4/util/Pair;->second:Ljava/lang/Object;

    check-cast p1, Landroid/content/Intent;

    const-string v3, "NOTIFICATION_LAST"

    .line 198
    invoke-virtual {p1, v3, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Z)Landroid/content/Intent;

    .line 201
    :cond_3
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_1
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_8

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/support/v4/util/Pair;

    .line 202
    iget-object v3, v0, Landroid/support/v4/util/Pair;->first:Ljava/lang/Object;

    check-cast v3, Ljava/util/Date;

    .line 203
    invoke-virtual {v3}, Ljava/util/Date;->getTime()J

    move-result-wide v4

    .line 204
    iget-object v0, v0, Landroid/support/v4/util/Pair;->second:Ljava/lang/Object;

    check-cast v0, Landroid/content/Intent;

    .line 206
    new-instance v6, Ljava/util/Date;

    invoke-direct {v6}, Ljava/util/Date;-><init>()V

    invoke-virtual {v3, v6}, Ljava/util/Date;->after(Ljava/util/Date;)Z

    move-result v3

    if-nez v3, :cond_4

    invoke-direct {p0, v0, p2}, Lde/appplant/cordova/plugin/notification/Notification;->trigger(Landroid/content/Intent;Ljava/lang/Class;)Z

    move-result v3

    if-eqz v3, :cond_4

    goto :goto_1

    .line 209
    :cond_4
    iget-object v3, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    const/high16 v6, 0x10000000

    const/4 v7, 0x0

    invoke-static {v3, v7, v0, v6}, Landroid/app/PendingIntent;->getBroadcast(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;

    move-result-object v0

    .line 213
    :try_start_0
    iget-object v3, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {v3}, Lde/appplant/cordova/plugin/notification/Options;->getPriority()I

    move-result v3

    if-eq v3, v1, :cond_7

    const/4 v6, 0x5

    if-eq v3, v6, :cond_5

    .line 225
    invoke-virtual {v2, v7, v4, v5, v0}, Landroid/app/AlarmManager;->setExact(IJLandroid/app/PendingIntent;)V

    goto :goto_1

    .line 218
    :cond_5
    sget v3, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v6, 0x17

    if-lt v3, v6, :cond_6

    .line 219
    invoke-virtual {v2, v7, v4, v5, v0}, Landroid/app/AlarmManager;->setExactAndAllowWhileIdle(IJLandroid/app/PendingIntent;)V

    goto :goto_1

    .line 221
    :cond_6
    invoke-virtual {v2, v1, v4, v5, v0}, Landroid/app/AlarmManager;->setExact(IJLandroid/app/PendingIntent;)V

    goto :goto_1

    .line 215
    :cond_7
    invoke-virtual {v2, v1, v4, v5, v0}, Landroid/app/AlarmManager;->setExact(IJLandroid/app/PendingIntent;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    nop

    goto :goto_1

    :cond_8
    return-void
.end method

.method public show()V
    .locals 3

    .line 309
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->builder:Landroid/support/v4/app/NotificationCompat$Builder;

    if-nez v0, :cond_0

    return-void

    .line 311
    :cond_0
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Options;->isWithProgressBar()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 312
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->cacheBuilder()V

    .line 315
    :cond_1
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->grantPermissionToPlaySoundFromExternal()V

    .line 316
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getNotMgr()Landroid/app/NotificationManager;

    move-result-object v0

    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getId()I

    move-result v1

    iget-object v2, p0, Lde/appplant/cordova/plugin/notification/Notification;->builder:Landroid/support/v4/app/NotificationCompat$Builder;

    invoke-virtual {v2}, Landroid/support/v4/app/NotificationCompat$Builder;->build()Landroid/app/Notification;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Landroid/app/NotificationManager;->notify(ILandroid/app/Notification;)V

    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 344
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/Options;->getDict()Lorg/json/JSONObject;

    move-result-object v0

    .line 345
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    .line 348
    :try_start_0
    new-instance v2, Lorg/json/JSONObject;

    invoke-virtual {v0}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {v2, v0}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    move-object v1, v2

    goto :goto_0

    :catch_0
    move-exception v0

    .line 350
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V

    .line 353
    :goto_0
    invoke-virtual {v1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method update(Lorg/json/JSONObject;Ljava/lang/Class;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/json/JSONObject;",
            "Ljava/lang/Class<",
            "*>;)V"
        }
    .end annotation

    .line 326
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/notification/Notification;->mergeJSONObjects(Lorg/json/JSONObject;)V

    const/4 p1, 0x0

    .line 327
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/notification/Notification;->persist(Ljava/util/Set;)V

    .line 329
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Notification;->getType()Lde/appplant/cordova/plugin/notification/Notification$Type;

    move-result-object p1

    sget-object v0, Lde/appplant/cordova/plugin/notification/Notification$Type;->TRIGGERED:Lde/appplant/cordova/plugin/notification/Notification$Type;

    if-eq p1, v0, :cond_0

    return-void

    .line 332
    :cond_0
    new-instance p1, Landroid/content/Intent;

    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Notification;->context:Landroid/content/Context;

    invoke-direct {p1, v0, p2}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    const-string v1, "NOTIFICATION_ID"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    .line 333
    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Options;->getId()Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Landroid/content/Intent;->setAction(Ljava/lang/String;)Landroid/content/Intent;

    move-result-object p1

    const-string v0, "NOTIFICATION_ID"

    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Notification;->options:Lde/appplant/cordova/plugin/notification/Options;

    .line 334
    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Options;->getId()Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {p1, v0, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Ljava/io/Serializable;)Landroid/content/Intent;

    move-result-object p1

    const-string v0, "NOTIFICATION_UPDATE"

    const/4 v1, 0x1

    .line 335
    invoke-virtual {p1, v0, v1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Z)Landroid/content/Intent;

    move-result-object p1

    .line 337
    invoke-direct {p0, p1, p2}, Lde/appplant/cordova/plugin/notification/Notification;->trigger(Landroid/content/Intent;Ljava/lang/Class;)Z

    return-void
.end method
