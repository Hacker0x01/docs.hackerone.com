---
title: "Report States"
path: "/hackers/report-states.html"
id: "hackers/report-states"
---
All reports are either Open or Closed and can be changed to a variety of different states.

### Open Report States

When reports haven't been acted on or resolved, they are in an open state.
These are the Open report states:

State | Detail
----- | ------
New | The report is in an unread state.
Pending Program Review | *(Currently in beta)* The report has been reviewed by HackerOne triage and is now pending review from the program. This only shows for programs that use HackerOne's triage services.
Triaged | The report is evaluated but hasn't been resolved. It is in the state of being fixed.
Retesting | The vulnerability is in the process of being [retested](retesting.html).
Needs More Info | More information is needed from the hacker about the vulnerability. Reports that are in the *Needs More Info* state for more than 30 days will automatically close and won't have a negative impact on the hacker's reputation.

There are impacts to hacker reputation when the program changes the report state. Reputation isn't impacted when the hacker changes the report state themselves. They can self-close a report until it's marked as triaged.

### Closed Report States

When a report is complete, and no further dialogue with the team, triager, or hacker is needed, it's changed into a closed state. Closed states change a hacker's reputation.  

These are the Closed report states:

State | Detail | Change to Hacker Reputation
----- | ------ | ----------------------------
Resolved | The report is valid and no further dialogue with the hacker is needed. | Increase +7
Informative | The report contains useful information but doesn't warrant immediate action or a fix. Examples of informative reports include:<ul><li>Notifications of broken links</li><li>The issue is not consistently reproducible</li><li>You report a subdomain takeover you encounter but did not execute it yourself</li></ul>A program can consider providing an alternative risk assessment or other mitigating factors. Public disclosure is available with mutual agreement. | No change
Duplicate | This issue has already been reported. Programs can build trust by attributing the issue to its original discoverer and linking it to a previous report or including other details about its discovery. Public disclosure isn't available for this state. <br><br>*Note: If a hacker files a duplicate of a public report, their reputation will go down.* | If the hacker submits the original report:<br>*Resolved*: +2<br><br><br>*Not Applicable*: -5<br><br>*Informative*: 0
Not Applicable | The report doesn't contain a valid issue and has no security implications. Security teams should describe why the report was invalid, so the hacker can improve their hacking skills. | Decrease -5
Spam | The report is invalid because a legitimate security vulnerability isn't described. The report may be incomprehensible, abusive and/or exhibit harassment. Reports that sell any sort of product or service will also be marked as Spam.| Decrease -10
