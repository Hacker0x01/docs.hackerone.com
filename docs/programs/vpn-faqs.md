---
title: "HackerOne Gateway (VPN) FAQs"
path: "/programs/vpn-faqs.html"
id: "programs/vpn-faqs"
---

Question | Answer
-------- | ------
What's captured and logged by HackerOne Gateway (VPN)? | All packets and netflow are captured. HTTPS is automatically decrypted, all other protocols (SMTPS, SSH, etc.) are captured but if encrypted, aren't decrypted by HackerOne.
Does Gateway (VPN) log each keystroke? | No, Gateway (VPN) uses split tunnel technology which doesn't log keystrokes.
What additional information about finder activity does Gateway (VPN) provide? | Gateway (VPN) provides session-level detail on URLs hit by each participating finder, including when, how often, and the duration.
How can the data captured by Gateway (VPN) be accessed? | Access is based on guidelines established by HackerOne.<br><br>Authorized program personnel may make specific data requests which must include the data requested and its intended use.
How will access to Gateway (VPN) data be made available? | Data is made available via a password-protected Google Drive folder.
Where is the data log stored? | Data is stored in dedicated AWS S3 buckets that are unique for each program or Challenge.
How long is the data retained? | Data is stored for 12 months from the end of the program or Challenge.
Does Gateway (VPN) allow site to site tunnels? | No, Gateway (VPN) does not support dedicated connections directly to one or more assets.
How do I revoke access for a specific finder on my program? | Make the revoke request to HackerOne and we’ll disable the finder’s unique IP address.
How can we whitelist testing-related traffic on our IDS? | Each Bounty program and Challenge is assigned a dedicated range of IP addresses to add to your IDS whitelist.
