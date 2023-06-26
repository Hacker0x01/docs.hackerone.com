---
title: "Internet Bug Bounty"
path: "/organizations/internet-bug-bounty.html"
id: "organizations/internet-bug-bounty"
---
### What is it? 
The IBB is a crowdfunded bug bounty program that rewards security researchers and maintainers for uncovering and remediating vulnerabilities in the open-source software that supports the internet. 

There are three unique features of this program: 
* Pooled defense model
    * Small bounty table allocations from many programs are added to result in a large bounty pool for the public IBB. 
    * Allows for equitable bounty spend by all organizations to secure the open source they all depend on
* Discover & remediate vulnerabilities
    * Funding the IBB funds rewards for researchers and critical efforts of maintainers who triage and remediate vulnerabilities.
    * This is achieved through an 80/20% bounty split at the time of payout.
        * 80% goes to the researcher, 20% goes to the maintainers who conducted the remediation
* IBB only rewards publicly disclosed vulnerabilities
    * This could be through remediation or a suggested workaround provided by the project.
    * This means every vulnerability paid out through the IBB was previously submitted directly to the project maintainers, triaged, remediated, and publicly disclosed by the project before the hacker submitted it to the IBB.
        * Allows open-source projects to maintain their established vulnerability handling process without interference.
        * Allows the projects to maintain their autonomy.

### Impact to Date
At the time of this writing, the IBB has awarded over 1 million dollars for thousands of valid vulnerabilities discovered and remediated in open source. To see a full list of the open source projects supported and a history of the Hacktivity visit the [IBB program page.](https://hackerone.com/ibb?type=team)

### Why Participate? 
Software supply chain security management is inherently complex, and solving this issue has left the industry scrambling for an answer. One of the best solutions to defend against threats facing the software supply chain is to work together to protect these key dependencies. Just as open-source software is enhanced through the community, the community should help to secure it—and the Internet Bug Bounty program was built to facilitate that joint effort. 

### Who Should Participate?
The IBB is open to any bug bounty customer on the HackerOne platform. Any organization that depends on the use of open source, or even depends on third-party vendors who may rely heavily on open source, benefits from expanding the scope of their bounty funds to cover vulnerabilities discovered and remediated in open source.

### How Does it Work?
The IBB program operates in a pooled defense model, where every participating program’s bounty allocation is pooled to create the public bounty table for the IBB.
1. Contribute 10% (suggested) of your normal bounty budget, or any amount that fits your program model, through your individual IBB Bounty Table (further instructions listed below).
2. HackerOne will deduct from your existing bounty budget automatically as CVEs are fixed.
3. HackerOne will add all bounties for each eligible vulnerability, providing 80% to the finder and 20% to the open-source project, funding essential remediation efforts.

### How to Set Up Your IBB Bounty Table
You can opt-in by setting up your bounty table on your main program’s rewards settings page (instructions below). This bounty table is private and indicates how much you will award for vulnerabilities discovered in open-source projects. Our default suggestion for IBB bounty spend is for customers to allocate 10% of their main bounty spend. Amounts within the table are adjustable and can be increased or decreased depending on your needs.

Once this table is enabled and configured, the amounts of the individual bounty table are pooled with the bounty tables from other participating programs. The sum of those amounts is displayed in the public bounty table on the IBB Program page. This is rewarded for all valid vulnerability submissions for all open-source projects enrolled.

When a new bounty program opts in or an adjustment is made to an existing individual IBB bounty table, the public IBB bounties offered for open-source vulnerabilities are immediately increased.

To opt-in and set up your individual IBB bounty table on your security page:
1. Go to **Engagements > Settings > Program > Bounties.**
2. Input the bounty value amount that represents 10% of your main bounty table or that best fits the reward structure of your program.
3. This default asset for this table is already set to **Internet Bug Bounty.**
4. Input your bounty amounts under each column.
5. Click **Create bounty table.**
![IBB Bounty Table](/images/ibb-1.png)

Your allocated bounty amounts for the IBB will be added to the public IBB bounty pool total immediately. You can adjust the amounts in your individual IBB bounty table at any time.

To opt out of IBB, select **Remove bounty table** under **Program Settings > Program > Rewards > Bounties.**

### Common FAQs
**What if I am spending too much?**
You may adjust your individual IBB bounty table at any time. Additionally, you can opt out at any point.

**How can I track how much I’m spending?**
Monthly transactions to the IBB bounty pool can be viewed in your program billing history.

**What results can we hope to see from the IBB?**
We’ll provide public, monthly reporting of vulnerabilities (including CVEs) and associated payouts.

**Which projects are currently supported?**
Check out our list of projects [here.](https://hackerone.com/ibb/policy_scopes)

**Can I recommend projects for enrollment in the IBB?**
Yes! We are always looking to onboard new critical open-source projects. If you have a project that is critical in your environment and would like to see it enrolled in the IBB, send the project details to ibb@hackerone.com
* Projects are nominated by both customers and hackers. If you have projects you’d like to see supported, email ibb@hackerone.com with the project information.
* Once a project has been nominated by multiple parties (3+), they will be assessed for enrollment criteria

**Which projects are eligible for enrollment?**
The IBB aims to support open-source projects that embody widespread dependency for our customers and hackers. An additional goal is to increase security maturity for all open-source software. To that end, we encourage all projects to use the [OpenSSF Security Scorecard](https://openssf.org/blog/2020/11/06/security-scorecards-for-open-source-projects/) as a starting point before they consider participating in a bug bounty program. Once a project has achieved basic security maturity, we consider the following before enrolling a project in the IBB.

Additionally, to be considered for enrollment projects must have the following:
* Have a security policy governing the receipt of vulnerability reports (e.g., SECURITY.md)
* Have a process to assign CVEs and/or issue security advisories for valid vulnerabilities reports

**What if a project does not have a way to receive donations?**
The project may direct the funds to be sent to any other non-profit organization of their choice. 

**Can I sponsor bounties in commercial third-party software? (e.g., SolarWinds)**
We believe the model can be applied to commercial software as well, and we plan to pursue this as the top priority for Phase 2.
