---
title: "Response Target Metrics"
path: "/programs/response-target-metrics.html"
id: "programs/response-target-metrics"
---

HackerOne tracks and enables you to define targets for these 4 response efficiency metrics:

Response Efficiency Metric | Details
---- | -------
Time to first response | The elapsed time from when the report is submitted, to the first public activity on a report. The first public activity includes adding a public comment, changing the report state, or changing the report severity.
Time to triage | The elapsed time from when a report is submitted to when a report is changed to a triaged state. A report can skip the triaged state and move directly to a closed state (e.g. resolved).
Time to bounty | *(Bounty programs only)* The elapsed time from when a report is triaged to when a bounty is paid. Only reports that are eligible for a bounty will be tracked as part of this metric. The time to bounty timer will run until the report is either marked as ineligible or closed as a state where it’s not normal to award a bounty (e.g. spam).<br><br><i>Awarding swag in lieu of a bounty won't stop the timer. If you only award a report with swag, you must mark the report as ineligible for bounty to stop the timer</i>.
Time to resolution | The elapsed time from when a report is submitted to when a report is closed. These five closed report states will stop the timer: <i>resolved, informative, not applicable, duplicate,</i> and <i>spam</i>. For programs using [human-augmented signal](human-augmented-signal.html), the resolution timer starts when the report has been approved by HackerOne Security Analysts and escalated to the customer's inbox.  

All response target times are tracked and reported in business days. Business days are defined to be:
* Monday - Friday
* 24 hours
* Including holidays (hackers never sleep!)

### Response Standards and Targets

Some response target definitions to keep in mind when configuring your program's response targets are:

Term | Detail
----- | ------
Response Standard | The maximum acceptable response times as defined by HackerOne. These standards only apply for time to first response and time to triage. HackerOne may temporarily pause new report submissions for programs with reports that don't meet the response standards. When these programs address the reports violating the response standards, report submissions will automatically resume.  
Target | Goal response times set by an individual program. Performance against targets are displayed internally in the Inbox and Program Health dashboard. Program targets can't be set to exceed the response standards.
Recommended | The default setting for all new programs and HackerOne's suggested setting for best practice.

### Healthy Response Target Times
HackerOne recommends your program to follow the following response target times to ensure a healthy program:

Response Efficiency Metric | Recommended | Response Standard | Target
-------- | ----------- | ----------------- | -------
Time to first response | 1 day | 5 days | Customized
Time to triage | 2 days | 10 days | Customized
Time to bounty | 1 day (after triage) | N/A | Customized
Time to resolution | 30 days | N/A | Customized <br>Targets can be broken up and set by severity</br>

><i>Note: All times above are in business days</i>

### Pausing Timers
HackerOne will automatically pause these timers when you're waiting on a response from a hacker so that your team isn’t disadvantaged during the wait period. When you change the report state to *Needs more info*, the timer will pause while waiting on a response from a hacker. The timer will start again when a hacker replies and comments on the report.

### FAQs

Question | Answer
-------- | --------
Which actions trigger first response? | First response is triggered by any public action on a report, such as, adding a comment (publicly), changing the report state, or changing the severity. Automated actions from Hackbot or an automated trigger are not recognized, except for automated responses using API tokens. Only actions or comments from a member of the team will count as a first response.
How are the report timers affected if a report is closed then reopened? | The timers are not affected as we don’t account for reopened reports. Once a report is closed, its response efficiency metrics won’t  change.
How are the report timers affected if a report is filtered first through human augmented signal? | If a report is routed through human augmented signal (reports flagged with a high noise probability are reviewed by HackerOne analysts before hitting your inbox) the timer is not paused or modified in any way. This means that the time spent in review by HackerOne analysts will be tracked in the timer.
