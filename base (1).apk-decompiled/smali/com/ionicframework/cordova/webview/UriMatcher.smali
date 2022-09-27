.class public Lcom/ionicframework/cordova/webview/UriMatcher;
.super Ljava/lang/Object;
.source "UriMatcher.java"


# static fields
.field private static final EXACT:I = 0x0

.field static final PATH_SPLIT_PATTERN:Ljava/util/regex/Pattern;

.field private static final REST:I = 0x2

.field private static final TEXT:I = 0x1


# instance fields
.field private mChildren:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Lcom/ionicframework/cordova/webview/UriMatcher;",
            ">;"
        }
    .end annotation
.end field

.field private mCode:Ljava/lang/Object;

.field private mText:Ljava/lang/String;

.field private mWhich:I


# direct methods
.method static constructor <clinit>()V
    .locals 1

    const-string v0, "/"

    .line 115
    invoke-static {v0}, Ljava/util/regex/Pattern;->compile(Ljava/lang/String;)Ljava/util/regex/Pattern;

    move-result-object v0

    sput-object v0, Lcom/ionicframework/cordova/webview/UriMatcher;->PATH_SPLIT_PATTERN:Ljava/util/regex/Pattern;

    return-void
.end method

.method private constructor <init>()V
    .locals 2

    .line 39
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 40
    iput-object v0, p0, Lcom/ionicframework/cordova/webview/UriMatcher;->mCode:Ljava/lang/Object;

    const/4 v1, -0x1

    .line 41
    iput v1, p0, Lcom/ionicframework/cordova/webview/UriMatcher;->mWhich:I

    .line 42
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    iput-object v1, p0, Lcom/ionicframework/cordova/webview/UriMatcher;->mChildren:Ljava/util/ArrayList;

    .line 43
    iput-object v0, p0, Lcom/ionicframework/cordova/webview/UriMatcher;->mText:Ljava/lang/String;

    return-void
.end method

.method public constructor <init>(Ljava/lang/Object;)V
    .locals 0

    .line 32
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 33
    iput-object p1, p0, Lcom/ionicframework/cordova/webview/UriMatcher;->mCode:Ljava/lang/Object;

    const/4 p1, -0x1

    .line 34
    iput p1, p0, Lcom/ionicframework/cordova/webview/UriMatcher;->mWhich:I

    .line 35
    new-instance p1, Ljava/util/ArrayList;

    invoke-direct {p1}, Ljava/util/ArrayList;-><init>()V

    iput-object p1, p0, Lcom/ionicframework/cordova/webview/UriMatcher;->mChildren:Ljava/util/ArrayList;

    const/4 p1, 0x0

    .line 36
    iput-object p1, p0, Lcom/ionicframework/cordova/webview/UriMatcher;->mText:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public addURI(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V
    .locals 14

    move-object/from16 v0, p3

    move-object/from16 v1, p4

    if-eqz v1, :cond_b

    const/4 v2, 0x0

    const/4 v3, 0x1

    const/4 v4, 0x0

    if-eqz v0, :cond_1

    .line 70
    invoke-virtual/range {p3 .. p3}, Ljava/lang/String;->length()I

    move-result v2

    if-lez v2, :cond_0

    invoke-virtual {v0, v4}, Ljava/lang/String;->charAt(I)C

    move-result v2

    const/16 v5, 0x2f

    if-ne v2, v5, :cond_0

    .line 71
    invoke-virtual {v0, v3}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object v0

    .line 73
    :cond_0
    sget-object v2, Lcom/ionicframework/cordova/webview/UriMatcher;->PATH_SPLIT_PATTERN:Ljava/util/regex/Pattern;

    invoke-virtual {v2, v0}, Ljava/util/regex/Pattern;->split(Ljava/lang/CharSequence;)[Ljava/lang/String;

    move-result-object v2

    :cond_1
    if-eqz v2, :cond_2

    .line 76
    array-length v0, v2

    goto :goto_0

    :cond_2
    const/4 v0, 0x0

    :goto_0
    const/4 v5, -0x2

    move-object v7, p0

    const/4 v6, -0x2

    :goto_1
    if-ge v6, v0, :cond_a

    if-ne v6, v5, :cond_3

    move-object v8, p1

    goto :goto_2

    :cond_3
    const/4 v8, -0x1

    if-ne v6, v8, :cond_4

    move-object/from16 v8, p2

    goto :goto_2

    .line 85
    :cond_4
    aget-object v8, v2, v6

    .line 86
    :goto_2
    iget-object v9, v7, Lcom/ionicframework/cordova/webview/UriMatcher;->mChildren:Ljava/util/ArrayList;

    .line 87
    invoke-virtual {v9}, Ljava/util/ArrayList;->size()I

    move-result v10

    const/4 v11, 0x0

    :goto_3
    if-ge v11, v10, :cond_6

    .line 91
    invoke-virtual {v9, v11}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v12

    check-cast v12, Lcom/ionicframework/cordova/webview/UriMatcher;

    .line 92
    iget-object v13, v12, Lcom/ionicframework/cordova/webview/UriMatcher;->mText:Ljava/lang/String;

    invoke-virtual {v8, v13}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v13

    if-eqz v13, :cond_5

    goto :goto_4

    :cond_5
    add-int/lit8 v11, v11, 0x1

    goto :goto_3

    :cond_6
    move-object v12, v7

    :goto_4
    if-ne v11, v10, :cond_9

    .line 99
    new-instance v7, Lcom/ionicframework/cordova/webview/UriMatcher;

    invoke-direct {v7}, Lcom/ionicframework/cordova/webview/UriMatcher;-><init>()V

    const-string v9, "**"

    .line 100
    invoke-virtual {v8, v9}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v9

    if-eqz v9, :cond_7

    const/4 v9, 0x2

    .line 101
    iput v9, v7, Lcom/ionicframework/cordova/webview/UriMatcher;->mWhich:I

    goto :goto_5

    :cond_7
    const-string v9, "*"

    .line 102
    invoke-virtual {v8, v9}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v9

    if-eqz v9, :cond_8

    .line 103
    iput v3, v7, Lcom/ionicframework/cordova/webview/UriMatcher;->mWhich:I

    goto :goto_5

    .line 105
    :cond_8
    iput v4, v7, Lcom/ionicframework/cordova/webview/UriMatcher;->mWhich:I

    .line 107
    :goto_5
    iput-object v8, v7, Lcom/ionicframework/cordova/webview/UriMatcher;->mText:Ljava/lang/String;

    .line 108
    iget-object v8, v12, Lcom/ionicframework/cordova/webview/UriMatcher;->mChildren:Ljava/util/ArrayList;

    invoke-virtual {v8, v7}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    goto :goto_6

    :cond_9
    move-object v7, v12

    :goto_6
    add-int/lit8 v6, v6, 0x1

    goto :goto_1

    .line 112
    :cond_a
    iput-object v1, v7, Lcom/ionicframework/cordova/webview/UriMatcher;->mCode:Ljava/lang/Object;

    return-void

    .line 63
    :cond_b
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "Code can\'t be null"

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    return-void
.end method

.method public match(Landroid/net/Uri;)Ljava/lang/Object;
    .locals 12

    .line 125
    invoke-virtual {p1}, Landroid/net/Uri;->getPathSegments()Ljava/util/List;

    move-result-object v0

    .line 126
    invoke-interface {v0}, Ljava/util/List;->size()I

    move-result v1

    if-nez v1, :cond_0

    .line 130
    invoke-virtual {p1}, Landroid/net/Uri;->getAuthority()Ljava/lang/String;

    move-result-object v2

    if-nez v2, :cond_0

    .line 131
    iget-object p1, p0, Lcom/ionicframework/cordova/webview/UriMatcher;->mCode:Ljava/lang/Object;

    return-object p1

    :cond_0
    const/4 v2, -0x2

    move-object v4, p0

    const/4 v3, -0x2

    :goto_0
    if-ge v3, v1, :cond_8

    if-ne v3, v2, :cond_1

    .line 137
    invoke-virtual {p1}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v5

    goto :goto_1

    :cond_1
    const/4 v5, -0x1

    if-ne v3, v5, :cond_2

    .line 139
    invoke-virtual {p1}, Landroid/net/Uri;->getAuthority()Ljava/lang/String;

    move-result-object v5

    goto :goto_1

    .line 141
    :cond_2
    invoke-interface {v0, v3}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Ljava/lang/String;

    .line 142
    :goto_1
    iget-object v6, v4, Lcom/ionicframework/cordova/webview/UriMatcher;->mChildren:Ljava/util/ArrayList;

    if-nez v6, :cond_3

    goto :goto_5

    .line 147
    :cond_3
    invoke-virtual {v6}, Ljava/util/ArrayList;->size()I

    move-result v4

    const/4 v7, 0x0

    const/4 v8, 0x0

    move-object v9, v8

    :goto_2
    if-ge v7, v4, :cond_6

    .line 149
    invoke-virtual {v6, v7}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v10

    check-cast v10, Lcom/ionicframework/cordova/webview/UriMatcher;

    .line 151
    iget v11, v10, Lcom/ionicframework/cordova/webview/UriMatcher;->mWhich:I

    packed-switch v11, :pswitch_data_0

    goto :goto_3

    .line 161
    :pswitch_0
    iget-object p1, v10, Lcom/ionicframework/cordova/webview/UriMatcher;->mCode:Ljava/lang/Object;

    return-object p1

    .line 153
    :pswitch_1
    iget-object v11, v10, Lcom/ionicframework/cordova/webview/UriMatcher;->mText:Ljava/lang/String;

    invoke-virtual {v11, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v11

    if-eqz v11, :cond_4

    :pswitch_2
    move-object v9, v10

    :cond_4
    :goto_3
    if-eqz v9, :cond_5

    move-object v4, v9

    goto :goto_4

    :cond_5
    add-int/lit8 v7, v7, 0x1

    goto :goto_2

    :cond_6
    move-object v4, v9

    :goto_4
    if-nez v4, :cond_7

    return-object v8

    :cond_7
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 172
    :cond_8
    :goto_5
    iget-object p1, v4, Lcom/ionicframework/cordova/webview/UriMatcher;->mCode:Ljava/lang/Object;

    return-object p1

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_1
        :pswitch_2
        :pswitch_0
    .end packed-switch
.end method
