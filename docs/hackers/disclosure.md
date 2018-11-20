---
title: "Disclosure"
path: "/hackers/disclosure.html"
id: "hackers/disclosure"
---

Disclosure enables programs to be transparent about the security vulnerabilities found for their program. HackerOne's disclosure process balances transparency with control over what information is shared.  

Programs can choose from 3 disclosure settings:

Option | Detail
------ | -------
Disclosure by Default | You or the security team can request disclosure for any closed report in the program. If the admin of the program agrees to disclosure, the contents of the report will be made public within 30 days.<br> <br>*This is the default setting for all verified programs*.
Disclosure requiring Mutual Agreement | You can request disclosure for any closed report in the program. If the program security team agrees to disclosure, the contents of the report will be made public. If the security team doesn't take any action, the contents of the report will remain private. <br>*The program must request to opt-in to this option.*
Disclosure Disabled | Disclosure isn't allowed for any report.

### Requesting Disclosure
Both you and program members can request for disclosure. To request for disclosure:
1. Go to the report you want to disclose.
2. Make sure the report is closed.
3. Select **Request disclosure** in the action picker at the bottom of the report.

![Request disclosure](./images/disclosure-1.png)

4. Select whether you want to disclose the **Full** report or a **Limited** version.

Option | Details
------ | -------
Full | Upon disclosure, the full contents of the report are visible including the:<ul><li>Vulnerability information</li><li>Summary</li><li>Timeline (this includes comments and attachments)</li></ul>*Note: Internal comments are hidden.*  
Limited | Only the summary and timeline of the activity are visible. All comments and attachments are hidden. Limited disclosure allows for greater control over sensitive or extraneous information.

5. *(Optional)* Enter a comment to describe your reasons for disclosure.
6. Click **Post**.    

After public disclosure has been requested, the admin of the of the program can choose to publicly disclose the report. They can select **Disclose** to disclose the report and also change the disclosure options to Full or Limited.

![disclose report](./images/disclosure-2.png)

When publishing reports, the security team can choose to disclose the report in full or limit the information published. The default is to display all the communication between the hacker and the security team from first report to resolution.

### Disclosure for Private Programs (beta)
Private programs can also enable you to disclose a report to other hackers within the program. Upon disclosure, contents of the report will only be visible to other hackers in the private program. This enables you and other hackers to share your vulnerability findings with other hackers in the program so that other hacker can be aware of what vulnerabilities have been found for that program.

You can request for disclosure in your private program following the same steps in the Requesting Disclosure section above.

When choosing to disclose the Full or Limited report, the options will only be specific to disclosing within your private program:

Option | Details
------ | -------
Full | Upon disclosure, the contents of the report will be visible to other hackers in the private program.
Limited | Only the summary and timeline of activity will be visible to other hackers in the private program.

> Disclosure for private programs is currently in the beta phase. You'll be able to disclose reports for private programs if the program has opted-in to this feature.

For more information, please read the full [HackerOne Disclosure Guidelines](https://hackerone.com/disclosure-guidelines). If disclosure was accidentally initiated or you have concerns about this process, please [submit a support request](https://support.hackerone.com/hc/en-us/requests/new).
