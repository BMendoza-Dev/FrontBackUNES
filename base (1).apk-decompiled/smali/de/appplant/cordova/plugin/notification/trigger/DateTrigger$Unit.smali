.class public final enum Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;
.super Ljava/lang/Enum;
.source "DateTrigger.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "Unit"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

.field public static final enum DAY:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

.field public static final enum HOUR:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

.field public static final enum MINUTE:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

.field public static final enum MONTH:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

.field public static final enum QUARTER:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

.field public static final enum SECOND:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

.field public static final enum WEEK:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

.field public static final enum YEAR:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;


# direct methods
.method static constructor <clinit>()V
    .locals 10

    .line 30
    new-instance v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const-string v1, "SECOND"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->SECOND:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    new-instance v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const-string v1, "MINUTE"

    const/4 v3, 0x1

    invoke-direct {v0, v1, v3}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->MINUTE:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    new-instance v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const-string v1, "HOUR"

    const/4 v4, 0x2

    invoke-direct {v0, v1, v4}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->HOUR:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    new-instance v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const-string v1, "DAY"

    const/4 v5, 0x3

    invoke-direct {v0, v1, v5}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->DAY:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    new-instance v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const-string v1, "WEEK"

    const/4 v6, 0x4

    invoke-direct {v0, v1, v6}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->WEEK:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    new-instance v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const-string v1, "MONTH"

    const/4 v7, 0x5

    invoke-direct {v0, v1, v7}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->MONTH:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    new-instance v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const-string v1, "QUARTER"

    const/4 v8, 0x6

    invoke-direct {v0, v1, v8}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->QUARTER:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    new-instance v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const-string v1, "YEAR"

    const/4 v9, 0x7

    invoke-direct {v0, v1, v9}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->YEAR:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const/16 v0, 0x8

    new-array v0, v0, [Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->SECOND:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    aput-object v1, v0, v2

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->MINUTE:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    aput-object v1, v0, v3

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->HOUR:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    aput-object v1, v0, v4

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->DAY:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    aput-object v1, v0, v5

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->WEEK:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    aput-object v1, v0, v6

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->MONTH:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    aput-object v1, v0, v7

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->QUARTER:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    aput-object v1, v0, v8

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->YEAR:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    aput-object v1, v0, v9

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->$VALUES:[Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 30
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;
    .locals 1

    .line 30
    const-class v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    return-object p0
.end method

.method public static values()[Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;
    .locals 1

    .line 30
    sget-object v0, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->$VALUES:[Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    invoke-virtual {v0}, [Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    return-object v0
.end method
