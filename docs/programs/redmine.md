---
title: "Redmine Integration"
path: "/programs/redmine-integration.html"
id: "programs/redmine-integration"
---

With the Redmine integration, HackerOne makes it easy for you to track Redmine issues as references on HackerOne.

In order to configure the Redmine integration for you team, [contact HackerOne](https://support.hackerone.com/hc/en-us/requests/new) with the following information:   

- The base URI of the Redmine instance (e.g. https://redmine.company.com/)
- The project (project_id) you’d like issues to default to (an integer)
- The tracker (tracker_id) you’d like issues to default to (an integer)
- Any other custom/specific fields you’d like prepopulated. Options are described here: http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Creating-an-issue

With all of the provided information, HackerOne will be able to set up your requested integration. You’ll get an email notification letting you know that your integration has been set up within 1-2 business days.

### How the Integration Works
After your Redmine integration has been set up:
1. Change the action picker to **Change state > Triaged** in your report.

![integrations](./images/integrations.png)

2. Click **Escalate**.
3. You’ll be taken to your Redmine account where the report is pre-populated. Submit the issue to create the report in Redmine.
4. Copy the Redmine report issue number and paste it in the **Reference ID** field of the HackerOne report to create a direct reference link to the issue in Redmine.  
