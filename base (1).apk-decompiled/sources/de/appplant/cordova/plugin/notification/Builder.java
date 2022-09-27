package de.appplant.cordova.plugin.notification;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;
import android.support.v4.media.app.NotificationCompat;
import android.support.v4.media.session.MediaSessionCompat;
import de.appplant.cordova.plugin.notification.action.Action;
import java.util.List;
import java.util.Random;
/* loaded from: classes.dex */
public final class Builder {
    private Class<?> clearReceiver;
    private Class<?> clickActivity;
    private final Context context;
    private Bundle extras;
    private final Options options;
    private final Random random = new Random();

    public Builder(Options options) {
        this.context = options.getContext();
        this.options = options;
    }

    public Builder setClearReceiver(Class<?> cls) {
        this.clearReceiver = cls;
        return this;
    }

    public Builder setClickActivity(Class<?> cls) {
        this.clickActivity = cls;
        return this;
    }

    public Builder setExtras(Bundle bundle) {
        this.extras = bundle;
        return this;
    }

    public Notification build() {
        if (this.options.isSilent()) {
            return new Notification(this.context, this.options);
        }
        Uri sound = this.options.getSound();
        Bundle bundle = new Bundle();
        bundle.putInt(Notification.EXTRA_ID, this.options.getId().intValue());
        bundle.putString("NOTIFICATION_SOUND", sound.toString());
        NotificationCompat.Builder lights = findOrCreateBuilder().setDefaults(this.options.getDefaults()).setExtras(bundle).setOnlyAlertOnce(false).setChannelId(this.options.getChannel()).setContentTitle(this.options.getTitle()).setContentText(this.options.getText()).setTicker(this.options.getText()).setNumber(this.options.getNumber()).setAutoCancel(this.options.isAutoClear().booleanValue()).setOngoing(this.options.isSticky().booleanValue()).setColor(this.options.getColor()).setVisibility(this.options.getVisibility()).setPriority(this.options.getPriority()).setShowWhen(this.options.getShowWhen()).setUsesChronometer(this.options.isWithProgressBar()).setGroup(this.options.getGroup()).setGroupSummary(this.options.getGroupSummary()).setLights(this.options.getLedColor(), this.options.getLedOn(), this.options.getLedOff());
        if (sound != Uri.EMPTY && !isUpdate()) {
            lights.setSound(sound);
        }
        if (this.options.isWithProgressBar()) {
            lights.setProgress(this.options.getProgressMaxValue(), this.options.getProgressValue(), this.options.isIndeterminateProgress());
        }
        if (this.options.hasLargeIcon()) {
            lights.setSmallIcon(this.options.getSmallIcon());
            lights.setLargeIcon(this.options.getLargeIcon());
        } else {
            lights.setSmallIcon(this.options.getSmallIcon());
        }
        applyStyle(lights);
        applyActions(lights);
        applyDeleteReceiver(lights);
        applyContentReceiver(lights);
        return new Notification(this.context, this.options, lights);
    }

    private void applyStyle(NotificationCompat.Builder builder) {
        NotificationCompat.MessagingStyle.Message[] messages = this.options.getMessages();
        String summary = this.options.getSummary();
        if (messages != null) {
            applyMessagingStyle(builder, messages);
            return;
        }
        MediaSessionCompat.Token mediaSessionToken = this.options.getMediaSessionToken();
        if (mediaSessionToken != null) {
            applyMediaStyle(builder, mediaSessionToken);
            return;
        }
        List<Bitmap> attachments = this.options.getAttachments();
        if (attachments.size() > 0) {
            applyBigPictureStyle(builder, attachments);
            return;
        }
        String text = this.options.getText();
        if (text != null && text.contains("\n")) {
            applyInboxStyle(builder);
        } else if (text == null) {
        } else {
            if (summary == null && text.length() < 45) {
                return;
            }
            applyBigTextStyle(builder);
        }
    }

    private void applyMessagingStyle(NotificationCompat.Builder builder, NotificationCompat.MessagingStyle.Message[] messageArr) {
        NotificationCompat.MessagingStyle conversationTitle = new NotificationCompat.MessagingStyle("Me").setConversationTitle(this.options.getTitle());
        for (NotificationCompat.MessagingStyle.Message message : messageArr) {
            conversationTitle.addMessage(message);
        }
        builder.setStyle(conversationTitle);
    }

    private void applyBigPictureStyle(NotificationCompat.Builder builder, List<Bitmap> list) {
        String summary = this.options.getSummary();
        String text = this.options.getText();
        NotificationCompat.BigPictureStyle bigPictureStyle = new NotificationCompat.BigPictureStyle(builder);
        if (summary == null) {
            summary = text;
        }
        builder.setStyle(bigPictureStyle.setSummaryText(summary).bigPicture(list.get(0)));
    }

    private void applyInboxStyle(NotificationCompat.Builder builder) {
        String text = this.options.getText();
        NotificationCompat.InboxStyle summaryText = new NotificationCompat.InboxStyle(builder).setSummaryText(this.options.getSummary());
        for (String str : text.split("\n")) {
            summaryText.addLine(str);
        }
        builder.setStyle(summaryText);
    }

    private void applyBigTextStyle(NotificationCompat.Builder builder) {
        builder.setStyle(new NotificationCompat.BigTextStyle(builder).setSummaryText(this.options.getSummary()).bigText(this.options.getText()));
    }

    private void applyMediaStyle(NotificationCompat.Builder builder, MediaSessionCompat.Token token) {
        builder.setStyle(new NotificationCompat.MediaStyle(builder).setMediaSession(token).setShowActionsInCompactView(1));
    }

    private void applyDeleteReceiver(NotificationCompat.Builder builder) {
        Class<?> cls = this.clearReceiver;
        if (cls == null) {
            return;
        }
        Intent putExtra = new Intent(this.context, cls).putExtras(this.extras).setAction(this.options.getIdentifier()).putExtra(Notification.EXTRA_ID, this.options.getId());
        builder.setDeleteIntent(PendingIntent.getBroadcast(this.context, this.random.nextInt(), putExtra, 134217728));
    }

    private void applyContentReceiver(NotificationCompat.Builder builder) {
        Class<?> cls = this.clickActivity;
        if (cls == null) {
            return;
        }
        Intent flags = new Intent(this.context, cls).putExtras(this.extras).putExtra(Notification.EXTRA_ID, this.options.getId()).putExtra(Action.EXTRA_ID, Action.CLICK_ACTION_ID).putExtra(Options.EXTRA_LAUNCH, this.options.isLaunchingApp()).setFlags(1073741824);
        builder.setContentIntent(PendingIntent.getActivity(this.context, this.random.nextInt(), flags, 134217728));
    }

    private void applyActions(NotificationCompat.Builder builder) {
        Action[] actions = this.options.getActions();
        if (actions == null || actions.length == 0) {
            return;
        }
        for (Action action : actions) {
            NotificationCompat.Action.Builder builder2 = new NotificationCompat.Action.Builder(action.getIcon(), action.getTitle(), getPendingIntentForAction(action));
            if (action.isWithInput()) {
                builder2.addRemoteInput(action.getInput());
            }
            builder.addAction(builder2.build());
        }
    }

    private PendingIntent getPendingIntentForAction(Action action) {
        Intent flags = new Intent(this.context, this.clickActivity).putExtras(this.extras).putExtra(Notification.EXTRA_ID, this.options.getId()).putExtra(Action.EXTRA_ID, action.getId()).putExtra(Options.EXTRA_LAUNCH, action.isLaunchingApp()).setFlags(1073741824);
        return PendingIntent.getActivity(this.context, this.random.nextInt(), flags, 268435456);
    }

    private boolean isUpdate() {
        Bundle bundle = this.extras;
        return bundle != null && bundle.getBoolean(Notification.EXTRA_UPDATE, false);
    }

    private NotificationCompat.Builder findOrCreateBuilder() {
        NotificationCompat.Builder cachedBuilder = Notification.getCachedBuilder(this.options.getId().intValue());
        return cachedBuilder == null ? new NotificationCompat.Builder(this.context, this.options.getChannel()) : cachedBuilder;
    }
}
