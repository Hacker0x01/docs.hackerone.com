---
title: "Zendesk Integration"
path: "/organizations/zendesk-integration.html"
id: "organizations/zendesk-integration"
---

With the Zendesk integration, HackerOne makes it easy for you to track Zendesk issues as references on HackerOne.

In order to configure the Zendesk integration for your team, [contact HackerOne](https://support.hackerone.com) with the following information:  

* The base URL of the Zendesk instance (e.g. https://company.zendesk.com/)
* Any other custom/specific fields you’d like pre-populated such as:
  * locale_id
  * set_tags
  * via_id
  * client
  * submitted_from
  * Ticket_from_search

With all of the provided information, HackerOne will be able to set up your requested integration. You’ll get an email notification letting you know that your integration has been set up within 1-2 business days.

### How the Integration Works
After your Zendesk integration has been set up:
1. Change the action picker to **Change state > Triaged** in your report.

![integrations](./images/add-integration-reference.png)

2. Click **Add reference to issue tracker**.
3. Make sure your Zendesk integration is selected.

![integration](./images/issue-tracker-reference.png)

4. Click **Generate escalation**. You’ll be taken to your Zendesk account where the report is pre-populated.
3. Submit the issue to create the report in Zendesk.
4. Copy the Zendesk report issue number and paste it in the **Reference ID** field back in the HackerOne.
5. Click **Create** to create a direct reference link to the issue in Zendesk.   
