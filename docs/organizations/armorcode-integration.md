---
title: "ArmorCode Integration"
path: "/organizations/armorcode-integration.html"
id: "organizations/armorcode-integration"
---

ArmorCode unifies the siloed world of security testing so you can move faster and spend time on what matters most. The ArmorCode-HackerOne integration makes it easy to ingest and correlate findings from HackerOne to the ArmorCode platform, prioritize based on risk, and automate triaging and remediation workflows to improve your security posture at scale.

To learn more, visit the [ArmorCode website](https://www.armorcode.com/).   

### Configure integration with ArmorCode

1. Navigate to **Security Tools** and select **HackerOne**
![ArmorCode screen](/images/armorcode-integration-1.png)

2. Click on the **Add button**, and a form will appear that requires a configuration name, identifier, and token.
3. Steps to generate an Identifier and Token for Hackerone configuration.
![Generate identifier & token](/images/armorcode-integration-2.png)

  * First user has to log in to their HackerOne account (https://hackerone.com/).
  * Now go to **Organization Settings** and select **API Tokens**
  * Click on **Create API token**.
  * Provide an Identifier and select the Program access and permissions groups for the token
  * Click on **Create API token**
  * The token is created (this token should be stored as it will work as Hackerone credentials in the ArmorCode platform)
4. Back on ArmoreCode, enter the details including configuration name, identifier, and token mentioned in 2, and Save.
5. On the ArmorCode platform, a pop-up will appear that will ask to map the Product, Subproduct, and Environment on which your HackerOne projects will be.
![Map to HackerOne projects](/images/armorcode-integration-3.png)

6. Click on the **Save** button, and a scan will be triggered which you can check on the Scans page in the Analyze section.
7. After the scan is completed, click on **Scan ID** or **Result Details** and it will redirect to the findings that have been found for the project configured.

### Configure Webhook
* Select **Webhook**
![Configure webhook](/images/armorcode-integration-4.png)

* Provide a Secret and click **Generate URL**
![Provide a secret](/images/armorcode-integration-5.png)

* On HackerOne, navigate to **Engagements > Program > Settings > Program Settings**
* Scroll down to **Automation** and select **Webhooks**
![HackerOne automation webhooks](/images/armorcode-integration-6.png)

* At the bottom of the page, click on the **New webhook button**
* Provide webhook name, secret, and payload URL (generated in 2) and click **Add webhook**
![HackerOne automation webhooks](/images/armorcode-integration-7.png)

### Settings
Users can customize the alerts for the different tools along with their scan frequencies.
There are two tabs present; Notifications and General. The notification tab pertains to customizing the alerts for the tool whereas the settings tab is to adjust scan frequencies.

### Notifications
ArmorCode security tool settings allow users to set up and create notifications to be alerted of changes and updates related to the security tool.

Notify When Trigger Types:
1. When Operation Status Down
  * Selecting Operation Status down will create an alert when a scan associated with the security tool fails.
![Notification preferences](/images/armorcode-integration-8.png)

2. When No New Reports
  * Selecting When No New Reports trigger type will create an alert when no new findings were ingested from a scan based on the Scan Frequency set within security tool settings.
![Notification preferences](/images/armorcode-integration-9.png)

3. When Config Changed
  * Selecting Config change will create an alert when changes are made to the Security tool configuration.
  * **Example:** Enabling and Disabling individual Security Tool Configurations.
![Notification preferences](/images/armorcode-integration-10.png)

4. When Tool Configuration Got Disabled
  * Selecting When Tool Configuration Got Disabled will create an alert when configurations are disabled and operations are performed against it.
  * **Example:** Disabling an existing Push configuration.
![Notification preferences](/images/armorcode-integration-11.png)


### General
Users can set scan frequency and tool inactive status on both tool level and product level. After the set time, a scan will be triggered and if a tool inactive time has been set, the tool will be rendered inactive after.
![Notification preferences](/images/armorcode-integration-12.png)
