package com.silkimen.cordovahttp;

import android.util.Base64;
import android.util.Log;
import com.silkimen.http.TLSConfiguration;
import java.security.KeyStore;
import javax.net.ssl.TrustManagerFactory;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
/* loaded from: classes.dex */
public class CordovaHttpPlugin extends CordovaPlugin {
    private static final String TAG = "Cordova-Plugin-HTTP";
    private TLSConfiguration tlsConfiguration;

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        super.initialize(cordovaInterface, cordovaWebView);
        this.tlsConfiguration = new TLSConfiguration();
        try {
            KeyStore keyStore = KeyStore.getInstance("AndroidCAStore");
            TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
            keyStore.load(null);
            trustManagerFactory.init(keyStore);
            this.tlsConfiguration.setHostnameVerifier(null);
            this.tlsConfiguration.setTrustManagers(trustManagerFactory.getTrustManagers());
        } catch (Exception e) {
            Log.e(TAG, "An error occured while loading system's CA certificates", e);
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        if (str == null) {
            return false;
        }
        if ("get".equals(str)) {
            return executeHttpRequestWithoutData(str, jSONArray, callbackContext);
        }
        if ("head".equals(str)) {
            return executeHttpRequestWithoutData(str, jSONArray, callbackContext);
        }
        if ("delete".equals(str)) {
            return executeHttpRequestWithoutData(str, jSONArray, callbackContext);
        }
        if ("post".equals(str)) {
            return executeHttpRequestWithData(str, jSONArray, callbackContext);
        }
        if ("put".equals(str)) {
            return executeHttpRequestWithData(str, jSONArray, callbackContext);
        }
        if ("patch".equals(str)) {
            return executeHttpRequestWithData(str, jSONArray, callbackContext);
        }
        if ("uploadFiles".equals(str)) {
            return uploadFiles(jSONArray, callbackContext);
        }
        if ("downloadFile".equals(str)) {
            return downloadFile(jSONArray, callbackContext);
        }
        if ("setServerTrustMode".equals(str)) {
            return setServerTrustMode(jSONArray, callbackContext);
        }
        if (!"setClientAuthMode".equals(str)) {
            return false;
        }
        return setClientAuthMode(jSONArray, callbackContext);
    }

    private boolean executeHttpRequestWithoutData(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        boolean z = jSONArray.getBoolean(3);
        String string = jSONArray.getString(4);
        this.f0cordova.getThreadPool().execute(new CordovaHttpOperation(str.toUpperCase(), jSONArray.getString(0), jSONArray.getJSONObject(1), jSONArray.getInt(2) * 1000, z, string, this.tlsConfiguration, callbackContext));
        return true;
    }

    private boolean executeHttpRequestWithData(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        String string = jSONArray.getString(0);
        Object obj = jSONArray.get(1);
        boolean z = jSONArray.getBoolean(5);
        String string2 = jSONArray.getString(6);
        this.f0cordova.getThreadPool().execute(new CordovaHttpOperation(str.toUpperCase(), string, jSONArray.getString(2), obj, jSONArray.getJSONObject(3), jSONArray.getInt(4) * 1000, z, string2, this.tlsConfiguration, callbackContext));
        return true;
    }

    private boolean uploadFiles(JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        this.f0cordova.getThreadPool().execute(new CordovaHttpUpload(jSONArray.getString(0), jSONArray.getJSONObject(1), jSONArray.getJSONArray(2), jSONArray.getJSONArray(3), jSONArray.getInt(4) * 1000, jSONArray.getBoolean(5), jSONArray.getString(6), this.tlsConfiguration, this.f0cordova.getActivity().getApplicationContext(), callbackContext));
        return true;
    }

    private boolean downloadFile(JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        this.f0cordova.getThreadPool().execute(new CordovaHttpDownload(jSONArray.getString(0), jSONArray.getJSONObject(1), jSONArray.getString(2), jSONArray.getInt(3) * 1000, jSONArray.getBoolean(4), this.tlsConfiguration, callbackContext));
        return true;
    }

    private boolean setServerTrustMode(JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        this.f0cordova.getThreadPool().execute(new CordovaServerTrust(jSONArray.getString(0), this.f0cordova.getActivity(), this.tlsConfiguration, callbackContext));
        return true;
    }

    private boolean setClientAuthMode(JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        String str = null;
        byte[] decode = jSONArray.isNull(2) ? null : Base64.decode(jSONArray.getString(2), 0);
        String string = jSONArray.getString(0);
        if (!jSONArray.isNull(1)) {
            str = jSONArray.getString(1);
        }
        this.f0cordova.getThreadPool().execute(new CordovaClientAuth(string, str, decode, jSONArray.getString(3), this.f0cordova.getActivity(), this.f0cordova.getActivity().getApplicationContext(), this.tlsConfiguration, callbackContext));
        return true;
    }
}
