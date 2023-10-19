---
title: "August 2023"
path: "/changelog/2023/august"
date: "2023-08"
---

## Customer Updates
### Bidirectional ClickUp Integration!
This integration will sync data between HackerOne reports and ClickUp tasks. It helps your development and security teams stay aligned and contributes to a better workflow. Bidirectional ClickUp Integration is available to Professional & Enterprise customers.
![clickup integration](/images/clickup-integration.png)

### Better Redaction
Although we have the Redact feature, often reports need a bunch of redaction prior to disclosure, which is tedious. Introducing the “Detect sensitive data” button, a.k.a. the magic button! The Redact feature has these new updates:
* Users can now provide multiple phrases/strings for redaction
* A machine learning model was used to detect sensitive data from reports, such as PII, PHI, and authentication tokens.

### Program Scope Management
We’ve introduced a new scope page in the program settings to
* Provide a simple overview of the scope of a single program
* Manage scope on a program level (Changes on this page will automatically reflect on the Asset Inventory and vice versa)

### Internet Bug Bounty (IBB) Now Available for All BBP Customers
What is the Internet Bug Bounty? The IBB is a crowdfunded bug bounty program that rewards security researchers and maintainers for uncovering and remediating vulnerabilities in the open-source software that supports the internet.
![internet bug bounty](/images/ibb-logo.png)

Enrolling in the IBB is easy! BBPs can participate by populating the now-visible individual IBB bounty table available within their program settings (Program Settings > Rewards > Bounties). You are not enrolled until you select “Create table” to configure your IBB bounty table. 

### Redact Names in Report Export
When exporting a PDF, select the ‘Redact names’ checkbox in the pop-up. You will see all names and usernames have been redacted from the PDF. To use this feature, ask your CSM to enable the redact_usernames feature flag from Support App.
![redacting info from reports](/images/redact-report-button.png)
![redacted from reports](/images/redacted-report.png)

### Credential Management API
Previously, users could only manage their credentials within the platform. This meant adding new credentials exclusively through CSV files. However, considering that many credentials are generated within the program, we’ve introduced an API to enhance users’ workflow efficiency and eliminate manual management in the platform.

With the new Credential Management API, you can:
* Create, update, assign, and delete credentials
* Revoke credentials when needed
* Retrieve all Credential Inquiries
* Update or delete a Credential Inquiry

But that’s not all. Our revamped Credential Management API also empowers users to:
* Access all Credential Inquiry Responses associated with a credential
* Effortlessly create or remove a Credential Inquiry Response

### Gateway Control
Gateway Control helps you identify and control access of Hackers on your Gateway program. This self-service function allows you to either temporarily block all Hacker access or temporarily block Hacker access on a per-hacker basis. This function will provide a view of the Hackers connected/recently connected to your program and some user information to help identify the Hackers.

Unlike the legacy solution, the use of this function on Gateway V2 does not impact a Hacker's access to other Gateway V2 programs.
Additionally, due to the introduction of a new front end to view your Gateway program in-platform, you will also be able to:
* Identify whether Gateway is active/inactive for your program
* View the IP Addresses associated with your program in-platform that you will need to whitelist to enable access

### Mention Users or Groups in Comments
Customers can now mention specific users or groups in the comments of a report! In the comment box, type in **@** followed by the first few letters of the person or group that you want to mention in the comment. You can also see the number of members in that group and a group icon. 


## Hacker Updates
### Original Report State and Date
You can now see the current state and submission date of the original report when you submit a duplicate on HackerOne. This increases transparency and reduces ambiguity around which report was submitted first.
![original report information](/images/original-report-info.png)

### PII and Sensitive Data Detection
It sometimes happens that PII or other sensitive data is included in reports. To reduce accidental exposure of such data, HackerOne will now use machine learning to detect it before submission and allow you to redact it.

### Auto-Accept Collaboration
Hackers, you can now configure a list of people you'd like to automatically accept collab invitations from on HackerOne! Manage them in your settings at https://hackerone.com/settings/collaboration.
![collaboration preferences](/images/collaboration-preferences.png)

### Hacker Profile Management
This update consists of three changes: the possibility of adding technologies, spoken languages, and certifications to your profile.
This feature introduces new fields under the Profile page. 
* To change your Spoken Languages selection, go to the main profile settings. 
* To access Technologies or Certifications, go to your profile and click on the Skills & Interests menu item.
    * Under this page, you will find 3 tabs: General, Skills, and Certifications. Technologies are under Skills, and Certifications are under Certifications

### Hacker Streaks
Hackers can now follow their current valid report streak (month to month), and it will be also visible on their profile for all visitors.
![hacker streaks](/images/hacker-streaks.png)

**What is a streak?**
Streaks are a way of tracking consistent engagement in submitting valid reports each month. Every month you successfully submit a valid report, your streak increases by one. However, missing a month will reset your streak to 0. The streak will restart the moment you submit another valid report.

The primary objective of Streaks is to keep you committed to your goals and maintain your dedication to submitting accurate and valuable reports by fostering a sense of commitment and accountability.
