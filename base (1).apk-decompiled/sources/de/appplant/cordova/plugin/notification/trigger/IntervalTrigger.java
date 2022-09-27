package de.appplant.cordova.plugin.notification.trigger;

import de.appplant.cordova.plugin.notification.trigger.DateTrigger;
import java.util.Calendar;
import java.util.Date;
/* loaded from: classes.dex */
public class IntervalTrigger extends DateTrigger {
    private final int ticks;
    final DateTrigger.Unit unit;

    public IntervalTrigger(int i, DateTrigger.Unit unit) {
        this.ticks = i;
        this.unit = unit;
    }

    @Override // de.appplant.cordova.plugin.notification.trigger.DateTrigger
    public Date getNextTriggerDate(Date date) {
        Calendar cal = getCal(date);
        addInterval(cal);
        incOccurrence();
        return cal.getTime();
    }

    public void addInterval(Calendar calendar) {
        switch (this.unit) {
            case SECOND:
                calendar.add(13, this.ticks);
                return;
            case MINUTE:
                calendar.add(12, this.ticks);
                return;
            case HOUR:
                calendar.add(11, this.ticks);
                return;
            case DAY:
                calendar.add(6, this.ticks);
                return;
            case WEEK:
                calendar.add(3, this.ticks);
                return;
            case MONTH:
                calendar.add(2, this.ticks);
                return;
            case QUARTER:
                calendar.add(2, this.ticks * 3);
                return;
            case YEAR:
                calendar.add(1, this.ticks);
                return;
            default:
                return;
        }
    }
}
