---
title: "Signal and Impact"
path: "/hackers/signal-and-impact"
---

Signal is the average Reputation per report. Reputation is gained or lost each time a report is closed, making Signal an aggregate representation of report validity. Self closed reports and duplicate reports are not included in Signal calculations.

Impact is the average Reputation per bounty. Reputation is gained based on the relative size of the awarded bounty, making Impact an aggregate representation of report severity.

Signal provides a means of identifying hackers who've had consistently valid reports while Impact highlights those with the greatest severity. Both signal and Impact will help you benefit through an improved understanding of your performance relative to your peers.

### Signal and Impact Facts
* Signal and Impact are only calculated when there are more than 3 closed reports or 3 bounties respectively.
* Signal is measured on a scale from -10 to 7, corresponding to Reputation changes for triage states ranging from "Spam" to "Resolved."
* Self closed and duplicate reports don't impact your Signal. 
* Impact is measured on a scale from 0 to 50, and it corresponds to Reputation gains calculated by bounty levels awarded.
* Impact is only calculated for reports submitted to programs that offer bounties.
* HackerOne displays a hacker's percentile rank for their Signal and Impact relative to other hackers on the platform.

### Calculation Example
![signal-impact-1](./images/signal-impact-1.png)

Alice and Bob have the exact same amount of Reputation (241 points). But Alice has a higher Signal (4.12 > 1.35), which indicates having a better track record of submitting valid reports. Alice also has a higher Impact (15.83 > 9.50) and therefore, a higher chance of submitting an important report.

This is valuable information for both of them. Alice will see that she is doing quite well with her current trajectory, while Bob will see that others are more accurate about their reports and can adjust his reporting processes accordingly.
