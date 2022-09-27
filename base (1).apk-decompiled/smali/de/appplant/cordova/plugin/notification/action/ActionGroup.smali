.class public final Lde/appplant/cordova/plugin/notification/action/ActionGroup;
.super Ljava/lang/Object;
.source "ActionGroup.java"


# static fields
.field private static final GENERAL_ACTION_GROUP:Ljava/lang/String; = "DEFAULT_GROUP"

.field private static final groups:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Lde/appplant/cordova/plugin/notification/action/ActionGroup;",
            ">;"
        }
    .end annotation
.end field


# instance fields
.field private final actions:[Lde/appplant/cordova/plugin/notification/action/Action;

.field private final id:Ljava/lang/String;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 44
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    sput-object v0, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->groups:Ljava/util/Map;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;[Lde/appplant/cordova/plugin/notification/action/Action;)V
    .locals 0

    .line 120
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 121
    iput-object p1, p0, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->id:Ljava/lang/String;

    .line 122
    iput-object p2, p0, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->actions:[Lde/appplant/cordova/plugin/notification/action/Action;

    return-void
.end method

.method public static lookup(Ljava/lang/String;)Lde/appplant/cordova/plugin/notification/action/ActionGroup;
    .locals 1

    .line 61
    sget-object v0, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->groups:Ljava/util/Map;

    invoke-interface {v0, p0}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Lde/appplant/cordova/plugin/notification/action/ActionGroup;

    return-object p0
.end method

.method public static parse(Landroid/content/Context;Lorg/json/JSONObject;)Lde/appplant/cordova/plugin/notification/action/ActionGroup;
    .locals 8

    const-string v0, "actionGroupId"

    const-string v1, "DEFAULT_GROUP"

    .line 83
    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v1, "actions"

    .line 84
    invoke-virtual {p1, v1}, Lorg/json/JSONObject;->optJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object p1

    const/4 v1, 0x0

    if-eqz p1, :cond_5

    .line 86
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-nez v2, :cond_0

    goto/16 :goto_2

    .line 89
    :cond_0
    new-instance v2, Ljava/util/ArrayList;

    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v3

    invoke-direct {v2, v3}, Ljava/util/ArrayList;-><init>(I)V

    const/4 v3, 0x0

    .line 91
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v4

    if-ge v3, v4, :cond_3

    .line 92
    invoke-virtual {p1, v3}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object v4

    const-string v5, "type"

    const-string v6, "button"

    .line 93
    invoke-virtual {v4, v5, v6}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v5

    const-string v6, "input"

    .line 95
    invoke-virtual {v5, v6}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v6

    if-eqz v6, :cond_1

    sget v6, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v7, 0x18

    if-ge v6, v7, :cond_1

    const-string v4, "Action"

    const-string v5, "Type input is not supported"

    .line 96
    invoke-static {v4, v5}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_1

    :cond_1
    const-string v6, "button"

    .line 100
    invoke-virtual {v5, v6}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v6

    if-nez v6, :cond_2

    const-string v6, "input"

    invoke-virtual {v5, v6}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v6

    if-nez v6, :cond_2

    const-string v4, "Action"

    .line 101
    new-instance v6, Ljava/lang/StringBuilder;

    invoke-direct {v6}, Ljava/lang/StringBuilder;-><init>()V

    const-string v7, "Unknown type: "

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v6, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v6}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    invoke-static {v4, v5}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_1

    .line 105
    :cond_2
    new-instance v5, Lde/appplant/cordova/plugin/notification/action/Action;

    invoke-direct {v5, p0, v4}, Lde/appplant/cordova/plugin/notification/action/Action;-><init>(Landroid/content/Context;Lorg/json/JSONObject;)V

    invoke-interface {v2, v5}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :goto_1
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 108
    :cond_3
    invoke-interface {v2}, Ljava/util/List;->isEmpty()Z

    move-result p0

    if-eqz p0, :cond_4

    return-object v1

    .line 111
    :cond_4
    new-instance p0, Lde/appplant/cordova/plugin/notification/action/ActionGroup;

    invoke-interface {v2}, Ljava/util/List;->size()I

    move-result p1

    new-array p1, p1, [Lde/appplant/cordova/plugin/notification/action/Action;

    invoke-interface {v2, p1}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Lde/appplant/cordova/plugin/notification/action/Action;

    invoke-direct {p0, v0, p1}, Lde/appplant/cordova/plugin/notification/action/ActionGroup;-><init>(Ljava/lang/String;[Lde/appplant/cordova/plugin/notification/action/Action;)V

    return-object p0

    :cond_5
    :goto_2
    return-object v1
.end method

.method public static register(Lde/appplant/cordova/plugin/notification/action/ActionGroup;)V
    .locals 2

    .line 70
    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->getId()Ljava/lang/String;

    move-result-object v0

    const-string v1, "DEFAULT_GROUP"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 71
    sget-object v0, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->groups:Ljava/util/Map;

    invoke-virtual {p0}, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->getId()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1, p0}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :cond_0
    return-void
.end method


# virtual methods
.method public getActions()[Lde/appplant/cordova/plugin/notification/action/Action;
    .locals 1

    .line 136
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->actions:[Lde/appplant/cordova/plugin/notification/action/Action;

    return-object v0
.end method

.method public getId()Ljava/lang/String;
    .locals 1

    .line 129
    iget-object v0, p0, Lde/appplant/cordova/plugin/notification/action/ActionGroup;->id:Ljava/lang/String;

    return-object v0
.end method
