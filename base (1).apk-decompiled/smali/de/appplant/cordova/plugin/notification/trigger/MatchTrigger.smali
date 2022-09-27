.class public Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;
.super Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;
.source "MatchTrigger.java"


# static fields
.field private static INTERVALS:[Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

.field private static WEEKDAYS:[I

.field private static WEEKDAYS_REV:[I


# instance fields
.field private final matchers:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field private final specials:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 3

    const/4 v0, 0x6

    .line 44
    new-array v0, v0, [Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const/4 v1, 0x0

    const/4 v2, 0x0

    aput-object v2, v0, v1

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->MINUTE:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const/4 v2, 0x1

    aput-object v1, v0, v2

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->HOUR:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const/4 v2, 0x2

    aput-object v1, v0, v2

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->DAY:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const/4 v2, 0x3

    aput-object v1, v0, v2

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->MONTH:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const/4 v2, 0x4

    aput-object v1, v0, v2

    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->YEAR:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const/4 v2, 0x5

    aput-object v1, v0, v2

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->INTERVALS:[Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const/16 v0, 0x8

    .line 47
    new-array v1, v0, [I

    fill-array-data v1, :array_0

    sput-object v1, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->WEEKDAYS:[I

    .line 50
    new-array v0, v0, [I

    fill-array-data v0, :array_1

    sput-object v0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->WEEKDAYS_REV:[I

    return-void

    nop

    :array_0
    .array-data 4
        0x0
        0x2
        0x3
        0x4
        0x5
        0x6
        0x7
        0x1
    .end array-data

    :array_1
    .array-data 4
        0x0
        0x7
        0x1
        0x2
        0x3
        0x4
        0x5
        0x6
    .end array-data
.end method

.method public constructor <init>(Ljava/util/List;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;)V"
        }
    .end annotation

    .line 80
    invoke-static {p1, p2}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->getUnit(Ljava/util/List;Ljava/util/List;)Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    move-result-object v0

    const/4 v1, 0x1

    invoke-direct {p0, v1, v0}, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;-><init>(ILde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;)V

    const/4 v0, 0x0

    .line 82
    invoke-interface {p2, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    if-eqz v1, :cond_0

    .line 83
    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->WEEKDAYS:[I

    invoke-interface {p2, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    invoke-virtual {v2}, Ljava/lang/Integer;->intValue()I

    move-result v2

    aget v1, v1, v2

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {p2, v0, v1}, Ljava/util/List;->set(ILjava/lang/Object;)Ljava/lang/Object;

    .line 86
    :cond_0
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    .line 87
    iput-object p2, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->specials:Ljava/util/List;

    return-void
.end method

.method private addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V
    .locals 0

    .line 268
    invoke-virtual {p2, p3}, Ljava/util/Calendar;->get(I)I

    move-result p2

    invoke-virtual {p1, p3, p2}, Ljava/util/Calendar;->set(II)V

    .line 269
    invoke-virtual {p1, p3, p4}, Ljava/util/Calendar;->add(II)V

    return-void
.end method

.method private applySpecials(Ljava/util/Calendar;)Ljava/util/Date;
    .locals 3

    .line 233
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->specials:Ljava/util/List;

    const/4 v1, 0x2

    invoke-interface {v0, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->setWeekOfMonth(Ljava/util/Calendar;)Z

    move-result v0

    if-nez v0, :cond_0

    return-object v1

    .line 236
    :cond_0
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->specials:Ljava/util/List;

    const/4 v2, 0x0

    invoke-interface {v0, v2}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    if-eqz v0, :cond_1

    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->setDayOfWeek(Ljava/util/Calendar;)Z

    move-result v0

    if-nez v0, :cond_1

    return-object v1

    .line 239
    :cond_1
    invoke-virtual {p1}, Ljava/util/Calendar;->getTime()Ljava/util/Date;

    move-result-object p1

    return-object p1
.end method

.method private getBaseTriggerDate(Ljava/util/Date;)Ljava/util/Calendar;
    .locals 4

    .line 94
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->getCal(Ljava/util/Date;)Ljava/util/Calendar;

    move-result-object p1

    const/4 v0, 0x0

    const/16 v1, 0xd

    .line 96
    invoke-virtual {p1, v1, v0}, Ljava/util/Calendar;->set(II)V

    .line 98
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v1, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    const/16 v2, 0xc

    if-eqz v1, :cond_0

    .line 99
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v1, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    invoke-virtual {p1, v2, v1}, Ljava/util/Calendar;->set(II)V

    goto :goto_0

    .line 101
    :cond_0
    invoke-virtual {p1, v2, v0}, Ljava/util/Calendar;->set(II)V

    .line 104
    :goto_0
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    const/4 v2, 0x1

    invoke-interface {v1, v2}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    const/16 v3, 0xb

    if-eqz v1, :cond_1

    .line 105
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v0, v2}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Integer;

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    invoke-virtual {p1, v3, v0}, Ljava/util/Calendar;->set(II)V

    goto :goto_1

    .line 107
    :cond_1
    invoke-virtual {p1, v3, v0}, Ljava/util/Calendar;->set(II)V

    .line 110
    :goto_1
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    const/4 v1, 0x2

    invoke-interface {v0, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    if-eqz v0, :cond_2

    const/4 v0, 0x5

    .line 111
    iget-object v3, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v3, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/Integer;

    invoke-virtual {v3}, Ljava/lang/Integer;->intValue()I

    move-result v3

    invoke-virtual {p1, v0, v3}, Ljava/util/Calendar;->set(II)V

    .line 114
    :cond_2
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    const/4 v3, 0x3

    invoke-interface {v0, v3}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    if-eqz v0, :cond_3

    .line 115
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v0, v3}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Integer;

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    sub-int/2addr v0, v2

    invoke-virtual {p1, v1, v0}, Ljava/util/Calendar;->set(II)V

    .line 118
    :cond_3
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    const/4 v1, 0x4

    invoke-interface {v0, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    if-eqz v0, :cond_4

    .line 119
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v0, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/Integer;

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    invoke-virtual {p1, v2, v0}, Ljava/util/Calendar;->set(II)V

    :cond_4
    return-object p1
.end method

.method private getTriggerDate(Ljava/util/Date;)Ljava/util/Date;
    .locals 9

    .line 133
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->getBaseTriggerDate(Ljava/util/Date;)Ljava/util/Calendar;

    move-result-object v0

    .line 134
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->getCal(Ljava/util/Date;)Ljava/util/Calendar;

    move-result-object p1

    .line 136
    invoke-virtual {v0, p1}, Ljava/util/Calendar;->compareTo(Ljava/util/Calendar;)I

    move-result v1

    if-ltz v1, :cond_0

    .line 137
    invoke-direct {p0, v0}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->applySpecials(Ljava/util/Calendar;)Ljava/util/Date;

    move-result-object p1

    return-object p1

    .line 139
    :cond_0
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->unit:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const/4 v2, 0x0

    if-eqz v1, :cond_b

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/util/Calendar;->get(I)I

    move-result v3

    invoke-virtual {p1, v1}, Ljava/util/Calendar;->get(I)I

    move-result v4

    if-ge v3, v4, :cond_1

    goto/16 :goto_1

    :cond_1
    const/4 v3, 0x2

    .line 142
    invoke-virtual {v0, v3}, Ljava/util/Calendar;->get(I)I

    move-result v4

    invoke-virtual {p1, v3}, Ljava/util/Calendar;->get(I)I

    move-result v5

    const/4 v6, 0x4

    if-ge v4, v5, :cond_3

    .line 143
    sget-object v3, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger$1;->$SwitchMap$de$appplant$cordova$plugin$notification$trigger$DateTrigger$Unit:[I

    iget-object v4, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->unit:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    invoke-virtual {v4}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->ordinal()I

    move-result v4

    aget v3, v3, v4

    packed-switch v3, :pswitch_data_0

    goto/16 :goto_0

    .line 154
    :pswitch_0
    invoke-direct {p0, v0, p1, v1, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto/16 :goto_0

    .line 148
    :pswitch_1
    iget-object v3, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v3, v6}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v3

    if-nez v3, :cond_2

    .line 149
    invoke-direct {p0, v0, p1, v1, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto/16 :goto_0

    :cond_2
    return-object v2

    :cond_3
    const/4 v4, 0x6

    .line 158
    invoke-virtual {v0, v4}, Ljava/util/Calendar;->get(I)I

    move-result v5

    invoke-virtual {p1, v4}, Ljava/util/Calendar;->get(I)I

    move-result v7

    const/4 v8, 0x3

    if-ge v5, v7, :cond_6

    .line 159
    sget-object v4, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger$1;->$SwitchMap$de$appplant$cordova$plugin$notification$trigger$DateTrigger$Unit:[I

    iget-object v5, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->unit:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    invoke-virtual {v5}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->ordinal()I

    move-result v5

    aget v4, v4, v5

    packed-switch v4, :pswitch_data_1

    :pswitch_2
    goto/16 :goto_0

    .line 173
    :pswitch_3
    invoke-direct {p0, v0, p1, v3, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto/16 :goto_0

    .line 176
    :pswitch_4
    invoke-direct {p0, v0, p1, v1, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto/16 :goto_0

    .line 162
    :pswitch_5
    iget-object v4, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v4, v8}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v4

    if-nez v4, :cond_4

    .line 163
    invoke-direct {p0, v0, p1, v3, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto/16 :goto_0

    .line 166
    :cond_4
    iget-object v3, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v3, v6}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v3

    if-nez v3, :cond_5

    .line 167
    invoke-direct {p0, v0, p1, v1, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto/16 :goto_0

    :cond_5
    return-object v2

    :cond_6
    const/16 v5, 0xb

    .line 180
    invoke-virtual {v0, v5}, Ljava/util/Calendar;->get(I)I

    move-result v6

    invoke-virtual {p1, v5}, Ljava/util/Calendar;->get(I)I

    move-result v7

    if-ge v6, v7, :cond_9

    .line 181
    sget-object v6, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger$1;->$SwitchMap$de$appplant$cordova$plugin$notification$trigger$DateTrigger$Unit:[I

    iget-object v7, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->unit:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    invoke-virtual {v7}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->ordinal()I

    move-result v7

    aget v6, v6, v7

    packed-switch v6, :pswitch_data_2

    goto :goto_0

    .line 201
    :pswitch_6
    invoke-direct {p0, v0, p1, v3, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto :goto_0

    .line 204
    :pswitch_7
    invoke-direct {p0, v0, p1, v1, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto :goto_0

    .line 198
    :pswitch_8
    invoke-direct {p0, v0, p1, v4, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto :goto_0

    :pswitch_9
    const/4 v1, 0x0

    .line 194
    invoke-direct {p0, v0, p1, v5, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto :goto_0

    .line 183
    :pswitch_a
    iget-object v5, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v5, v3}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    if-nez v5, :cond_7

    .line 184
    invoke-direct {p0, v0, p1, v4, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto :goto_0

    .line 187
    :cond_7
    iget-object v4, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v4, v8}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v4

    if-nez v4, :cond_8

    .line 188
    invoke-direct {p0, v0, p1, v3, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto :goto_0

    :cond_8
    return-object v2

    :cond_9
    const/16 v2, 0xc

    .line 208
    invoke-virtual {v0, v2}, Ljava/util/Calendar;->get(I)I

    move-result v6

    invoke-virtual {p1, v2}, Ljava/util/Calendar;->get(I)I

    move-result v7

    if-ge v6, v7, :cond_a

    .line 209
    sget-object v6, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger$1;->$SwitchMap$de$appplant$cordova$plugin$notification$trigger$DateTrigger$Unit:[I

    iget-object v7, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->unit:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    invoke-virtual {v7}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->ordinal()I

    move-result v7

    aget v6, v6, v7

    packed-switch v6, :pswitch_data_3

    goto :goto_0

    .line 221
    :pswitch_b
    invoke-direct {p0, v0, p1, v3, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto :goto_0

    .line 224
    :pswitch_c
    invoke-direct {p0, v0, p1, v1, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto :goto_0

    .line 218
    :pswitch_d
    invoke-direct {p0, v0, p1, v4, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto :goto_0

    .line 214
    :pswitch_e
    invoke-direct {p0, v0, p1, v5, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    goto :goto_0

    .line 211
    :pswitch_f
    invoke-direct {p0, v0, p1, v2, v1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addToDate(Ljava/util/Calendar;Ljava/util/Calendar;II)V

    .line 229
    :cond_a
    :goto_0
    invoke-direct {p0, v0}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->applySpecials(Ljava/util/Calendar;)Ljava/util/Date;

    move-result-object p1

    return-object p1

    :cond_b
    :goto_1
    return-object v2

    :pswitch_data_0
    .packed-switch 0x1
        :pswitch_1
        :pswitch_1
        :pswitch_1
        :pswitch_1
        :pswitch_0
    .end packed-switch

    :pswitch_data_1
    .packed-switch 0x1
        :pswitch_5
        :pswitch_5
        :pswitch_2
        :pswitch_2
        :pswitch_4
        :pswitch_3
    .end packed-switch

    :pswitch_data_2
    .packed-switch 0x1
        :pswitch_a
        :pswitch_9
        :pswitch_8
        :pswitch_8
        :pswitch_7
        :pswitch_6
    .end packed-switch

    :pswitch_data_3
    .packed-switch 0x1
        :pswitch_f
        :pswitch_e
        :pswitch_d
        :pswitch_d
        :pswitch_c
        :pswitch_b
    .end packed-switch
.end method

.method private static getUnit(Ljava/util/List;Ljava/util/List;)Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;",
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;)",
            "Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;"
        }
    .end annotation

    .line 59
    sget-object v0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->INTERVALS:[Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    const/4 v1, 0x0

    invoke-interface {p0, v1}, Ljava/util/List;->indexOf(Ljava/lang/Object;)I

    move-result p0

    add-int/lit8 p0, p0, 0x1

    aget-object p0, v0, p0

    const/4 v0, 0x0

    .line 61
    invoke-interface {p1, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 62
    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->WEEK:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    :cond_0
    if-nez v1, :cond_1

    return-object p0

    .line 68
    :cond_1
    invoke-virtual {p0, v1}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->compareTo(Ljava/lang/Enum;)I

    move-result p1

    if-gez p1, :cond_2

    move-object p0, v1

    :cond_2
    return-object p0
.end method

.method private setDayOfWeek(Ljava/util/Calendar;)Z
    .locals 10

    const/4 v0, 0x2

    .line 281
    invoke-virtual {p1, v0}, Ljava/util/Calendar;->setFirstDayOfWeek(I)V

    .line 282
    sget-object v1, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->WEEKDAYS_REV:[I

    const/4 v2, 0x7

    invoke-virtual {p1, v2}, Ljava/util/Calendar;->get(I)I

    move-result v3

    aget v1, v1, v3

    .line 283
    invoke-virtual {p1, v0}, Ljava/util/Calendar;->get(I)I

    move-result v3

    const/4 v4, 0x1

    .line 284
    invoke-virtual {p1, v4}, Ljava/util/Calendar;->get(I)I

    move-result v5

    .line 285
    sget-object v6, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->WEEKDAYS_REV:[I

    iget-object v7, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->specials:Ljava/util/List;

    const/4 v8, 0x0

    invoke-interface {v7, v8}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v7

    check-cast v7, Ljava/lang/Integer;

    invoke-virtual {v7}, Ljava/lang/Integer;->intValue()I

    move-result v7

    aget v6, v6, v7

    .line 287
    iget-object v7, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v7, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v7

    if-eqz v7, :cond_0

    return v8

    :cond_0
    const/4 v7, 0x4

    const/4 v9, 0x3

    if-le v1, v6, :cond_4

    .line 291
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->specials:Ljava/util/List;

    invoke-interface {v1, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    if-nez v1, :cond_1

    .line 292
    invoke-virtual {p1, v9, v4}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    .line 294
    :cond_1
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v1, v9}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    if-nez v1, :cond_2

    .line 295
    invoke-virtual {p1, v0, v4}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    .line 297
    :cond_2
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v1, v7}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    if-nez v1, :cond_3

    .line 298
    invoke-virtual {p1, v4, v4}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    :cond_3
    return v8

    .line 303
    :cond_4
    :goto_0
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->specials:Ljava/util/List;

    invoke-interface {v1, v8}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/Integer;

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    invoke-virtual {p1, v2, v1}, Ljava/util/Calendar;->set(II)V

    .line 305
    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v1, v9}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    if-eqz v1, :cond_5

    invoke-virtual {p1, v0}, Ljava/util/Calendar;->get(I)I

    move-result v0

    if-eq v0, v3, :cond_5

    return v8

    .line 309
    :cond_5
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v0, v7}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    if-eqz v0, :cond_6

    invoke-virtual {p1, v4}, Ljava/util/Calendar;->get(I)I

    move-result p1

    if-eq p1, v5, :cond_6

    return v8

    :cond_6
    return v4
.end method

.method private setWeekOfMonth(Ljava/util/Calendar;)Z
    .locals 8

    const/4 v0, 0x4

    .line 324
    invoke-virtual {p1, v0}, Ljava/util/Calendar;->get(I)I

    move-result v1

    const/4 v2, 0x1

    .line 325
    invoke-virtual {p1, v2}, Ljava/util/Calendar;->get(I)I

    move-result v3

    .line 326
    iget-object v4, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->specials:Ljava/util/List;

    const/4 v5, 0x2

    invoke-interface {v4, v5}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Ljava/lang/Integer;

    invoke-virtual {v4}, Ljava/lang/Integer;->intValue()I

    move-result v4

    if-le v1, v4, :cond_2

    .line 329
    iget-object v6, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    const/4 v7, 0x3

    invoke-interface {v6, v7}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v6

    const/4 v7, 0x0

    if-nez v6, :cond_0

    .line 330
    invoke-virtual {p1, v5, v2}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    .line 332
    :cond_0
    iget-object v6, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v6, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v6

    if-nez v6, :cond_1

    .line 333
    invoke-virtual {p1, v2, v2}, Ljava/util/Calendar;->add(II)V

    .line 337
    :goto_0
    iget-object v6, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v6, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v6

    if-eqz v6, :cond_2

    invoke-virtual {p1, v2}, Ljava/util/Calendar;->get(I)I

    move-result v6

    if-eq v6, v3, :cond_2

    return v7

    :cond_1
    return v7

    .line 341
    :cond_2
    invoke-virtual {p1, v5}, Ljava/util/Calendar;->get(I)I

    move-result v3

    .line 343
    invoke-virtual {p1, v0, v4}, Ljava/util/Calendar;->set(II)V

    .line 345
    invoke-virtual {p1, v5}, Ljava/util/Calendar;->get(I)I

    move-result v0

    if-eq v0, v3, :cond_3

    const/4 v0, 0x5

    .line 346
    invoke-virtual {p1, v0, v2}, Ljava/util/Calendar;->set(II)V

    .line 347
    invoke-virtual {p1, v5, v3}, Ljava/util/Calendar;->set(II)V

    goto :goto_1

    .line 349
    :cond_3
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->matchers:Ljava/util/List;

    invoke-interface {v0, v5}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    if-nez v0, :cond_4

    if-eq v1, v4, :cond_4

    const/4 v0, 0x7

    .line 350
    invoke-virtual {p1, v0, v5}, Ljava/util/Calendar;->set(II)V

    :cond_4
    :goto_1
    return v2
.end method


# virtual methods
.method public getNextTriggerDate(Ljava/util/Date;)Ljava/util/Date;
    .locals 2

    .line 253
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->getOccurrence()I

    move-result v0

    const/4 v1, 0x1

    if-le v0, v1, :cond_0

    .line 254
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->getCal(Ljava/util/Date;)Ljava/util/Calendar;

    move-result-object p1

    .line 255
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->addInterval(Ljava/util/Calendar;)V

    .line 256
    invoke-virtual {p1}, Ljava/util/Calendar;->getTime()Ljava/util/Date;

    move-result-object p1

    .line 259
    :cond_0
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->incOccurrence()V

    .line 261
    invoke-direct {p0, p1}, Lde/appplant/cordova/plugin/notification/trigger/MatchTrigger;->getTriggerDate(Ljava/util/Date;)Ljava/util/Date;

    move-result-object p1

    return-object p1
.end method
