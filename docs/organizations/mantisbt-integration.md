---
title: "MantisBT Integration"
path: "/organizations/mantisbt-integration.html"
id: "organizations/mantisbt-integration"
---

With the MantisBT integration, HackerOne makes it easy for you to track MantisBT issues as references on the platform.

In order to configure the MantisBT integration for your team, [contact HackerOne](https://support.hackerone.com) with the following information:   

- The base URI of the MantisBT instance (e.g. https://mantis.company.com/)
- The project (project_id) you'd like issues to default to (an integer)
- The category (category_id) you'd like issues to default to (an integer)
- Any other custom/specific fields you'd like prepopulated. Options are described here: https://www.mantisbt.org/wiki/doku.php/mantisbt:customizing_columns_in_view_issues_page#column_names

With all of the provided information, HackerOne will be able to set up your requested integration. You’ll get an email notification letting you know that your integration has been set up within 1-2 business days.

### How the Integration Works
After your MantisBT integration has been set up:
1. Change the action picker to **Change state > Triaged** in your report.

![integrations](./images/add-integration-reference.png)

2. Click **Add reference to issue tracker**.
3. Make sure your MantisBT integration is selected.

![integration](./images/issue-tracker-reference.png)

4. Click **Generate escalation**. You’ll be taken to your MantisBT account where the report is pre-populated.
3. Submit the issue to create the report in MantisBT.
4. Copy the MantisBT report issue number and paste it in the **Reference ID** field back in the HackerOne.
5. Click **Create** to create a direct reference link to the issue in MantisBT.
