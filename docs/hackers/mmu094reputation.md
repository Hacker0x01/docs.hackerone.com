---
title: "Reputation"
path: "/hackers/reputation.html"
id: "hackers/reputation"
---

As hackers submit vulnerability reports through the HackerOne platform, their reputation measures how likely their finding is to be immediately relevant and actionable. Reputation is points gained or lost based on report validity. It's weighted based on the size of the bounty and the criticality of the reported vulnerability. Reputation is based exclusively on your track record as a hacker.

There are a number of privileges that are gained by maintaining a high reputation, such as becoming eligible to receive invitations to private bug bounty programs. On the flip side, should your reputation decrease, the system will gradually reduce the number of report submissions allowed in a given time period.

It's critical to this community that security teams be afforded a high-signal environment so that they can focus on providing a quality response to hackers who submit the best reports.

> **Note:** Reports with Disclosure Assistance have no effect to reputation.

### Effects of Report State on Reputation
A Hacker profile starts with a reputation of 100. Reports gain or lose reputation based on the state in which they are closed. Reputation can't decrease below 0.

Report State | Reputation
------------ | ------------
Triaged or Resolved | +7 <br><br><i>The +7 reputation will be deducted if the report is closed with a state other than Resolved or if the bug is reopened.</i></b>
Duplicate of a resolved report submitted prior to the report being made public | +2
The original report is resolved before the duplicate was filed | 0
Informative | 0
Self-closed N/A report | 0
Duplicate of a self-closed N/A report | 0
Not Applicable | -5
Duplicate of a resolved report submitted after the report is made public | -5
Duplicate of a N/A report | -5
Spam | -10

You'll always have access to a detailed log of your reputation history, and reputation will never be necessary to access core functionality on the platform.

#### Duplicate Reports
Duplicates of your own reports don't influence your reputation. This enables programs to close multiple reports that have the same root cause as duplicates without affecting a hacker's reputation.

> **Note:** Here's a common situation to keep in mind when calculating your reputation:
Report #123 is triaged and the hacker gains +7 reputation. You submit report #321 which is also triaged and you gain +7 reputation. Your report #321 is closed as a duplicate of report #123. While report #123 is still open, you still get to keep the +7 reputation. But, once report #123 is closed, your +7 reputation will be deducted.  

**There are situations where duplicates can be "chained" together.** For example: report #911 is a duplicate of report #888 which is a duplicate of report #311 which was marked as N/A. In this example, report #911 would get -5 reputation because it was the duplicate of a duplicate N/A report. However, we end the chain at the third duplicate. This means that any other duplicate reports that are added after the third report in the chain will automatically get 0 reputation no matter the state of the report for which it's a duplicate of.</i>

### Effects of Bounties on Reputation
The bounty amount you receive also impacts your reputation. Different bounty amounts grant you reputation based on the standard deviation from the program's mean bounty amount. Here's the breakdown for how much reputation you can gain depending on your bounty:

Reputation | Details
---------- | --------
+50 | Known as BOUNTY_SEVERE. <br>Received when Bounty Amount ≥ mean + 1 standard deviation
+25 | Known as BOUNTY_HIGH. <br>Received when Bounty Amount > mean
+15 | Known as BOUNTY_MEDIUM. <br>Received when Bounty Amount ≥ mean - 1 standard deviation
+10 | Known as BOUNTY_LOW. <br>Received when Bounty Amount < mean - 1 standard deviation

Keep in mind that the first 10 bounties of a program will be rewarded the BOUNTY_LOW reputation. After 10 bounties have been paid out, a hacker’s reputation will be recalculated based on the standard deviation of the program’s mean bounty.

><i><b>Note:</b> We don't award reputation when rewarded with a bonus and not a bounty.</i>

### Effects of Collaboration on Reputation
* Collaborators will receive full reputation for report state changes (e.g. validity of the report). Reference Effects of Report State on Reputation above.
* For bounties, collaborators will receive appropriate reputation based on their share of the bounty. Reference Effects of Bounties on Reputation above.

### Effects of Retesting on Reputation
If you participate in [retesting](retesting.html) a report, you'll receive +2 to your reputation.
