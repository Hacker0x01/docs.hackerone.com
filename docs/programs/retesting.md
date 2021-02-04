---
title: "Retesting"
path: "/programs/retesting.html"
id: "programs/retesting"
---

As programs receive vulnerability reports and work on deploying fixes, they need proof that their vulnerabilities have actually been fixed. Retesting is a good way to secure the protection of your asset’s data by asking hackers to verify whether a fix has been made. With retesting, you can elect to have hackers retest your vulnerabilities to verify the fixes.

> **Note:** For response programs using HackerOne's triage services, the triage team will retest the vulnerabilities to verify the fixes instead of hackers.  

### How it Works  
To have hackers retest a vulnerability:
1. Choose the report in your inbox that you want to assign a hacker to retest.
2. Change the action picker to **Request retest**.

![choosing request a retest](./images/retesting-action-picker.png)

3. Click **Confirm retest**.

The original hacker that submitted the vulnerability will be invited to take part in the retest.

After accepting the retest, the hacker will have 24 hours to confirm if the vulnerability has been properly fixed. If the hacker doesn’t finish the retest within 24 hours, their retest opportunity will expire and a different hacker will be able to claim the retest.

The hacker will submit their findings in the **Retest findings** form at the bottom of the report. The form consists of these fields:
* Are you able to reproduce the vulnerability report?
* Please provide us with a short summary of how you retested the vulnerability and upload any attachments of your validations.

 ![retesting form](./images/retesting-form.png)

 After the hacker submits their findings, you’ll be prompted to either **Approve and resolve** or **Reject** the retest.

![retesting approval form](./images/retesting-approval-form.png)

If you choose to:

Action | Scenario | Details
------ | -------- | --------
**Approve and resolve** the retest | The hacker says the vulnerability is fixed. | The report will close and will be marked as *Resolved*. The hacker will also be awarded a bounty.
**Reject** the retest | The hacker says the vulnerability is fixed. | You’ll need to provide a summary to the hacker explaining why you’ve rejected the retest. You can choose to request another retest for the report, by going back to step 1. <br><br>The status of the report will be changed to *Triaged*.
**Approve** the retest | The hacker says the vulnerability is not fixed. | The report will move back to *Triaged* and will stay open for the team to implement a fix. The hacker will be awarded a bounty.
**Reject** the retest | The hacker says the vulnerability is not fixed. | You’ll need to provide a summary to the hacker explaining why you’ve rejected the retest. You can choose to request another retest for the report, by going back to step 1. <br><br>The status of the report will be changed to *Triaged*.

If the original hacker declines to take part in the retest and your program is:

Program Type | Details
------------ | --------
Private | Another hacker that's part of your program will have the opportunity to claim and perform the retest.
Public | Any hacker with at least 1 *Resolved* or *Triaged* report will be able to claim the retest.

### Payments
Hackers will be awarded a $50 bounty for each successful retest. Awards for retests will be paid from your bounty pool. If you're using the consumption tier to pay for your bounties, payments for retests will count towards the tier.   
