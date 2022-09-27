.class public abstract Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;
.super Ljava/lang/Object;
.source "DateTrigger.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;
    }
.end annotation


# instance fields
.field private occurrence:I


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 27
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x1

    .line 33
    iput v0, p0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;->occurrence:I

    return-void
.end method


# virtual methods
.method getCal(Ljava/util/Date;)Ljava/util/Calendar;
    .locals 1

    .line 64
    invoke-static {}, Ljava/util/Calendar;->getInstance()Ljava/util/Calendar;

    move-result-object v0

    .line 65
    invoke-virtual {v0, p1}, Ljava/util/Calendar;->setTime(Ljava/util/Date;)V

    return-object v0
.end method

.method public abstract getNextTriggerDate(Ljava/util/Date;)Ljava/util/Date;
.end method

.method public getOccurrence()I
    .locals 1

    .line 48
    iget v0, p0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;->occurrence:I

    return v0
.end method

.method incOccurrence()V
    .locals 1

    .line 55
    iget v0, p0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;->occurrence:I

    add-int/lit8 v0, v0, 0x1

    iput v0, p0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;->occurrence:I

    return-void
.end method
