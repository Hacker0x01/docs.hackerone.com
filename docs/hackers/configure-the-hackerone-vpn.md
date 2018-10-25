---
title: "HackerOne VPN"
path: "/hackers/configure-the-hackerone-vpn.html"
id: "hackers/configure-the-hackerone-vpn"
---

Certain programs require you to have your own VPN instance and credentials on the HackerOne VPN in order to search for vulnerabilities. You can configure the HackerOne VPN to start your own VPN instance and retrieve your credentials.

><i>Note: The VPN is currently only enabled for a few select programs. You can only access the VPN Credentials if you've accepted an invitation to a VPN enabled program.</i>

### VPN Configuration
To configure the HackerOne VPN:
1. [Install the HackerOne VPN Root CA](/hackers/hackerone-vpn-root-ca.html).
2. Download your VPN Credentials from HackerOne (See: <i>Accessing your VPN Credentials</i> below)
3. [Configure your OpenVPN Client](/hackers/openvpn-clients.html).

<h3 id="accessing">Accessing your VPN Credentials</h3>

Once you've configured the HackerOne VPN and accepted an invitation to a VPN enabled program, to access your VPN Credentials:

1. Go to your <b>Settings > VPN Credentials</b>.
2. Click <b>Create Credentials</b> to generate your VPN credentials. <i>Note: It'll take a few minutes to generate your credentials. Sorry for the wait!</i>

![vpn home page](./images/vpn-1.png)

3. Click <b>Download</b> to download the <code>hackerone.ovpn</code> file.

![vpn download link](./images/vpn-2.png)

4. Import the <code>hackerone.ovpn</code> file in the OpenVPN client that you've configured.

You'll be able to access your VPN credentials and work securely within the HackerOne VPN to search for vulnerabilities. Every hacker will have their own VPN instance. You can check to see that your VPN instance is running successfully on the VPN Credentials page.

If you have trouble installing the VPN, or have additional feedback, please reach out to [vpn-support@hackerone.com](mailto:vpn-support@hackerone.com)
