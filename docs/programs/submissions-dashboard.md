---
title: "Submissions Dashboard"
path: "/programs/submissions-dashboard.html"
id: "programs/submissions-dashboard"
---

<style>
.contents {
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  border-radius: 0.3em;
  width: 60%;
}
</style>

The Submissions page of the Program Dashboard shows data on all report submissions broken up by different metrics.

You can export all of your data at once or by sections to a CSV or PDF file.

### Submissions
The Submissions section provides a quick overview of your report submission metrics to see any report submission trends. You can view:<br><br>

Item | Details
---- | ----------
# Submissions | The total number of reports submitted to the program during the selected time interval.
# Valid | The number of reports submitted during the selected time interval that are currently Triaged or Resolved.
# In Triage | The number of reports submitted during the selected time interval that are currently Triaged.
# Resolved | The number of reports submitted during the selected time interval that are closed as Resolved.
% Valid | The percentage of valid reports submitted during the selected time interval.   

![Submissions graph on program dashboard](./images/program-dashboard-submissions.png)

### Severity
The Severity section shows how reports and bounties are distributed by severity. You can view trends on how many valid reports are submitted and paid per severity.<br><br>

![Severity table on program dashboard](./images/program-dashboard-severity.png)

### Closed Report States
The Closed Report States table shows how your reports are distributed among the various closed states a report can have.  You can view how many reports were:<br><br>

Item | Details
---- | -----------
Resolved | The number of reports that are closed as Resolved.
Duplicate | The number of reports that are closed as a Duplicate.
Informative | The number of reports that are closed as Informative.
Not Applicable | The number of reports that are closed as Not Applicable.
Spam | The number of reports that are closed as Spam.

![Closed Report States on program dashboard](./images/program-dashboard-closed-report-states.png)

### Weakness
The Weakness section shows how your reports are spread among the different weakness types. You can view what areas you’re receiving the most valid vulnerabilities in so that you can know which vulnerabilities your program is most susceptible to.

<br>You can toggle your weakness data by number of valid reports and also by bounty amounts.

![Weaknesses graph on program dashboard](./images/program-dashboard-weaknesses.png)

### Assets
The Assets section enables you to explore reports and bounties by asset. You can see which asset you’re receiving the most vulnerabilities in and how much bounty is paid out per asset.

<br>You can toggle your asset data by number of valid reports and also by bounty amounts.

![Assets graph on program dashboard](./images/program-dashboard-assets.png)
