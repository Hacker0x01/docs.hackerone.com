---
title: "Traffic Identification"
path: "/programs/traffic-identification.html"
id: "programs/traffic-identification"
---

There are several ways to identify hacker testing traffic at various layers for testing/feature enablement or testing control & monitoring.

### Application Layer: User Allowlisting
* HackerOne provides each hacker with a forwarding [email address](https://docs.hackerone.com/hackers/hacker-email-alias.html)
    * This email can be helpful in identifying hacker testing accounts for allowlisting within the application itself
### Session Layer: HTTP Headers
* Researchers may add headers to requests such as: “X-HackerOne-Research: [H1 username]”
### Network Layer: IP Allowlisting
* HackerOne [Gateway](https://docs.hackerone.com/programs/hackerone-vpn.html)
    * Hacker traffic will come from a known CIDR block
    * Hacker VPN traffic can be analyzed for insight into asset testing coverage
* Personal IP Check-in
    * Limited to the [H1 Pentest](https://docs.hackerone.com/programs/product-offerings.html) product. Used in lieu of [Gateway](https://docs.hackerone.com/programs/hackerone-vpn.html)
### "Human Layer": Hacker Vetting & Communication
* HackerOne [Clear](https://docs.hackerone.com/programs/hackerone-clear.html) researchers
* Custom alert process for each program
    * email, phone, [Slack, Teams, PagerDuty, and others](https://docs.hackerone.com/programs/supported-integrations.html)
    * HackerOne [API](https://api.hackerone.com)
