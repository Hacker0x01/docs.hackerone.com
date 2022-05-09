---
title: "Organization Profile"
path: "/programs/organization-profile.html"
id: "programs/organization-profile"
---

Your organization profile page displays the following details of your organization:
* Organization name
* Organization logo
* Organization handle
* Organization description

The organization administrator can edit all these items on the profile page. Changes to the organization details can be seen from the organization picker on the Home page and the Organization Settings page.

### Users
To manage your team members you can go to Organization Settings > Users. From here you can manage all users across your organization.

#### Users Overview

The Users overview page gives you a glance at all active users in your organization. You can see which users are organization administrators and which groups all users belong to.

You will also be able to see pending users. These are users that you have previously added to the organization but who have not yet accepted the invitation. Pending invitations are not revoked unless you remove a pending user.

#### Add User

To add a new user to your organization:

1. Go the Organization Settings > Users
1. Click on **Add new user**
1. Provide the email address of the user that should be invited.
1. Select if this user should be an organization administrator.
    1. Adding a user as an organization administrator will allow them to add, manage, and remove other users, groups, and assets from the organization.
1. Select the groups the user should be added to. Groups will grant the user access to specific programs and reports.
    1. By not adding a user to a group, they will be able to onboard onto the platform, but unable to access or take any action on the platform.
    1. **Tip:** If you would like to add a user to a group that doesn’t exist yet, we recommend that you create the group first and then add the user.
1. Click on **Invite User** at the bottom of the page to finish.

Users who have been added will appear under Pending Users until they have accepted the invitations.

While users are in pending state, they cannot be edited. If you would like to make changes to their invitation, you can remove the pending user and re-invite them following the same steps.

#### Edit  User

You can edit a user from the Users overview page.

1. Find the user you want to edit.
1. Click the pencil on the right to go into edit mode
1. On the user profile page you will be able to edit these items:
    1. Add or remove admin permissions by checking the box under their profile details
    1. Add them to more groups by clicking on the plus sign in the table header. A sheet will open that will allow you to edit their group access. Click on **update group access** to update the user.
    1. Remove them from groups by clicking on the delete button in the table.

By editing a user’s group access, you are granting or revoking permissions and access to specific programs and reports.

#### Remove User

A user can be removed in two ways:

1. Clicking on the delete button in the user’s table row from the Users overview page.
1. Clicking on edit and removing them from the user profile page.
    1. Using either of these methods will create a modal that will indicate that this user will be removed from the Organization.
    1. Click on **Remove user** to complete this action.

Upon removal, the user will still be able to access the HackerOne platform, but will no longer be able to access any information for your organization.

**Tip:** This action is irreversible. If your intention is to revoke access to a specific program or inbox, you can edit the user’s access by adding and removing them from groups.

Only organization administrators can add, manage, and remove other users in the organization.

### Groups
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
