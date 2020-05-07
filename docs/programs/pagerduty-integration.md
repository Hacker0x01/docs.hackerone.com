---
title: "PagerDuty Integration"
path: "/programs/pagerduty-integration.html"
id: "programs/pagerduty-integration"
---

The PagerDuty integration enables incidents to be created each time a new (high or critical severity) report is submitted or triaged onto HackerOne. This integration is flexible and can be used to create a PagerDuty incident for any of the [events](https://api.hackerone.com/webhooks/#events) listed.

<div class="betanote" markdown="1">
<b>Note:</b> This integration is currently in beta and only available to select programs. If you’d like to use this integration, please reach out to your program manager.
</div>

### Set up

To set up the integration between PagerDuty and each time a high or critical report is created on HackerOne:

1. Navigate to **Configuration > Services** on PagerDuty.
2. Click on **New Service** or add an integration to an existing service on PagerDuty by clicking **+Add New Services** on your services page.
3. Select **HackerOne** for the *Integration Type* and click on **Add Service**.
4. Go to the **Integrations** tab on the **Services** page.
5. Click the settings gear next to the integration and select **View**.
6. Copy the **Integration URL** and store that for later.
9. Log in to your account on hackerone.com.
10. Navigate to your webhooks settings on **Program Settings > Program > Webhooks**.
11. Click **New Webhook**.
12. Paste the URL that was copied from the Pagerduty integration page in step 6.
13. Select **Report created** and **Report triaged** as the events you want to trigger the webhook on.
14. *(Optional)* Select any other events you want to trigger the webhook on.
15. Click **Add webhook** to save the webhook.

Each new and triaged report that has a high or critical severity will now create an incident on PagerDuty and page the appropriate teams based on your PagerDuty policies. You can tailor the configuration of your integration for different use cases by adjusting the events in step 13.
