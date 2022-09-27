package com.ionicframework.cordova.webview;

import java.util.ArrayList;
import java.util.regex.Pattern;
/* loaded from: classes.dex */
public class UriMatcher {
    private static final int EXACT = 0;
    static final Pattern PATH_SPLIT_PATTERN = Pattern.compile("/");
    private static final int REST = 2;
    private static final int TEXT = 1;
    private ArrayList<UriMatcher> mChildren;
    private Object mCode;
    private String mText;
    private int mWhich;

    public UriMatcher(Object obj) {
        this.mCode = obj;
        this.mWhich = -1;
        this.mChildren = new ArrayList<>();
        this.mText = null;
    }

    private UriMatcher() {
        this.mCode = null;
        this.mWhich = -1;
        this.mChildren = new ArrayList<>();
        this.mText = null;
    }

    public void addURI(String str, String str2, String str3, Object obj) {
        String str4;
        UriMatcher uriMatcher;
        String str5 = str3;
        if (obj == null) {
            throw new IllegalArgumentException("Code can't be null");
        }
        String[] strArr = null;
        if (str5 != null) {
            if (str3.length() > 0 && str5.charAt(0) == '/') {
                str5 = str5.substring(1);
            }
            strArr = PATH_SPLIT_PATTERN.split(str5);
        }
        int length = strArr != null ? strArr.length : 0;
        UriMatcher uriMatcher2 = this;
        int i = -2;
        while (i < length) {
            if (i == -2) {
                str4 = str;
            } else {
                str4 = i == -1 ? str2 : strArr[i];
            }
            ArrayList<UriMatcher> arrayList = uriMatcher2.mChildren;
            int size = arrayList.size();
            int i2 = 0;
            while (true) {
                if (i2 >= size) {
                    uriMatcher = uriMatcher2;
                    break;
                }
                uriMatcher = arrayList.get(i2);
                if (str4.equals(uriMatcher.mText)) {
                    break;
                }
                i2++;
            }
            if (i2 == size) {
                uriMatcher2 = new UriMatcher();
                if (str4.equals("**")) {
                    uriMatcher2.mWhich = 2;
                } else if (str4.equals("*")) {
                    uriMatcher2.mWhich = 1;
                } else {
                    uriMatcher2.mWhich = 0;
                }
                uriMatcher2.mText = str4;
                uriMatcher.mChildren.add(uriMatcher2);
            } else {
                uriMatcher2 = uriMatcher;
            }
            i++;
        }
        uriMatcher2.mCode = obj;
    }

    /* JADX WARN: Code restructure failed: missing block: B:25:0x0050, code lost:
        if (r10.mText.equals(r5) != false) goto L26;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object match(android.net.Uri r13) {
        /*
            r12 = this;
            java.util.List r0 = r13.getPathSegments()
            int r1 = r0.size()
            if (r1 != 0) goto L13
            java.lang.String r2 = r13.getAuthority()
            if (r2 != 0) goto L13
            java.lang.Object r13 = r12.mCode
            return r13
        L13:
            r2 = -2
            r4 = r12
            r3 = -2
        L16:
            if (r3 >= r1) goto L61
            if (r3 != r2) goto L1f
            java.lang.String r5 = r13.getScheme()
            goto L2d
        L1f:
            r5 = -1
            if (r3 != r5) goto L27
            java.lang.String r5 = r13.getAuthority()
            goto L2d
        L27:
            java.lang.Object r5 = r0.get(r3)
            java.lang.String r5 = (java.lang.String) r5
        L2d:
            java.util.ArrayList<com.ionicframework.cordova.webview.UriMatcher> r6 = r4.mChildren
            if (r6 != 0) goto L32
            goto L61
        L32:
            int r4 = r6.size()
            r7 = 0
            r8 = 0
            r9 = r8
        L39:
            if (r7 >= r4) goto L5a
            java.lang.Object r10 = r6.get(r7)
            com.ionicframework.cordova.webview.UriMatcher r10 = (com.ionicframework.cordova.webview.UriMatcher) r10
            int r11 = r10.mWhich
            switch(r11) {
                case 0: goto L4a;
                case 1: goto L52;
                case 2: goto L47;
                default: goto L46;
            }
        L46:
            goto L53
        L47:
            java.lang.Object r13 = r10.mCode
            return r13
        L4a:
            java.lang.String r11 = r10.mText
            boolean r11 = r11.equals(r5)
            if (r11 == 0) goto L53
        L52:
            r9 = r10
        L53:
            if (r9 == 0) goto L57
            r4 = r9
            goto L5b
        L57:
            int r7 = r7 + 1
            goto L39
        L5a:
            r4 = r9
        L5b:
            if (r4 != 0) goto L5e
            return r8
        L5e:
            int r3 = r3 + 1
            goto L16
        L61:
            java.lang.Object r13 = r4.mCode
            return r13
        */
        throw new UnsupportedOperationException("Method not decompiled: com.ionicframework.cordova.webview.UriMatcher.match(android.net.Uri):java.lang.Object");
    }
}
