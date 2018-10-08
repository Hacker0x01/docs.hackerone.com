---
title: "Configure the HackerOne VPN"
path: "/hackers/configure-the-hackerone-vpn.html"
id: "hackers/configure-the-hackerone-vpn"
---

Certain programs require you to have your own VPN instance and credentials on the HackerOne VPN in order to search for vulnerabilities. You can configure the HackerOne VPN to start your VPN instance and retrieve your credentials.

To configure the HackerOne VPN:
1. Install the HackerOne Root CA Certificate. 
     * HackerOne has its own Root CA Certificate. You can download it [here](https://hackerone-vpn-service.s3.amazonaws.com/hackerone-vpn-service.crt).
     * The installation instructions for most operating systems and software are [here](https://www.bounca.org/tutorials/install_root_certificate.html).
2. Set up the VPN configuration.
     * If you don't have an OpenVPN client installed already, here are some clients and their installation instructions:
         * macOS: [Tunnelblick](https://tunnelblick.net/cInstall.html)
         * Windows: [openvpn-gui](https://github.com/OpenVPN/openvpn-gui/blob/master/README.rst)
         * Linux: [Ubuntu network manager](https://torguard.net/knowledgebase.php?action=displayarticle&id=53)
         * Linux: [terminal](https://openvpn.net/index.php/access-server/docs/admin-guides/182-how-to-connect-to-access-server-with-linux-clients.html)

If you have trouble installing the VPN, or have additional feedback, please reach out to [vpn-support@hackerone.com](mailto:vpn-support@hackerone.com)

<i>Note: The VPN is currently only enabled for a few select programs.</i>
