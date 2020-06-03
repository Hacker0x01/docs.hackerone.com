---
title: "Severity"
path: "/hackers/severity.html"
id: "hackers/severity"
---

Reports are marked with a severity rating to show how severe the vulnerability is in the report submission form. On HackerOne, severity is particularly useful for structuring bounty ranges and is used when offering bounty recommendations. The severity level can be marked as:

![severity-1](./images/severity-options.png)

HackerOne utilizes the Common Vulnerability Scoring System (CVSS) - an industry standard calculator used to determine the severity of a bug. The CVSS enables there to be a common language around the severity of bugs. You can either choose a severity level based on their own judgment of the vulnerability, or you can use the CVSS calculator to give more information about the vulnerability and calculate an exact CVSS score.

The CVSS Calculator provides a way to capture the principal characteristics of a vulnerability and produces a numerical score reflecting its severity. The numerical score can then be translated into a qualitative representation to help properly assess and prioritize inbound vulnerabilities. 

There are 8 metrics defined for CVSS v3. The first 5 are about the attack method itself, while the latter three are dependent on how your program assesses impact - the direct consequence of a successful exploit. These are the different components to the CVSS Calculator:

Option | Detail
------ | -------
Attack Vector | How exploitable the vulnerability is. The score increases the more remote an attacker can be in order to exploit the vulnerability.
Attack Complexity | The conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
Privilege Required | The level of privileges an attacker must possess before successfully exploiting the vulnerability. The severity increases as fewer privileges are required.
User Interaction | Whether the vulnerability can be exploited solely at the will of the attacker or whether a separate user (or user-initiated process) must participate in some matter.  
Scope | Whether a successful attack impacts a component other than the vulnerable component.
Confidentiality | The impact of the bug as it relates to confidential information being accessed.
Integrity | Whether the data can be modified due to the vulnerability.
Availability | Whether functionality can be rendered inaccessible. The impact to the availability of the impacted component.  

![severity-2](./images/severity-calculator.png)

><i>Note: It's optional for you to submit a severity rating.</i>

You can read more details about CVSS [here](https://www.first.org/cvss/user-guide).

If the program has a custom methodology for determining severity, it should be described it on their Security Page.
