---
title: "AWS Security Hub Integration"
path: "/programs/aws-security-hub-integration.html"
id: "programs/aws-security-hub-integration"
---

## Introduction

<What each allows, and why.>
<Process flow.>
<When do you want SecHub to H1? Link to section.>
<When do you want H1 to SecHub? Link to section.>
<When do you want bidirectional? Link to section.>

## Prerequisites

- An AWS account with Security Hub already enabled for the region with your workload. If you are using AWS Organizations and consolidating findings from Security Hub in various regions and accounts, choose the region and account with the desired level of visibility.
- <CloudFormation prerequisites; note that you cannot use CF to enable SH, it must already be set>
- A HackerOne program account with the ability to generate API tokens to receive reports, and if sending reports, the ability to configure webhooks.

## Security Hub to HackerOne

### Overview

This integration creates a custom action for Security Hub to send findings to HackerOne. It is ideal if you use Security Hub to consolidate findings from AWS, and your purpose for integrating with HackerOne is to provide analysts with more context into the environment researchers are testing. 

### Architecture

<image here>

The custom action in Security Hub uses EventBridge to forward specific findings to a Lambda. The Lambda then divides and reformats the findings to meet HackerOne’s report format, and sends each finding individually to HackerOne’s Create Report API. As a result, those with access to a specific HackerOne program will be able to see the imported Security Hub findings from within HackerOne.

### Setup

Ensure that you have met all of the above [Prerequisites](#prerequisites).

1. Create an API token and identifier for the HackerOne API. (https://docs.hackerone.com/programs/api-tokens.html). Only use the identifier for this integration so it is clear that the API calls are coming from your AWS account and no other source.
1. Input the API keypair securely to your Terraform build, either using secure write-only variables in Terraform Cloud or an ephemeral form when you deploy the build locally. See Terraform’s documentation for guidance on storing credentials in state. (https://www.terraform.io/docs/language/state/sensitive-data.html) As always, do not commit tfstate in git, as it contains secrets in plaintext.
1. Input the region where you’ve enabled Security Hub, the account ID, and the account secret into Terraform.
1. <CFT build>
1. To verify a successful setup, test out the steps below.

### Usage

1. Visit Security Hub in the AWS console. Ensure that you are in the region and account that you declared when you deployed the integration.
1. Navigate to Findings and select one or more findings by ticking the box on the left of each row.
1. Click the Actions dropdown button at the top right of the findings list.
1. Select “Send to HackerOne”
1. Switch to your program at HackerOne, and see the findings listed under new reports.

Contact your HackerOne program team if you have any issues creating tokens for the HackerOne API, and contact AWS Support if you have any issues with resources in your AWS account.

## HackerOne to Security Hub

### Overview

This integration creates a webhook in HackerOne that sends hacker reports to AWS Security Hub. It is ideal if you use AWS Security Hub to analyze and triage issues in your AWS account, and your purpose for integrating with HackerOne is to consume findings from researchers alongside other tools in your AWS account. 

### Architecture

<image here>

The HackerOne webhook targets API Gateway, which forwards the request to a Lambda Function. The Lambda then reformats the payload to AWS Security Hub Finding Format (ASFF) and sends each finding to Security Hub. As a result, those with access to a Security Hub will be able to see the imported HackerOne reports from within Security Hub.
	
### Setup

Ensure that you have met all of the above [Prerequisites](#prerequisites).

1. Input the region where you’ve enabled Security Hub, the account ID, and the account secret into Terraform.
1. <CFT Build>
1. When prompted during the build, create a secret string.
1. Take note of the URL in the output.
1. Create a HackerOne webhook.
1. Enter the URL from above as the target.
1. Enter the secret string from above in the “secret” section of the webhook.
1. Configure the webhook to trigger based on events that you want to trigger creation or updates of findings. A recommended configuration to start (and later modify as desired) would be:
1. To verify a successful setup, test out the steps below.

### Usage

1. In your HackerOne account, select a report in the Inbox.
1. Perform an action on the report that corresponds to a trigger you have configured for the webhook.
1. Visit Security Hub in the account and region you declared in the deployment.
1. Navigate to Findings and filter for “Company name” / “is” / “HackerOne” to see all imported reports.

## Bi-DIrectional Integration

### Overview

This integration combines the two above so that it is possible to share selected Security Hub findings with HackerOne, and for Security Hub to consume reports from HackerOne that trigger webhooks.

### Architecture

<image here>

### Setup

Ensure that you have met all of the above [Prerequisites](#prerequisites).

1. Create an API token and identifier for the HackerOne API. (https://docs.hackerone.com/programs/api-tokens.html). Only use the identifier for this integration so it is clear that the API calls are coming from your AWS account and no other source.
1. Input the API keypair securely to your Terraform build, either using secure write-only variables in Terraform Cloud or an ephemeral form when you deploy the build locally. See Terraform’s documentation for guidance on storing credentials in state. (https://www.terraform.io/docs/language/state/sensitive-data.html) As always, do not commit tfstate in git, as it contains secrets in plaintext.
1. Input the region where you’ve enabled Security Hub, the account ID, and the account secret into Terraform.
1. <CFT build steps>
1. When prompted during the build, create a secret string for the webhook.
1. Take note of the URL in the output.
1. Create a HackerOne webhook.
1. Enter the URL from above as the target.
1. Enter the secret string from above in the “secret” section of the webhook.
1. Configure the webhook to trigger based on events that you want to trigger creation or updates of findings. A recommended configuration to start (and later modify as desired) would be:
1. To verify a successful setup, test out the steps below.

### Usage

1. In your HackerOne account, select a report in the Inbox.
1. Perform an action on the report that corresponds to a trigger you have configured for the webhook.
1. Visit Security Hub in the account and region you declared in the deployment.
1. Navigate to Findings and filter for “Company name” / “is” / “HackerOne” to see all imported reports.
1. In Findings, select one or more findings by ticking the box on the left of each row. (Note: do not send HackerOne-originated findings back to HackerOne, as this would merely create duplicates.)
1. Click the Actions dropdown button at the top right of the findings list.
1. Select “Send to HackerOne”
1. Switch to your program at HackerOne, and see the findings listed under new reports.
