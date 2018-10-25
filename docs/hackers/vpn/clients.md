---
title: "Configuring OpenVPN Clients"
path: "/hackers/vpn/clients.html"
id: "hackers/vpn/clients"
---

In order to use our VPN service, you need a VPN client that supports OpenVPN.

Installation and configuration instructions for your platform:

* [Windows](#windows)
* [macOS](#macos)
* [Ubuntu/Debian Linux](#ubuntu)

<h1 id="windows">Windows</h1>

1. Download the OpenVPN **Windows Installer** from <a href="https://openvpn.net/community-downloads/" target="_blank">this page</a>
2. Execute the OpenVPN Installer
3. When prompted, select these components:

![Screenshot](../images/vpn-windows-gui-1.png)

4. When prompted to install a network adapter, click "Install"

![Screenshot](../images/vpn-windows-gui-2.png)

5. The setup is now completed

![Screenshot](../images/vpn-windows-gui-3.png)

7. Start the OpenVPN GUI application

8. Right click the OpenVPN icon in the bottom right corner of the screen, and click "Import file..."

![Screenshot](../images/vpn-windows-gui-4.png)

9. Select the `*.openvpn` file you have downloaded from HackerOne (See [Accessing your VPN Credentials](/hackers/configure-the-hackerone-vpn.html)).

![Screenshot](../images/vpn-windows-gui-5.png)

10. Right click the OpenVPN icon in the bottom right corner of the screem, and click "Connect"

![Screenshot](../images/vpn-windows-gui-6.png)

11. The VPN should now start connecting.

<h1 id="macos">macOS</h1>

1. Install [Tunnelblick](https://tunnelblick.net/cInstall.html)
2. Start Tunnelblick
3. Find the `*.openvpn` file you have downloaded from HackerOne (See [Accessing your VPN Credentials](/hackers/configure-the-hackerone-vpn.html))
4. Drag it onto the Tunnelblick icon at the top of your screen
5. Click the Tunnelblick icon, and click the HackerOne VPN connection
6. The VPN should now be connected!

<h1 id="ubuntu">Ubuntu/Debian Linux</h1>

**This part needs work!**

* [Ubuntu network manager](https://torguard.net/knowledgebase.php?action=displayarticle&id=53)
* [terminal](https://openvpn.net/index.php/access-server/docs/admin-guides/182-how-to-connect-to-access-server-with-linux-clients.html)

Import the `*.openvpn` file you have downloaded from HackerOne (See [Accessing your VPN Credentials](/hackers/configure-the-hackerone-vpn.html)).
