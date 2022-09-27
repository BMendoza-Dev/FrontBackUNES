package okhttp3;

import com.ionicframework.cordova.webview.WebViewLocalServer;
import java.net.HttpURLConnection;
import java.net.Proxy;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLStreamHandler;
import java.net.URLStreamHandlerFactory;
import okhttp3.internal.URLFilter;
import okhttp3.internal.huc.OkHttpURLConnection;
import okhttp3.internal.huc.OkHttpsURLConnection;
/* loaded from: classes.dex */
public final class OkUrlFactory implements URLStreamHandlerFactory, Cloneable {
    private OkHttpClient client;
    private URLFilter urlFilter;

    public OkUrlFactory(OkHttpClient okHttpClient) {
        this.client = okHttpClient;
    }

    public OkHttpClient client() {
        return this.client;
    }

    public OkUrlFactory setClient(OkHttpClient okHttpClient) {
        this.client = okHttpClient;
        return this;
    }

    void setUrlFilter(URLFilter uRLFilter) {
        this.urlFilter = uRLFilter;
    }

    public OkUrlFactory clone() {
        return new OkUrlFactory(this.client);
    }

    public HttpURLConnection open(URL url) {
        return open(url, this.client.proxy());
    }

    HttpURLConnection open(URL url, Proxy proxy) {
        String protocol = url.getProtocol();
        OkHttpClient build = this.client.newBuilder().proxy(proxy).build();
        if (protocol.equals(WebViewLocalServer.httpScheme)) {
            return new OkHttpURLConnection(url, build, this.urlFilter);
        }
        if (protocol.equals(WebViewLocalServer.httpsScheme)) {
            return new OkHttpsURLConnection(url, build, this.urlFilter);
        }
        throw new IllegalArgumentException("Unexpected protocol: " + protocol);
    }

    @Override // java.net.URLStreamHandlerFactory
    public URLStreamHandler createURLStreamHandler(final String str) {
        if (str.equals(WebViewLocalServer.httpScheme) || str.equals(WebViewLocalServer.httpsScheme)) {
            return new URLStreamHandler() { // from class: okhttp3.OkUrlFactory.1
                @Override // java.net.URLStreamHandler
                protected URLConnection openConnection(URL url) {
                    return OkUrlFactory.this.open(url);
                }

                @Override // java.net.URLStreamHandler
                protected URLConnection openConnection(URL url, Proxy proxy) {
                    return OkUrlFactory.this.open(url, proxy);
                }

                @Override // java.net.URLStreamHandler
                protected int getDefaultPort() {
                    if (str.equals(WebViewLocalServer.httpScheme)) {
                        return 80;
                    }
                    if (!str.equals(WebViewLocalServer.httpsScheme)) {
                        throw new AssertionError();
                    }
                    return 443;
                }
            };
        }
        return null;
    }
}
