---
title: "Explore"
path: "/organizations/explore.html"
id: "organizations/explore"
---

<style>
li ul {
  list-style-type: circle;
}
</style>

The Explore dashboard enables you to compare your [response times](response-targets.html), submissions, and spend data to those of other programs. This enables you to take a deep dive into your data to see what areas you need to focus on to improve your program. You can also create benchmarks and specify the kinds of programs you want to compare your program to based on program type, industry, and company headcount.

> **Note:** Creating benchmarks is currently only available for Enterprise programs.


To access your response targets dashboard:
1. Go to **Program Dashboard > Explore**.
2. Select the appropriate variables for these fields:

Field | Details
----- | -------
Metric | What you want to measure. <br><br>You can choose from: <br><li>[Response Targets](response-target-metrics.html) metrics:<ul><li>Median [time to resolution](response-target-metrics.html)<li>Median [time to triage](response-target-metrics.html)<li>Median [time to bounty](response-target-metrics.html)<li>Median [time to first response](response-target-metrics.html)<li>Missed resolution targets<li>Missed triage targets <li>Missed bounty targets <li>Missed first response targets</ul> <li>[Submissions metrics](report-states.html)<ul><li>Needs more info <li>Resolved<li>Closed as Duplicate<li>Closed as N/A<li>Closed as Informative<li>Closed as Spam<li>Closed<li>Re-opened<li>Triaged<li>Submitted</ul> <li>Spend metrics:<ul><li>Number of Bounties Paid<li>Sum of Bounties Paid</ul><br>**Note:** *Median* is the midpoint of your dataset. We're using the median rather than the average as it prevents your data from being skewed by one-off instances.<br><br>*Missed* is calculated by the number of reports that were longer than the targets you set for yourself.
Severity | The rating of how severe a vulnerability is.<br><br>You can choose from:<br><li>All severities <li>No severity <li>Critical <li>High <li>Medium <li>Low <li>None
Start date | The date you want to start measuring from.
End date | The date you want to stop measuring from.
View by | How you want to view your data. <br><br>You can choose from:<li>Submission date: The date the report was submitted (*displays for all Median time metrics and Submission activity*)<li>Resolution date: The date the report was resolved (*displays when Median time to resolution is the metric*)
Interval | The time between each data point.<br><br>You can choose from:<li>Week <li>Month <li>Quarter <li>Year
Filter | You can filter your metrics by: <li>Severities<li>Assets<li>Weaknesses<li>Current report state<li>Disclosed state<li>Engaged by your H1 triage team <li>Custom fields
Benchmarks | *Only available for Enterprise programs* <br><br>A filter you can create of different program characteristics that you want to compare your program to. <br><br>Each benchmark is an aggregate measure of data of other programs on HackerOne. All data is anonymous so that no program's data will be exposed.

Once you’ve specified how you’d like to view your data, you’ll be able to drill-down into your data to see how your program has been performing. You’ll get a holistic view of what is and isn’t going well, and be able to discern what areas need improvement.

You can also see the list of reports that apply to the metric you’re viewing.

### Use Cases
Here are some example use cases as to why you might want to use Explore.

**Use Case 1: Analyze your data**
<br>You want to understand how well your team is doing in terms of resolution speed so that you can patch vulnerabilities as quickly as possible, but you don’t have a clear understanding of how your program has been doing over time or what could improve.

Using Explore, you can view key metrics such as Response times, Submissions, and Spend. From the metrics, you can drill down into specific data spikes and compare yourself to previous time periods.

**Use Case 2: Compare yourself to other programs**
<br>You want to understand how well your company is doing in terms of response speed, but you don’t have a clear understanding of what’s considered a “good” speed. Looking at internal data isn’t enough because you have no idea if the company’s security team is doing well compared to the industry at large.

By choosing **Benchmarks** in Explore, you can gain insights to your program performance against aggregated market data against other companies based on program type, industry and company headcount.
