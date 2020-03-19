---
title: "Response Target Benchmarks"
path: "/programs/response-target-benchmarks.html"
id: "programs/response-target-benchmarks"
---

[Response Target](response-targets.html) Benchmarks enable you to compare your response times to those of other programs. This will help you see what areas you need to focus on to improve your program. You can specify the kinds of programs you want to compare your program to by selecting different program requirements and creating benchmarks.

> **Note:** This feature is currently only available for Enterprise programs.


To access your response targets dashboard:
1. Go to **Program Dashboard > Response Targets**.
2. Select the appropriate variables for these fields:

Field | Details
----- | -------
Metric | What you want to measure. <br><br>You can choose from:<br><li>Median [time to resolution](response-target-metrics.html) <li>Median [time to triage](response-target-metrics.html) <li>Median [time to bounty](response-target-metrics.html) <li>Median [time to first response](response-target-metrics.html) <li>Missed resolution targets <li>Missed triage targets <li>Missed bounty targets <li>Missed first response targets <br><br>**Note:** *Median* is the midpoint of your dataset. We're using the median rather than the average as it prevents your data from being skewed by one-off instances.<br><br>**Note:** *Missed* is calculated by the number of reports that were longer than the targets you set for yourself.
Severity | The rating of how severe a vulnerability is.<br><br>You can choose from:<br><li>All severities <li>No severity <li>Critical <li>High <li>Medium <li>Low <li>None
Start date | The date you want to start measuring from.
End date | The date you want to stop measuring from.
View by | How you want to view your data. <br><br>You can choose from: <br><li>Week <li>Month <li>Quarter <li>Year
Filter | You can filter your metrics by custom fields, assets and/or weakness.
Benchmarks | A filter you can create of different program characteristics that you want to compare your program to. <br><br>Each benchmark is an aggregate measure of data of other programs on HackerOne. All data is anonymous so that no program's data will be exposed.

You'll be able to view how your response target compares to the metric that you choose to measure with.
