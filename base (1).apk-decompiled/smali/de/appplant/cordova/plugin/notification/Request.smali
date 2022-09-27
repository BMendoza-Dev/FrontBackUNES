.class public final Lde/appplant/cordova/plugin/notification/Request;
.super Ljava/lang/Object;
.source "Request.java"


# static fields
.field public static final EXTRA_LAST:Ljava/lang/String; = "NOTIFICATION_LAST"

.field static final EXTRA_OCCURRENCE:Ljava/lang/String; = "NOTIFICATION_OCCURRENCE"


# instance fields
.field private final count:I

.field private final options:Lde/appplant/cordova/plugin/notification/Options;

.field private final spec:Lorg/json/JSONObject;

.field private final trigger:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;

.field private triggerDate:Ljava/util/Date;


# direct methods
.method public constructor <init>(Lde/appplant/cordova/plugin/notification/Options;)V
    .locals 1

    .line 71
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 72
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Request;->options:Lde/appplant/cordova/plugin/notification/Options;

    .line 73
    invoke-virtual {p1}, Lde/appplant/cordova/plugin/notification/Options;->getTrigger()Lorg/json/JSONObject;

    move-result-object p1

    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    .line 74
    iget-object p1, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v0, "count"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;)I

    move-result p1

    const/4 v0, 0x1

    invoke-static {p1, v0}, Ljava/lang/Math;->max(II)I

    move-result p1

    iput p1, p0, Lde/appplant/cordova/plugin/notification/Request;->count:I

    .line 75
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Request;->buildTrigger()Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;

    move-result-object p1

    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Request;->trigger:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;

    .line 76
    iget-object p1, p0, Lde/appplant/cordova/plugin/notification/Request;->trigger:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;

    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Request;->getBaseDate()Ljava/util/Date;

    move-result-object v0

    invoke-virtual {p1, v0}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;->getNextTriggerDate(Ljava/util/Date;)Ljava/util/Date;

    move-result-object p1

    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/Request;->triggerDate:Ljava/util/Date;

    return-void
.end method

.method private buildTrigger()Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;
    .locals 3

    .line 155
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "every"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    .line 157
    instance-of v0, v0, Lorg/json/JSONObject;

    if-eqz v0, :cond_0

    .line 158
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Request;->getMatchingComponents()Ljava/util/List;

    move-result-object v0

    .line 159
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Request;->getSpecialMatchingComponents()Ljava/util/List;

    move-result-object v1

    .line 161
    new-instance v2, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;

    invoke-direct {v2, v0, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;-><init>(Ljava/util/List;Ljava/util/List;)V

    return-object v2

    .line 164
    :cond_0
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Request;->getUnit()Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    move-result-object v0

    .line 165
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Request;->getTicks()I

    move-result v1

    .line 167
    new-instance v2, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;

    invoke-direct {v2, v1, v0}, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;-><init>(ILde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;)V

    return-object v2
.end method

.method private getBaseDate()Ljava/util/Date;
    .locals 5

    .line 247
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "at"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    const-wide/16 v1, 0x0

    if-eqz v0, :cond_0

    .line 248
    new-instance v0, Ljava/util/Date;

    iget-object v3, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v4, "at"

    invoke-virtual {v3, v4, v1, v2}, Lorg/json/JSONObject;->optLong(Ljava/lang/String;J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Ljava/util/Date;-><init>(J)V

    return-object v0

    .line 250
    :cond_0
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v3, "firstAt"

    invoke-virtual {v0, v3}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 251
    new-instance v0, Ljava/util/Date;

    iget-object v3, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v4, "firstAt"

    invoke-virtual {v3, v4, v1, v2}, Lorg/json/JSONObject;->optLong(Ljava/lang/String;J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Ljava/util/Date;-><init>(J)V

    return-object v0

    .line 253
    :cond_1
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v3, "after"

    invoke-virtual {v0, v3}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 254
    new-instance v0, Ljava/util/Date;

    iget-object v3, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v4, "after"

    invoke-virtual {v3, v4, v1, v2}, Lorg/json/JSONObject;->optLong(Ljava/lang/String;J)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Ljava/util/Date;-><init>(J)V

    return-object v0

    .line 256
    :cond_2
    new-instance v0, Ljava/util/Date;

    invoke-direct {v0}, Ljava/util/Date;-><init>()V

    return-object v0
.end method

.method private getMatchingComponents()Ljava/util/List;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 216
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "every"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const/4 v1, 0x5

    .line 218
    new-array v1, v1, [Ljava/lang/Integer;

    const-string v2, "minute"

    .line 219
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    const/4 v3, 0x0

    aput-object v2, v1, v3

    const-string v2, "hour"

    .line 220
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    const/4 v3, 0x1

    aput-object v2, v1, v3

    const-string v2, "day"

    .line 221
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    const/4 v3, 0x2

    aput-object v2, v1, v3

    const-string v2, "month"

    .line 222
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    const/4 v3, 0x3

    aput-object v2, v1, v3

    const-string v2, "year"

    .line 223
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Integer;

    const/4 v2, 0x4

    aput-object v0, v1, v2

    .line 218
    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method private getNextTriggerDate()Ljava/util/Date;
    .locals 2

    .line 148
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->trigger:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;

    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Request;->triggerDate:Ljava/util/Date;

    invoke-virtual {v0, v1}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;->getNextTriggerDate(Ljava/util/Date;)Ljava/util/Date;

    move-result-object v0

    return-object v0
.end method

.method private getSpecialMatchingComponents()Ljava/util/List;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 233
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "every"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const/4 v1, 0x4

    .line 235
    new-array v1, v1, [Ljava/lang/Integer;

    const-string v2, "weekday"

    .line 236
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    const/4 v3, 0x0

    aput-object v2, v1, v3

    const-string v2, "weekdayOrdinal"

    .line 237
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    const/4 v3, 0x1

    aput-object v2, v1, v3

    const-string v2, "weekOfMonth"

    .line 238
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    const/4 v3, 0x2

    aput-object v2, v1, v3

    const-string v2, "quarter"

    .line 239
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Integer;

    const/4 v2, 0x3

    aput-object v0, v1, v2

    .line 235
    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method private getTicks()I
    .locals 4

    .line 191
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "every"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    .line 194
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v2, "at"

    invoke-virtual {v1, v2}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    const/4 v2, 0x0

    if-eqz v1, :cond_0

    goto :goto_0

    .line 197
    :cond_0
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v3, "in"

    invoke-virtual {v1, v3}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 198
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "in"

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v2

    goto :goto_0

    .line 200
    :cond_1
    instance-of v1, v0, Ljava/lang/String;

    if-eqz v1, :cond_2

    const/4 v2, 0x1

    goto :goto_0

    .line 203
    :cond_2
    instance-of v0, v0, Lorg/json/JSONObject;

    if-nez v0, :cond_3

    .line 204
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "every"

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v2

    :cond_3
    :goto_0
    return v2
.end method

.method private getUnit()Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;
    .locals 4

    .line 174
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "every"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    const-string v1, "SECOND"

    .line 177
    iget-object v2, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v3, "unit"

    invoke-virtual {v2, v3}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v2

    if-eqz v2, :cond_0

    .line 178
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "unit"

    const-string v2, "second"

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    goto :goto_0

    .line 180
    :cond_0
    instance-of v0, v0, Ljava/lang/String;

    if-eqz v0, :cond_1

    .line 181
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "every"

    const-string v2, "second"

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 184
    :cond_1
    :goto_0
    invoke-virtual {v1}, Ljava/lang/String;->toUpperCase()Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->valueOf(Ljava/lang/String;)Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    move-result-object v0

    return-object v0
.end method

.method private hasNext()Z
    .locals 2

    .line 106
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->triggerDate:Ljava/util/Date;

    if-eqz v0, :cond_0

    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Request;->getOccurrence()I

    move-result v0

    iget v1, p0, Lde/appplant/cordova/plugin/notification/Request;->count:I

    if-gt v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method


# virtual methods
.method getIdentifier()Ljava/lang/String;
    .locals 2

    .line 92
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Request;->options:Lde/appplant/cordova/plugin/notification/Options;

    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/Options;->getId()Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Integer;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string v1, "-"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/Request;->getOccurrence()I

    move-result v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method getOccurrence()I
    .locals 1

    .line 99
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->trigger:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;

    invoke-virtual {v0}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;->getOccurrence()I

    move-result v0

    return v0
.end method

.method public getOptions()Lde/appplant/cordova/plugin/notification/Options;
    .locals 1

    .line 83
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->options:Lde/appplant/cordova/plugin/notification/Options;

    return-object v0
.end method

.method getTriggerDate()Ljava/util/Date;
    .locals 8

    .line 128
    invoke-static {}, Ljava/util/Calendar;->getInstance()Ljava/util/Calendar;

    move-result-object v0

    .line 130
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/Request;->triggerDate:Ljava/util/Date;

    const/4 v2, 0x0

    if-nez v1, :cond_0

    return-object v2

    .line 133
    :cond_0
    invoke-virtual {v1}, Ljava/util/Date;->getTime()J

    move-result-wide v3

    .line 135
    invoke-virtual {v0}, Ljava/util/Calendar;->getTimeInMillis()J

    move-result-wide v0

    sub-long/2addr v0, v3

    const-wide/32 v5, 0xea60

    cmp-long v7, v0, v5

    if-lez v7, :cond_1

    return-object v2

    .line 138
    :cond_1
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->spec:Lorg/json/JSONObject;

    const-string v1, "before"

    const-wide/16 v5, 0x1

    add-long/2addr v5, v3

    invoke-virtual {v0, v1, v5, v6}, Lorg/json/JSONObject;->optLong(Ljava/lang/String;J)J

    move-result-wide v0

    cmp-long v5, v3, v0

    if-ltz v5, :cond_2

    return-object v2

    .line 141
    :cond_2
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->triggerDate:Ljava/util/Date;

    return-object v0
.end method

.method moveNext()Z
    .locals 1

    .line 113
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Request;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 114
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/Request;->getNextTriggerDate()Ljava/util/Date;

    move-result-object v0

    iput-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->triggerDate:Ljava/util/Date;

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 116
    iput-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->triggerDate:Ljava/util/Date;

    .line 119
    :goto_0
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/Request;->triggerDate:Ljava/util/Date;

    if-eqz v0, :cond_1

    const/4 v0, 0x1

    goto :goto_1

    :cond_1
    const/4 v0, 0x0

    :goto_1
    return v0
.end method
