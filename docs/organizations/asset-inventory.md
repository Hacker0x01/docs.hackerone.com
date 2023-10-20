---
title: "Asset Inventory"
path: "/organizations/asset-inventory.html"
id: "organizations/asset-inventory"
---
Your organization’s Asset Inventory page allows you to create categories for assets across your organization.

Asset Inventory is a centralized interface within the HackerOne Platform that allows you to control and manage assets across various security testing engagements.
This feature helps manage the scope across all customer segments. Over time, it becomes a unified record for global external assets and security testing efforts and simplifies the attack surface management process.

HackerOne Assets customers get access to complete Asset Inventory features to manage their attack surface as well as the testing scopes

![Asset Inventory page](./images/asset-inventory-1.png)

You can choose how to group assets based on tags; by default, they are grouped by domain. Clicking on a group opens a detailed list of all assets under that tag. From there, you can edit them individually or in bulk. Each asset listed shows information on coverage, program, owner, and open vulnerabilities.

![asset grouping](./images/asset-inventory-2.png)

### Asset Details
Opening the menu for an asset gives you options to view the asset overview, add scope, remove from scope, archive, or add a tag. You can also add tags and add or remove from scope in the bulk actions menu.

![asset kabob menu](./images/asset-inventory-3.png)

The asset overview will provide detailed information which you can edit from within the menu.

![detailed information](./images/asset-inventory-4.png)

### Scope
You can add to scope, remove from scope, or add as out of scope by clicking on the kabob menu to the right of any asset.

To add as in scope or out of scope:
1. Click the kabob menu next to the asset
2. Click **Add to scope**

![Add to scope menu](./images/asset-inventory-12.png)

3. Select the program
4. Define the scope 
5. Set bounty eligibility
6. Check or uncheck the box **Notify subscribers of changes to the scope**
7. Click **Add scope**

The Scope tab in the program’s Security page allows hackers to see:
1. Which assets are in-scope or out-of-scope
2. Which assets are eligible for bounty
3. Asset CVSS environmental score

![Asset Scope Page](./images/asset-inventory-13.png)

### Adding Assets

You can add assets to your organization from the Asset Inventory page by clicking **Add assets** under the search & filter box. You can choose to import a CSV or add a single asset. 

*Note: Assets can also be added via the [API](https://api.hackerone.com/customer-resources/#assets).*

![image](./images/asset-inventory-14.png)

#### Adding a single asset
If you choose to add a single asset, a pop-up menu will appear prompting you to enter all the asset’s details.

![Adding Assets](./images/asset-inventory-9.png)

After the asset is added, it will appear in the list alongside all other assets.

#### Adding multiple assets

The quickest way to add multiple assets to the Asset Inventory is to utilize the "Import from CSV" option. This will open a modal where you can upload a file and start your import. For convenience, there is also an example file provided here to download.

![image](./images/asset-inventory-15.png)

Once you have uploaded the file, an Import Summary will display. The Import Summary covers successful asset additions, succesful asset updates, and failed asset imports.

### Filtering

Click the filter button next to the Search bar to filter assets by category or tag.
![filtering](./images/asset-inventory-8.png)

### Categories & Tags
The standard Asset Inventory comes with built-in categories and tags such as technology and region. Customers who purchase the Assets Package will also gain access to custom categories and tags. 

To create a new category:
1. Click **Manage tags**
![create tags](./images/asset-inventory-5.png)

2. Click **Create**
3. Select **New Category**
4. Name the category
5. Click **Create tag category** to finish
![create category](./images/asset-inventory-6.png)

To create a new tag:
1. Click **Manage tags**
2. Click **Create**
3. Select **New tag**
4. Select a category for the tag to go under
5. Name the tag
6. Click **Create tag** to finish
![create tag](./images/asset-inventory-7.png)

**Note:** You must create and select a category before you can create tags.

### Permissions
The Asset Inventory is only viewable to organization and program admins or users with Asset Manager or Asset Viewer permissions.

| Role | View assets | Manage scope | Add/remove tags | Review asset submissions |
| --- | --- | --- | --- | --- |
| Organization admin | Yes | Yes | Yes | Yes |
| Program admin | Yes | Yes (only to programs they manage) | No | No |
| Asset Manager permission | Yes | Yes | Yes | Yes |
| Asset viewer permission | Yes | No | No | No |

### Advanced Features
Purchasing the Assets feature also unlocks the Attack Surface Coverage dashboard and Asset Submissions. 

Your Attack Surface Coverage dashboard gives an overview of your entire attack surface. It summarizes the total number of in-scope and out-of-scope assets across your program and also shows a summary of vulnerabilities found based on region, language, technology, or business unit.

![asset inventory tabs](./images/asset-inventory-10.png)

Asset Submissions allows hackers to submit potentially missed assets for review. You can then accept or reject these assets as part of your organization. If you accept a hacker’s submission, they will then be invited to submit asset enrichment to provide more details about technology tags, CVSS environmental score, and maximum severity.

![asset submissions](./images/asset-inventory-11.png)

### Asset Tutorial
<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube-nocookie.com/embed/H2ZcSP04Vzw" frameborder="0" allowfullscreen></iframe>
