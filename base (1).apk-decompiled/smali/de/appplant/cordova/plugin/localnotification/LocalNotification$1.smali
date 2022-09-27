.class Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;
.super Ljava/lang/Object;
.source "LocalNotification.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lde/appplant/cordova/plugin/localnotification/LocalNotification;->execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

.field final synthetic val$action:Ljava/lang/String;

.field final synthetic val$args:Lorg/json/JSONArray;

.field final synthetic val$command:Lorg/apache/cordova/CallbackContext;


# direct methods
.method constructor <init>(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Ljava/lang/String;Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)V
    .locals 0

    .line 129
    iput-object p1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iput-object p2, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    iput-object p3, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    iput-object p4, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$args:Lorg/json/JSONArray;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 131
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v1, "ready"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 132
    invoke-static {}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$000()V

    goto/16 :goto_0

    .line 134
    :cond_0
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v1, "check"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 135
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$100(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V

    goto/16 :goto_0

    .line 137
    :cond_1
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v1, "request"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 138
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$200(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V

    goto/16 :goto_0

    .line 140
    :cond_2
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v1, "actions"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    const/4 v1, 0x0

    if-eqz v0, :cond_3

    .line 141
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v2, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$args:Lorg/json/JSONArray;

    invoke-virtual {v2, v1}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object v1

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$300(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONObject;)V

    .line 142
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_0

    .line 144
    :cond_3
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "schedule"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_4

    .line 145
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$args:Lorg/json/JSONArray;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$400(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONArray;)V

    .line 146
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$100(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V

    goto/16 :goto_0

    .line 148
    :cond_4
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "update"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_5

    .line 149
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$args:Lorg/json/JSONArray;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$500(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONArray;)V

    .line 150
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$100(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V

    goto/16 :goto_0

    .line 152
    :cond_5
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "cancel"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_6

    .line 153
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$args:Lorg/json/JSONArray;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$600(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONArray;)V

    .line 154
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_0

    .line 156
    :cond_6
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "cancelAll"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_7

    .line 157
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    invoke-static {v0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$700(Lde/appplant/cordova/plugin/localnotification/LocalNotification;)V

    .line 158
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_0

    .line 160
    :cond_7
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "clear"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_8

    .line 161
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$args:Lorg/json/JSONArray;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$800(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONArray;)V

    .line 162
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_0

    .line 164
    :cond_8
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "clearAll"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_9

    .line 165
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    invoke-static {v0}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$900(Lde/appplant/cordova/plugin/localnotification/LocalNotification;)V

    .line 166
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_0

    .line 168
    :cond_9
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "type"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_a

    .line 169
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v2, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$args:Lorg/json/JSONArray;

    invoke-virtual {v2, v1}, Lorg/json/JSONArray;->optInt(I)I

    move-result v1

    iget-object v2, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1, v2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$1000(Lde/appplant/cordova/plugin/localnotification/LocalNotification;ILorg/apache/cordova/CallbackContext;)V

    goto/16 :goto_0

    .line 171
    :cond_a
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "ids"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_b

    .line 172
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$1100(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V

    goto/16 :goto_0

    .line 174
    :cond_b
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "scheduledIds"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_c

    .line 175
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$1200(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V

    goto :goto_0

    .line 177
    :cond_c
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "triggeredIds"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_d

    .line 178
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$1300(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V

    goto :goto_0

    .line 180
    :cond_d
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v2, "notification"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_e

    .line 181
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v2, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$args:Lorg/json/JSONArray;

    invoke-virtual {v2, v1}, Lorg/json/JSONArray;->optInt(I)I

    move-result v1

    iget-object v2, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1, v2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$1400(Lde/appplant/cordova/plugin/localnotification/LocalNotification;ILorg/apache/cordova/CallbackContext;)V

    goto :goto_0

    .line 183
    :cond_e
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v1, "notifications"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_f

    .line 184
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$args:Lorg/json/JSONArray;

    iget-object v2, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1, v2}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$1500(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    goto :goto_0

    .line 186
    :cond_f
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v1, "scheduledNotifications"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_10

    .line 187
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$1600(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V

    goto :goto_0

    .line 189
    :cond_10
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$action:Ljava/lang/String;

    const-string v1, "triggeredNotifications"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_11

    .line 190
    iget-object v0, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->this$0:Lde/appplant/cordova/plugin/localnotification/LocalNotification;

    iget-object v1, p0, Lde/appplant/cordova/plugin/localnotification/LocalNotification$1;->val$command:Lorg/apache/cordova/CallbackContext;

    invoke-static {v0, v1}, Lde/appplant/cordova/plugin/localnotification/LocalNotification;->access$1700(Lde/appplant/cordova/plugin/localnotification/LocalNotification;Lorg/apache/cordova/CallbackContext;)V

    :cond_11
    :goto_0
    return-void
.end method
