package com.silkimen.http;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: classes.dex */
public class JsonUtils {
    public static HashMap<String, String> getStringMap(JSONObject jSONObject) throws JSONException {
        HashMap<String, String> hashMap = new HashMap<>();
        if (jSONObject == null) {
            return hashMap;
        }
        Iterator<String> keys = jSONObject.keys();
        while (keys.hasNext()) {
            String next = keys.next();
            hashMap.put(next, jSONObject.getString(next));
        }
        return hashMap;
    }

    public static HashMap<String, Object> getObjectMap(JSONObject jSONObject) throws JSONException {
        HashMap<String, Object> hashMap = new HashMap<>();
        if (jSONObject == null) {
            return hashMap;
        }
        Iterator<String> keys = jSONObject.keys();
        while (keys.hasNext()) {
            String next = keys.next();
            Object obj = jSONObject.get(next);
            if (obj instanceof JSONArray) {
                hashMap.put(next, getObjectList((JSONArray) obj));
            } else {
                hashMap.put(next, jSONObject.get(next));
            }
        }
        return hashMap;
    }

    public static ArrayList<Object> getObjectList(JSONArray jSONArray) throws JSONException {
        ArrayList<Object> arrayList = new ArrayList<>();
        for (int i = 0; i < jSONArray.length(); i++) {
            arrayList.add(jSONArray.get(i));
        }
        return arrayList;
    }
}
