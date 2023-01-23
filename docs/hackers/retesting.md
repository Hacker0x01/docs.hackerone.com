---
title: "Retesting"
path: "/hackers/retesting.html"
id: "hackers/retesting"
---

As programs receive vulnerability reports and work on deploying fixes, they need proof that their vulnerabilities have actually been fixed. Retesting enables programs to ask hackers to verify whether a vulnerability has been fixed in order to secure the protection of their data. If you submit a valid vulnerability report, programs can elect to invite you to retest the vulnerability to verify the fixes.

Upon successful completion of a retest, you’ll receive a bounty as well as +2 reputation.

### How it Works

If you’ve submitted a valid vulnerability for a report, the program can request to have you retest the vulnerability to make sure it’s been fixed.

If you’re invited to retest the vulnerability, you’ll receive a notification in your email to retest the report.

To participate in the retest:

1. Click **View retest** in your notification email.
2. Check to see that the vulnerability has been fixed.
3. Submit your findings in the **Retest findings** form at the bottom of the report. The form consists of these fields:
     * Are you able to reproduce the vulnerability report?
     * Please provide us with a short summary of how you retested the vulnerability and upload any attachments of your validations.

4. Click **Submit**.

The program can either approve or reject your results. If they choose to:

Action | Scenario | Details
------ | -------- | -------
**Approve and resolve** the retest | You say the vulnerability is fixed. | You’ll be awarded a bounty. <br><br>The report will close and will be marked as *Resolved*.
**Reject** the retest | You say the vulnerability is fixed. | The program will provide you with a summary explaining why they’ve rejected the retest. They can choose to request another retest for the vulnerability. <br><br>The status of the report will be changed to *Triaged*.
**Approve** the retest | You say the vulnerability is not fixed. | You’ll be awarded a bounty. <br><br>The report will move back to *Triaged* and will stay open for the program to implement a fix.
**Reject** the retest | You say the vulnerability is not fixed. | The program will provide you with a summary explaining why they’ve rejected the retest. The program can choose to request another retest for the report. <br><br>The status of the report will be changed to *Triaged*.

### Claiming Retest Opportunities
If the program is:

Program Type | Details
------------ | --------
Private | If you’re part of the private program offering retests, you can find and claim the retesting opportunities under **Hacker Dashboard > Retesting**.
Public | You’ll be able to claim retests for programs where you submitted at least 1 valid vulnerability (the report is resolved or triaged) under **Hacker Dashboard > Retesting**.

To claim a retest:
1. Go to **Hacker Dashboard > Retesting**.
2. Click **Claim retest** for the retest you’re interested in. Keep in mind that you can only claim and work on 1 retest at a time. 
3. View steps 3 and 4 in the section above to complete the retest.

### Managing and Viewing Retests
You can keep track of all of your retesting work under Hacker Dashboard > Retesting. You’ll be able to:
* Claim open retests
* See which retest you need to complete and the time you have left to complete it
* View all of your completed retests
