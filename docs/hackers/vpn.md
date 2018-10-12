---
title: "Configuring VPN"
path: "/hackers/configure-the-hackerone-vpn.html"
id: "hackers/configure-the-hackerone-vpn"
---

<i>Note: VPN is currently only enabled for a few select programs.</i>

### 1. Install the HackerOne Root CA

* HackerOne has its own Root CA Certificate. You can download it [here](https://hackerone-vpn-service.s3.amazonaws.com/hackerone-vpn-service.crt).
* The installation instructions for most operating systems and software are [here](https://www.bounca.org/tutorials/install_root_certificate.html).

### 2. Install an OpenVPN Client

In order to use our VPN service, you need a VPN client which supports OpenVPN.
Here are some clients and their installation instructions:

* macOS: [Tunnelblick] (https://tunnelblick.net/cInstall.html)
* Windows: [openvpn-gui] (https://github.com/OpenVPN/openvpn-gui/blob/master/README.rst)
* Linux: [Ubuntu network manager] (https://torguard.net/knowledgebase.php?action=displayarticle&id=53)
* Linux: [terminal] (https://openvpn.net/index.php/access-server/docs/admin-guides/182-how-to-connect-to-access-server-with-linux-clients.html )

### 3. Create your credentials

When you have accepted an invitation to a VPN enabled program,
you will see the "VPN Credentials" page in your user settings.

* Visit the "VPN Credentials" page in your user settings.
* Click "Create credentials" to generate your VPN credentials.
* Please be patient, it takes a few minutes to generate your credentials.

![vpn-1](./images/vpn-1.png)

### 4. Install your credentials

* Click "Download" to start the download of the <code>hackerone.ovpn</code> file.
* Import the <code>hackerone.ovpn</code> file in your OpenVPN client of choice (see above).

![vpn-2](./images/vpn-2.png)

### Support

If you have trouble installing the VPN, or have additional feedback, please reach out to [vpn-support@hackerone.com](mailto:vpn-support@hackerone.com)


