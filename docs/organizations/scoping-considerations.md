---
title: "Scoping Considerations"
path: "/organizations/scoping-considerations.html"
id: "organizations/scoping-considerations"
---

HackerOne programs perform testing in all different environments. What factors go into deciding which environment or [assets](https://docs.hackerone.com/organizations/scope-best-practices.html) are a good fit for the hacker-powered approach? What kinds of "blockers" have the potential to reduce hacker engagement?

Below are some considerations that can help enable testing on more difficult assets.

### Hacker Access
* Is the environment publicly accessible?
    * If not, the HackerOne [Gateway VPN](https://docs.hackerone.com/organizations/hackerone-vpn.html) may be required
* Do any self sign-up flows require personal information (PII) from hackers?
* Are there geo-restrictions in the application to consider? SMS 2FA requirements?
### Feature Coverage
* Is a non-prod environment an accurate representation of production?
    * Is test data representative of production?
* Are any features that should be tested inaccessible to hackers?
    * If so, can [identifying hacker traffic](https://docs.hackerone.com/organizations/traffic-identification.html) help?
* Do any features require hackers to spend real money? Could this be avoided or reimbursed?
### Sensitive Information
* Does the environment contain sensitive information such as PII or PHI that a hacker could potentially stumble onto?
* Could hacker testing possibly interfere with other types of testing or activity in the environment?
