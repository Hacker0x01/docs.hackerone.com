---
title: "Asset Types"
path: "/organizations/asset-types.html"
id: "organizations/asset-types"
---
HackerOne provides functionality to allow you to define your program's scope by listing assets that are considered in or out of scope for your program.

HackerOne supports the following types of assets:

Type | Details | Examples
---- | ------- | --------
CIDR | Any valid IPv4 or IPv6 CIDR range. | 172.200.0.0/16 2001:db8::/48 fe80:0000:0000:0000:0204:61ff:fe9d:f156/3 104.16.100.52
URL | Complete web address identifying a specific resource. Default to using the Domain asset type unless you are specifying a specific application on the domain. | www.example.com/app1 www.example.com/app2
Domain | Domain of the asset. For wild card scopes, use the Wildcard scope type. | www.example.com myprogram.com
Wildcard | A way to specify multiple domains or subdomains. | www.amazon.* or *.vpn.hackerone.net 
iOS: App Store | An Apple iOS mobile app provided via the App Store. The identifier in the Apple Store to locate your App. | App Store hyperlink
iOS: Testflight | An Apple iOS mobile app provided via Testflight, often used for pre-production versions of mobile applications. A standard Apple identifier (https://developer.apple.com/testflight/). <br /><br /> Note: If you are providing a different version than the one available in the App Store, please detail the invitation process in the instructions. | com.domainname.myapp
iOS: .ipa | An Apple iOS mobile app provided via a file. A standard Apple identifier. <br /><br /> Note: If you are providing a different version than the one available in the App Store or Testflight, please detail where they can be located. | com.domainname.myapp
Android Play Store | A Google Android mobile app provided via the Play Store. The ID in Play Store used to locate your application | https://developer.android.com/studio/build/application-id.html
Android: .apk | A Google Android mobile app provided via a file. A standard APK identifier. <br /><br /> Note: If you are providing a different version than the one available in the Play Store, please detail where they can be located. | com.domainname.myapp
Windows: Microsoft Store | A Windows Phone mobile app. The identifier in the Microsoft Store used to locate your app. It can be either a store ID like '9WZDNCRFHVJL' or an identifier name like 'Microsoft.SDKSamples ApplicationDataSample'. | 9WZDNCRFHVJL Microsoft.SDKSamples.ApplicationDataSample
Source code | Link to the repository of an open source project. | https://github.com/Hacker0x01/docs.hackerone.com
Executable | Packaged executable on Linux, Windows, or Mac. Open-source projects with releases can and should link as a Downloadable executable too.
Hardware/IoT | Identifiable model number and make of any physical device. Be sure to explain in the instructions how to locate the model details and what they may look like. | 100-440-0.750-3434-A
Other | Any other type of asset that is not contained within the existing taxonomy. Common asset types in this category include: Autonomous System Numbers (ASNs)- a globally unique identifier for a set of IP prefixes belonging to a network or a collection of networks that are all managed, controlled, and supervised by a single company | ASN: 13335
Smart Contracts | Programs stored on a blockchain that run when predetermined conditions are met. This should be a URL with a link to the smart contract. | https://polygonscan.com/address/0xfede379e48c873c75f3cc0c81f7c784ad730a8f7 https://github.com/magiceden-oss/erc721m/releases/latest


Other,	Source Code, Downloadable Executables, and Hardware Identifiers aren't validated. You're free to use this in a way that suits your naming conventions.

You can edit your scope in your settings under **Program Settings > Program > Scope**.
