---
title: "Defining Scope"
path: "/programs/defining-scope.html"
id: "programs/defining-scope"
---

Your Scope is a collection of assets you want hackers to hack. When assets are listed, hackers are required to select the applicable asset for each report. Any special requirements will now be explicitly attached to the particular asset in question.

### Why Should I Define My Scope?
* **Defining assets clearly helps you communicate with hackers easily.**
  * e.g. For an asset you do not want reports to, list it as out of scope. Hackers cannot submit to that asset, and will see a red warning when they select this asset.
  * e.g. For an asset that you will not pay bounties for, communicate this up front by setting bounty eligibility to false. When hackers are submitting, they will receive warning that this is not a paid asset. [Only applicable to Bug Bounty Programs]
* **Setting asset importance will help you set better priorities via better report severity.**
  * When you set the "Environmental Score" of your asset, we automatically limit the severity of the report based on the risk profile of the asset. For example, it might be impossible for you to have a "Critical" vulnerability in a static marketing asset.
* **Your reports will be tagged by the selected asset.**
  * Sort through your reports by asset - differentiate the reports for your mobile app vs your web app.
  * Do data analysis per domain - Is it time to switch your marketing site provider, because all your vulnerabilities stem from that area? Is one particular engineering team responsible for 90% of your Cross-Site Scripting vulnerabilities?

 ### To Create and Edit your Existing Scope
To view and edit your existing scope:
1. Go to the Scope section in your program's **Settings** > **Program** > **Policy & Scope**.

![Scope image 1](./images/Scope1.png)

2. Click on **Add asset**. It will bring you to this page:

![Scope image 2](./images/Scope2.png)

3. Fill out the different fields. For each asset, you can fill out:

Option | Detail
----- | -----
Types | The asset type. <br>You an choose from these options: CIDR, Domain, iOS: App Store, iOS: Testflight, iOS: .ipa, Android: Play Store, Android: .apk, Windows: Microsoft Store, Source Code, Executable, Hardware/loT, Other.
Identifier | How hackers will know that they are at the correct asset that you specified.
Eligibility for Submission | Whether you want hackers to submit to reports about this asset. If "no", hackers will see the asset on a report form with a red warning, and will not be able to submit reports marked for this asset.
Eligibility for Bounty | Whether you intend on providing bounties for this Asset or not. If you have a mixed Bug Bounty - Vulnerability Disclosure program, you will want to explicitly mark the assets you will or will not pay for. This is also surfaced to hackers on both your team profile and the report submission form.
Environmental Score | Adjust the severity of each vulnerability submission based on the Environment by specifying the maximum impact to Confidentiality, Integrity, or Availability of that Asset's data. You can read more about our CVSS implementation here: How does HackerOne recommend determining Severity?
Instruction | If you have any detail descriptions or comments on the Asset, this field will surface that on both your program profile page and your report submission form.
4. Click **Add Asset**.
