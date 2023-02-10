---
title: "AWS Security Hub Integration"
path: "/organizations/aws-security-hub-integration.html"
id: "organizations/aws-security-hub-integration"
---

## Introduction

The AWS Security Hub integration exchanges vulnerability findings between HackerOne and Security Hub, streamlining workflows to accelerate security actions. By consolidating and routing vulnerability intelligence from HackerOne to AWS Security Hub, the integration delivers greater visibility into crucial gaps that could lead to a cyberattack.

> **Note:** This integration is only available to HackerOne Enterprise customers.

AWS customers can sync all HackerOne vulnerability findings and use AWS Security Hub as the single console for management and prioritization. They can also compare AWS Security Hub findings with those found by the HackerOne community to see duplicates, understand status, and plan remediation, as shown in Figure 2 below.

With consolidated vulnerability reports, unified findings for more informed responses, and faster time to remediation, AWS customers can improve application security. HackerOne’s AWS Security Hub integration means severe vulnerabilities are routed to the right people at the right time to increase security team efficiencies, improve reporting, and reduce application exploitation.

## Prerequisites

- An AWS account with [AWS Security Hub](https://aws.amazon.com/security-hub/) enabled for the region with your workload. (If you are using AWS Organizations and consolidating findings from Security Hub in various regions and accounts, choose the region and account with the desired level of visibility.)
- The AWS CLI configured to deploy a serverless application to the same region where AWS Security Hub is enabled. If not, use the following steps:
	1. Install [the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).
    	1. Retrieve the AWS Access Key ID and the AWS Secret Access Key for an identity that has permission to create an API Gateway, Lambda, and a new IAM Role for the Lambda to connect to Security Hub.
    	1. Use `aws configure` to set the credentials and the region where you have Security Hub enabled.
- A HackerOne program account with the ability to configure [Webhooks](https://docs.hackerone.com/organizations/webhooks.html) to send reports and the ability to generate [API tokens](https://docs.hackerone.com/organizations/api-tokens.html) to receive reports.

## HackerOne to Security Hub

### Overview

This integration creates a Webhook in HackerOne that sends hacker reports to AWS Security Hub. It is ideal if you use AWS Security Hub to analyze and triage issues in your AWS account, and your purpose for integrating with HackerOne is to consume findings from researchers alongside other tools in your AWS account.

### Architecture

![h1-sh](./images/h1-sh.png)

The HackerOne webhook targets an API Gateway, which forwards the request to a Lambda Function. The Lambda then reformats the payload to AWS Security Hub Finding Format (ASFF) and sends each finding to Security Hub. As a result, those with access to a Security Hub will be able to see the imported HackerOne reports from within Security Hub.

### Setup

Ensure that you have met all of the above [Prerequisites](#prerequisites).

Additionally, create or choose an existing S3 bucket to host the CloudFormation configuration file. The bucket should not be public, but the IAM role you are using must have read and write access to it.

In addition, you need the following:

1. Navigate to [Security Hub > Integrations](https://console.aws.amazon.com/securityhub/home#/integrations) and search for `HackerOne`.
1. Click *Accept findings* in the **HackerOne: Vulnerability Intelligence** card.
1. Clone the [hackerone-to-aws-security-hub](https://github.com/Hacker0x01/hackerone-to-aws-security-hub) repository.
1. Use the bash script in the repository to build and deploy the serverless app.
1. Create a [HackerOne Webhook](https://docs.hackerone.com/organizations/webhooks.html).
1. Enter the URL output from build process as the Webhook target.
1. Configure the webhook to trigger based on events that you want to trigger creation or updates of findings. You may start with "All events will trigger the webhook," or specify the triggering events.
1. To verify a successful setup, test out the steps below.

### Usage

1. In your HackerOne account, select a report in the Inbox.
1. Perform an action on the report that corresponds to a trigger you have configured for the webhook.
1. Visit Security Hub in the account and region you declared in the deployment.
1. Navigate to Findings and filter for “Company name” / “is” / “HackerOne” to see all imported reports, or check for the most recent events.


## Security Hub to HackerOne

### Overview

This integration creates a custom action for Security Hub to send findings to HackerOne. It is ideal if you use Security Hub to consolidate findings from AWS, and your purpose for integrating with HackerOne is to provide analysts with more context into the environment researchers are testing.

### Architecture

![sh-h1](./images/sh-h1.png)

The custom action in Security Hub uses EventBridge to forward specific findings to a Lambda. The Lambda then divides and reformats the findings to meet HackerOne’s report format, and sends each finding individually to HackerOne’s Create Report API. As a result, those with access to a specific HackerOne program will be able to see the imported Security Hub findings from within HackerOne.

### Setup

Ensure that you have met all of the above [Prerequisites](#prerequisites).

1. Create an API token and identifier for the HackerOne API. (https://docs.hackerone.com/organizations/api-tokens.html). Only use the identifier for this integration so it is clear that the API calls are coming from your AWS account and no other source.
1. Clone the [aws-security-hub-to-hackerone](https://github.com/Hacker0x01/aws-security-hub-to-hackerone) repository.
1. Run `aws cloudformation deploy --template-file eventbridgerule.yml --stack-name <STACK_NAME> --capabilities CAPABILITY_IAM`, and input the identifier and API token from the step above.
1. Navigate to [AWS Security Hub > Settings > Custom Actions](https://console.aws.amazon.com/securityhub/home#/settings/actions).
1. Click **Create custom action**.
1. Set *Action name* to `Send to HackerOne` and the *Description* to anything you like.
1. Set *Custom action ID* to `SendFindingToH1` ⚠️ Important: you must use this ID in order to connect to the rule in the template ⚠️.
1. To verify a successful setup, test out the steps below.

### Usage

1. Visit Security Hub in the AWS console. Ensure that you are in the region and account that you declared when you deployed the integration.
1. Navigate to Findings and select one or more findings by ticking the box on the left of each row.
1. Click the Actions dropdown button at the top right of the findings list.
1. Select “Send to HackerOne”
1. Switch to your program at HackerOne, and see the findings listed under new reports.

Contact your HackerOne program team if you have any issues creating tokens for the HackerOne API, and contact AWS Support if you have any issues with resources in your AWS account.
