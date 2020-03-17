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
2. [Create a new service](https://support.pagerduty.com/docs/services-and-integrations#section-events-api-v2) or add an integration to an existing service on PagerDuty by clicking **+Add New Services** on your services page.
3. Select **Custom Event Transformer** for the *Integration Type*.
4. Go to the **Integrations** tab on the **Services** page.
5. Click the settings gear next to the integration and select **Edit**.
6. Edit the code that gets executed when the integration gets triggered by pasting the code below

```
var webhook = PD.inputRequest;
var event_type = PD.Trigger;
var severity = webhook.body.data.report.relationships.severity;
var severity_rating = severity ? severity.data.attributes.rating : null;

if (severity_rating == "high" || severity_rating == "critical") {
  var normalized_event = {
    event_type: event_type,
    incident_key: webhook.body.data.report.id,
    client: 'HackerOne',
    client_url: 'https://hackerone.com/reports/' + webhook.body.data.report.id,
    description: 'A ' + severity_rating + ' vulnerability was reported to HackerOne!',
    details: 'The ' + severity_rating + ' report title is ' + webhook.body.data.report.attributes.title
  };

  PD.emitGenericEvents([normalized_event]);
}
```

If you want to be notified for all reports that get created or triaged (regardless of severity) you can use the following code instead:

```
var webhook = PD.inputRequest;
var event_type = PD.Trigger;
var severity = webhook.body.data.report.relationships.severity;
var severity_rating = severity ? severity.data.attributes.rating : null;

var normalized_event = {
  event_type: event_type,
  incident_key: webhook.body.data.report.id,
  client: 'HackerOne',
  client_url: 'https://hackerone.com/reports/' + webhook.body.data.report.id,
  description: 'A ' + severity_rating + ' vulnerability was reported to HackerOne!',
  details: 'The ' + severity_rating + ' report title is ' + webhook.body.data.report.attributes.title
};

PD.emitGenericEvents([normalized_event]);
```
7. Click **Save Changes**. You’ll be redirected to the *View* page of the integration.
8. Copy the *Integration URL* on the view page.
9. Log in to your account on hackerone.com.
10. Navigate to your webhooks settings on **Program Settings > Program > Webhooks**.
11. Click **New Webhook**.
12. Paste the URL that was copied from the Pagerduty integration page in step 8.
13. Select **Report created** and **Report triaged** as the events you want to trigger the webhook on.
14. *(Optional)* Select any other events you want to trigger the webhook on.
15. Click **Add webhook** to save the webhook.

Each new and triaged report that has a high or critical severity will now create an incident on PagerDuty and page the appropriate teams based on your PagerDuty policies. You can tailor the configuration of your integration for different use cases by adjusting the events in step 13.
