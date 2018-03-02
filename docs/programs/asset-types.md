---
title: "Asset Types"
path: "/programs/asset-types"
---
HackerOne provides functionality to allow you to define your program's scope by listing assets that are considered in or out of scope for your program.

HackerOne supports the following types of assets:

Type | Details
----- | ------
CIDR | Any valid IPv4 or IPv6 CIDR range. <br>Examples: <ul><li>172.200.0.0/16</li><li>2001:db8::/48</li><li>fe80:0000:0000:0000:0204:61ff:fe9d:f156/3</li></ul>
URL | A valid URI, per our uri_validator.rb (which mostly relies on the standard ruby libary “uri” and matches the official URI RFC spec) <br>Examples: <ul><li>*.hackerone.com</li><li>https://maps.google.com</li><li>mywebsite.com/cool</li></ul>
Apple Store App ID | A standard apple identifier. <br>(https://developer.apple.com/library/content/documentation/General/Conceptual/DevPedia-CocoaCore/AppID.html) <br>Example: <ul><li>com.domainname.appname</li></ul>
Testflight | A standard apple identifier. <br>(https://developer.apple.com/library/content/documentation/General/Conceptual/DevPedia-CocoaCore/AppID.html) <br>Example: <ul><li>com.domainname.appme</li></ul>
Other .ipa | A standard apple identifier. <br>(https://developer.apple.com/library/content/documentation/General/Conceptual/DevPedia-CocoaCore/AppID.html) <br>Example: <ul><li>com.domainname.appme</li></ul>
Google Play | A standard APK identifier. <br>(https://developer.android.com/studio/build/application-id.html) <br>Example: <ul><li>com.domainname.appme</li></ul>
Windows Store App | Either a store ID like '9WZDNCRFHVJL' or an identifier name like 'Microsoft.SDKSamples.ApplicationDataSample' <br>Examples: <ul><li>9WZDNCRFHVJL</li><li>Microsoft.SDKSamples.ApplicationDataSample</li></ul>

Source Code, Downloadable Executables and Hardware identifiers are not validated. You are free to use this in whatever suits your naming conventions. 

You can edit your scopes in your settings under program's **Settings > Program > Policy & Scope**. 
