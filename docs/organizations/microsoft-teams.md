---
title: "Microsoft Teams Integration"
path: "/organizations/microsoft-teams.html"
id: "organizations/microsoft-teams"
---

With the Microsoft Teams integration, you can keep track of activities happening on HackerOne in your Microsoft Teams interface. You’ll be able to receive notifications in selected channels of all your report activities on HackerOne which includes: status changes, bounties being paid, new comments, and more.

> **Note:** This integration is only available to HackerOne Enterprise customers.

### Setup
To set up the Microsoft Teams integration, you’ll need to follow these 2 steps:
1. Configure an incoming webhook in Microsoft Teams
2. Configure the integration in HackerOne

### Configure an incoming webhook
To configure an incoming webhook in Microsoft Teams:
1. Go to your Microsoft Teams application.
2. Find the team you want to use for the integration under **Your teams**.
3. Click on the 3 dots next to the channel you want to use for the integration underneath your chosen team. (*The image in step 4 exemplifies that the channel called "General" underneath the HackerOne team will be used for this webhook. Please be sure to select the channel and team that you want to use.*)
4. Select **Connectors**.

![microsoft teams interface choosing the General channel](./images/microsoft-1.png)

5. Click **Add** next to **Incoming Webhook**.

![List of Connectors](./images/microsoft-2.png)

6. Click on **Add** in the top left corner on the Incoming Webhook page.

![Add Incoming Webhook](./images/microsoft-3.png)

7. Enter a name for the webhook in the field. For example, you can put *HackerOne*.

![Naming the webhook](./images/microsoft-4.png)

8. (*Optional*) Click **Upload Image** to associate an image for your incoming webhook. You can download the HackerOne logo [here](https://www.hackerone.com/branding).  

9. Click **Create** to add your webhook to the channel.
10. Copy the webhook URL and store it somewhere for the next phase of the setup.

![copying the webhook URL](./images/microsoft-5.png)

11. Click **Done**.

### Configure the integration on HackerOne
Once you’ve set up an incoming webhook in Microsoft Teams, you can configure the integration on HackerOne. To configure the integration on HackerOne:
1. Navigate to **Program Settings > Program > Integrations** on HackerOne.
2. Select **Connect with Microsoft Teams**.

![Connect with Microsoft Teams link on HackerOne](./images/microsoft-6.png)

3. Click on **Edit** to configure the integration.

![Edit link for Microsoft Teams](./images/microsoft-7.png)

4. Paste the webhook URL that you created in the first phase of the setup (from step 10 above).

![pasting the URL](./images/microsoft-8.png)

5. Click **Finish** to complete the configuration.
6. Click **Enable** to start the Microsoft Teams integration.

![Enable link for enabling Microsoft Teams Integration](./images/microsoft-7.png)

New report activities will now post notifications to the configured Microsoft Teams channel.

### Disable the integration
To disable the Microsoft Teams integration:
1. Navigate to **Program Settings > Program > Integrations > Microsoft Teams** on HackerOne.
2. Click **Disable** next to Microsoft Teams.

![disable button](./images/microsoft-9.png)
