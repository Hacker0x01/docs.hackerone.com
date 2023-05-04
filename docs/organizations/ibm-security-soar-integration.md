---
title: "IBM Security QRadar SOAR"
path: "/organizations/ibm-security-soar.html"
id: "organizations/ibm-security-soar"
---

With the IBM Security QRadar SOAR web URL integration, you can push all of your HackerOne submissions to QRadar SOAR so that you can track all of your vulnerability reports on Security SOAR.

In order to configure the IBM Security SOAR integration for your team, [contact HackerOne](https://support.hackerone.com) with the following information:

* The base URL
* The fields

With all of the provided information, HackerOne will be able to set up your request integration. You’ll get an email notification letting you know that your integration has been set up within 1-2 business days.

### How the Integration Works
After your Security SOAR integration has been set up:
1. Change the action picker to **Change state > Triaged** in your report.

![integrations](./images/add-integration-reference.png)

2. Click **Add reference to issue tracker**.
3. Make sure your Security SOAR integration is selected.

![integration](./images/issue-tracker-reference.png)

4. Click **Generate escalation**. You’ll be taken to your QRadar SOAR account where the report is pre-populated.
3. Submit the issue to create the report in QRadar SOAR.
4. Copy the Security SOAR report issue number and paste it in the **Reference ID** field back in the HackerOne.
5. Click **Create** to create a direct reference link to the issue in QRadar SOAR.
