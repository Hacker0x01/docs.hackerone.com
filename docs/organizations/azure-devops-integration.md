---
title: "Azure DevOps Integration"
path: "/organizations/azure-devops-integration.html"
id: "organizations/azure-devops-integration"
---

HackerOne offers a bi-directional Azure DevOps integration that enables you to synchronize your HackerOne events to Azure DevOps and vice versa, from Azure DevOps to HackerOne. This integration enables your development and security teams to stay aligned as it contributes to a better workflow of remediating security vulnerabilities by minimizing the manual back and forth between Azure DevOps and HackerOne.

> **Note:** This integration is only available to HackerOne Enterprise customers.

### Setup
To set up the bi-directional integration between HackerOne and your Azure DevOps instance, you’ll need to follow these 2 steps:
1. [Configure the integration on HackerOne](#configure-the-integration-on-hackerone)
2. [Configure outgoing requests on Azure DevOps](#configure-outgoing-requests)

### Configure the Integration on HackerOne
To set up your Azure DevOps integration on HackerOne:
1. Navigate to **Program Settings > Program > Integrations** on HackerOne
2. Click Connect with Azure DevOps.

![image](./images/azure-1.png)

3. Click **Set up new integration** to start the configuration process

4. *(Optional)* Choose a name and description for your Azure DevOps integration. This will be helpful if you have multiple integrations configured.
5. Click **Next**.
6. Give your authentication a name.
7. Click **Create**.
8. Click **Allow** in the pop-up window asking for permissions. This ensures that HackerOne is enabled to communicate with Azure DevOps.
9. Choose the appropriate Azure DevOps account from the dropdown.

![image](./images/azure-4.png)

10. Choose the Azure DevOps **Account**, **Project** and **Work Item Type** you want to use for escalating reports.
11. Click **Next**.
12. Choose which fields from the HackerOne report you want to map to the fields in Azure DevOps. For example, you can map the HackerOne vulnerability details to the Azure DevOps description.

![image](./images/azure-5.png)

13. Click **Next**.
14. Choose which Azure DevOps Priority levels you want to map to the HackerOne severity. You can choose the same numbers for multiple severity ratings.

![image](./images/azure-6.png)

15. Click **Next**.
16. Choose which events you want to sync from HackerOne to Azure DevOps. You can choose from:

Option | Details
------ | --------
Comments | When someone comments on a report, an update will be posted on the associated Azure DevOps work item.
State Changes | When someone changes the state of a report, an update will be posted on the associated Azure DevOps item.
Work Item Closed State | You can choose from these options:<br><li>*To Do*<li>*Doing*<li>*Done*
Rewards | When someone awards a suggests a bounty and/or bonus, an update will be posted on the associated Azure DevOps item.
Disclosure | When disclosure is requested or approved, an update will post on the associated Azure DevOps item.
Synchronize Attachments | You can synchronize attachments linked with reports and comments to the associated Azure DevOps work item.

17. Click **Next**.
18. Select the events you want to sync from Azure DevOps to HackerOne. You can choose from:

Option | Details
------ | -------
Status changed | Post an internal comment when a work item changes status.
When status changes to done | You can choose from these options: <br><li>Close HackerOne report <li>Do nothing
Priority changed | Post an internal comment when a work item changes status.
Assignee changed | Post an internal comment when a work item changes the assignee.
Comment added | Post an internal comment when someone comments on a work item.

19. Click **Next**.
20. Copy the **AzureDevOpsListener Public URL**. (You’ll need this later to set up the outgoing requests from Azure DevOps to HackerOne.)
21. Click **Finish**.
22. Click **Enable** in the integrations overview to enable the integration.

![image](./images/azure-7.png)

### Configure Outgoing Requests
After configuring the integration on HackerOne, you’ll need to configure outgoing requests in Azure DevOps. This will enable you to send the configured events from Azure DevOps to HackerOne. Keep in mind that you’ll need to use Service Hooks in the configuration process.

To configure synchronizing events from Azure DevOps to HackerOne:
1. Go to **Project Settings > Service hooks** in Azure DevOps.
2. Click on **+ Create subscription**.
3. Choose **Web Hooks** from the services list.

![image](./images/azure-10.png)

4. Click **Next**.
5. Choose **Work item updated** from the dropdown for the **Trigger on this type of event** field.

![image](./images/azure-11.png)

6. *(Optional)* Apply any of the filters you'd like to use.
7. Click **Next**.
8. Fill out the **URL** field with your **AzureDevOpsListener Public URL** from Step 18 in [Configure the Integration on HackerOne](#configure-the-integration-on-hackerone).

![image](./images/azure-12.png)

9. Click **Finish**.

Your web hook should appear in the Service Hooks list.

![image](./images/azure-13.png)
