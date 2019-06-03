---
title: "May 2019"
path: "/changelog/2019/may"
date: "2019-05"
---

### Program Dashboard
We’ve revamped the Program Dashboard with new metric tables and charts that give better insight into reporting and analytics for programs.

![program dashboard](./images/may_2019_program_dashboard.png)

### Enhancements to the Jira Integration
We've added these improvements to the bi-directional Jira integration:

#### Additional Fields
The HackerOne to Jira escalation template now includes all additional fields that are either a type of `string`, `number`, or `date`. This enables Jira users to have all fields in Jira be mapped to a value from the HackerOne report. All available Jira fields will automatically be pulled from the selected issue type.

![additional fields wen escalating HackerOne to Jira](./images/may_2019_jira++_additional-fields.png)

#### Sync Attachments
Jira users can now sync attachments from their HackerOne report to Jira by selecting **Synchronize attachments** in the **Select HackerOne to Jira events** section when configuring their Jira integration.

![synchronize attachments option in the jira integration](./images/may_2019_jira++_sync-attachments.png)

#### Automated Report Closure
Jira users can now select which Jira closed issue status should result in the closure of the HackerOne report.

![automating report closure with Jira](./images/may_2019_jira++_report-closure.png)

#### Severity to Priority Mapping
With severity to priority mapping, Jira users can map HackerOne severity ratings to the priority fields they have in Jira. This enables the right priority to be set when escalating a report to Jira.

![severity to priority mapping](./images/may_2019_jira++_severity-priority-mapping.png)
