.class public Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;
.super Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;
.source "IntervalTrigger.java"


# instance fields
.field private final ticks:I

.field final unit:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;


# direct methods
.method public constructor <init>(ILde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;)V
    .locals 0

    .line 45
    invoke-direct {p0}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger;-><init>()V

    .line 46
    iput p1, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->ticks:I

    .line 47
    iput-object p2, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->unit:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    return-void
.end method


# virtual methods
.method addInterval(Ljava/util/Calendar;)V
    .locals 3

    .line 73
    sget-object v0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger$1;->$SwitchMap$de$appplant$cordova$plugin$notification$trigger$DateTrigger$Unit:[I

    iget-object v1, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->unit:Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;

    invoke-virtual {v1}, Lde/appplant/cordova/plugin/notification/trigger/DateTrigger$Unit;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x2

    const/4 v2, 0x3

    packed-switch v0, :pswitch_data_0

    goto :goto_0

    :pswitch_0
    const/4 v0, 0x1

    .line 96
    iget v1, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->ticks:I

    invoke-virtual {p1, v0, v1}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    .line 93
    :pswitch_1
    iget v0, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->ticks:I

    mul-int/lit8 v0, v0, 0x3

    invoke-virtual {p1, v1, v0}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    .line 90
    :pswitch_2
    iget v0, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->ticks:I

    invoke-virtual {p1, v1, v0}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    .line 87
    :pswitch_3
    iget v0, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->ticks:I

    invoke-virtual {p1, v2, v0}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    :pswitch_4
    const/4 v0, 0x6

    .line 84
    iget v1, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->ticks:I

    invoke-virtual {p1, v0, v1}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    :pswitch_5
    const/16 v0, 0xb

    .line 81
    iget v1, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->ticks:I

    invoke-virtual {p1, v0, v1}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    :pswitch_6
    const/16 v0, 0xc

    .line 78
    iget v1, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->ticks:I

    invoke-virtual {p1, v0, v1}, Ljava/util/Calendar;->add(II)V

    goto :goto_0

    :pswitch_7
    const/16 v0, 0xd

    .line 75
    iget v1, p0, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->ticks:I

    invoke-virtual {p1, v0, v1}, Ljava/util/Calendar;->add(II)V

    :goto_0
    return-void

    :pswitch_data_0
    .packed-switch 0x1
        :pswitch_7
        :pswitch_6
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method public getNextTriggerDate(Ljava/util/Date;)Ljava/util/Date;
    .locals 0

    .line 59
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->getCal(Ljava/util/Date;)Ljava/util/Calendar;

    move-result-object p1

    .line 61
    invoke-virtual {p0, p1}, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->addInterval(Ljava/util/Calendar;)V

    .line 62
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/trigger/IntervalTrigger;->incOccurrence()V

    .line 64
    invoke-virtual {p1}, Ljava/util/Calendar;->getTime()Ljava/util/Date;

    move-result-object p1

    return-object p1
.end method
