---
title: "Okta SSO Setup via SAML"
path: "/programs/okta-sso-saml-setup.html"
id: "programs/okta-sso-saml-setup"
---

You can use your Okta credentials to sign in to HackerOne. To set up SSO via SAML for Okta:

1. Log in to Okta.
2. Click the <b>Admin</b> button.

![okta admin button](./images/okta-1.png)

3. Click <b>+Add Application</b> under Shortcuts.

![okta shortcuts](./images/okta-2.png)

4. Search for the HackerOne application and click <b>Add</b>.

![add HackerOne in okta](./images/okta-3.png)

5. Select the options you'd like in your General Settings.

![okta general settings](./images/okta-4.png)

6. Click <b>Next</b>.
7. Click <b>View Setup Instructions</b> on the Sing-On Options tab to open the "How to Configure SAML 2.0 for HackerOne" page. Keep this page open for setting up SAML for HackerOne in the later steps.

![okta saml 2.0](./images/okta-5.png)

8. Update the Credentials Details section and click <b>Done</b>.

![okta credentials details](./images/okta-6.png)

9. Assign the HackerOne application to the people or groups that should have access to the application on the Assignments tab.

![assign people/groups](./images/okta-7.png)

10. [Open HackerOne](https://www.hackerone.com/) in a new tab.
11. Follow the SAML setup instructions [here](/programs/single-sign-on-sso-via-saml.html).<br><ul><li>Copy the Single-Sign On URL and the X.509 Certificate from the “How to Configure SAML 2.0 for HackerOne” page that you accessed in step 7 and paste them in the corresponding fields during setup.</li></ul></br>
