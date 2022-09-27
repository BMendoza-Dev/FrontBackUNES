package de.appplant.cordova.plugin.notification.trigger;

import java.util.Calendar;
import java.util.Date;
/* loaded from: classes.dex */
public abstract class DateTrigger {
    private int occurrence = 1;

    /* loaded from: classes.dex */
    public enum Unit {
        SECOND,
        MINUTE,
        HOUR,
        DAY,
        WEEK,
        MONTH,
        QUARTER,
        YEAR
    }

    public abstract Date getNextTriggerDate(Date date);

    public int getOccurrence() {
        return this.occurrence;
    }

    public void incOccurrence() {
        this.occurrence++;
    }

    public Calendar getCal(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        return calendar;
    }
}
