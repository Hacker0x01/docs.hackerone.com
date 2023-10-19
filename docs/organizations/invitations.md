---
title: "Invitations"
path: "/organizations/invitations.html"
id: "organizations/invitations"
---

In order for hackers to hack on private programs, they must receive invitations. Hackers are able to receive invitations if they meet the following criteria:
* Established reputation
* Non-negative signal
* Clear record with zero Code of Conduct violations

HackerOne manages your invitations by:
* Daily checking to see if your program has met your report volume target in the last 30 days
* Inviting hackers for your program if you’re not reaching your report volume target

### How Invitations Work
The number of invitations HackerOne sends is based on your report volume on a rolling 30 day basis. These are the use cases as to how HackerOne sends invitations:

Case | Action
---- | ------
You're far from meeting your report volume. | HackerOne will continue sending invitations so you can meet your report volume.
You're receiving more reports while still being under your report volume.	| HackerOne will send out fewer invitations.
Your report volume is met. | Invitations will pause until the volume drops below the target in the 30 day window.
Your report volume is set to 0. | No invitations will be sent.

><i>Note: HackerOne will be sure to prevent you from being overwhelmed with reports.</i>

#### Technically

Our invitations system relies on an internal hacker invitation algorithm that runs periodically. It will find the right hackers based on your needs at the right time.

It will take into account a few optional parameters to be configured with your assigned Customer Success Manager (CSM):

- Success goals
- Signal requirements
- Identity Verification and Background Check requirements
- Reputation requirements
- Country restrictions

The algorithm sifts through millions of hackers, identifying those who meet your criteria and have proven their value with at least 1 valid report or more than [25 CTF points](https://ctf.hacker101.com/).

The algorithm calculates the likelihood of a hacker finding vulnerabilities in your program and optimizes invitations accordingly. Some attributes include:

- Scope
- Program launch date
- Reward amounts
- Hacker submission history
- Hacker experience
- Hacker preferences

### Setting Invitations
To set your invitations:
1. Go to **Engagements > Settings > Program > Invitations**.
2. Enter the number of reports you’d like to receive every 30 days in the **Report volume** field. HackerOne recommends starting out by setting a target of receiving 5 valid reports every 30 days.
     * The report volume is measured by the amount of valid reports submitted in the past 30 days. Valid reports include reports that have been marked by you as <i>Triaged</i> or <i>Resolved</i>. Reports that are left in <i>New</i> or marked to any other state won't count toward this goal. Learn more about [report states](/organizations/report-states.html).
3. Click **Save**.

### Manually Inviting Hackers

><i>Note: Manual invitations are only applicable for Bug Bounty Programs.</i>

If you need to issue your own invitations to particular hackers as an exception:
1. Go to **Engagements > Settings > Program > Invitations**.
2. Select how you want to invite the hacker in **Manually invite a hacker by email or username**. You can choose to invite a hacker by selecting either:
   * Email
   * Username
3. This will open a pop-up window where you can enter the email address or username of the hacker you want to invite. You will also be required to enter an **invitation message** as well as a **context** option explaining the invitation reason.

![invitations](./images/invitations.png)

HackerOne doesn’t recommend inviting unknown hackers. If a hacker has reached out to request an invitation to your private program, contact HackerOne as this is a clear violation of Disclosure Guidelines.

### Managing Invitations
You can keep track of your invitations and which hackers have been invited to your program.
* The **Invited Hackers** section lists all of the hackers that have accepted invitations. To remove a hacker, go to a report the hacker has submitted and select the **Ban reporter** action to the right of the comment field.
* In the **Pending Invitations** section, you can cancel pending invitations.
* Download your invitation status to CSV from the Program Invites Card on Program Overview page. The CSV will have the following columns:
  * Username
  * Invite Sent At
  * Invite Accepted At
  * Invite Rejected At
  * Invite Expires At
  * Signal
  * Reputation
  * Program Reputation
  * Impact
![invitation download](/images/invitation-csv-download.png)
