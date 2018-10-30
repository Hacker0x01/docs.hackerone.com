---
title: "SSO via SAML FAQs"
path: "/programs/sso-faqs.html"
id: "programs/sso-faqs"
---

Question | Answer
-------- | -------
What is your metadata endpoint? | [https://hackerone.com/users/saml/metadata?format=saml\_metadata\_xml](https://hackerone.com/users/saml/metadata?format=saml_metadata_xml)
Do you support Just In Time (JIT) provisioning? | Yes, a new account will be created, but that account won't have access to any teams by default as a team admin will need to invite the user. If you'd like users to auto join your team, [contact HackerOne](https://support.hackerone.com/hc/en-us/requests/new) for more information.
What happens to my existing 2FA and password? | Your 2FA and password settings will be deleted, and you'll only be able to login with SSO when you're migrated. The SSO provider is expected to handle 2FA.
Do you support SAML and password login? | No, once a user is SAML enabled, they won't be able to login with their password.
Is SAML configurable on a per user basis? | No, all users belonging to a SAML enabled domain will be required to use SAML authentication.
Do you support custom session times? | Yes, HackerOne will respect the SessionNotOnOrAfter attribute if provided during authentication. This will allow you to customize the length of the session up to an upper bound of 2 weeks. If you provide this value, it'll be the source of truth and the *remember me* will be ignored.
Do you support Single Logout? | No, we don't support single logout at this time.
What happens to users on my team that don't belong to our claimed domain? | Turning on SSO will only affect users of the claimed domain. Any users that are using e-mail addresses on other domains will not be affected.
What is your Entity ID? | hackerone.com
What is your ACS URL? | https://hackerone.com/users/saml/auth
