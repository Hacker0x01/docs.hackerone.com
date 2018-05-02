---
title: "Single Sign-On (SSO) via SAML"
path: "/programs/single-sign-on-sso-via-saml.html"
id: "programs/single-sign-on-sso-via-saml"
---

HackerOne supports Single Sign-On (SSO) through Security Assertion Markup Language 2.0 (SAML 2.0) for these providers:
* Google
* Okta
* OneLogin
* Bitium
* Centrify
* MS ADFS
* Azure Active Directory
* Ping Identity

[Contact HackerOne](https://support.hackerone.com/hc/en-us/requests/new) if you have another SAML provider.

### Set Up
To configure Single Sign-On via SAML:
1. Go to: **Settings > General > Authentication**.
2. In the **SAML** section, click **Add SAML settings** to add your provider information.
3. Enter information for these fields:

Field | Detail
------ | ------
Email Domain | The email domain for users that will be required to use SAML authentication.
Single Sign On URL | The URL from your SAML provider to initiate a single sign-on attempt, sometimes called the login URL.
X509 Certificate | The certificate from your SAML provider to verify the single sign-on response.

4. Click **Run test**. This will launch a new window that'll allow a test login.
5. Enter your login credentials to the test window. After your login attempt, the test will either succeed or fail and provide warning messages about your test login in the **Status** section.
6. If your test fails, you can click the **Run another test** link.
7. If your test is successful, request approval of your settings by clicking **Request Verification**.
8. HackerOne will review and verify your SAML settings and notify you within 1 business day after the review is complete.
9. After HackerOne approves your request, click the **Migrate Users** button when you're ready to enable SAML for all of your users.

*Note: Your team must be launched and not in sandbox mode to set up SAML.*

### Frequently Asked Questions

Question | Answer
-------- | -------
What is your metadata endpoint? | https://hackerone.com/users/saml/metadata
Do you support Just In Time (JIT) provisioning? | Yes, a new account will be created, but that account won't have access to any teams by default as a team admin will need to invite the user. If you'd like users to auto join your team, [contact HackerOne](https://support.hackerone.com/hc/en-us/requests/new) for more information.
What happens to my existing 2FA and password? | Your 2FA and password settings will be deleted and you'll only be able to login with SSO when you're migrated. The SSO provider is expected to handle 2FA.
Do you support SAML and password login? | No, once a user is SAML enabled, they won't be able to login with their password.
Is SAML configurable on a per user basis? | No, all users belonging to a SAML enabled domain will be required to use SAML authentication.
Do you support custom session times? | Yes, HackerOne will respect the SessionNotOnOrAfter attribute if provided during authentication. This will allow you to customize the length of the session up to an upper bound of 2 weeks. If provide this value, it'll be the source of truth and the *remember me* will be ignored.
Do you support Single Logout? | No, we don't support single logout at this time.
What happens to users on my team that don't belong to our claimed domain? | Turning on SSO will only affect users of the claimed domain. Any users that are using e-mail addresses on other domains will not be affected.
What is your Entity ID? | Our entity id is hackerone.com
What is your ACS URL? | Our ACS URL is https://hackerone.com/users/saml/auth

### Additional Information
Here are some screenshots that provide additional details on Service Provider and Attribute mapping:

![saml1](./images/saml-1.png)

![saml_2](./images/saml-2.png)
