---
title: "Embedded Submission Form"
path: "/programs/embedded-submissions-form.html"
id: "programs/embedded-submissions-form"
---

You can embed the HackerOne report submission form onto your own website. This enables hackers to submit reports without having to create an account on HackerOne. This also provides hackers with an easy way to submit security vulnerabilities without having to search for the VDP or security policy. With embedded submissions, anyone can submit a report to the program and hackers also have the option to anonymously submit reports.

If you have [signal requirements](signal-requirements.html) set up for your program, please note that the embedded submission form bypasses all signal requirements that've already been set up. Hackers who don't meet signal requirements will still be able to submit vulnerabilities to your program through the embedded submission form.

### Set Up an Embedded Submission Form  
To have an embedded submission form on your website:
1. Go to <b>Program Settings > Embedded Submission Form</b>.

2. Identify the domains where you want the submission form to be embedded on the <b>Embedded Submission Configuration</b> form. You must add a Fully Qualified Domain Name (FQDN). You can add up to 100 domains.

![embedded-submissions-2](./images/embedded-submissions-2.png)

3. Copy and paste the script tag to your website. The script tag is used to include a JavaScript file served by HackerOne to generate the iframe necessary to embed the report submission page.  As the script tag is replaced by the iframe, you can insert the tag wherever you want the iframe to be included.

![embedded-submissions-3](./images/embedded-submissions-3.png)

><i>Note: The url within the script contains a UUID (e.g. 25ab901d-7cea-481b-8ac2-c16b7d10d577). This UUID is used by the embedded page to grant users access to submit reports to your program. Any user with access to the UUID will be able to submit reports. It’s important that you're careful with disclosing this UUID if you want to restrict access to submissions.</i>

### How It Works
Once the integration has been set up, the HackerOne report submission form can be accessed directly on your site. Hackers don't need to access your HackerOne policy page to submit reports, but they can access the report form right from your site. Check out [monday.com's embedded submission form](https://monday.com/security/form/) as an example. 

When hackers submit reports through the embedded form, the form automatically detects if a hacker is signed in to HackerOne and allows them to submit a report. If a hacker isn’t a member or signed in, they can provide their email in the email field to receive status updates on their report.  

Anonymous submissions will always remain anonymous and can’t be claimed later for reputation or bounties. If an email address is provided, HackerOne will be able to check if an account exists with that email on HackerOne and send the hacker an email to claim the report or to create an account to claim the report.

> It's recommended that you include a short description of how embedded submissions works on your submission form page so that hackers can understand the submission process. Alternatively, you can include a link to your policy page or directory page that explains your policy on submitting vulnerabilities.  
