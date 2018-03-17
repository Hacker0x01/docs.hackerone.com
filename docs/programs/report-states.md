---
title: "Report States"
path: "/programs/report-states"
---
All reports are either Open or Closed and can be changed to a variety of different states. 

### Open Report States
These are the Open report states:

State | Detail
----- | ------
Pre-submission | This report state is only applicable when Human-Augmented Signal is enabled for the program. The report starts in the pre-submission state when it has been flagged as potentially invalid. A HackerOne security analyst will first review the report before it's sent to the program. 
New | The report is in an unread state. 
Triaged | The report is evaluated but hasn't been resolved. It is in the state of being fixed. 
Needs More Info | More information is needed from the hacker about the vulnerability. Reports that are in the *Needs More Info* state for more than 30 days will automatically close and won't have a negative impact on the hacker's reputation. 

There are impacts to hacker reputation when the program changes the report state. Reputation isn't impacted when the hacker changes the report state themselves. They can self-close a report until it's marked as triaged. 

### Closed Report States

When a report is complete, and no further dialogue with the team, triager, or hacker is needed, it's changed into a closed state. Closed states change a hacker's reputation.  

These are the Closed report states:

State | Detail | Change to Hacker Reputation
----- | ------ | ----------------------------
Resolved | The report is valid and no further dialoge is with the hacker is needed. | Increase +7
Informative | The report contains useful information but doesn't warrant an immediate action or a fix. Your program can consider providing an alternative risk assessment or other mitigating factors, and public disclosure is available with mutual agreement. | No change
Duplicate | This issue has already been reported. Programs can build trust by attributing the issue to its original discovered and linking it to a previous report or include other details about its' discovery. Public disclosure is not available for this state. <br>*Note: If a hacker files a duplicate or public report, their reputation will go down.* | If the hacker submits the original report: <br>Resolved: +2 <br>Not Applicable: -5 <br>Informative: 0
