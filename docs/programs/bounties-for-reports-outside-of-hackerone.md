---
title: "Bounties for Reports Outside of HackerOne"
path: "/programs/bounties-for-reports-outside-of-hackerone"
---
When hackers submit vulnerabilities to your organization outside of HackerOne, you can leverage the HackerOne API to award hackers for their efforts. The API endpoint isn't for awarding bounties for reports on HackerOne itself, but is only for reports that are reported outside of HackerOne. 

*Note: This option is only available for HackerOne Professional, Enterprise, and Community editions. 

To start paying hackers:
1. Go to **Settings > Program > Automation > API**. 
2. Click **Create API Token** to create an API token. 
3. Enter the unique identifier to authenticate the token in the **New API Token* window. 
4. Click **Create**. 
5. The API token will be generated and presented to you. This is the only time the API token is shown to you. 
6. Click **Manage groups** next to the API identifier to grant reward permissions to various groups.
7. Select the groups you want to give reward permissions to. By default, the Standard group has Reward permissions. 
8. Make sure your billing methods have been complete so that there's a way to pay out bounties in **Settings > General > Billing**. 
9. Go to [this page](https://api.hackerone.com/docs/v1#/programs/bounties) to see the documentation on how to award a bounty. See the code example in cURL and Ruby that'll help you. *Note: the 1337 program ID used in the example below is not real and should be replaced with your own program ID. You can find your program ID in report objects or by asking your HackerOne program manager. 

cURL | Ruby
---- | ----
![cURL](https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/programs/images/bountiesforreportsoutsideofh1-1.png?raw=true) | ![Ruby](https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/programs/images/bountiesforreportsoutsideofh1-2.png?raw=true)

 By default, the Standard group has Reward Management permission. If you've created separate groups, please select the groups that apply.

