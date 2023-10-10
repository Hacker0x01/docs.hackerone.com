---
title: "September 2023"
path: "/changelog/2023/september"
date: "2023-09"
---

### Program Status Reports
Program Status Reports are available to all Bounty and Response customers! Go to Analytics > Program Status Reports and click **Create New to use Program Status Reports.** This will bring you to the report preview, where you can name your report, select the input date range for your report, and apply content filters via the menu in the upper right-hand corner of the page. Once satisfied with the contents of the report, click the **Generate Report** button to save it and return to the list view for your reports. 

![program status report example](/images/program-status-report.png)

### Private VDP Invitations
Customers can now invite hackers to private VDPs. This eliminates the need for back-and-forth communication between CSMs and our engineering teams, which saves a lot of time for both parties. 

### Clickable Report ID
In previous versions, clicking report IDs in the sidebar was inconsistent and confusing. Some were clickable, while others were not. Additionally, we duplicated information by displaying a non-clickable report ID for duplicates and including a clickable link next to it. This update ensures that all report ID tags are clickable, offering a more consistent experience.

To see this feature in action, go to any report in the Inbox. The report ID tag should be a clickable link.

![clickable report id](/images/clickable-report-id.png)

### Letter of Attestation 
Available to all Pentest customers completing their testing period on/after September 19!
A Letter of Attestation serves as a pentest deliverable that customers can share with interested parties (e.g., customers, vendors, partners) to confirm HackerOne's performance of a pentest on their in-scope assets. Please note, the letter does not include detailed findings.

The Letter of Attestation is a standardized deliverable included with every pentest, requiring no manual intervention from the delivery team. Customers receive email notifications when their Letter of Attestation is ready, and they can download it from the platform at any time.

### Improved Dashboard Date-Pickers
Improving date pickers has consistently been among the most common requests from users of our dashboards. 
The new date picker provides:
* Calendar pickers for all interval types
* The ability to use exact date ranges when aggregating by time intervals (partial interval filtering)
* A more intuitive user interface
* Improved state management and responsiveness

Check out one of your dashboards to test it out yourself!

![improved date picker](/images/new-date-picker.png)

### Variable Retesting Award Amounts
Variable retesting award amounts allow customers to set a reward amount higher than the standard $50 when desired. To use Variable retesting award amounts, simply set the desired award amount while accepting a completed retest. This feature is available to all Bounty programs using hacker-powered retesting.

### Export Redaction
Export Redaction is now available behind an organization feature toggle!
When exporting a file to text, zip, or PDF, you can now choose to redact usernames. This is purely a cosmetic change to the exported file, it does not change the report permanently. 

To try this feature, enable the redact_usernames feature. Visit any report page, click on the 'Export' button, and toggle the 'Redact usernames' checkbox to see the text change in front of your eyes!

### CurrencyCloud Payment Threshold Increase
CurrencyCloud payments now have a higher threshold per single transaction, allowing most hacker payments to be paid out in a single transaction instead of multiple small ones. 

### Collaborator Highlighting
Before this release, it was challenging to quickly identify report collaborators and whether they had accepted collaboration invites. This led to payout issues during live hacking events that required later corrections.

With this update, a color-coded bottom border is added to the participant list to indicate collaborators and their acceptance status. This helps reporters and customers ensure all eligible individuals are present for bounty splits and improves operational efficiency by simplifying collaborator status checks before payouts.

To try this feature, go to a report with collaborators (for example go to Hacktivity and filter on collaborations) and look in the report metadata sidebar.

### Collaborator Weight Tooltip
In previous versions, during Live Hacking Events, staff had to manually find reports in the support app and compare the listed bounty weights with report details, making the process time-consuming. For reporters, seeing the weights required opening a modal. With this release, the bounty weight is now visible in the core application by hovering over the collaborator in the report metadata sidebar. This information is accessible to the reporter, customer, and H1 staff.

![Collaborator Weight Tooltip](/images/collaborator-weight.png)

To use, go to a report submitted to the HackerOne program with collaborators (for example go to hacktivity and filter on collaborations) and look in the report metadata sidebar.

### CSV Asset Import
Importing assets via CSV and tracking their import status is no longer limited to the API – it's now available to all customers in the Asset Inventory, making asset management a breeze.

![asset inventory csv import button](/images/asset-inventory-csv.png)

### Explicit Content Filter
We've noticed more customers seeking help with testing machine learning models, including generative AI and content moderation. Some of these models can generate or misclassify explicit content, creating vulnerabilities that may require manual review.

To boost safety, we've developed a solution that automatically detects explicit content in user-uploaded images. When found, these attachments are hidden and blurred by default, requiring users to opt-in to view them. This strengthens our commitment to supporting AI model testing, with potential video support in the future. 

![explicit content warning](/images/explicit-filter.png)
