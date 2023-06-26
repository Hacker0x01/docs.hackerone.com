---
title: "Standard Ineligible Findings"
path: "/organizations/standard-ineligible-findings.html"
id: "organizations/standard-ineligible-findings"
---
>Instructions to Customers: HackerOne operates a list of standard ineligible findings that are enforced across all of its programs. This helps ensure a consistent hacker and customer experience across the platform. Please review this list prior to launching your program. If your specific threat model benefits from identifying any of the issues named on our exclusion list, make sure to note this clearly in your Security Page.

### HackerOne Standard Ineligible Findings

When reporting potential vulnerabilities, please consider (1) realistic attack scenarios, and (2) the security impact of the behavior. Below, you will find the most common false positives we encounter. The following issues will be closed as invalid except in rare circumstances demonstrating clear security impact.

1. Theoretical vulnerabilities that require unlikely user interaction or circumstances. For example:
    * Vulnerabilities only affecting users of unsupported or End of Life browsers
    * Broken link hijacking
    * Open redirects (unless you can demonstrate additional security impact)
    * Tabnabbing
    * Content spoofing and text injection issues
    * Attacks requiring MITM or physical access to a user's device
2. Theoretical vulnerabilities that do not demonstrate real-world security impact. For example:
    * Clickjacking on pages with no sensitive actions
    * Cross-Site Request Forgery (CSRF) on forms with no sensitive actions (e.g., Logout)
    * Permissive CORS configurations without demonstrated security impact
    * Software version disclosure / Banner identification issues / Descriptive error messages or headers (e.g. stack traces, application or server errors)
    * Comma Separated Values (CSV) injection
3. Optional security hardening steps / Missing best practices. For example:
    * SSL/TLS Configurations
    * Lack of SSL Pinning
    * Lack of jailbreak detection in mobile apps
    * Cookie handling (e.g., missing HttpOnly/Secure flags)
    * Content-Security-Policy configuration opinions
    * Optional email security features (e.g., SPF/DKIM/DMARC configurations)
    * Most issues related to rate limiting and brute force behaviors
4. Known CVEs are excluded for a reasonable period of time following the public availability of a patch (typically 30 days).

