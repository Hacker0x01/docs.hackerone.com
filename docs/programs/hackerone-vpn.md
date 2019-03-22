---
title: "HackerOne VPN"
path: "/programs/hackerone-vpn.html"
id: "programs/hackerone-vpn"
---

You can require hackers to set up a virtual private network (VPN) instance with the HackerOne VPN in order to find vulnerabilities in your program. The HackerOne VPN enables you to have granular visibility into hacker activities on your program and assets.   

To opt-in to the HackerOne VPN, contact your program manager.

### FAQs
Question | Answer
-------- | ------
What is captured and logged by the HackerOne VPN? | All packets and netflow are captured. HTTPS is automatically decrypted, all other protocols (SMTPS, SSH, etc.) are captured but if encrypted, are not decrypted by HackerOne.
Does the VPN log each keystroke? | No, the VPN uses split tunnel technology which doesn't log keystrokes.
What additional information about hacker activity does the HackerOne VPN provide? | The VPN provides session-level detail on URLs hit by each participating hacker, including when, how often, and the duration.
How can the data captured by the VPN be accessed? | Access is based on guidelines established by HackerOne.<br><br>Authorized program personnel may make specific data requests which must include the data requested and its intended use.
How will access to the HackerOne VPN data be made available? | Data is made available via a password-protected Google Drive folder.
Where is the data log stored? | Data is stored in dedicated AWS S3 buckets that are unique for each program or Challenge.
How long is the data retained? | Data is stored for 12 months from the end of the program or Challenge.
Does the HackerOne VPN allow site to site tunnels? | No, HackerOne VPN does not support dedicated connections directly to one or more assets.
How do I revoke access for a specific hacker on my program? | Make the revoke request to HackerOne and we’ll disable the hacker’s unique IP address.
How can we whitelist testing-related traffic on our IDS? | Each Bounty program and Challenge is assigned a dedicated range of IP addresses to add to your IDS whitelist.
