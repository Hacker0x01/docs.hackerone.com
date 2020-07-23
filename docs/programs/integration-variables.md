---
title: "Integration Variables"
path: "/programs/integration-variables.html"
id: "programs/integration-variables"
---

Variable | Details | Example
-------- | ------ |
`{{assignee}}` | The user that's assigned to the report. |
`{{days_after_report(days)}}` | Provides a date based on the report creation date and the provided argument. `{{days_after_report(5)}}` will output a date 5 days after the report was created. |
`{{details_custom_jira}}` | The link, date, reporter, weakness, and description of the vulnerability in the report. These are written in a markdown format customized for Jira. |
`{{details_markdown}}` | The link, date, reporter, weakness, and description of the vulnerability in the report in markdown format. |
`{{details_truncated}}` | The link, date, reporter, weakness, and description of the vulnerability in the report in plain text format.  These details are truncated at 4,000 characters.
`{{details}}` | The link, date, reporter, weakness, and description of the vulnerability in the report in plain text format. |
`{{due_date(days_from_now)}}` | Provides a date in the future based on the provided argument. Example: `{{due_date(5)}}` will output a date 5 days from now. |
`{{email_local_part}}` | The local part of the email address of the user creating the Jira issue. *Note: The local part of an email address is the part before the @ symbol.*
`{{email}}` | The email address of the user creating the Jira issue. |
`{{escalation_time}}` | The date and time of when the report was escalated to Jira. |
`{{jira_severity}}` | The severity of the report in Jira mapping. `none` converts to `1` and `critical` converts to `5`. |
`{{report_id}}` | The ID of the report. |
`{{report_link}}` | The URL of the report. |
`{{reporter_link}}` | The URL of the hacker's HackerOne profile. |
`{{reporter_name}}` | The name of the hacker that reported the vulnerability. This will fall back to the username if the hacker didn't provide their name. |
`{{reporter_username}}` | The username of the hacker that reported the vulnerability. |
`{{severity_rating}}` | The severity rating of the report. Possible values: `none`, `low`, `medium`, `high`, and `critical`. |
`{{submission_date_custom_format}}` | The date the report was created in `DD-MM-YYYY` format. |
`{{submission_date_y_m_d}}` | The date the report was created in `YYYY-MM-DD` format. |
`{{submission_date}}` | The date the report was created in `DD/MM/YYYY` format. |
`{{title}}` | The title of the report. |
`{{vulnerability_information}}` | The description of the vulnerability in the report. |
`{{weakness}}` | The CWE weakness of the report. |
