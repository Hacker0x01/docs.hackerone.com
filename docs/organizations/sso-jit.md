---
title: "JIT Provisioning"
path: "/organizations/sso-jit.html"
id: "organizations/sso-jit"
---

HackerOne offers Just-in-time (JIT) provisioning with [SSO via SAML](single-sign-on-sso-via-saml.html). JIT provisioning enables you to automatically create user accounts by using the information from the SAML protocol.

When SSO via SAML has been set up, each time a new user from your organization logs in to HackerOne, their account will automatically be created. There are 2 types of provisioning that are associated in the creation of each account: Attribute Provisioning and Program Membership.

Provisioning Type | Details
----------------- | --------
Attribute Provisioning | By default, all accounts will be provisioned with and keep up-to-date these attributes: <li>First Name <li>Last name
Program Membership | All SAML users have access to the platform by default, but don't necessarily have access to programs. The options for program membership can be set to: None (default), Basic or Advanced. See below to learn more about these options.

### Program Membership Options
You can configure your program membership options to None (default), Basic or Advanced. Each option enables the user different permissions.

> For Basic or Advanced configuration, please contact HackerOne

Option Type | Details
----------- | -------
None | You can invite users to your program and manage their membership and permission level within the user management interface.
Basic | Enables any user attached to your SAML configuration to join the program automatically without an invitation at login. This works for multiple programs if your SAML settings are attached to all programs. <br><br>To configure this provisioning, contact support@hackerone.com after your SAML configuration is enabled and HackerOne will turn it on for you.
Advanced | *Only for Enterprise programs* <br><br>Enables organizations to control membership and permission level from their SSO provider. When configured, the attributes for the users membership and group will be used to assign the user to your program and the appropriate group in HackerOne with the associated permissions. You can confirm the memberships are being added properly by viewing your program [audit log](audit-logs.html).<br><br>To configure this provisioning, contact support@hackerone.com after your SAML configuration is enabled, and HackerOne will assist in the setup.

