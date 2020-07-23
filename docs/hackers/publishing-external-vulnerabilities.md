---
title: "Publishing External Vulnerabilities"
path: "/hackers/publishing-external-vulnerabilities.html"
id: "hackers/publishing-external-vulnerabilities"
---

HackerOne provides the ability for hackers to publish their findings from external sources, not just HackerOne programs. As sharing knowledge is key toward advancing our collective ability to improve security, sharing what you’ve learned and discovered is one small way to give back to the community.

### Requirements for Publishing an External Vulnerability
In order to publish a report, all these requirements must be met:

Requirement | Details
----------- | --------
The posting must describe a vulnerability. | A vulnerability is a weakness of software, hardware, or online service that can be exploited to cause harm.
You (the publisher) must be the finder of the vulnerability. | You can’t post other hackers’ findings under your own name - that’s their work!
The vulnerability must have already been responsibly disclosed to the security team of the associated organization. | You must have established communication with the security team responsible for the product or service, and received agreement from the security team that you may publish the vulnerability after resolution.
The vulnerability must be resolved. | The security team must have confirmed with you that they’ve resolved the vulnerability and provided updates and patches to their users (if applicable). We don’t support nor permit you to post about 0-days or exploits that may be used to harm others.
The associated organization has given you consent to publicly share the vulnerability. | Hacktivity is a channel for coordinated disclosures. Full disclosure has its time and place, and this isn’t the place for that. <br><br>The organization must consent to having their information for this particular vulnerability posted publicly.
You adhere to our Code of Conduct and other HackerOne policies. | Find our hacker’s code of conduct at: https://www.hackerone.com/disclosure-guidelines <br><br>Find our Copyright and IP Policy at: https://www.hackerone.com/dmca

By publishing vulnerabilities to HackerOne, you acknowledge that you’ve met all of the above requirements.  

### Publishing a Vulnerability on HackerOne
Once you’ve met all of the requirements above, you’re ready to publish your vulnerability. To publish an external vulnerability on HackerOne:
1. Go to [Publish a Vulnerability](https://hackerone.com/hacktivity/publish).
2. Enter the program you reported the vulnerability to and select it from the populated list. <i>Note: This field searches all known disclosure programs from the [Directory](https://hackerone.com/directory).</i><ul><li>If the program doesn't populate in the list, manually enter the entire program name.</li><li>To publish without disclosing the organization, enter `redact` to select the Redacted program.</li></ul>
3. Fill out the rest of the <b>Publish a Vulnerability</b> report form.
4. Click <b>Publish Vulnerability</b>.
5. <i>(Optional)</i> Add a severity rating for the vulnerability.

The report will publish onto the <b>New</b> page of Hacktivity and have a <b>Published</b> icon on it to distinguish it from other reports. Users can upvote your report in Hacktivity, and the report will also display on your hacker profile.

><i>Note: HackerOne reserves the right to remove any posted content if any party informs us that the content didn’t meet our requirements for publishing.</i>

### Publishing Without Disclosing the Organization
It may take some time for external organizations to get back to you about publishing the vulnerability you found, or they may not get back to you at all. In these cases, we enable you to publish your vulnerability to Hacktivity without naming the organization.

To publish without disclosing the organization, when selecting the program in step 3 of the section above, type `redact` to select the Redacted program.

All mentions of the organization and assets will be redacted when it’s published onto the <b>New</b> page of Hacktivity.

<br><i>Publishing currently doesn’t influence [Reputation](/hackers/reputation.html) or your eligibility for any bounties.</i>
