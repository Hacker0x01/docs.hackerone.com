---
title: "Sumo Logic Integration"
path: "/organizations/sumo-logic-integration.html"
id: "organizations/sumo-logic-integration"
---

You can configure a Sumo Logic integration using webhooks to log events from HackerOne in Sumo Logic. The Sumo Logic integration enables data to be logged based on the configured event trigger. This integration is flexible and can be used to log data for any of the [events listed](https://api.hackerone.com/webhooks/#events).

> This integration is only available to Enterprise programs.

### Setup

To configure the Sumo Logic integration:
1. Get the HTTP Event collector endpoint by referencing [this article](https://help.sumologic.com/03Send-Data/Setup-Wizard/Collect-from-Custom-Apps/Collect_Streaming_Data_from_HTTP) from the Sumo Logic.
2. Go to **Program Settings > Program > Webhooks** in HackerOne.
3. Click **New webhook**.
4. Enter the full HTTP event collector endpoint in Payload URL.
5. Select which events you’d like to trigger the webhook. You can choose between:

Option | Details
------ | -------
Send me everything | All events will trigger the webhook.
Let me specify individual events | You can choose which events you'd like to trigger the webhook.

Once you've successfully added the webhook, you'll be able to retrieve data from HackerOne in your Sumo Logic instance.   

Learn more about [managing webhooks](webhooks.html#managing-webhooks) and [viewing recent deliveries](webhooks.html#view-recent-deliveries).
