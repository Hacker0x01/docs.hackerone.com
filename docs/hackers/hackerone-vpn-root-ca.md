---
title: "Installing the HackerOne VPN Root CA"
path: "/hackers/hackerone-vpn-root-ca.html"
id: "hackers/hackerone-vpn-root-ca"
---

In order to use the HackerOne VPN, you need to install the HackerOne VPN Root CA.

Refer to these installation and configuration instructions for your platform:

* [Windows](#windows)
* [macOS](#macos)
* [Ubuntu/Debian Linux](#ubuntudebian-linux)
* [Firefox](#firefox)

><i>Note: Firefox manages its own trusted certificate list, so you always need to add the root authority certificate to the browser even if you've installed it system wide.</i>

### Windows

To install the HackerOne VPN Root CA to your Windows machine:

1. [Download the HackerOne VPN Root CA](https://hackerone-vpn-service.s3.amazonaws.com/hackerone-vpn-service.crt).
2. Double-click on the certificate file.

![Screenshot](./images/vpn-windows.png)

3. Click <b>Install Certificate...</b>.

![Screenshot](./images/vpn-windows-2.png)

4. Select <b>Local Machine</b> and click <b>Next</b>.

![Screenshot](./images/vpn-windows-3.png)

5. Click <b>Yes</b> to allow the changes.

![Screenshot](./images/vpn-windows-4.png)

6. Select <b>Place all certificates in the following store</b>.

![Screenshot](./images/vpn-windows-5.png)

7. Select <b>Trusted Root Certification Authorities</b> from the list and click <b>OK</b>.

![Screenshot](./images/vpn-windows-6.png)

8. Click <b>Finish</b>.

![Screenshot](./images/vpn-windows-7.png)

### macOS

To install the HackerOne VPN Root CA to your macOS platform:

1. [Download the HackerOne VPN Root CA](https://hackerone-vpn-service.s3.amazonaws.com/hackerone-vpn-service.crt).
2. Double-click on the certificate file.

![Screenshot](./images/vpn-macos-1.png)

3. Enter your administrator password.

![Screenshot](./images/vpn-macos-2.png)

4. Double-click on the HackerOne VPN certificate in KeyChain Access.

![Screenshot](./images/vpn-macos-3.png)

5. Set the certificate to <b>Always Trust</b> in the window that appears.

![Screenshot](./images/vpn-macos-4.png)

6. Re-open the certificate in Keychain Access. The VPN Certificate should now be trusted by the operating system.

![Screenshot](./images/vpn-macos-5.png)

### Ubuntu/Debian Linux

Execute the following commands in your terminal to download and install the HackerOne VPN Root CA:

1. `cd /usr/local/share/ca-certificates`
2. `sudo wget https://hackerone-vpn-service.s3.amazonaws.com/hackerone-vpn-service.crt`
3. `sudo update-ca-certificates`

The command will state that it has installed one (or more) new certificates, through which the certificate has been successfully added to the Operating System.

### Firefox

To install the HackerOne VPN Root CA to Firefox:

1. [Download the HackerOne VPN Root CA](https://hackerone-vpn-service.s3.amazonaws.com/hackerone-vpn-service.crt).
2. Open <b>Preferences</b> and go to <b>Privacy & Security</b>.
3. Scroll down to the <b>Certificates</b> section, and click <b>View Certificates...</b>.

![Screenshot](./images/vpn-firefox-1.png)

4. Click the <b>Import...</b> tab.

![Screenshot](./images/vpn-firefox-2.png)

5. Select the <b>hackerone-vpn-service.crt</b> file.

![Screenshot](./images/vpn-firefox-3.png)

6. Check <b>Trust this CA to identify websites</b> and click <b>OK</b>.

![Screenshot](./images/vpn-firefox-4.png)

The "Hackerone - Hacker VPN Service" certificate is now visible in your list of certificates.

![Screenshot](./images/vpn-firefox-5.png)
