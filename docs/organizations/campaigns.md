---
title: "Campaigns"
path: "/organizations/campaigns.html"
id: "organizations/campaigns"
---

### What are campaigns?
Campaigns are time-bound promotions where the submitters would get a higher bounty than usual for a valid report. 

### How can I access campaigns?
H1 Campaigns are available for all customers using the Enterprise edition of HackerOne Bounty. Customers that had access to Campaigns before general availability will still keep their access.

![Campaigns in Engagements](/images/campaigns-1.png)

It is also possible to navigate directly to: [https://hackerone.com/organizations/<organization_handle>/campaigns]

When navigating towards the Campaigns feature, the user will land in the **Campaigns Manager.**

### What can I see in the Campaigns Manager?
If no campaigns have been created before, the user will be invited to create a first campaign: 

 ![Create first campaign](/images/campaigns-2.png)

If campaigns have already been created, the user will be presented with an overview of all past (inactive), running (active), and scheduled campaigns for the program. The overview gives the most important details of each campaign and has an edit button. It's only possible to edit scheduled campaigns, therefore active and inactive campaigns have a greyed-out edit button.

![Campaigns Manager](/images/campaigns-3.png)

### How can I create a campaign?
**Important:** You have to be a program manager with admin permissions to be able to create a campaign. While creating a campaign, you can only pick the programs for which you are a program manager.

1. If you have already created a campaign before, use the **Create campaign** button to get started. If not, use the **Create your first campaign** button.
 
2. On the next page, you’ll select the program to run the campaign on and a category for the campaign objective. A description per category is provided on-screen.

![Campaigns Manageer](/images/campaigns-4.png)

3. After selecting a category, you can pick a specific objective from the list. We currently offer the following objectives:
   
    a. **Welcome new hackers;** Use this objective to reward hackers submitting their first valid report to your program.
  
    b. **Re-engage researchers;** Hackers who were active in your program but stopped submitting reports in the last six months.
   
    c. **Recognize your top 20 hackers;** Retain hackers that consistently submit high-impact reports.
  
    d. **Engagement boost;** Run experiments to find the best bounty offer for your audience using this objective. Often used when the cause of engagement is unknown.
    
    e. **Test your updated assets;** Use this objective to quickly identify new security risks after pushing updates on your assets.

![Campaign objectives](/images/campaigns-5.png)

4. Most of the details for the campaign can be configured on the next screen:
    a. Select the asset(s) you want to run the campaign on. Selecting All Scopes will run a campaign on all assets eligible for bounty. You can also filter assets by type to make the selection easier.
    ![Campaign assets](/images/campaigns-7.png)
    b. If the program uses bounty tables, select a bounty table row that you'd like to use as the base for bounties. These values will be used as the base amounts to show the increased bounty amounts to the hackers. If the program doesn't have a bounty table, this section will show no options.
    ![Bounty table](/images/campaigns-8.png)
    c. Select the bounty multipliers. The resulting bounty amounts will be presented on the right of the multiplier selection. 
        * We also show a recommendation informing you whether the current offer is competitive or if you should consider raising the bounties. This score is calculated based on critical and high values. A score of 90% or higher is considered competitive. The hackers selected as the audience, the programs these hackers submitted reports to, and how high the bounties were that these hackers received for valid reports are all considered to determine the competitiveness score.
    ![Reward competetiveness](/images/campaigns-9.png)
    d. Select the start- and end date of the campaign. We allow customers to schedule a campaign 3 days in advance.
    ![Campaign duration](/images/campaigns-10.png)
    e. Verify all details for the campaign in the summary on the right.
    ![Campaign Summary](/images/campaigns-11.png)

5. On the next screen, you can preview the campaign and fill in any information that might be relevant to the hackers you are targeting. On the right, we provide some tips on how to write good instructions. Once filled and reviewed, click the **Finish and schedule campaign** button to finish creating the campaign. You will be forwarded to the overview page and your scheduled campaign should be visible here. 

Consider the following recommendations for writing a good description for your campaign:
* Focus the description on your why. Are you testing a new asset? Interested in certain CWEs? Have a new feature?
* Keep your description to no more than 2-3 sentences.
* Are you running a campaign in relation to a holiday or milestone? Share that here to help raise hacker enthusiasm.
* No need to include info about date range, multiplier, or list your assets as these will be displayed in the campaign section that the hackers will see on the policy page.

![Campaign description](/images/campaigns-12.png)

### How can I edit a campaign?
To edit a campaign, click on the pencil icon for the campaign you want to edit in the overview. 

![Edit campaign](/images/campaigns-13.png)

It is not possible to edit any live or past campaigns. Editing the details of a scheduled campaign uses the same steps as creating a new campaign. Note: the objective of the campaign can not be changed.

### What happens after scheduling a campaign?
Nothing happens right after you schedule a campaign. The campaign will simply remain ‘scheduled’ until we reach the start date. Campaigns are launched at 01:00 UTC on the start date.

### What happens when the campaign launches?
#### We update the status in the Campaign Manager
When we reach the start date of the campaign, the state will be updated from Scheduled to Active. The same will reflect in the overview in the Campaign Manager:

![Campaign status](/images/campaigns-14.png)

#### We send emails
All the program managers will get an email saying a new campaign has been launched for the program.

If the campaign targets a specific audience (e.g. hackers with a certain reputation), all hackers within that audience will receive an email stating a campaign has been launched. 

If no specific audience is targeted and the program is private, all the hackers that are part of the program (whitelisted hackers) will be notified via email.

#### We make it visible to hackers
Hackers would see the campaign on the policy page. If the campaign is running on only a few assets, we'll show those asset identifiers here under the *Assets Eligible* section:

![Campaign policy page](/images/campaigns-15.png)

Hackers will see the campaign on the Opportunity Discovery page:

![Campaigns on Opportunity Discovery](/images/campaigns-16.png)

If a program doesn't have a bounty table, we'll only show the multipliers on the opportunity discovery page:

![Opportunity card with multipliers](/images/campaigns-17.png)

We allow hackers to filter programs that have an active campaign via the Opportunities Search page:

![Opportunity search filters](/images/campaigns-18.png)

#### We follow up with hackers
We send another email to whitelisted hackers when there are 5 more days left in the campaign.

### Any changes when submitting reports?
Yes! We show the campaign information on the report submission page

![Report submission page](/images/campaigns-19.png)

We highlight the reports that are eligible for a campaign in the inbox. This is visible to the submitter, triage, and team members:

![Inbox reports](/images/campaigns-20.png)

We show the campaign information when the bounty is being awarded:

![Campaign bounty](/images/campaigns-21.png)

### Anything else?
We don't have any budgeting controls. If you want to stop a campaign once the bounties reach a certain amount, *this must be done manually*. If you want to take down the campaign banner, reach out to your customer success manager.

If you have budgeting constraints, some reports might end up not receiving the increased bounty amounts. *Please be transparent about this with hackers up front if you are expecting a large number of reports.* You can use the **Researchers Information** field for such communication.
