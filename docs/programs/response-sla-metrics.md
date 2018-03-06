---
title: "Response SLA Metrics"
path: "/programs/response-sla-metrics"
---

HackerOne tracks and enables you to define SLA targets for these 4 response efficiency metrics, or also known as timers:

Response Efficiency Metric | Details
-------------------------- | -------------
Time to first response | The elapsed time from report creation to the first public activity on a report. The first public activity includes adding a public comment, changing the report state, or changing the report severity.
Time to triage | The elapsed time from when a report is created to when a report is changed to a triaged state. A report can skip the triaged state and move directly to a closed state (e.g. resolved). In this instance, the time to triage will be the elapsed time between report creation and the time the report is resolved.
Time to bounty | *(Bounty programs only)* The elapsed time from when a report is triaged to when a bounty is paid. Only reports that are eligible for a bounty will be tracked as part of this metric. The time to bounty timer will run until the report is either marked as ineligible or closed as a state where it’s not normal to award a bounty (e.g. spam). 
Time to resolution | The elapsed time between report triaged and report closed. These  five closed report states will stop the timer: resolved, informative, not applicable, duplicate, and spam.

All the response efficiency metrics are tracked and reported in business days. Business days are defined to be:
* Monday - Friday
* 24 hours
* Including holidays (hackers never sleep!)

### Pausing Metrics
HackerOne will automatically pause these metrics so that your team isn’t disadvantaged while waiting on a response from a hacker. When you change the report state to *Needs more info*, the timer will pause while waiting on a response from a hacker. When a hacker replies and comments on the report the timer will restart.

### Targets
Here are response SLA definitions and best practices to keep in mind when configuring your program's target response SLAs:

Term | Detail
----- | ------
Recommended | The default setting for all new programs. HackerOne's suggested setting for best practice. 
Limit | The maximum acceptable response time as defined by HackerOne. For programs that consistently fail to meet HackerOne’s limits, temporary pausing of new report submissions may be suggested.
Target | The target responsiveness set by an individual program. Reports are individually denoted if the SLA "missed" or "failed." Program targets can’t be set to exceed the limit.

### Healthy Program Metrics
This table is an example of what a healthy program looks like:

Metric | Recommended | Limit | Target
-------- | ----------- | ----- | -------
Time to first response | 1 day | 5 days | Customized
Time to triage | 2 days | 10 days | Customized
Time to bounty | 1 day (after triage) | N/A | Customized
Time to resolution | 30 days | N/A | Customized

*Note: All times above are in business days

### FAQs

Question | Answer
-------- | --------
Which actions trigger first response? | First response is triggered by any public action on a report, such as, adding a comment (publicly), changing the report state, or changing the severity. Automated actions from Hackbot or an automated trigger are not recognized. Only actions or comments from a member of the team will count as a first response.
How are the report timers affected if a report is closed then reopened? | The timers are not affected as we don’t account  for reopened reports. Once a report is closed, its’ response efficiency metrics won’t  change.
How are the report timers affected if a report is filtered first through human augmented signal? | If a report is routed through human augmented signal (reports flagged with a high noise probability are reviewed by HackerOne analysts before hitting your inbox) the timer is not paused or modified in any way. This means that the time spent in review by HackerOne analysts will be tracked in the timer.
