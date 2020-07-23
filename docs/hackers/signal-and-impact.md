---
title: "Signal and Impact"
path: "/hackers/signal-and-impact.html"
id: "hackers/signal-and-impact"
---

Signal provides a means of identifying hackers who have had consistently valid reports, while Impact highlights those with the greatest severity.  The higher a hacker's signal is, the higher the likelihood a submitted report will be reputable. The higher a hacker's impact is, the higher the likelihood the submitted report will have a significant severity level.

HackerOne displays a hacker's percentile rank for their Signal and Impact relative to other hackers on the platform. Understanding both Signal and Impact will help you understand your performance relative to other hackers.

![how signal and impact look on a HackerOne profile](./images/sig-impact-rep-stats.png)

### Signal and Impact Facts
Question  | Signal | Impact
-- | ------ | -------
What is it? | Average [reputation](/hackers/reputation.html) per report. As reputation is gained or lost each time a report is closed, Signal is an aggregate representation of report validity. It corresponds to reputation changes for triage states ranging from "Spam" to "Resolved." <br><br>Your signal from the last 365 days affects your [signal requirements](/hackers/restricted-from-submissions.html#signal-requirements) for a program.  | Average reputation per bounty. As reputation is gained based on the relative size of the awarded bounty, Impact is an aggregate representation of report severity. It corresponds to reputation gains calculated by bounty levels awarded.
What's the measured scale? | -10 to 7 | 0 to 50
Are there any caveats to calculations? | Only calculated when there are more than 3 closed reports.<br><br>These reports won't affect your Signal:<li>Self-closed <li>Duplicate <li>Informative | Only calculated when there are more than 3 bounties, and is only calculated for reports submitted to programs that offer bounties.<br><br>These reports won't affect your Impact: <li>Self-closed <li>Duplicate

### Calculation Example
![signal and impact calculation](./images/rep_signal_impact_chart.png)

Alice and Bob have the exact same amount of Reputation (141 points). But Alice has a higher Signal (4.6 > 2.09), which indicates having a better track record of submitting valid reports. Alice, also has higher Impact (15.83 > 9.5) and therefore, a higher chance of submitting an important report.

This is valuable information for both of them. Alice will see that she is doing quite well with her current trajectory, while Bob will see that others are more accurate about their reports and can adjust his reporting processes accordingly.
