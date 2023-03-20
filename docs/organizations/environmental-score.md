---
title: "Environmental Score"
path: "/organizations/environmental-score.html"
id: "organizations/environmental-score"
---

The environmental score customizes the [severity](severity.html) of a vulnerability to an asset specific to the program’s organization. Setting this score enables you to see how severe the vulnerability to an asset is to your organization. It’s determined by setting impact levels to these 3 metrics:
* Confidentiality
* Integrity
* Availability

<i>You can read more on these metrics in the section below on <b>Environmental Score Components</b>.</i>

To set the environmental score for an asset:
1. Go to <b>Program Settings > Program > Scope</b>.
2. Edit an existing asset to change the environmental score by selecting the degree of importance (None, Low, Medium, High) to each component.

### Effects to the CVSS v.3 Calculator on HackerOne
There are cases where the CVSS rating on HackerOne is vastly different from the CVSS calculator on [first.org](https://www.first.org/cvss/calculator/3.0). The discrepancy in severity ratings isn’t a bug!

The CVSS calculator on first.org gives 3 different scores. The different scores are the:
* Base score
* Temporal score
* Environmental score

The CVSS score on HackerOne will be different from the CVSS scores on first.org because the score on HackerOne factors in <b>BOTH the environmental score and the base score</b> of the asset, whereas the scores on first.org are all separate.

<i>For example, you may find that the severity score for an asset on HackerOne is 4.3, whereas the base score on first.org is 5.4 and the environmental score is 5.4. The score on HackerOne is different because the environmental score is calculated into the base score, whereas on first.org, the environmental score is listed separately from the base score.</i>

#### How the Calculation Works
HackerOne doesn’t randomly put the environmental score and the base score together to get a total CVSS rating. Whatever value is selected for each metric of the environmental score (confidentiality, integrity, availability), a numeric modifier is applied to that metric in the CVSS calculator. (<i>Note: The CVSS calculator also contains metrics from the environmental score.</i>)

><i>For example, when calculating your environmental score for the asset `test.com`, you set the confidentiality to be High. When either you or a hacker calculate the severity using the CVSS calculator on HackerOne, the 1.5 modifier for the Confidentiality metric is applied to the Confidentiality component in the CVSS calculator, which will give you a different score from the base score on first.org.</i>

The following table shows what modifier is applied. The same table is used for all 3 metrics. Note that choosing a metric value of Medium or not choosing any value at all will have no effect on the base score.

Metric Value | Modifier Value | Details
------------ | -------------- | --------
High | 1.5 | Loss of Confidentiality/Integrity/Availability is likely to have a catastrophic, adverse effect on the organization or individuals associated with the organization.
Medium | 1 | Loss of Confidentiality/Integrity/Availability is likely to have a serious adverse effect on the organization or individuals associated with the organization.
Low | 0.5 | Loss of Confidentiality/Integrity/Availability is likely to have only a limited adverse effect on the organization or individuals associated with the organization.
None | 0 | Loss of Confidentiality/Integrity/Availability is likely to have no adverse effect on the organization or individuals associated with organization.

### Effects to Severity
Setting an environmental score for an asset also caps the CVSS severity rating when a hacker calculates the severity for the asset in the submission report. The maximum severity a hacker can set for the asset is shown in the <b>Maximum severity</b> field.

For example: A program sets all 3 environmental score requirements to be None/Low for the asset `test.com` so that the maximum severity is set to None.

The hacker now can’t set the CVSS score for `test.com` to be Critical or High when submitting a report, even though the hacker selected all of the highest ratings on the CVSS calculator.

#### Max severity
A report can't have a severity rating higher than a scope's max severity. If the report's calculated CVSS score is higher than the scope's severity, the scope's severity will be set to the report.
* Environmental scores
    * The report's environmental scores are multiplied by the scope's environmental scores:
    none -> 0
    low -> 0.5
    medium -> 1
    high -> 1.5
    nil -> 1
    * For example, report's integrity score is high (0.56), the scope's integrity score is high (×1.5), then it will become
    0.56*1.5=0.84.
    * As you can see, when environmental scores are nil, the report's environmental scores will be multiplied by 1, so they will not be affected.
![calculation of scores](/images/environmental-score1.png)

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
