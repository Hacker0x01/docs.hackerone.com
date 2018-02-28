---
title: "Defining Scope"
path: "/docs/customization/defining-scope"
---

## Why Should I Define My Scope?
Your Scope is a collection of Assets you encourage hackers to hack. When Assets are listed, hackers are required to select the applicable asset for each report. Any special requirements will now be explicitly attached to the particular asset in question.
* **Defining assets clearly helps you communicate with hackers easily.**
  * e.g. For an asset you do not want reports to, list it as out of scope. Hackers cannot submit to that asset, and will see a red warning when they select this asset.
  * e.g. For an asset that you will not pay bounties for, communicate this up front by setting bounty eligibility to false. When hackers are submitting, they will receive warning that this is not a paid asset. [Only applicable to Bug Bounty Programs]
* **Setting asset importance will help you set better priorities via better report severity.**
  * When you set the "Environmental Score" of your asset, we automatically limit the severity of the report based on the risk profile of the asset. For example, it might be impossible for you to have a "Critical" vulnerability in a static marketing asset.
* **Your reports will be tagged by the selected asset.**
  * Sort through your reports by asset - differentiate the reports for your mobile app vs your web app.
  * Do data analysis per domain - Is it time to switch your marketing site provider, because all your vulnerabilities stem from that area? Is one particular engineering team responsible for 90% of your Cross-Site Scripting vulnerabilities?
