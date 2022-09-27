package com.silkimen.cordovahttp;

import android.util.Log;
import com.silkimen.http.HttpBodyDecoder;
import com.silkimen.http.HttpRequest;
import com.silkimen.http.JsonUtils;
import com.silkimen.http.OkConnectionFactory;
import com.silkimen.http.TLSConfiguration;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import javax.net.ssl.SSLException;
import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
abstract class CordovaHttpBase implements Runnable {
    protected static final String TAG = "Cordova-Plugin-HTTP";
    protected CallbackContext callbackContext;
    protected Object data;
    protected boolean followRedirects;
    protected JSONObject headers;
    protected String method;
    protected String responseType;
    protected String serializer;
    protected int timeout;
    protected TLSConfiguration tlsConfiguration;
    protected String url;

    public CordovaHttpBase(String str, String str2, String str3, Object obj, JSONObject jSONObject, int i, boolean z, String str4, TLSConfiguration tLSConfiguration, CallbackContext callbackContext) {
        this.serializer = "none";
        this.method = str;
        this.url = str2;
        this.serializer = str3;
        this.data = obj;
        this.headers = jSONObject;
        this.timeout = i;
        this.followRedirects = z;
        this.responseType = str4;
        this.tlsConfiguration = tLSConfiguration;
        this.callbackContext = callbackContext;
    }

    public CordovaHttpBase(String str, String str2, JSONObject jSONObject, int i, boolean z, String str3, TLSConfiguration tLSConfiguration, CallbackContext callbackContext) {
        this.serializer = "none";
        this.method = str;
        this.url = str2;
        this.headers = jSONObject;
        this.timeout = i;
        this.followRedirects = z;
        this.responseType = str3;
        this.tlsConfiguration = tLSConfiguration;
        this.callbackContext = callbackContext;
    }

    @Override // java.lang.Runnable
    public void run() {
        CordovaHttpResponse cordovaHttpResponse = new CordovaHttpResponse();
        try {
            HttpRequest createRequest = createRequest();
            prepareRequest(createRequest);
            sendBody(createRequest);
            processResponse(createRequest, cordovaHttpResponse);
        } catch (HttpRequest.HttpRequestException e) {
            if (e.getCause() instanceof SSLException) {
                cordovaHttpResponse.setStatus(-2);
                cordovaHttpResponse.setErrorMessage("TLS connection could not be established: " + e.getMessage());
                Log.w(TAG, "TLS connection could not be established", e);
            } else if (e.getCause() instanceof UnknownHostException) {
                cordovaHttpResponse.setStatus(-3);
                cordovaHttpResponse.setErrorMessage("Host could not be resolved: " + e.getMessage());
                Log.w(TAG, "Host could not be resolved", e);
            } else if (e.getCause() instanceof SocketTimeoutException) {
                cordovaHttpResponse.setStatus(-4);
                cordovaHttpResponse.setErrorMessage("Request timed out: " + e.getMessage());
                Log.w(TAG, "Request timed out", e);
            } else {
                cordovaHttpResponse.setStatus(-1);
                cordovaHttpResponse.setErrorMessage("There was an error with the request: " + e.getCause().getMessage());
                Log.w(TAG, "Generic request error", e);
            }
        } catch (Exception e2) {
            cordovaHttpResponse.setStatus(-1);
            cordovaHttpResponse.setErrorMessage(e2.getMessage());
            Log.e(TAG, "An unexpected error occured", e2);
        }
        try {
            if (cordovaHttpResponse.hasFailed()) {
                this.callbackContext.error(cordovaHttpResponse.toJSON());
            } else {
                this.callbackContext.success(cordovaHttpResponse.toJSON());
            }
        } catch (JSONException e3) {
            Log.e(TAG, "An unexpected error occured while creating HTTP response object", e3);
        }
    }

    protected HttpRequest createRequest() throws JSONException {
        return new HttpRequest(this.url, this.method);
    }

    protected void prepareRequest(HttpRequest httpRequest) throws JSONException, IOException {
        httpRequest.followRedirects(this.followRedirects);
        httpRequest.readTimeout(this.timeout);
        httpRequest.acceptCharset(HttpRequest.CHARSET_UTF8);
        httpRequest.uncompress(true);
        HttpRequest.setConnectionFactory(new OkConnectionFactory());
        if (this.tlsConfiguration.getHostnameVerifier() != null) {
            httpRequest.setHostnameVerifier(this.tlsConfiguration.getHostnameVerifier());
        }
        httpRequest.setSSLSocketFactory(this.tlsConfiguration.getTLSSocketFactory());
        setContentType(httpRequest);
        httpRequest.headers(JsonUtils.getStringMap(this.headers));
    }

    protected void setContentType(HttpRequest httpRequest) {
        if ("json".equals(this.serializer)) {
            httpRequest.contentType(HttpRequest.CONTENT_TYPE_JSON, HttpRequest.CHARSET_UTF8);
        } else if ("utf8".equals(this.serializer)) {
            httpRequest.contentType("text/plain", HttpRequest.CHARSET_UTF8);
        } else {
            "urlencoded".equals(this.serializer);
        }
    }

    protected void sendBody(HttpRequest httpRequest) throws Exception {
        if (this.data == null) {
            return;
        }
        if ("json".equals(this.serializer)) {
            httpRequest.send(this.data.toString());
        } else if ("utf8".equals(this.serializer)) {
            httpRequest.send(((JSONObject) this.data).getString("text"));
        } else if (!"urlencoded".equals(this.serializer)) {
        } else {
            httpRequest.form(JsonUtils.getObjectMap((JSONObject) this.data));
        }
    }

    protected void processResponse(HttpRequest httpRequest, CordovaHttpResponse cordovaHttpResponse) throws Exception {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        httpRequest.receive(byteArrayOutputStream);
        cordovaHttpResponse.setStatus(httpRequest.code());
        cordovaHttpResponse.setUrl(httpRequest.url().toString());
        cordovaHttpResponse.setHeaders(httpRequest.headers());
        if (httpRequest.code() >= 200 && httpRequest.code() < 300) {
            if ("text".equals(this.responseType)) {
                cordovaHttpResponse.setBody(HttpBodyDecoder.decodeBody(byteArrayOutputStream.toByteArray(), httpRequest.charset()));
                return;
            } else {
                cordovaHttpResponse.setData(byteArrayOutputStream.toByteArray());
                return;
            }
        }
        cordovaHttpResponse.setErrorMessage(HttpBodyDecoder.decodeBody(byteArrayOutputStream.toByteArray(), httpRequest.charset()));
    }
}
