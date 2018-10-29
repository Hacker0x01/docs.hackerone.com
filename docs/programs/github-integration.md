---
title: "GitHub Integration"
path: "/programs/github-integration.html"
id: "programs/github-integration"
---

With the GitHub integration, HackerOne makes it easy for you to track GitHub issues as references on the platform. GitHub only supports directly linking to the issue creation form on a per-repository basis, so if you use multiple repositories, there isn’t a good way of currently pre-filling data as a report could affect different repositories. If most of your reports only affect one repository, HackerOne can make issue creation much easier.

In order to configure the GitHub integration for your team, [contact HackerOne](https://support.hackerone.com/hc/en-us/requests/new) with the following information:

- Are you using github.com or GitHub Enterprise?
- The repository name
- The organization name
- The repository URL

If you have various repositories under one organization, your reference URL can be set to be https://github.com/ and you could set your references to be equal to :rep/issues/:id, and that would link you directly there.

If you’d rather put the full GitHub URL as the reference ID, HackerOne can link that directly. The integration set up is flexible, just let HackerOne know what works best for you.

With all of the provided information, HackerOne will be able to set up your requested integration. You’ll get an email notification letting you know that your integration has been set up within 1-2 business days.

### How the Integration Works
After your GitHub integration has been set up:
1. Change the action picker to **Change state > Triaged** in your report.

![integrations](./images/integrations.png)

2. Click **Escalate**.
3. You’ll be taken to your GitHub account where the report is pre-populated. Submit the issue to create the report in GitHub.
4. Copy the GitHub report issue number and paste it in the **Reference ID** field of the HackerOne report to create a direct reference link to the issue in GitHub.  
