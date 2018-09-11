---
title: "Embedded Submission Form (beta)"
path: "/programs/embedded-submissions-form.html"
id: "programs/embedded-submissions-form"
---

You can embed the HackerOne report submission form onto your own website. This enables hackers to submit reports without having to create an account on HackerOne. This also provides hackers with an easy way to submit security vulnerabilities without having to search for the VDP or security policy. With embedded submissions, anyone can submit a report to the program and hackers also have the option to anonymously submit reports.

<i>This feature is currently in beta. Please contact your program manager if you want to participate in the beta.</i>

### Set Up an Embedded Submission Form  
To have an embedded submissions form on your website:
1. Go to <b>Settings > Integrations > Embedded Submission</b>.

![embedded-submissions-1](./images/embedded-submissions-1.png)

2. Click <b>Set up</b>.
3. Identify the domains where you want the submission form to be embedded on the <b>Embedded Submission Configuration</b> form. You must add a Fully Qualified Domain Name (FQDN) and you can add up to 100 domains.

![embedded-submissions-2](./images/embedded-submissions-2.png)

4. Copy and paste the script tag to your website. The script tag is used to include a JavaScript file served by HackerOne to generate the iframe necessary to embed the report submission page.  As the script tag is replaced by the iframe, you can insert the tag wherever you want the iframe to be included.

![embedded-submissions-3](./images/embedded-submissions-3.png)

<i>Note: The url within the script contains a UUID (e.g. 25ab901d-7cea-481b-8ac2-c16b7d10d577). This UUID is used by the embedded page to grant users access to submit reports to your program. Any user with access to the UUID will be able to submit reports. It’s important that you're careful with disclosing this UUID if you want to restrict access to submissions.</i>

### How It Works
When hackers submit reports through the embedded form, the form automatically detects if a hacker is signed in to HackerOne and allows them to submit a report. If a hacker isn’t a member or signed in, they can provide their email in the Email field to receive status updates on their report.  

Anonymous submissions will always remain anonymous and can’t be claimed later for reputation or bounties. If an email address is provided, HackerOne will be able to check if an account exists with that email on HackerOne and send the hacker an email to claim the report or to create an account to claim the report.
