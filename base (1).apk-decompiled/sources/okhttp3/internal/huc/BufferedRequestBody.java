package okhttp3.internal.huc;

import com.silkimen.http.HttpRequest;
import java.io.IOException;
import okhttp3.Request;
import okio.Buffer;
import okio.BufferedSink;
/* loaded from: classes.dex */
final class BufferedRequestBody extends OutputStreamRequestBody {
    final Buffer buffer = new Buffer();
    long contentLength = -1;

    public BufferedRequestBody(long j) {
        initOutputStream(this.buffer, j);
    }

    @Override // okhttp3.internal.huc.OutputStreamRequestBody, okhttp3.RequestBody
    public long contentLength() throws IOException {
        return this.contentLength;
    }

    @Override // okhttp3.internal.huc.OutputStreamRequestBody
    public Request prepareToSendRequest(Request request) throws IOException {
        if (request.header(HttpRequest.HEADER_CONTENT_LENGTH) != null) {
            return request;
        }
        outputStream().close();
        this.contentLength = this.buffer.size();
        return request.newBuilder().removeHeader("Transfer-Encoding").header(HttpRequest.HEADER_CONTENT_LENGTH, Long.toString(this.buffer.size())).build();
    }

    @Override // okhttp3.RequestBody
    public void writeTo(BufferedSink bufferedSink) throws IOException {
        this.buffer.copyTo(bufferedSink.buffer(), 0L, this.buffer.size());
    }
}
