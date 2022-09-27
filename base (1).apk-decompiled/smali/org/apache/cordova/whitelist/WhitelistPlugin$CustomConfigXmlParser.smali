.class Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;
.super Lorg/apache/cordova/ConfigXmlParser;
.source "WhitelistPlugin.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/apache/cordova/whitelist/WhitelistPlugin;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "CustomConfigXmlParser"
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;


# direct methods
.method private constructor <init>(Lorg/apache/cordova/whitelist/WhitelistPlugin;)V
    .locals 0

    .line 68
    iput-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-direct {p0}, Lorg/apache/cordova/ConfigXmlParser;-><init>()V

    return-void
.end method

.method synthetic constructor <init>(Lorg/apache/cordova/whitelist/WhitelistPlugin;Lorg/apache/cordova/whitelist/WhitelistPlugin$1;)V
    .locals 0

    .line 68
    invoke-direct {p0, p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;-><init>(Lorg/apache/cordova/whitelist/WhitelistPlugin;)V

    return-void
.end method


# virtual methods
.method public handleEndTag(Lorg/xmlpull/v1/XmlPullParser;)V
    .locals 0

    return-void
.end method

.method public handleStartTag(Lorg/xmlpull/v1/XmlPullParser;)V
    .locals 5

    .line 71
    invoke-interface {p1}, Lorg/xmlpull/v1/XmlPullParser;->getName()Ljava/lang/String;

    move-result-object v0

    const-string v1, "content"

    .line 72
    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    const/4 v2, 0x0

    const/4 v3, 0x0

    if-eqz v1, :cond_0

    const-string v0, "src"

    .line 73
    invoke-interface {p1, v2, v0}, Lorg/xmlpull/v1/XmlPullParser;->getAttributeValue(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 74
    iget-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-static {v0}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->access$100(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;

    move-result-object v0

    invoke-virtual {v0, p1, v3}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    goto/16 :goto_3

    :cond_0
    const-string v1, "allow-navigation"

    .line 75
    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    const-string v0, "href"

    .line 76
    invoke-interface {p1, v2, v0}, Lorg/xmlpull/v1/XmlPullParser;->getAttributeValue(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    const-string v0, "*"

    .line 77
    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 78
    iget-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-static {p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->access$100(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;

    move-result-object p1

    const-string v0, "http://*/*"

    invoke-virtual {p1, v0, v3}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    .line 79
    iget-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-static {p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->access$100(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;

    move-result-object p1

    const-string v0, "https://*/*"

    invoke-virtual {p1, v0, v3}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    .line 80
    iget-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-static {p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->access$100(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;

    move-result-object p1

    const-string v0, "data:*"

    invoke-virtual {p1, v0, v3}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    goto/16 :goto_3

    .line 82
    :cond_1
    iget-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-static {v0}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->access$100(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;

    move-result-object v0

    invoke-virtual {v0, p1, v3}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    goto/16 :goto_3

    :cond_2
    const-string v1, "allow-intent"

    .line 84
    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_3

    const-string v0, "href"

    .line 85
    invoke-interface {p1, v2, v0}, Lorg/xmlpull/v1/XmlPullParser;->getAttributeValue(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 86
    iget-object v0, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-static {v0}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->access$200(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;

    move-result-object v0

    invoke-virtual {v0, p1, v3}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    goto/16 :goto_3

    :cond_3
    const-string v1, "access"

    .line 87
    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_9

    const-string v0, "origin"

    .line 88
    invoke-interface {p1, v2, v0}, Lorg/xmlpull/v1/XmlPullParser;->getAttributeValue(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v1, "subdomains"

    .line 89
    invoke-interface {p1, v2, v1}, Lorg/xmlpull/v1/XmlPullParser;->getAttributeValue(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v4, "launch-external"

    .line 90
    invoke-interface {p1, v2, v4}, Lorg/xmlpull/v1/XmlPullParser;->getAttributeValue(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    const/4 v2, 0x1

    if-eqz p1, :cond_4

    const/4 p1, 0x1

    goto :goto_0

    :cond_4
    const/4 p1, 0x0

    :goto_0
    if-eqz v0, :cond_9

    if-eqz p1, :cond_6

    const-string p1, "WhitelistPlugin"

    const-string v4, "Found <access launch-external> within config.xml. Please use <allow-intent> instead."

    .line 93
    invoke-static {p1, v4}, Lorg/apache/cordova/LOG;->w(Ljava/lang/String;Ljava/lang/String;)V

    .line 94
    iget-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-static {p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->access$200(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;

    move-result-object p1

    if-eqz v1, :cond_5

    const-string v4, "true"

    invoke-virtual {v1, v4}, Ljava/lang/String;->compareToIgnoreCase(Ljava/lang/String;)I

    move-result v1

    if-nez v1, :cond_5

    goto :goto_1

    :cond_5
    const/4 v2, 0x0

    :goto_1
    invoke-virtual {p1, v0, v2}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    goto :goto_3

    :cond_6
    const-string p1, "*"

    .line 96
    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_7

    .line 97
    iget-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-static {p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->access$300(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;

    move-result-object p1

    const-string v0, "http://*/*"

    invoke-virtual {p1, v0, v3}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    .line 98
    iget-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-static {p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->access$300(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;

    move-result-object p1

    const-string v0, "https://*/*"

    invoke-virtual {p1, v0, v3}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    goto :goto_3

    .line 100
    :cond_7
    iget-object p1, p0, Lorg/apache/cordova/whitelist/WhitelistPlugin$CustomConfigXmlParser;->this$0:Lorg/apache/cordova/whitelist/WhitelistPlugin;

    invoke-static {p1}, Lorg/apache/cordova/whitelist/WhitelistPlugin;->access$300(Lorg/apache/cordova/whitelist/WhitelistPlugin;)Lorg/apache/cordova/Whitelist;

    move-result-object p1

    if-eqz v1, :cond_8

    const-string v4, "true"

    invoke-virtual {v1, v4}, Ljava/lang/String;->compareToIgnoreCase(Ljava/lang/String;)I

    move-result v1

    if-nez v1, :cond_8

    goto :goto_2

    :cond_8
    const/4 v2, 0x0

    :goto_2
    invoke-virtual {p1, v0, v2}, Lorg/apache/cordova/Whitelist;->addWhiteListEntry(Ljava/lang/String;Z)V

    :cond_9
    :goto_3
    return-void
.end method
