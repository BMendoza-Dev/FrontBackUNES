package okhttp3.internal;

import android.support.v4.media.session.PlaybackStateCompat;
import com.silkimen.http.HttpRequest;
import java.io.Closeable;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.IDN;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.TimeZone;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import okio.Source;
/* loaded from: classes.dex */
public final class Util {
    public static final byte[] EMPTY_BYTE_ARRAY = new byte[0];
    public static final String[] EMPTY_STRING_ARRAY = new String[0];
    public static final ResponseBody EMPTY_RESPONSE = ResponseBody.create((MediaType) null, EMPTY_BYTE_ARRAY);
    public static final RequestBody EMPTY_REQUEST = RequestBody.create((MediaType) null, EMPTY_BYTE_ARRAY);
    private static final ByteString UTF_8_BOM = ByteString.decodeHex("efbbbf");
    private static final ByteString UTF_16_BE_BOM = ByteString.decodeHex("feff");
    private static final ByteString UTF_16_LE_BOM = ByteString.decodeHex("fffe");
    private static final ByteString UTF_32_BE_BOM = ByteString.decodeHex("0000ffff");
    private static final ByteString UTF_32_LE_BOM = ByteString.decodeHex("ffff0000");
    public static final Charset UTF_8 = Charset.forName(HttpRequest.CHARSET_UTF8);
    public static final Charset ISO_8859_1 = Charset.forName("ISO-8859-1");
    private static final Charset UTF_16_BE = Charset.forName("UTF-16BE");
    private static final Charset UTF_16_LE = Charset.forName("UTF-16LE");
    private static final Charset UTF_32_BE = Charset.forName("UTF-32BE");
    private static final Charset UTF_32_LE = Charset.forName("UTF-32LE");
    public static final TimeZone UTC = TimeZone.getTimeZone("GMT");
    public static final Comparator<String> NATURAL_ORDER = new Comparator<String>() { // from class: okhttp3.internal.Util.1
        public int compare(String str, String str2) {
            return str.compareTo(str2);
        }
    };
    private static final Pattern VERIFY_AS_IP_ADDRESS = Pattern.compile("([0-9a-fA-F]*:[0-9a-fA-F:.]*)|([\\d.]+)");

    public static int decodeHexDigit(char c) {
        if (c < '0' || c > '9') {
            if (c >= 'a' && c <= 'f') {
                return (c - 'a') + 10;
            }
            if (c >= 'A' && c <= 'F') {
                return (c - 'A') + 10;
            }
            return -1;
        }
        return c - '0';
    }

    private Util() {
    }

    public static void checkOffsetAndCount(long j, long j2, long j3) {
        if ((j2 | j3) < 0 || j2 > j || j - j2 < j3) {
            throw new ArrayIndexOutOfBoundsException();
        }
    }

    public static boolean equal(Object obj, Object obj2) {
        return obj == obj2 || (obj != null && obj.equals(obj2));
    }

    public static void closeQuietly(Closeable closeable) {
        if (closeable != null) {
            try {
                closeable.close();
            } catch (RuntimeException e) {
                throw e;
            } catch (Exception unused) {
            }
        }
    }

    public static void closeQuietly(Socket socket) {
        if (socket != null) {
            try {
                socket.close();
            } catch (AssertionError e) {
                if (!isAndroidGetsocknameError(e)) {
                    throw e;
                }
            } catch (RuntimeException e2) {
                throw e2;
            } catch (Exception unused) {
            }
        }
    }

    public static void closeQuietly(ServerSocket serverSocket) {
        if (serverSocket != null) {
            try {
                serverSocket.close();
            } catch (RuntimeException e) {
                throw e;
            } catch (Exception unused) {
            }
        }
    }

    public static boolean discard(Source source, int i, TimeUnit timeUnit) {
        try {
            return skipAll(source, i, timeUnit);
        } catch (IOException unused) {
            return false;
        }
    }

    public static boolean skipAll(Source source, int i, TimeUnit timeUnit) throws IOException {
        long nanoTime = System.nanoTime();
        long deadlineNanoTime = source.timeout().hasDeadline() ? source.timeout().deadlineNanoTime() - nanoTime : Long.MAX_VALUE;
        source.timeout().deadlineNanoTime(Math.min(deadlineNanoTime, timeUnit.toNanos(i)) + nanoTime);
        try {
            Buffer buffer = new Buffer();
            while (source.read(buffer, PlaybackStateCompat.ACTION_PLAY_FROM_URI) != -1) {
                buffer.clear();
            }
            if (deadlineNanoTime == Long.MAX_VALUE) {
                source.timeout().clearDeadline();
            } else {
                source.timeout().deadlineNanoTime(nanoTime + deadlineNanoTime);
            }
            return true;
        } catch (InterruptedIOException unused) {
            if (deadlineNanoTime == Long.MAX_VALUE) {
                source.timeout().clearDeadline();
            } else {
                source.timeout().deadlineNanoTime(nanoTime + deadlineNanoTime);
            }
            return false;
        } catch (Throwable th) {
            if (deadlineNanoTime == Long.MAX_VALUE) {
                source.timeout().clearDeadline();
            } else {
                source.timeout().deadlineNanoTime(nanoTime + deadlineNanoTime);
            }
            throw th;
        }
    }

    public static <T> List<T> immutableList(List<T> list) {
        return Collections.unmodifiableList(new ArrayList(list));
    }

    public static <T> List<T> immutableList(T... tArr) {
        return Collections.unmodifiableList(Arrays.asList((Object[]) tArr.clone()));
    }

    public static ThreadFactory threadFactory(final String str, final boolean z) {
        return new ThreadFactory() { // from class: okhttp3.internal.Util.2
            @Override // java.util.concurrent.ThreadFactory
            public Thread newThread(Runnable runnable) {
                Thread thread = new Thread(runnable, str);
                thread.setDaemon(z);
                return thread;
            }
        };
    }

    public static String[] intersect(Comparator<? super String> comparator, String[] strArr, String[] strArr2) {
        ArrayList arrayList = new ArrayList();
        for (String str : strArr) {
            int length = strArr2.length;
            int i = 0;
            while (true) {
                if (i >= length) {
                    break;
                } else if (comparator.compare(str, strArr2[i]) == 0) {
                    arrayList.add(str);
                    break;
                } else {
                    i++;
                }
            }
        }
        return (String[]) arrayList.toArray(new String[arrayList.size()]);
    }

    public static boolean nonEmptyIntersection(Comparator<String> comparator, String[] strArr, String[] strArr2) {
        if (strArr == null || strArr2 == null || strArr.length == 0 || strArr2.length == 0) {
            return false;
        }
        for (String str : strArr) {
            for (String str2 : strArr2) {
                if (comparator.compare(str, str2) == 0) {
                    return true;
                }
            }
        }
        return false;
    }

    public static String hostHeader(HttpUrl httpUrl, boolean z) {
        String str;
        if (httpUrl.host().contains(":")) {
            str = "[" + httpUrl.host() + "]";
        } else {
            str = httpUrl.host();
        }
        if (z || httpUrl.port() != HttpUrl.defaultPort(httpUrl.scheme())) {
            return str + ":" + httpUrl.port();
        }
        return str;
    }

    public static boolean isAndroidGetsocknameError(AssertionError assertionError) {
        return (assertionError.getCause() == null || assertionError.getMessage() == null || !assertionError.getMessage().contains("getsockname failed")) ? false : true;
    }

    public static int indexOf(Comparator<String> comparator, String[] strArr, String str) {
        int length = strArr.length;
        for (int i = 0; i < length; i++) {
            if (comparator.compare(strArr[i], str) == 0) {
                return i;
            }
        }
        return -1;
    }

    public static String[] concat(String[] strArr, String str) {
        String[] strArr2 = new String[strArr.length + 1];
        System.arraycopy(strArr, 0, strArr2, 0, strArr.length);
        strArr2[strArr2.length - 1] = str;
        return strArr2;
    }

    public static int skipLeadingAsciiWhitespace(String str, int i, int i2) {
        while (i < i2) {
            switch (str.charAt(i)) {
                case '\t':
                case '\n':
                case '\f':
                case '\r':
                case ' ':
                    i++;
                default:
                    return i;
            }
        }
        return i2;
    }

    public static int skipTrailingAsciiWhitespace(String str, int i, int i2) {
        for (int i3 = i2 - 1; i3 >= i; i3--) {
            switch (str.charAt(i3)) {
                case '\t':
                case '\n':
                case '\f':
                case '\r':
                case ' ':
                default:
                    return i3 + 1;
            }
        }
        return i;
    }

    public static String trimSubstring(String str, int i, int i2) {
        int skipLeadingAsciiWhitespace = skipLeadingAsciiWhitespace(str, i, i2);
        return str.substring(skipLeadingAsciiWhitespace, skipTrailingAsciiWhitespace(str, skipLeadingAsciiWhitespace, i2));
    }

    public static int delimiterOffset(String str, int i, int i2, String str2) {
        while (i < i2) {
            if (str2.indexOf(str.charAt(i)) != -1) {
                return i;
            }
            i++;
        }
        return i2;
    }

    public static int delimiterOffset(String str, int i, int i2, char c) {
        while (i < i2) {
            if (str.charAt(i) == c) {
                return i;
            }
            i++;
        }
        return i2;
    }

    public static String canonicalizeHost(String str) {
        InetAddress inetAddress;
        if (str.contains(":")) {
            if (str.startsWith("[") && str.endsWith("]")) {
                inetAddress = decodeIpv6(str, 1, str.length() - 1);
            } else {
                inetAddress = decodeIpv6(str, 0, str.length());
            }
            if (inetAddress == null) {
                return null;
            }
            byte[] address = inetAddress.getAddress();
            if (address.length == 16) {
                return inet6AddressToAscii(address);
            }
            throw new AssertionError("Invalid IPv6 address: '" + str + "'");
        }
        try {
            String lowerCase = IDN.toASCII(str).toLowerCase(Locale.US);
            if (lowerCase.isEmpty()) {
                return null;
            }
            if (!containsInvalidHostnameAsciiCodes(lowerCase)) {
                return lowerCase;
            }
            return null;
        } catch (IllegalArgumentException unused) {
            return null;
        }
    }

    private static boolean containsInvalidHostnameAsciiCodes(String str) {
        for (int i = 0; i < str.length(); i++) {
            char charAt = str.charAt(i);
            if (charAt <= 31 || charAt >= 127 || " #%/:?@[\\]".indexOf(charAt) != -1) {
                return true;
            }
        }
        return false;
    }

    public static int indexOfControlOrNonAscii(String str) {
        int length = str.length();
        for (int i = 0; i < length; i++) {
            char charAt = str.charAt(i);
            if (charAt <= 31 || charAt >= 127) {
                return i;
            }
        }
        return -1;
    }

    public static boolean verifyAsIpAddress(String str) {
        return VERIFY_AS_IP_ADDRESS.matcher(str).matches();
    }

    public static String format(String str, Object... objArr) {
        return String.format(Locale.US, str, objArr);
    }

    public static Charset bomAwareCharset(BufferedSource bufferedSource, Charset charset) throws IOException {
        if (bufferedSource.rangeEquals(0L, UTF_8_BOM)) {
            bufferedSource.skip(UTF_8_BOM.size());
            return UTF_8;
        } else if (bufferedSource.rangeEquals(0L, UTF_16_BE_BOM)) {
            bufferedSource.skip(UTF_16_BE_BOM.size());
            return UTF_16_BE;
        } else if (bufferedSource.rangeEquals(0L, UTF_16_LE_BOM)) {
            bufferedSource.skip(UTF_16_LE_BOM.size());
            return UTF_16_LE;
        } else if (bufferedSource.rangeEquals(0L, UTF_32_BE_BOM)) {
            bufferedSource.skip(UTF_32_BE_BOM.size());
            return UTF_32_BE;
        } else if (!bufferedSource.rangeEquals(0L, UTF_32_LE_BOM)) {
            return charset;
        } else {
            bufferedSource.skip(UTF_32_LE_BOM.size());
            return UTF_32_LE;
        }
    }

    public static int checkDuration(String str, long j, TimeUnit timeUnit) {
        if (j < 0) {
            throw new IllegalArgumentException(str + " < 0");
        } else if (timeUnit == null) {
            throw new NullPointerException("unit == null");
        } else {
            long millis = timeUnit.toMillis(j);
            if (millis > 2147483647L) {
                throw new IllegalArgumentException(str + " too large.");
            } else if (millis != 0 || j <= 0) {
                return (int) millis;
            } else {
                throw new IllegalArgumentException(str + " too small.");
            }
        }
    }

    public static AssertionError assertionError(String str, Exception exc) {
        AssertionError assertionError = new AssertionError(str);
        try {
            assertionError.initCause(exc);
        } catch (IllegalStateException unused) {
        }
        return assertionError;
    }

    /* JADX WARN: Code restructure failed: missing block: B:40:0x007c, code lost:
        return null;
     */
    /* JADX WARN: Removed duplicated region for block: B:32:0x0052  */
    @javax.annotation.Nullable
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.net.InetAddress decodeIpv6(java.lang.String r10, int r11, int r12) {
        /*
            r0 = 16
            byte[] r0 = new byte[r0]
            r1 = -1
            r2 = 0
            r3 = 0
            r4 = -1
            r5 = -1
        L9:
            r6 = 0
            if (r11 >= r12) goto L7d
            int r7 = r0.length
            if (r3 != r7) goto L10
            return r6
        L10:
            int r7 = r11 + 2
            if (r7 > r12) goto L29
            java.lang.String r8 = "::"
            r9 = 2
            boolean r8 = r10.regionMatches(r11, r8, r2, r9)
            if (r8 == 0) goto L29
            if (r4 == r1) goto L20
            return r6
        L20:
            int r3 = r3 + 2
            if (r7 != r12) goto L26
            r4 = r3
            goto L7d
        L26:
            r4 = r3
            r5 = r7
            goto L4e
        L29:
            if (r3 == 0) goto L4d
            java.lang.String r7 = ":"
            r8 = 1
            boolean r7 = r10.regionMatches(r11, r7, r2, r8)
            if (r7 == 0) goto L38
            int r11 = r11 + 1
            r5 = r11
            goto L4e
        L38:
            java.lang.String r7 = "."
            boolean r11 = r10.regionMatches(r11, r7, r2, r8)
            if (r11 == 0) goto L4c
            int r11 = r3 + (-2)
            boolean r10 = decodeIpv4Suffix(r10, r5, r12, r0, r11)
            if (r10 != 0) goto L49
            return r6
        L49:
            int r3 = r3 + 2
            goto L7d
        L4c:
            return r6
        L4d:
            r5 = r11
        L4e:
            r11 = r5
            r7 = 0
        L50:
            if (r11 >= r12) goto L63
            char r8 = r10.charAt(r11)
            int r8 = decodeHexDigit(r8)
            if (r8 != r1) goto L5d
            goto L63
        L5d:
            int r7 = r7 << 4
            int r7 = r7 + r8
            int r11 = r11 + 1
            goto L50
        L63:
            int r8 = r11 - r5
            if (r8 == 0) goto L7c
            r9 = 4
            if (r8 <= r9) goto L6b
            goto L7c
        L6b:
            int r6 = r3 + 1
            int r8 = r7 >>> 8
            r8 = r8 & 255(0xff, float:3.57E-43)
            byte r8 = (byte) r8
            r0[r3] = r8
            int r3 = r6 + 1
            r7 = r7 & 255(0xff, float:3.57E-43)
            byte r7 = (byte) r7
            r0[r6] = r7
            goto L9
        L7c:
            return r6
        L7d:
            int r10 = r0.length
            if (r3 == r10) goto L90
            if (r4 != r1) goto L83
            return r6
        L83:
            int r10 = r0.length
            int r11 = r3 - r4
            int r10 = r10 - r11
            java.lang.System.arraycopy(r0, r4, r0, r10, r11)
            int r10 = r0.length
            int r10 = r10 - r3
            int r10 = r10 + r4
            java.util.Arrays.fill(r0, r4, r10, r2)
        L90:
            java.net.InetAddress r10 = java.net.InetAddress.getByAddress(r0)     // Catch: java.net.UnknownHostException -> L95
            return r10
        L95:
            java.lang.AssertionError r10 = new java.lang.AssertionError
            r10.<init>()
            throw r10
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: okhttp3.internal.Util.decodeIpv6(java.lang.String, int, int):java.net.InetAddress");
    }

    private static boolean decodeIpv4Suffix(String str, int i, int i2, byte[] bArr, int i3) {
        int i4 = i3;
        while (i < i2) {
            if (i4 == bArr.length) {
                return false;
            }
            if (i4 != i3) {
                if (str.charAt(i) != '.') {
                    return false;
                }
                i++;
            }
            int i5 = i;
            int i6 = 0;
            while (i5 < i2) {
                char charAt = str.charAt(i5);
                if (charAt < '0' || charAt > '9') {
                    break;
                } else if ((i6 == 0 && i != i5) || (i6 = ((i6 * 10) + charAt) - 48) > 255) {
                    return false;
                } else {
                    i5++;
                }
            }
            if (i5 - i == 0) {
                return false;
            }
            bArr[i4] = (byte) i6;
            i4++;
            i = i5;
        }
        return i4 == i3 + 4;
    }

    private static String inet6AddressToAscii(byte[] bArr) {
        int i = 0;
        int i2 = 0;
        int i3 = -1;
        int i4 = 0;
        while (i2 < bArr.length) {
            int i5 = i2;
            while (i5 < 16 && bArr[i5] == 0 && bArr[i5 + 1] == 0) {
                i5 += 2;
            }
            int i6 = i5 - i2;
            if (i6 > i4 && i6 >= 4) {
                i3 = i2;
                i4 = i6;
            }
            i2 = i5 + 2;
        }
        Buffer buffer = new Buffer();
        while (i < bArr.length) {
            if (i == i3) {
                buffer.writeByte(58);
                i += i4;
                if (i == 16) {
                    buffer.writeByte(58);
                }
            } else {
                if (i > 0) {
                    buffer.writeByte(58);
                }
                buffer.writeHexadecimalUnsignedLong(((bArr[i] & 255) << 8) | (bArr[i + 1] & 255));
                i += 2;
            }
        }
        return buffer.readUtf8();
    }
}
