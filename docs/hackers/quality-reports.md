---
title: "Quality Reports"
path: "/hackers/quality-reports.html"
id: "hackers/quality-reports"
---

By submitting reports to the program's inbox, you're able to notify programs of vulnerabilities. Not all great vulnerability reports look the same, but many share these common features:
* Detailed descriptions of your discovery with clear, concise, reproducible steps or a working proof-of-concept (POC). If you do not explain the vulnerability in detail, there may be significant delays in the process, which is undesirable for everyone.
* Screenshots and/or videos can sometimes assist security teams in reproducing your issue. Most teams prefer written reproduction steps, but screenshots and videos can be used to augment your report and make it easier for security teams to quickly understand the issue you're reporting.
* The impact of the vulnerability; if this bug were exploited, what could happen? Security teams need to file bugs internally and get resources to fix these issues. Describing why the issue is important can assist in quickly understanding the impact of the issue and help prioritize response and remediation.

It's best to be comprehensive, yet concise as security teams need to have all the details required to verify and validate your report. We recommend you provide enough information to
* Outline the bug
* Reproduce the bug
* Assess the coverage the bug applies to
* Provide additional related logs or information

### Examples
Here are some examples of publicly disclosed examples of good reports:
* [Shopify disclosed on HackerOne: Remote Code Execution on kitcrm using bulk customer update of Priority Products](https://hackerone.com/reports/422944)
* [Semrush disclosed on HackerOne: XXE in Site Audit function exposing file and directory contents](https://hackerone.com/reports/312543)
* [Shopify disclosed on HackerOne: Stored XSS in blog comments through Shopify API](https://hackerone.com/reports/192210)
* [QIWI disclosed on HackerOne: SQL injection on contactws.contact-sys.com in TScenObject action ScenObjects leads to remote code execution](https://hackerone.com/reports/816254)

Some great resources for vulnerability report best practices are:
* [Dropbox Bug Bounty Program: Best Practices](https://blogs.dropbox.com/tech/2015/08/dropbox-bug-bounty-program-best-practices-2/)
* [Google Bug Hunter University](https://bughunters.google.com/learn)
* [A Bounty Hunter's Guide to Facebook](https://www.facebook.com/notes/facebook-bug-bounty/a-bounty-hunters-guide-to-facebook/946955115318715)
* [Writing a good and detailed vulnerability report](https://medium.com/@tolo7010/writing-a-good-and-detailed-vulnerability-report-bdb86cedcff)
