---
title: "Jira Server Integration"
path: "/programs/jira-server-integration.html"
id: "programs/jira-server-integration"
---

HackerOne offers a bi-directional Jira integration that syncs information between your HackerOne report and the Jira issue. You can choose to integrate with Jira Cloud or Jira Server. 

To integrate with Jira Server:
1. Go to **Settings > Program > Integrations**.
2. Click the **Connect with JIRA** link.
   ![jira-server-1](./images/jira-server-1.png)

3. Choose **JIRA Server**, and you'll be redirected to this 4-step setup screen where you can configure your Jira integration.
   ![jira-server-3](./images/jira-server-3.png)

   ![jira-server-2](./images/jira-server-2.png)
   
4. Navigate to the Application Links console of JIRA by going to **JIRA Administration > Applications > Application Links**. 
   ![jira-server-7](./images/jira-server-7.png)
5. Enter `https://hackerone.com` and click **Create new link**. 
   ![jira-server-8](./images/jira-server-8.png)
6. Enter `https://hackerone.com` in the New URL field in the Configure Application URL window. 
   ![jira-server-9](./images/jira-server-9.png)
7. Enter `HackerOne` for the Application Name and select `Generic Application` in the Link applications window and click **Continue**. 
   ![jira-server-10](./images/jira-server-10.png)
8.  Select the pencil icon for HackerOne on the Configure Application Links page. 
   ![jira-server-11](./images/jira-server-11.png)
9. Enter the following information on the Application Details section of the Configure HackerOne window:

Field | Details
----- | ---------
Application Name | HackerOne
Display URL | https://hackerone.com

![jira-server-12](./images/jira-server-12.png)

10. Enter the following information on the Incoming Authentication section of the Configure HackerOne window:

Field | Details
----- | --------
Consumer Key | HackerOne JIRA Client
Consumer Name | HackerOne
Public Key | Copy and paste from the key given. 

![jira-server-13](./images/jira-server-13.png)

11. Click **Save**. 
12. Navigate back to HackerOne and enter the URL of the Jira instance you want to authenticate with in the **Instance base URL** field in the **Configure an Application Link** step. 
   ![jira-server-14](./images/jira-server-14.png)
13. Click the **Authenticate with JIRA** button to finalize the setup between HackerOne and your Jira instance. 
14. *(Optional)* Configure which HackerOne reports you'd like to escalate to Jira in the **Configure HackerOne to JIRA escalation** window.
   ![jira-server-4](./images/jira-server-4.png)

15. *(Optional)* Select which Jira actions you'd like to post onto HackerOne in the **Select JIRA to HackerOne events** window. You can choose from:

Option | Detail
------ | -------
Status changed | Post an internal comment when an issue changes status.
Resolution changed | Post an internal comment when an issues changes resolution.
Priority changed | Post an internal comment when an issue changes priority.
Assignee changed | Post an internal comment when an issue changes assignee.
Comment added | Post an internal comment when someone comments on an issue. 

   ![jira-server-5](./images/jira-server-5.png)
   
16. *(Optional)* Select which actions in HackerOne you'd like to post to Jira in the **Select HackerOne to JIRA events** window. You can choose from:

Option | Detail
------ | -------
Comments | When someone comments on a report, post an update on the associated Jira issue.
State Changes | When someone changes the state of a report, post an update on the associated Jira issue.
Rewards | When someone awards or suggests a bounty and/or bonus, post an update on the associated Jira issue.
Assignee Changes | When someone assigns a user/group to a report, post an update on the associated Jira issue.
Public Disclosure | When public disclosure is requested or a report becomes public, post an update on the associated Jira issue. 

   ![jira-server-6](./images/jira-server-6.png)

You're all set! Now that you've finished setting up the Jira integration, you can create Jira issues right from your HackerOne report. 
