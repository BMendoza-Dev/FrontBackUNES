package com.ionicframework.cordova.webview;

import android.content.Context;
import android.net.Uri;
import android.os.Build;
import android.util.Log;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import com.silkimen.http.HttpRequest;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.SocketTimeoutException;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.Map;
import org.apache.cordova.ConfigXmlParser;
/* loaded from: classes.dex */
public class WebViewLocalServer {
    private static String TAG = "WebViewAssetServer";
    public static final String contentStart = "/_app_content_";
    public static final String fileStart = "/_app_file_";
    public static final String httpScheme = "http";
    public static final String httpsScheme = "https";
    private final String authority;
    private String basePath;
    private final String customScheme;
    private final boolean html5mode;
    private boolean isAsset;
    private ConfigXmlParser parser;
    private final AndroidProtocolHandler protocolHandler;
    private final UriMatcher uriMatcher = new UriMatcher(null);

    public String getAuthority() {
        return this.authority;
    }

    /* loaded from: classes.dex */
    public static abstract class PathHandler {
        private String charset;
        private String encoding;
        protected String mimeType;
        private String reasonPhrase;
        private Map<String, String> responseHeaders;
        private int statusCode;

        public abstract InputStream handle(Uri uri);

        public PathHandler() {
            this(null, null, 200, "OK", null);
        }

        public PathHandler(String str, String str2, int i, String str3, Map<String, String> map) {
            this.encoding = str;
            this.charset = str2;
            this.statusCode = i;
            this.reasonPhrase = str3;
            map = map == null ? new HashMap<>() : map;
            map.put(HttpRequest.HEADER_CACHE_CONTROL, "no-cache");
            this.responseHeaders = map;
        }

        public String getEncoding() {
            return this.encoding;
        }

        public String getCharset() {
            return this.charset;
        }

        public int getStatusCode() {
            return this.statusCode;
        }

        public String getReasonPhrase() {
            return this.reasonPhrase;
        }

        public Map<String, String> getResponseHeaders() {
            return this.responseHeaders;
        }
    }

    /* loaded from: classes.dex */
    public static class AssetHostingDetails {
        private Uri httpPrefix;
        private Uri httpsPrefix;

        AssetHostingDetails(Uri uri, Uri uri2) {
            this.httpPrefix = uri;
            this.httpsPrefix = uri2;
        }

        public Uri getHttpPrefix() {
            return this.httpPrefix;
        }

        public Uri getHttpsPrefix() {
            return this.httpsPrefix;
        }
    }

    public WebViewLocalServer(Context context, String str, boolean z, ConfigXmlParser configXmlParser, String str2) {
        this.html5mode = z;
        this.parser = configXmlParser;
        this.protocolHandler = new AndroidProtocolHandler(context.getApplicationContext());
        this.authority = str;
        this.customScheme = str2;
    }

    private static Uri parseAndVerifyUrl(String str) {
        if (str == null) {
            return null;
        }
        Uri parse = Uri.parse(str);
        if (parse == null) {
            String str2 = TAG;
            Log.e(str2, "Malformed URL: " + str);
            return null;
        }
        String path = parse.getPath();
        if (path != null && path.length() != 0) {
            return parse;
        }
        String str3 = TAG;
        Log.e(str3, "URL does not have a path: " + str);
        return null;
    }

    private static WebResourceResponse createWebResourceResponse(String str, String str2, int i, String str3, Map<String, String> map, InputStream inputStream) {
        int i2;
        if (Build.VERSION.SDK_INT >= 21) {
            try {
                if (inputStream.available() == 0) {
                    i = 404;
                }
                i2 = i;
            } catch (IOException unused) {
                i2 = 500;
            }
            return new WebResourceResponse(str, str2, i2, str3, map, inputStream);
        }
        return new WebResourceResponse(str, str2, inputStream);
    }

    public WebResourceResponse shouldInterceptRequest(Uri uri, WebResourceRequest webResourceRequest) {
        PathHandler pathHandler;
        synchronized (this.uriMatcher) {
            pathHandler = (PathHandler) this.uriMatcher.match(uri);
        }
        if (pathHandler == null) {
            return null;
        }
        if (isLocalFile(uri) || uri.getAuthority().equals(this.authority)) {
            Log.d("SERVER", "Handling local request: " + uri.toString());
            return handleLocalRequest(uri, pathHandler, webResourceRequest);
        }
        return handleProxyRequest(uri, pathHandler);
    }

    private boolean isLocalFile(Uri uri) {
        String path = uri.getPath();
        return path.startsWith(contentStart) || path.startsWith(fileStart);
    }

    private WebResourceResponse handleLocalRequest(Uri uri, PathHandler pathHandler, WebResourceRequest webResourceRequest) {
        InputStream inputStream;
        int i;
        String path = uri.getPath();
        if (Build.VERSION.SDK_INT >= 21 && webResourceRequest != null && webResourceRequest.getRequestHeaders().get("Range") != null) {
            LollipopLazyInputStream lollipopLazyInputStream = new LollipopLazyInputStream(pathHandler, uri);
            String mimeType = getMimeType(path, lollipopLazyInputStream);
            Map<String, String> responseHeaders = pathHandler.getResponseHeaders();
            try {
                int available = lollipopLazyInputStream.available();
                String[] split = webResourceRequest.getRequestHeaders().get("Range").split("=")[1].split("-");
                String str = split[0];
                int i2 = available - 1;
                if (split.length > 1) {
                    i2 = Integer.parseInt(split[1]);
                }
                responseHeaders.put("Accept-Ranges", "bytes");
                responseHeaders.put("Content-Range", "bytes " + str + "-" + i2 + "/" + available);
                i = 206;
            } catch (IOException unused) {
                i = 404;
            }
            return createWebResourceResponse(mimeType, pathHandler.getEncoding(), i, pathHandler.getReasonPhrase(), responseHeaders, lollipopLazyInputStream);
        } else if (isLocalFile(uri)) {
            LollipopLazyInputStream lollipopLazyInputStream2 = new LollipopLazyInputStream(pathHandler, uri);
            return createWebResourceResponse(getMimeType(path, lollipopLazyInputStream2), pathHandler.getEncoding(), pathHandler.getStatusCode(), pathHandler.getReasonPhrase(), pathHandler.getResponseHeaders(), lollipopLazyInputStream2);
        } else if (path.equals("") || path.equals("/") || (!uri.getLastPathSegment().contains(".") && this.html5mode)) {
            String launchUrl = this.parser.getLaunchUrl();
            String substring = launchUrl.substring(launchUrl.lastIndexOf("/") + 1, launchUrl.length());
            try {
                String str2 = this.basePath + "/" + substring;
                if (this.isAsset) {
                    inputStream = this.protocolHandler.openAsset(str2);
                } else {
                    inputStream = this.protocolHandler.openFile(str2);
                }
                return createWebResourceResponse("text/html", pathHandler.getEncoding(), pathHandler.getStatusCode(), pathHandler.getReasonPhrase(), pathHandler.getResponseHeaders(), inputStream);
            } catch (IOException e) {
                Log.e(TAG, "Unable to open " + substring, e);
                return null;
            }
        } else if (path.lastIndexOf(".") < 0) {
            return null;
        } else {
            LollipopLazyInputStream lollipopLazyInputStream3 = new LollipopLazyInputStream(pathHandler, uri);
            return createWebResourceResponse(getMimeType(path, lollipopLazyInputStream3), pathHandler.getEncoding(), pathHandler.getStatusCode(), pathHandler.getReasonPhrase(), pathHandler.getResponseHeaders(), lollipopLazyInputStream3);
        }
    }

    private WebResourceResponse handleProxyRequest(Uri uri, PathHandler pathHandler) {
        try {
            String path = uri.getPath();
            HttpURLConnection httpURLConnection = (HttpURLConnection) new URL(uri.toString()).openConnection();
            httpURLConnection.setRequestMethod(HttpRequest.METHOD_GET);
            httpURLConnection.setReadTimeout(30000);
            httpURLConnection.setConnectTimeout(30000);
            InputStream inputStream = httpURLConnection.getInputStream();
            if (!path.equals("/") && (uri.getLastPathSegment().contains(".") || !this.html5mode)) {
                if (path.lastIndexOf(".") >= 0) {
                    path.substring(path.lastIndexOf("."), path.length()).equals(".html");
                    return createWebResourceResponse(getMimeType(path, inputStream), pathHandler.getEncoding(), pathHandler.getStatusCode(), pathHandler.getReasonPhrase(), pathHandler.getResponseHeaders(), inputStream);
                }
                return createWebResourceResponse("", pathHandler.getEncoding(), pathHandler.getStatusCode(), pathHandler.getReasonPhrase(), pathHandler.getResponseHeaders(), inputStream);
            }
            return createWebResourceResponse("text/html", pathHandler.getEncoding(), pathHandler.getStatusCode(), pathHandler.getReasonPhrase(), pathHandler.getResponseHeaders(), inputStream);
        } catch (SocketTimeoutException | Exception unused) {
            return null;
        }
    }

    private String getMimeType(String str, InputStream inputStream) {
        Exception e;
        String str2;
        try {
            String guessContentTypeFromName = URLConnection.guessContentTypeFromName(str);
            if (guessContentTypeFromName != null) {
                try {
                    if (str.endsWith(".js") && guessContentTypeFromName.equals("image/x-icon")) {
                        Log.d(IonicWebViewEngine.TAG, "We shouldn't be here");
                    }
                } catch (Exception e2) {
                    e = e2;
                    String str3 = TAG;
                    Log.e(str3, "Unable to get mime type" + str, e);
                    return str2;
                }
            }
            if (guessContentTypeFromName != null) {
                return guessContentTypeFromName;
            }
            if (!str.endsWith(".js") && !str.endsWith(".mjs")) {
                if (str.endsWith(".wasm")) {
                    return "application/wasm";
                }
                str2 = URLConnection.guessContentTypeFromStream(inputStream);
                return str2;
            }
            return "application/javascript";
        } catch (Exception e3) {
            e = e3;
            str2 = null;
        }
    }

    void register(Uri uri, PathHandler pathHandler) {
        synchronized (this.uriMatcher) {
            this.uriMatcher.addURI(uri.getScheme(), uri.getAuthority(), uri.getPath(), pathHandler);
        }
    }

    public void hostAssets(String str) {
        hostAssets(this.authority, str);
    }

    public void hostAssets(String str, String str2) {
        this.isAsset = true;
        this.basePath = str2;
        createHostingDetails();
    }

    private void createHostingDetails() {
        final String str = this.basePath;
        if (str.indexOf(42) != -1) {
            throw new IllegalArgumentException("assetPath cannot contain the '*' character.");
        }
        PathHandler pathHandler = new PathHandler() { // from class: com.ionicframework.cordova.webview.WebViewLocalServer.1
            @Override // com.ionicframework.cordova.webview.WebViewLocalServer.PathHandler
            public InputStream handle(Uri uri) {
                String path = uri.getPath();
                try {
                    if (path.startsWith(WebViewLocalServer.contentStart)) {
                        return WebViewLocalServer.this.protocolHandler.openContentUrl(uri);
                    }
                    if (!path.startsWith(WebViewLocalServer.fileStart) && WebViewLocalServer.this.isAsset) {
                        return WebViewLocalServer.this.protocolHandler.openAsset(str + path);
                    }
                    if (!path.startsWith(WebViewLocalServer.fileStart)) {
                        path = WebViewLocalServer.this.basePath + uri.getPath();
                    }
                    return WebViewLocalServer.this.protocolHandler.openFile(path);
                } catch (IOException unused) {
                    Log.e(WebViewLocalServer.TAG, "Unable to open asset URL: " + uri);
                    return null;
                }
            }
        };
        registerUriForScheme(httpScheme, pathHandler, this.authority);
        registerUriForScheme(httpsScheme, pathHandler, this.authority);
        if (this.customScheme.equals(httpScheme) || this.customScheme.equals(httpsScheme)) {
            return;
        }
        registerUriForScheme(this.customScheme, pathHandler, this.authority);
    }

    private void registerUriForScheme(String str, PathHandler pathHandler, String str2) {
        Uri.Builder builder = new Uri.Builder();
        builder.scheme(str);
        builder.authority(str2);
        builder.path("");
        Uri build = builder.build();
        register(Uri.withAppendedPath(build, "/"), pathHandler);
        register(Uri.withAppendedPath(build, "**"), pathHandler);
    }

    public AssetHostingDetails hostResources() {
        return hostResources(this.authority, "/res", true, true);
    }

    public AssetHostingDetails hostResources(String str, boolean z, boolean z2) {
        return hostResources(this.authority, str, z, z2);
    }

    public AssetHostingDetails hostResources(String str, String str2, boolean z, boolean z2) {
        Uri uri;
        if (str2.indexOf(42) != -1) {
            throw new IllegalArgumentException("virtualResourcesPath cannot contain the '*' character.");
        }
        Uri.Builder builder = new Uri.Builder();
        builder.scheme(httpScheme);
        builder.authority(str);
        builder.path(str2);
        PathHandler pathHandler = new PathHandler() { // from class: com.ionicframework.cordova.webview.WebViewLocalServer.2
            @Override // com.ionicframework.cordova.webview.WebViewLocalServer.PathHandler
            public InputStream handle(Uri uri2) {
                InputStream openResource = WebViewLocalServer.this.protocolHandler.openResource(uri2);
                try {
                    URLConnection.guessContentTypeFromStream(openResource);
                } catch (Exception unused) {
                    String str3 = WebViewLocalServer.TAG;
                    Log.e(str3, "Unable to get mime type" + uri2);
                }
                return openResource;
            }
        };
        Uri uri2 = null;
        if (z) {
            uri = builder.build();
            register(Uri.withAppendedPath(uri, "**"), pathHandler);
        } else {
            uri = null;
        }
        if (z2) {
            builder.scheme(httpsScheme);
            uri2 = builder.build();
            register(Uri.withAppendedPath(uri2, "**"), pathHandler);
        }
        return new AssetHostingDetails(uri, uri2);
    }

    public void hostFiles(String str) {
        this.isAsset = false;
        this.basePath = str;
        createHostingDetails();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    public static abstract class LazyInputStream extends InputStream {
        protected final PathHandler handler;
        private InputStream is = null;

        protected abstract InputStream handle();

        public LazyInputStream(PathHandler pathHandler) {
            this.handler = pathHandler;
        }

        private InputStream getInputStream() {
            if (this.is == null) {
                this.is = handle();
            }
            return this.is;
        }

        @Override // java.io.InputStream
        public int available() throws IOException {
            InputStream inputStream = getInputStream();
            if (inputStream != null) {
                return inputStream.available();
            }
            return 0;
        }

        @Override // java.io.InputStream
        public int read() throws IOException {
            InputStream inputStream = getInputStream();
            if (inputStream != null) {
                return inputStream.read();
            }
            return -1;
        }

        @Override // java.io.InputStream
        public int read(byte[] bArr) throws IOException {
            InputStream inputStream = getInputStream();
            if (inputStream != null) {
                return inputStream.read(bArr);
            }
            return -1;
        }

        @Override // java.io.InputStream
        public int read(byte[] bArr, int i, int i2) throws IOException {
            InputStream inputStream = getInputStream();
            if (inputStream != null) {
                return inputStream.read(bArr, i, i2);
            }
            return -1;
        }

        @Override // java.io.InputStream
        public long skip(long j) throws IOException {
            InputStream inputStream = getInputStream();
            if (inputStream != null) {
                return inputStream.skip(j);
            }
            return 0L;
        }
    }

    /* loaded from: classes.dex */
    public static class LollipopLazyInputStream extends LazyInputStream {
        private InputStream is;
        private Uri uri;

        public LollipopLazyInputStream(PathHandler pathHandler, Uri uri) {
            super(pathHandler);
            this.uri = uri;
        }

        @Override // com.ionicframework.cordova.webview.WebViewLocalServer.LazyInputStream
        protected InputStream handle() {
            return this.handler.handle(this.uri);
        }
    }

    public String getBasePath() {
        return this.basePath;
    }
}
