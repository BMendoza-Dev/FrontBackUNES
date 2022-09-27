package android.support.v4.os;

import android.os.Build;
import android.support.annotation.GuardedBy;
import android.support.annotation.IntRange;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.annotation.RequiresApi;
import android.support.annotation.RestrictTo;
import android.support.annotation.Size;
import android.support.v4.media.MediaDescriptionCompat;
import android.support.v4.media.session.PlaybackStateCompat;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.Locale;
@RequiresApi(14)
@RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
/* loaded from: classes.dex */
final class LocaleListHelper {
    private static final int NUM_PSEUDO_LOCALES = 2;
    private static final String STRING_AR_XB = "ar-XB";
    private static final String STRING_EN_XA = "en-XA";
    private final Locale[] mList;
    @NonNull
    private final String mStringRepresentation;
    private static final Locale[] sEmptyList = new Locale[0];
    private static final LocaleListHelper sEmptyLocaleList = new LocaleListHelper(new Locale[0]);
    private static final Locale LOCALE_EN_XA = new Locale("en", "XA");
    private static final Locale LOCALE_AR_XB = new Locale("ar", "XB");
    private static final Locale EN_LATN = LocaleHelper.forLanguageTag("en-Latn");
    private static final Object sLock = new Object();
    @GuardedBy("sLock")
    private static LocaleListHelper sLastExplicitlySetLocaleList = null;
    @GuardedBy("sLock")
    private static LocaleListHelper sDefaultLocaleList = null;
    @GuardedBy("sLock")
    private static LocaleListHelper sDefaultAdjustedLocaleList = null;
    @GuardedBy("sLock")
    private static Locale sLastDefaultLocale = null;

    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    public Locale get(int i) {
        if (i >= 0) {
            Locale[] localeArr = this.mList;
            if (i < localeArr.length) {
                return localeArr[i];
            }
        }
        return null;
    }

    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    public boolean isEmpty() {
        return this.mList.length == 0;
    }

    @IntRange(from = MediaDescriptionCompat.BT_FOLDER_TYPE_MIXED)
    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    public int size() {
        return this.mList.length;
    }

    @IntRange(from = PlaybackStateCompat.PLAYBACK_POSITION_UNKNOWN)
    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    public int indexOf(Locale locale) {
        int i = 0;
        while (true) {
            Locale[] localeArr = this.mList;
            if (i < localeArr.length) {
                if (localeArr[i].equals(locale)) {
                    return i;
                }
                i++;
            } else {
                return -1;
            }
        }
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof LocaleListHelper)) {
            return false;
        }
        Locale[] localeArr = ((LocaleListHelper) obj).mList;
        if (this.mList.length != localeArr.length) {
            return false;
        }
        int i = 0;
        while (true) {
            Locale[] localeArr2 = this.mList;
            if (i >= localeArr2.length) {
                return true;
            }
            if (!localeArr2[i].equals(localeArr[i])) {
                return false;
            }
            i++;
        }
    }

    public int hashCode() {
        int i = 1;
        int i2 = 0;
        while (true) {
            Locale[] localeArr = this.mList;
            if (i2 < localeArr.length) {
                i = (i * 31) + localeArr[i2].hashCode();
                i2++;
            } else {
                return i;
            }
        }
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        int i = 0;
        while (true) {
            Locale[] localeArr = this.mList;
            if (i < localeArr.length) {
                sb.append(localeArr[i]);
                if (i < this.mList.length - 1) {
                    sb.append(',');
                }
                i++;
            } else {
                sb.append("]");
                return sb.toString();
            }
        }
    }

    @NonNull
    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    public String toLanguageTags() {
        return this.mStringRepresentation;
    }

    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    public LocaleListHelper(@NonNull Locale... localeArr) {
        if (localeArr.length == 0) {
            this.mList = sEmptyList;
            this.mStringRepresentation = "";
            return;
        }
        Locale[] localeArr2 = new Locale[localeArr.length];
        HashSet hashSet = new HashSet();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < localeArr.length; i++) {
            Locale locale = localeArr[i];
            if (locale == null) {
                throw new NullPointerException("list[" + i + "] is null");
            } else if (hashSet.contains(locale)) {
                throw new IllegalArgumentException("list[" + i + "] is a repetition");
            } else {
                Locale locale2 = (Locale) locale.clone();
                localeArr2[i] = locale2;
                sb.append(LocaleHelper.toLanguageTag(locale2));
                if (i < localeArr.length - 1) {
                    sb.append(',');
                }
                hashSet.add(locale2);
            }
        }
        this.mList = localeArr2;
        this.mStringRepresentation = sb.toString();
    }

    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    LocaleListHelper(@NonNull Locale locale, LocaleListHelper localeListHelper) {
        if (locale == null) {
            throw new NullPointerException("topLocale is null");
        }
        int length = localeListHelper == null ? 0 : localeListHelper.mList.length;
        int i = 0;
        while (true) {
            if (i >= length) {
                i = -1;
                break;
            } else if (locale.equals(localeListHelper.mList[i])) {
                break;
            } else {
                i++;
            }
        }
        int i2 = (i == -1 ? 1 : 0) + length;
        Locale[] localeArr = new Locale[i2];
        localeArr[0] = (Locale) locale.clone();
        if (i == -1) {
            int i3 = 0;
            while (i3 < length) {
                int i4 = i3 + 1;
                localeArr[i4] = (Locale) localeListHelper.mList[i3].clone();
                i3 = i4;
            }
        } else {
            int i5 = 0;
            while (i5 < i) {
                int i6 = i5 + 1;
                localeArr[i6] = (Locale) localeListHelper.mList[i5].clone();
                i5 = i6;
            }
            for (int i7 = i + 1; i7 < length; i7++) {
                localeArr[i7] = (Locale) localeListHelper.mList[i7].clone();
            }
        }
        StringBuilder sb = new StringBuilder();
        for (int i8 = 0; i8 < i2; i8++) {
            sb.append(LocaleHelper.toLanguageTag(localeArr[i8]));
            if (i8 < i2 - 1) {
                sb.append(',');
            }
        }
        this.mList = localeArr;
        this.mStringRepresentation = sb.toString();
    }

    @NonNull
    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    static LocaleListHelper getEmptyLocaleList() {
        return sEmptyLocaleList;
    }

    @NonNull
    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    static LocaleListHelper forLanguageTags(@Nullable String str) {
        if (str == null || str.isEmpty()) {
            return getEmptyLocaleList();
        }
        String[] split = str.split(",");
        Locale[] localeArr = new Locale[split.length];
        for (int i = 0; i < localeArr.length; i++) {
            localeArr[i] = LocaleHelper.forLanguageTag(split[i]);
        }
        return new LocaleListHelper(localeArr);
    }

    private static String getLikelyScript(Locale locale) {
        if (Build.VERSION.SDK_INT >= 21) {
            String script = locale.getScript();
            return !script.isEmpty() ? script : "";
        }
        return "";
    }

    private static boolean isPseudoLocale(String str) {
        return STRING_EN_XA.equals(str) || STRING_AR_XB.equals(str);
    }

    private static boolean isPseudoLocale(Locale locale) {
        return LOCALE_EN_XA.equals(locale) || LOCALE_AR_XB.equals(locale);
    }

    @IntRange(from = MediaDescriptionCompat.BT_FOLDER_TYPE_MIXED, to = 1)
    private static int matchScore(Locale locale, Locale locale2) {
        if (locale.equals(locale2)) {
            return 1;
        }
        if (!locale.getLanguage().equals(locale2.getLanguage()) || isPseudoLocale(locale) || isPseudoLocale(locale2)) {
            return 0;
        }
        String likelyScript = getLikelyScript(locale);
        if (!likelyScript.isEmpty()) {
            return likelyScript.equals(getLikelyScript(locale2)) ? 1 : 0;
        }
        String country = locale.getCountry();
        return (country.isEmpty() || country.equals(locale2.getCountry())) ? 1 : 0;
    }

    private int findFirstMatchIndex(Locale locale) {
        int i = 0;
        while (true) {
            Locale[] localeArr = this.mList;
            if (i < localeArr.length) {
                if (matchScore(locale, localeArr[i]) > 0) {
                    return i;
                }
                i++;
            } else {
                return Integer.MAX_VALUE;
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:13:0x001b, code lost:
        if (r6 < Integer.MAX_VALUE) goto L15;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int computeFirstMatchIndex(java.util.Collection<java.lang.String> r5, boolean r6) {
        /*
            r4 = this;
            java.util.Locale[] r0 = r4.mList
            int r1 = r0.length
            r2 = 0
            r3 = 1
            if (r1 != r3) goto L8
            return r2
        L8:
            int r0 = r0.length
            if (r0 != 0) goto Ld
            r5 = -1
            return r5
        Ld:
            r0 = 2147483647(0x7fffffff, float:NaN)
            if (r6 == 0) goto L1e
            java.util.Locale r6 = android.support.v4.os.LocaleListHelper.EN_LATN
            int r6 = r4.findFirstMatchIndex(r6)
            if (r6 != 0) goto L1b
            return r2
        L1b:
            if (r6 >= r0) goto L1e
            goto L21
        L1e:
            r6 = 2147483647(0x7fffffff, float:NaN)
        L21:
            java.util.Iterator r5 = r5.iterator()
        L25:
            boolean r1 = r5.hasNext()
            if (r1 == 0) goto L40
            java.lang.Object r1 = r5.next()
            java.lang.String r1 = (java.lang.String) r1
            java.util.Locale r1 = android.support.v4.os.LocaleHelper.forLanguageTag(r1)
            int r1 = r4.findFirstMatchIndex(r1)
            if (r1 != 0) goto L3c
            return r2
        L3c:
            if (r1 >= r6) goto L25
            r6 = r1
            goto L25
        L40:
            if (r6 != r0) goto L43
            return r2
        L43:
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: android.support.v4.os.LocaleListHelper.computeFirstMatchIndex(java.util.Collection, boolean):int");
    }

    private Locale computeFirstMatch(Collection<String> collection, boolean z) {
        int computeFirstMatchIndex = computeFirstMatchIndex(collection, z);
        if (computeFirstMatchIndex == -1) {
            return null;
        }
        return this.mList[computeFirstMatchIndex];
    }

    @Nullable
    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    public Locale getFirstMatch(String[] strArr) {
        return computeFirstMatch(Arrays.asList(strArr), false);
    }

    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    int getFirstMatchIndex(String[] strArr) {
        return computeFirstMatchIndex(Arrays.asList(strArr), false);
    }

    @Nullable
    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    Locale getFirstMatchWithEnglishSupported(String[] strArr) {
        return computeFirstMatch(Arrays.asList(strArr), true);
    }

    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    int getFirstMatchIndexWithEnglishSupported(Collection<String> collection) {
        return computeFirstMatchIndex(collection, true);
    }

    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    int getFirstMatchIndexWithEnglishSupported(String[] strArr) {
        return getFirstMatchIndexWithEnglishSupported(Arrays.asList(strArr));
    }

    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    static boolean isPseudoLocalesOnly(@Nullable String[] strArr) {
        if (strArr == null) {
            return true;
        }
        if (strArr.length > 3) {
            return false;
        }
        for (String str : strArr) {
            if (!str.isEmpty() && !isPseudoLocale(str)) {
                return false;
            }
        }
        return true;
    }

    @Size(min = 1)
    @NonNull
    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    static LocaleListHelper getDefault() {
        Locale locale = Locale.getDefault();
        synchronized (sLock) {
            if (!locale.equals(sLastDefaultLocale)) {
                sLastDefaultLocale = locale;
                if (sDefaultLocaleList != null && locale.equals(sDefaultLocaleList.get(0))) {
                    return sDefaultLocaleList;
                }
                sDefaultLocaleList = new LocaleListHelper(locale, sLastExplicitlySetLocaleList);
                sDefaultAdjustedLocaleList = sDefaultLocaleList;
            }
            return sDefaultLocaleList;
        }
    }

    @Size(min = 1)
    @NonNull
    static LocaleListHelper getAdjustedDefault() {
        LocaleListHelper localeListHelper;
        getDefault();
        synchronized (sLock) {
            localeListHelper = sDefaultAdjustedLocaleList;
        }
        return localeListHelper;
    }

    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    static void setDefault(@Size(min = 1) @NonNull LocaleListHelper localeListHelper) {
        setDefault(localeListHelper, 0);
    }

    @RestrictTo({RestrictTo.Scope.LIBRARY_GROUP})
    static void setDefault(@Size(min = 1) @NonNull LocaleListHelper localeListHelper, int i) {
        if (localeListHelper == null) {
            throw new NullPointerException("locales is null");
        }
        if (localeListHelper.isEmpty()) {
            throw new IllegalArgumentException("locales is empty");
        }
        synchronized (sLock) {
            sLastDefaultLocale = localeListHelper.get(i);
            Locale.setDefault(sLastDefaultLocale);
            sLastExplicitlySetLocaleList = localeListHelper;
            sDefaultLocaleList = localeListHelper;
            if (i == 0) {
                sDefaultAdjustedLocaleList = sDefaultLocaleList;
            } else {
                sDefaultAdjustedLocaleList = new LocaleListHelper(sLastDefaultLocale, sDefaultLocaleList);
            }
        }
    }
}
