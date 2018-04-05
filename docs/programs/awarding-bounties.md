---
title: "Awarding Bounties"
path: "/programs/awarding-bounties"
---

Bounties are money you reward to hackers for reported and resolved bugs. They are used to attract the best hackers and to keep them incentivized to hack your programs. You can use bounties to encourage hackers to focus on particular assets by altering the reward amount for different vulernability types. You shouldn't feel obligated to award a bounty for every incoming report as it's best to only reward for useful, valid reports. 

### Awarding Bounties on Reports
You can award a bounty through any report submitted to HackerOne. Some teams prefer to award a bounty once the issue has been confirmed as valid, while others wait until the issue is resolved. 

To award a bounty:
1. Go to your inbox and open the report you'd like to award a bounty for. 
2. Expand the action picker at the bottom of the report above the comment box.
3. Select **Set award**.
4. Enter the bounty amount you wish to award. You can select one of the pre-calculated median, competitive, and top bounty awards for severity level of the bug. 

![awarding bounties](https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/programs/images/bountystats.png?raw=true)

Bounty amounts can be increased at any point by setting another award on the report, but keep in mind that bounties can't be removed once awarded. 

### Awarding a Bounty for Reports Received Outside of HackerOne
The HackerOne API can be leveraged to award hackers for their efforts that submitted vulnerabilities to your organization outside of HackerOne. To start paying hackers, generate an API token on your Program settings page. This option is only available in HackerOne Professional, HackerOne Enterprise, and HackerOne Community Edition. This API endpoint is not for awarding bounties for reports on HackerOne itself, only for reports that were reported outside of HackerOne.

### Best Practices
* Provide bounties for useful, valid reports
* Award a bounty for a significant found vulnerability that is out of scope 
* Clearly communicate to hackers your reasons for awarding or declining a bounty

*Note: Professional, Enterprise, and Fully Managed programs have access to a HackerOne representative who can provide insight and consult them through the bounty awarding process. 
