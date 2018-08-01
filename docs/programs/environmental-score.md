---
title: "Environmental Score"
path: "/programs/environmental-score.html"
id: "programs/environmental-score"
---

The environmental score enables you to set the maximum [severity](severity.html) of an asset. It’s determined by setting impact levels to these 3 components:
* Confidentiality
* Integrity
* Availability

<i>You can read more on these components in the section below on <b>Environmental Score Components</b>.</i>

To set the environmental score for an asset:
1. Go to <b>Settings > Program > Scope</b>.
2. Edit an existing asset to change the environmental score by selecting the degree of importance (None, Low, Medium, High) to each component.

### Effects to Severity
Setting an environmental score for an asset caps the CVSS severity rating when a hacker calculates the severity for the asset in the submission report. The maximum severity a hacker can set for the asset is shown in the <b>Maximum severity</b> field.

For example: A program sets all 3 environmental score requirements to be None/Low for the asset `test.com` so that the maximum severity is set to None.

The hacker now can’t set the CVSS score for `test.com` to be Critical or High when submitting a report, even though the hacker selected all of the highest ratings on the CVSS calculator.

### Difference Between CVSS
There are cases where the CVSS rating in HackerOne is vastly different from the actual CVSS site. For instance, a hacker can calculate the CVSS rating when submitting a report in HackerOne, only to find that the actual CVSS site gives a different severity score.

The discrepancy in severity ratings isn’t a mistake. The CVSS site gives a generic calculation for severity, whereas an asset with an environmental score in HackerOne will give a severity score that is specific to that particular asset in that program, and so, the severity score given in the product is going to be different from the score on the CVSS site.

### Environmental Score Components
As mentioned above, the 3 components that make up the environmental score are:
* Confidentiality
* Integrity
* Availability

#### Confidentiality
Confidentiality refers to whether the data being obtained is actually confidential to the business. If a vulnerability were successfully exploited, this metric measures the impact of the confidentiality of the information that is at risk. To set the confidentiality level of the asset, you can choose from these 4 options:

Option | Details
------ | --------
None | There's no loss of confidentiality within the impacted component.
Low | There's some loss of confidentiality. Access to some restricted information is obtained, but the attacker doesn't have control over what information is obtained or the amount or kind of loss that's constrained. The information disclosed doesn't cause a direct, serious loss to the impacted component.
Medium | In between Low and High
High | There's a total loss of confidentiality, resulting in all resources within the impacted component being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact.

#### Integrity
Integrity refers to the trustworthiness of information. This metric measures the impact to the integrity of a successfully exploited vulnerability. To set the integrity level of the asset, you can choose from these 4 options:

Option | Details
------ | --------
None | There's no loss of integrity within the impacted component.
Low | Modification of data is possible, but the attacker doesn't have control over the consequence of a modification. The amount of modification may be constrained, and there isn't a direct, serious impact on the affected component.
Medium | In between Low and High
High | There's a total loss of integrity or a complete loss of protection due to the vulnerability. For example, the attacker is able to modify any or all files protected by the impacted component. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the impacted component.

#### Availability
Availability refers to the loss of availability of the impacted component itself, such as a networked service (e.g., web, database, email). Attacks that consume network bandwidth, processor cycles, or disk space all impact the availability of an impacted component.  To set the availability level of the asset, you can choose from these 4 options:

Option | Details
------ | --------
None | There's no impact to the availability within the impacted component.
Low | There's reduced performance or interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker doesn't have the ability to completely deny service to legitimate users. The resources in the impacted component are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the impacted component.
Medium | In between Low and High
High | There's a total loss of availability resulting in the attacker being able to fully deny access to resources in the impacted component. This loss is either sustained (the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has finished). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the impacted component. For example, the attacker can't disrupt existing connections, but can prevent new connections, the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks only a small amount of memory, but after repeated exploitation causes a service to become completely unavailable.
