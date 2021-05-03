---
title: "Splunk Integration"
path: "/programs/splunk-integration.html"
id: "programs/splunk-integration"
---

You can configure a Splunk integration using webhooks to log events from HackerOne in Splunk. The Splunk integration enables data to be logged based on the configured event trigger. This integration is flexible and can be used to log data for any of the events listed.

> This integration is only available to Enterprise programs.

### Setup

To configure the Splunk integration:
1. Get the HTTP Event collector endpoint by referencing the *Send data to HTTP Event Collector* section in the [Splunk documentation](https://docs.splunk.com/Documentation/Splunk/8.0.2/Data/UsetheHTTPEventCollector).
2. Go to **Program Settings > Program > Webhooks**.
3. Click **New webhook**.
4. Enter the full HTTP event collector endpoint in Payload URL.
5. Enter your webhook secret in the **Secret** field. The secret is used to validate that the request came from HackerOne. Learn how to [validate the payload using a secret](https://api.hackerone.com/webhooks/#payloads-validating-payloads-from-hackerone).
6. Select which events you’d like to trigger the webhook. You can choose between:

Option | Details
------ | -------
Send me everything | All events will trigger the webhook.
Let me specify individual events | You can choose which events you'd like to trigger the webhook.

Once you've successfully added the webhook, you'll be able to retrieve data from HackerOne in your Splunk instance.   

Learn more about [managing webhooks](webhooks.html#managing-webhooks) and [viewing recent deliveries](webhooks.html#view-recent-deliveries).
