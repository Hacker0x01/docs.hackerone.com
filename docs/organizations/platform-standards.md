---
title: "Detailed Platform Standards"
path: "/organizations/platform-standards.html"
id: "organizations/platform-standards"
---
*Updated September 8, 2023*

Like all platforms, HackerOne maintains Platform Standards. HackerOne's standards are based on industry standards, best practices, and our ongoing learning from running the largest Vulnerability Disclosure platform in the world.

Platform Standards ensure that Programs and Hackers know what to expect in the majority of situations. Some of these standards involve metrics related to CVSS calculations. CVSS typically provides a minimum baseline for reward value, but may not always capture the full impact of a vulnerability in its business context. Programs should pay for value when evaluating reports and use CVSS as a starting point while also considering “bonuses” when the impact of a report does not match a strict CVSS calculation.

Platform Standards help provide consistency, fairness, and, above all, the best results possible for all participants on the platform. Deviations from Platform Standards are not recommended and must be disclosed in a program’s policy if they exist.

 Issue | Standard | Example
----------- | ------------- | -------------
Self Sign-Up / CVSS Privilege Requirement (PR) | If self-sign-up is possible, set the **Privileges Required** metric to None. | If a hacker finds a bug in an application that requires them to sign up and create their own credentials and does not require elevated privileges beyond that, then the CVSS calculation should include **PR:N**.
Mass Leakage of Sensitive PII | When awarding a bounty, always consider this as a critical severity issue. In serious scenarios where sensitive information is disclosed, CVSS may not always capture the full impact. | If a hacker finds a vulnerability that results in a mass leak of PII beyond the basic name/email (examples: phone numbers, addresses, government IDs, hashed passwords, PHI) the report should be rated at the **Critical** severity.
Using Availability Metric for Data | The ability to delete the data in an application does not impact the **Availability** metric in a CVSS score. | If a vulnerability enables an attacker to delete a lot of application data, but the application is still operational, then **Integrity** should be set to **High** and **Availability** set to **None**. This matches the explicit guidance in the CVSS 3.1 release notes. 
Third-party Components: For Hackers | Novel vulnerabilities or widespread misconfigurations must be reported to the component owner before being reported elsewhere. Hackers should not spread information about unpatched vulnerabilities unless there is a sanctioned workaround from the component owner. | If a hacker discovers a zero-day vulnerability in a common network application (e.g. ImageMagick), they should report it to the component owner initially. <br><br>Only report it to Programs when a patch, recommended workaround, or public knowledge is available.
Third-party Components: For Programs Consuming the Component | Third-party components and configurations are effectively part of an asset owner’s application because they have chosen to build the application that way. <br><br>Programs should pay a reward if they have received value from a report about a vulnerability in a third-party component. This includes if an asset owner has changed a configuration or applied a patch outside of a regular schedule because of the report. | A report is submitted to a program detailing a critical vulnerability in an internet-exposed Content Management System the asset owner has deployed. <br><br>The normal patching schedule would have resolved the issue in a month, but the report shows that the issue is very serious so the asset owners patch in a few days. The Program should reward for a critical issue because they may have just avoided a breach.

