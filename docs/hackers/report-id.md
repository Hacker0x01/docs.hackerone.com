---
title: "Report ID"
path: "/hackers/report-id.html"
id: "hackers/report-id"
---

## Report ID

When a hacker submits a new report to a program, a unique identifier will be assigned to the report which can be used to access the submission detail.

The link to view a report submitted to the HackerOne is in the following form:

```
https://hackerone.com/reports/[report-id]
```

The report ID is a counting number which can show how many reports have been submitted to the platform so far. When viewing the report detail, the report ID will appear before the title. However, not all reports are accessible to everyone. You can access the report if any of the following criteria are true:

-	The report is of your own submission.
-	You are a participator of the report of another Hacker.
-	The report is publicly disclosed by the programs.

You can get the JSON format of the report by using the following URL scheme:

```
https://hackerone.com/reports/[report-id].json
```

When writing a report or comment, you can refer to an external report by preceding the ID with a hash character:

```
#[report-id]
```

Keep in mind that the program can access the publicly disclosed reports or reports that are submitted to them only.
