---
title: "ServiceNow Integration"
path: "/programs/servicenow-integration.html"
id: "programs/servicenow-integration"
---

With the ServiceNow integration, HackerOne makes it easy for you to track ServiceNow issues as references on the platform.

In order to configure the ServiceNow integration for your team, [contact HackerOne](https://support.hackerone.com/hc/en-us/requests/new) with the following information:

- The base URI of the ServiceNow instance (e.g. https://company.service-now.com/)
- Whether you use “Description” or “Additional Comments” for more details
- Category (the “choice value”) you’d like issues to default to
- Any other custom/specific fields you’d like pre-populated such as: contact type, subcategory, priority, caller, assignment group

With all of the provided information, HackerOne will be able to set up your requested integration. As ServiceNow is highly customizable, HackerOne may need to set up a discussion to set your integration so it works best for your team. You’ll get an email notification letting you know that your integration has been set up within 1-2 business days.

### How the Integration Works
After your ServiceNow integration has been set up:
1. Change the action picker to **Change state > Triaged** in your report.

![integrations](./images/integrations.png)

2. Click **Escalate**.
3. You’ll be taken to your ServiceNow account where the report is pre-populated. Submit the issue to create the report in ServiceNow.
4. Copy the ServiceNow report issue number and paste it in the **Reference ID** field of the HackerOne report to create a direct reference link to the issue in ServiceNow.  
