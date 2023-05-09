---
title: "Submit Report Form"
path: "/organizations/submit-report-form.html"
id: "organizations/submit-report-form"
---

Hackers submit reports to your security team that contain detailed information about the security issues that the hacker has identified.

One of the most important elements of running a successful bug bounty campaign is ensuring you get high quality reports where hackers are providing you with all the information you need to verify and validate the vulnerability. You can customize the form where hackers submit their vulnerability reports.

### Customizing the Report Submissions Form Page

To customize your report submissions form page:

1. Go to **Engagements > Settings > Program > Submit Report Form**.
2. Toggle **Yes** or **No** for these options:

Option | Details
------ | -------
Accepting new report submissions | Set to **Yes** if you'd like to receive new report submissions. <br><br>Set to **No** to stop receiving new reports. A good time to stop receiving new reports is if you're behind with triaging and responding to the current reports you've received. You can pause in receiving new reports to catch up with your current reports.
Accepting critical report submissions even when not accepting new reports | Even if you're not accepting new report submissions, hackers can still submit new reports if they find critical vulnerabilities in your program. Set to **Yes** if you're currently paused in receiving new report submissions but still want to receive critical reports.

3. Edit these sections:

Section | Details
------- | --------
Introduction Text | This text is shown at the top of the report submissions page for hackers. You can: <br><ul><li>highlight important information from your policy and bounty eligibility</li><li>specify attributes of a good report</li><li>address frequently asked questions</li><li>provide any additional guidance for hackers</li></ul>
Report Template | Configure the Markdown-based report template with the information you want hackers to provide. The template will be pre-populated with your requested fields when a hacker submits a new report. The more details you provide in the template, the more you ensure that hackers are providing you with all the information you need to verify and validate the report. <br> *Note: The template must be written in Markdown*.
Impact Template | Configure the Markdown-based impact template with the information you want hackers to provide. The template will be pre-populated with your requested fields when a hacker submits a new report. This guides hackers to describe why the issue is important in a format that helps you best prioritize response and remediation.<br> *Note: The template must be written in Markdown*.
Weakness Configuration | A weakness is a type of mistake in software that introduces vulnerabilities within that software. All weaknesses are shown by default and are organized in clusters (a set of weaknesses). To edit vulnerability display preferences, click **Edit** and you can choose from these options: <br><ul><li>Show: Reports can be submitted. You can add a contextual message if you have extra instructions or information pertaining to the weakness. Hackers can see the extra instructions on the submission page after selection.</li><li>Hide: The weakness isn't shown on the submission page and is not available to be selected by hackers.</li><li>Disable: The weakness will be displayed, but reports with this weakness can't be submitted. This option is often used if there is a common weakness type you've decided to put out of scope and you wish to attach an explanation of why this weakness type is out of scope. </li></ul>

4. Click **Update introduction and template**.
