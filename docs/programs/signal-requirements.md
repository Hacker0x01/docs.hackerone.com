---
title: "Signal Requirements"
path: "/programs/signal-requirements.html"
id: "programs/signal-requirements"
---

Signal Requirements enable a program to set a [signal](/hackers/signal-and-impact.html) threshold that hackers must reach in order to submit reports to the program. If a hacker falls below the threshold, they will have a restricted number of reports they can submit to your program. This will improve the quality of reports programs can expect to receive from hackers.

The signal used for signal requirements is calculated based on a rolling 365-day window. This means that a hacker’s signal is based on their activity from the last 365 days. 

To enable Signal Requirements:
1. Go to **Program Settings > Program > Hacker Management > Submission**.
2. Choose from 1 of these 4 options in the **Signal Requirements** section:

Option | Details
------ | ------
Strict (≥ 1.0 Signal) | Hackers with a proven record are unrestricted, while hackers who don't meet this requirement will have a limited number of allowed submissions to your program. A strict setting makes sense for teams that prefer fewer, higher quality reports or that can only handle a smaller flow of reports  as it most tightly limits hacker participation based on high Signal. This is the recommended setting for new programs.
Standard (≥ 0.0 Signal) | The recommended setting for most programs.
Lenient (≥ -1.0 Signal) | Recommended for experienced programs that want to maximize the number of hackers that'll help find vulnerabilities.
Turn off Signal Requirements | Any hacker with any level of Signal will be able to submit reports to your program. Recommended for veteran programs only.

><i>Note: Turning Signal Requirements down or off is better for teams that value having the maximum number of hackers to help find issues.</i>

When hackers don't meet the Signal Requirement:
* They can submit a capped number of vulnerability reports.
* They are capped to submit only 5 reports every 30 days.
* The number of capped reports they can submit resets every 30 days.

There is a program limit for capped reports and a total platform limit for reports sent to programs by these hackers. This provides all hackers with the opportunity to participate in a program, even if their Signal doesn't meet the program requirements.
