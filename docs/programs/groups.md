---
title: "Groups"
path: "/programs/groups.html"
id: "programs/groups"
---

Groups are used to grant (and limit) access and permissions to users.

Users who are not added to any groups can onboard into the organization but will not have access to any areas for that organization until granted access and permissions through a group.

#### Groups Overview

In order to see all groups for your organization, go to Organization Settings > Groups.

On this page you will have an overview of groups that have been created in your organization, what permissions and what access it grants to users in those groups.

#### Group Permissions

Groups can grant permissions to perform certain actions within the platform. These permissions, however, are limited to only areas the user has access to through the group.

Permissions that can be granted by a group:

1. Read only
    1. Read only access
    1. Post internal comments

1. Program admin
    1. Edit profile, program, and bounty settings
    1. Invite hackers
    1. View billing information
    1. Edit inbox views

1. Report analyst
    1. Post comments
    1. Change report states
    1. Edit report titles and vulnerability types
    1. Suggest bounties
    1. Add/remove external participants from reports
    1. Edit common responses
    1. Edit triggers
    1. Request public disclosure
    1. Agree to public disclosure request
    1. Create CVE ID Requests
    1. Transfer reports

1. Reward manager
    1. Grant rewards
    1. Post comments
    1. Suggest bounties

Every group by default has Read Only permissions as the most basic permission for the platform. Users who do not belong to any groups do not have any permissions, including Read Only permission.

#### Group Access

In addition to permissions, groups also grant access to specific areas within the platform. Access to these areas are defined by access to:

1. Programs
    1. Program settings
    1. Program dashboard
    1. Program inbox and reports

1. Reports
    1. Program inbox access (by default provided when granting access to the program)
    1. Custom inbox access

Users who have been added to groups that grant permissions but no access will not be able to perform permission actions on the platform.

Users get access and permissions based on all groups they belong to.

For example, one group could provide a set of permissions and another group could provide access. As a result they will be able to perform actions in specific areas of the platform based on a combination of permissions and access from these groups.

#### Add New Group

To add a new group:

1. Navigate to Organization Settings > Groups
1. Click on **Add new group**
1. On the new page, add your new group name
1. Add the users you want to be part of this group
1. Define the permissions for this group (as mentioned above)
1. Define the access this group will grant the users
1. Click on **Save group**

Once a group has been created, you can add additional users to it by editing users or groups.

#### Edit Group

A group can be edited from the Groups overview page.

1. Select the edit icon on the group you want to update
1. On the group profile page you can:
    1. Edit the users in the group by adding new users or removing users by clicking on the Remove icon.
    1. Edit group permissions by deselecting current permissions or selecting additional permissions
    1. Edit group access by adding or removing program access for this group in the input field
1. Groups will be saved automatically

Editing a group’s permissions and access will result in changes to a user’s permissions and access. You will be able to see what every user has permissions and access to by going into their specific user profiles.

#### Remove a Group

A group can be removed in two ways:

1. By clicking on the remove icon for the group you want to remove
1. By removing a groups from the group profile page (editing a group)
    1. Both of these options will display a modal to explain how removing groups might impact your users’ access and permission. To remove the group, click on **Remove group**

**Tip:** Create groups to represent your organization structure (product teams, business units, or departments) and manage access and permissions depending on their roles and responsibilities within your organization.

Organizations are not limited to a specific number of groups. Only organization administrators can add, manage, and remove groups in the organization.
