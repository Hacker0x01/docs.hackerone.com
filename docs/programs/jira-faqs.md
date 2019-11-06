---
title: "Jira FAQs"
path: "/programs/jira-faqs.html"
id: "programs/jira-faqs"
---

Question | Answer
-------- | ------
The HackerOne markdown doesn't convert correctly to Jira. How can I convert the markdown correction to Jira? | You can use a Jira optimized template by setting the escalation template to: `{{details_custom_jira}}`.
What fields are supported in the bi-directional Jira integration? | We support all fields that have the type: `string`, `number`, `date`, `Radio Buttons`, or `Select List (single choice)`.
What do the different variables mean? | Please refer to the [Integration variables](integration-variables.html) page to see examples and descriptions of each variable.
I have multiple HackerOne programs. Can I integrate each of these programs to the same Jira instance? | Yes, you can integrate multiple HackerOne programs to the same Jira instance. Take a look at our [Setting Multiple Jira Integrations](multiple-jira-integrations.html) article.
My Jira is behind a firewall and is not externally accessible. How can I integrate with Jira? | To use the bi-directional Jira integration, you need to make sure your Jira instance is accessible from the HackerOne system. You can whitelist HackerOne’s IP addresses in your firewall to only open it up to the HackerOne application. Contact your program manager to request our IP addresses to whitelist in your firewall.<br><br>If you don't want to expose your Jira to HackerOne, [contact us](https://support.hackerone.com/hc/en-us/requests/new) to get a work-around that enables you to only escalate to Jira.
I'm getting the following error when creating a Jira issue: `JIRA returned the following error: "You must specify a summary of the issue."` | This means that you didn't specify a value for the `summary` field in your Jira integration settings. Please review the field mapping in your Jira integration settings and make sure values are provided for all required fields.
Why is it that I'm using a reverse proxy and can't connect to Jira? | To use the Jira integration, you need to configure Jira to allow this. You can follow the documentation provided by [Atlassian](https://confluence.atlassian.com/kb/reverse-proxy-and-application-link-troubleshooting-guide-719095279.html). More documentation on troubleshooting application links can be found [here](https://confluence.atlassian.com/kb/application-links-troubleshooting-guide-718668765.html).
I don't want to give this integration permission to view all my Jira projects. Can I restrict the integration to only specific projects/spaces? | Yes, you can. The easiest way to do this is by creating a new "h1-integration" user that only has access to the projects you want to expose to the integration with HackerOne.
Why is that after installing the Jira Cloud add-on, Jira is giving me the following error: `App is not responding`? | The plugin is trying to redirect you to HackerOne's website to finalize the setup. However, some browsers are blocking redirects and the plugin won't be able to redirect you. If this happens, try installing the plugin with a different browser.
How come I'm not seeing the option to create a Jira issue on the report? | You can only escalate a report to Jira if you have the right permissions. You will need "Report Management" permissions in order to escalate a report to Jira.
