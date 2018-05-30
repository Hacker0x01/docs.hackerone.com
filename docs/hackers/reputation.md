---
title: "Reputation"
path: "/hackers/reputation.html"
id: "hackers/reputation"
---

As hackers submit vulnerability reports through the HackerOne platform, their reputation measures how likely their finding is to be immediately relevant and actionable. Reputation is based exclusively on your track record as a hacker.

There are a number of privileges that are gained by maintaining a high reputation such as, becoming eligible to receive invitations to private bug bounty programs. On the flip side, should your reputation decrease, the system will gradually reduce the number of report submissions allowed in a given time period.

It's critical to this community that security teams be afforded a high-signal environment so that they can focus on providing a quality response to hackers who submit the best reports.

### Effects of Report State on Reputation
A Hacker profile starts with a reputation of 100. Reports gain or lose reputation based on the state in which they are closed. Reputation can't decrease below 0.

Report State | Reputation
------------ | ------------
Resolved | +7 
Duplicate of a resolved report submitted prior to the report being made public | +2
The original report is resolved before the duplicate was filed | 0
Informative | 0
Not Applicable | -5
Duplicate of a resolved report submitted after the report is made public | -5
Duplicate of a N/A report | -5
Spam | -10

Duplicates of your own reports don't influence your reputation. This enables programs to close multiple reports that have the same root cause as duplicates without affecting a hacker's reputation.

You'll always have access to a detailed log of reputation history, and reputation will never be necessary to access core functionality on the platform to ensure it remains accessible to new or anonymous users.

### Effects of Bounties on Reputation
The bounty amount you receive also impacts your reputation. Different bounty amounts grant you reputation based on the standard deviation from the program's mean bounty amount. Here's the breakdown for how much reputation you can gain depending on your bounty:

Reputation | Details
---------- | --------
+50 | Known as BOUNTY_SEVERE. <br>Received when Bounty Amount ≥ mean + 1 standard deviation
+25 | Known as BOUNTY_HIGH. <br>Received when Bounty Amount > mean
+15 | Known as BOUNTY_MEDIUM. <br>Received when Bounty Amount ≥ mean - 1 standard deviation
+10 | Known as BOUNTY_LOW. <br>Received when Bounty Amount < mean - 1 standard deviation

Keep in mind that the first 10 bounties of a program will be rewarded the BOUNTY_MEDIUM reputation. After 10 bounties have been paid out, hackers will gain reputation through bounty according to the system above.
