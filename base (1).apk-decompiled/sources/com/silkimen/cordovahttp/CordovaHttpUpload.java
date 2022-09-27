package com.silkimen.cordovahttp;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.webkit.MimeTypeMap;
import com.silkimen.http.HttpRequest;
import com.silkimen.http.TLSConfiguration;
import java.io.File;
import java.io.InputStream;
import java.net.URI;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: classes.dex */
class CordovaHttpUpload extends CordovaHttpBase {
    private Context applicationContext;
    private JSONArray filePaths;
    private JSONArray uploadNames;

    public CordovaHttpUpload(String str, JSONObject jSONObject, JSONArray jSONArray, JSONArray jSONArray2, int i, boolean z, String str2, TLSConfiguration tLSConfiguration, Context context, CallbackContext callbackContext) {
        super(HttpRequest.METHOD_POST, str, jSONObject, i, z, str2, tLSConfiguration, callbackContext);
        this.filePaths = jSONArray;
        this.uploadNames = jSONArray2;
        this.applicationContext = context;
    }

    @Override // com.silkimen.cordovahttp.CordovaHttpBase
    protected void sendBody(HttpRequest httpRequest) throws Exception {
        for (int i = 0; i < this.filePaths.length(); i++) {
            String string = this.uploadNames.getString(i);
            String string2 = this.filePaths.getString(i);
            Uri parse = Uri.parse(string2);
            if ("file".equals(parse.getScheme())) {
                File file = new File(new URI(string2));
                String trim = file.getName().trim();
                httpRequest.part(string, trim, getMimeTypeFromFileName(trim), file);
            }
            if ("content".equals(parse.getScheme())) {
                InputStream openInputStream = this.applicationContext.getContentResolver().openInputStream(parse);
                String trim2 = getFileNameFromContentScheme(parse, this.applicationContext).trim();
                httpRequest.part(string, trim2, getMimeTypeFromFileName(trim2), openInputStream);
            }
        }
    }

    private String getFileNameFromContentScheme(Uri uri, Context context) {
        Cursor query = context.getContentResolver().query(uri, null, null, null, null);
        if (query == null || !query.moveToFirst()) {
            return null;
        }
        String string = query.getString(query.getColumnIndex("_display_name"));
        query.close();
        return string;
    }

    private String getMimeTypeFromFileName(String str) {
        if (str == null || !str.contains(".")) {
            return null;
        }
        return MimeTypeMap.getSingleton().getMimeTypeFromExtension(str.substring(str.lastIndexOf(46) + 1).toLowerCase());
    }
}
