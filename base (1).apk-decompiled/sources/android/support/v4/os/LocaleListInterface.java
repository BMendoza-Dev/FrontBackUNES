package android.support.v4.os;

import android.support.annotation.IntRange;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.annotation.RestrictTo;
import android.support.v4.media.MediaDescriptionCompat;
import android.support.v4.media.session.PlaybackStateCompat;
import java.util.Locale;
@RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
/* loaded from: classes.dex */
interface LocaleListInterface {
    boolean equals(Object obj);

    Locale get(int i);

    @Nullable
    Locale getFirstMatch(String[] strArr);

    Object getLocaleList();

    int hashCode();

    @IntRange(from = PlaybackStateCompat.PLAYBACK_POSITION_UNKNOWN)
    int indexOf(Locale locale);

    boolean isEmpty();

    void setLocaleList(@NonNull Locale... localeArr);

    @IntRange(from = MediaDescriptionCompat.BT_FOLDER_TYPE_MIXED)
    int size();

    String toLanguageTags();

    String toString();
}
