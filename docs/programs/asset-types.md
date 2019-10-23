---
title: "Asset Types"
path: "/programs/asset-types.html"
id: "programs/asset-types"
---
HackerOne provides functionality to allow you to define your program's scope by listing assets that are considered in or out of scope for your program.

HackerOne supports the following types of assets:

Type | Details |
---- | ------- |
CIDR | Any valid IPv4 or IPv6 CIDR range. <br><br>Examples: <ul>172.200.0.0/16<br>2001:db8::/48<br>fe80:0000:0000:0000:0204:61ff:fe9d:f156/3</li></ul>
Domain | Domain of the asset. Wild card (`*`) may be used. <br><br>Example: <ul>www.example.com<br>myprogram.com |
iOS: App Store | The identifier in the Apple Store to locate your App. <br><br>Example: <ul>com.domainname.appname <br>com.example.myapp |
iOS: Testflight | A standard apple identifier (https://developer.apple.com/testflight/). <br><br>Note: If you'll be providing a different version than the one available in the App Store, please detail the invitation process in the instructions. <br><br>Example: <ul>com.domainname.myapp
iOS: .ipa | A standard apple identifier. <br><br>Note: If you'll be providing a different version than the one available in the App Store or Testflight, please detail where they can be located. <br><br>Example: <ul>com.domainname.myapp |
Android Play Store | The id in Play Store used to locate your application (https://developer.android.com/studio/build/application-id.html). <br><br>Example: <ul>com.example.myapp
Android: .apk | A standard APK identifier. <br><br>Note: If you'll be providing a different version than the one available in the Play Store, please detail where they can be located. <br><br>Example: <ul> com.domainname.myapp |
Windows: Microsoft Store | The identifier in the Microsoft Store used to locate your app. It can be either a store ID like '9WZDNCRFHVJL' or an identifier name like 'Microsoft.SDKSamples.ApplicationDataSample'. <br><br>Examples: <ul> 9WZDNCRFHVJL<br>Microsoft.SDKSamples.ApplicationDataSample |
Source code | Link to the repository of an open source project.
Executable | Packaged executable on Linux, Windows, or Mac. Open source projects with releases can and should link as a Downloadable executable too. |
Hardware/IoT | Identifiable model number and make. Be sure to explain in the instructions how to locate the model details and what they may look like. <br><br>Example: <ul>100-440-0.750-3434-A |
Other | Any other type of asset that is not contained within the existing taxonomy. | 

Source Code, Downloadable Executables, and Hardware Identifiers aren't validated. You're free to use this in whatever suits your naming conventions.

You can edit your scopes in your settings under **Program Settings > Program > Scope**.
