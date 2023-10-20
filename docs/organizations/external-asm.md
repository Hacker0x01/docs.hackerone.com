---
title: "External Attack Surface Management Solution"
path: "/organizations/external-asm.html"
id: "organizations/external-asm"
---

External Attack Surface Management (EASM) is a process for continuously discovering, monitoring, and evaluating your organization’s externally facing online assets - the ‘attack surface.’ HackerOne’s EASM solution continuously monitors your attack surface for risks, high-impact vulnerabilities, and external threats.

>Note: This integration is only available to customers using the Assets Enterprise product.

### Asset Discovery
[HackerOne’s EASM](https://www.hackerone.com/product/attack-surface-management) solution discovers your organization’s external (internet-connected) assets, requiring only a brand name and domain to get started. The solution constantly monitors your organization’s attack surface for new assets.

We use a combination of open and closed sources to execute our algorithms on. Technologies and sources include but are not limited to the following:
* Certificate stores
* DNS records
* Whois information
* Shodan
* MX-records
* archive.org
* Google

The EASM solution will pull Top Level Domains (TLDs) and Fully Qualified Domain Names (FQDNs). For example, a TLD would be hackerone.com and an FQDN would be docs.hackerone.com.

### Asset Enrichment
HackerOne’s EASM solution enriches each asset that your organization owns with Technology, Site Status, and Risk Rating as tags. Technology captures what technology the asset uses, Site Status is based on the HTTP response from the site, and the Risk Rating is a letter grade of the most severe risk on the asset that the scanner identifies.

The asset enrichment information is presented in the asset overlay sheet, a modal that opens when you select the asset from the Asset Inventory.

![Asset Enrichment menu](/images/external-asm-1.png)

#### Technology Tags
The solution has a database of technology fingerprints that can be added to the asset as a tag. Understanding the technology that a particular asset uses helps understand which vulnerabilities will affect that asset. Technology tags are added based on HTTP headers, HTTP content, and the URL of the asset.

#### Site Status Tag
The various site status and their meanings are listed below.

Site Status | Definition
----------- | -------------
Inactive | No HTTP response from server
Redirect | HTTP status codes 301, 302, 303 or 307X
Broken | HTTP status codes 400, 404, 500, 501, 503
Active | Any response with an HTTP status code other than those listed under Redirect or Broken
Awaiting Scan | The EASM tool checks the site status 3 times before marking it as a status above. This status means that the tool hasn’t received 3 responses yet

### Asset Risk Rating
HackerOne’s External Attack Surface Management (EASM) solution inspects each asset for risk by looking for misconfigurations and outdated software. Each asset gets a risk score on a scale from A to F. A represents the lowest risk (0), and F represents the highest risk (80-100). The list below provides a breakdown of how risk is evaluated and assigned. The overall risk rating of an asset is based on the highest risk found on the asset.

One of the solution's key features is the ability to detect vulnerable software by analyzing the technology and host header information. If the solution detects outdated software that has publicly known CVEs, it will create a risk for this based on the CVSS score of the CVE. For example, a CVE with a CVSS score of 8.9 will result in a score of F, whereas a CVE with a CVSS score of 5.6 will result in a score of D.

### Common Vulnerabilities and Exposures (CVE) Intelligence
>Note: CVE information is available for all customers. For more information, please visit the [CVE & CWE Discovery page.](/organizations/cve-cwe-discovery.html)

HackerOne’s EASM solution identifies CVEs on all assets that comprise your attack surface and presents these as Risks on the technology stack of your assets. To make this information more actionable, the platform also presents useful context on the CVE identified in the Risk. 

When you click a CVE identified in a risk, the HackerOne platform shows a description of the vulnerability, additional metadata like Common Weaknesses Enumeration (CWE) classification, and Common Vulnerability Scoring System (CVSS) Score.

Additionally, the platform shows the real-world exploitability of the CVE based on HackerOne platform data. This data is based on tens of thousands of reports from hackers across thousands of customers and represents how often a particular CVE has actually been found in the wild. This additional context helps your team prioritize fixes for vulnerabilities. 

The Instances tab shows the number of unique and valid hacker reports in the past 12 weeks based on actual submissions to all customer programs on HackerOne. Each valid hacker report means that a hacker provided a proof of concept (PoC) on the vulnerability and it was reviewed and accepted by the customer. You can see examples of publicly disclosed hacker reports on the Hacktivity page. Tracking the timeline of trends shows you how aggressively hackers can share the exploit information. 

These insights provide you insights into the real-world exploitability of a vulnerability beyond what the CVSS base score for a vulnerability indicates. For example, some CVEs have a CVSS base score of 6.5 due to their expected low-level impact in terms of confidentiality, integrity, or availability of the target. But it may turn out that hackers find this vulnerability very easy to exploit and in specific customer situations it may have a high impact. Often the base score is insufficient to understand the real-world impact, especially the environmental and temporal aspects, i.e. things that change over time as a result of activities conducted by both software vendors and hackers. 

![CVE display](/images/external-asm-2.png)

Finally, you can also see the severity distribution and remediation timeline across all reported instances of this vulnerability across HackerOne’s customers. Understanding severity distribution and remediation timelines will further help your team prioritize which vulnerabilities are the most critical to fix immediately.

![CVE Severity Distribution](/images/external-asm-3.png)

![CVE Remediation Distribution](/images/external-asm-4.png)

### Risk Rating Methodology

![Risk Rating Chart](/images/external-asm-5.png)

### Domain Name System (DNS) Information
HackerOne’s External Attack Surface Management solution provides DNS and IP information directly in the platform as part of the asset enrichment. The DNS tab in the Asset overlay sheet pulls helpful context for all domains, including but not limited to:
* IPV4 address
* IPV6 address
* DNS records
* WHOIS information

![Asset Enrichment example](/images/external-asm-6.png)
