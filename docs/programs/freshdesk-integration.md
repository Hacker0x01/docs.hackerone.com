---
title: "Freshdesk Integration"
path: "/programs/freshdesk-integration.html"
id: "programs/freshdesk-integration"
---

With the Freshdesk integration, HackerOne makes it easy for you to track Freshdesk issues as references on HackerOne.

In order to configure the Freshdesk integrations for your program, [contact HackerOne](https://support.hackerone.com/hc/en-us/requests/new) with the following information:

- Base URI of the Freshdesk instance (e.g. https://company.freshdesk.com/)
- ID of the requester (requester_id) who should be listed as the requester of all tickets (an integer)
- Status (“status”) you’d like tickets to default to (an integer)
- Priority (“priority”) you’d like issues to default to (an integer)
- Any other custom/specific fields you’d like pre-populated (e.g. ticket type, source, group, tags)

><i>Note: For most fields, HackerOne requires the actual numeric ID of the field value, not the label/string.</i>

With all of the provided information, HackerOne will be able to set up your requested integration. You’ll get an email notification letting you know that your integration has been set up within 1-2 business days.

### How the Integration Works
After your Freshdesk integration has been set up:
1. Change the action picker to **Change state > Triaged** in your report.

![integrations](./images/integrations.png)

2. Click **Escalate**.
3. You’ll be taken to your Bugzilla account where the report is pre-populated. Submit the issue to create the report in Freshdesk.
4. Copy the Freshdesk report issue number and paste it in the **Reference ID** field of the HackerOne report to create a direct reference link to the issue in Freshdesk.  
