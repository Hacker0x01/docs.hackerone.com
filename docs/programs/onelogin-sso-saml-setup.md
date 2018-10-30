---
title: "OneLogin SSO Setup via SAML"
path: "/programs/onelogin-sso-saml-setup.html"
id: "programs/onelogin-sso-saml-setup"
---

You can use your OneLogin credentials to sign in to HackerOne. To set up SSO via SAML for OneLogin:

1. Log in to OneLogin.
2. Click on Administration.

![OneLogin Admin button](./images/onelogin-1.png)

3. Go to <b>Apps > Add Apps</b>.

![OneLogin Add Apps](./images/onelogin-2.png)

4. Search for the HackerOne application and select it.

![OneLogin HackerOne search](./images/onelogin-3.png)

5. Click Save on the Configuration page.

![OneLogin configuration page](./images/onelogin-4.png)

6. Copy the X.509 Certificate and the SAML 2.0 Endpoint (HTTP) on the SSO tab. <i>Click View Details to get the full X.509 Certificate.</i>

![OneLogin SAML 2.0](./images/onelogin-5.png)

![OneLogin default certificate](./images/onelogin-6.png)

7. [Open HackerOne](https://www.hackerone.com/) in a new tab.
8. Follow the SAML setup instructions [here](/programs/single-sign-on-sso-via-saml.html).<br><ul><li>Paste the Single-Sign On URL and the X.509 Certificate that you copied from step 6 into the corresponding fields during SAML setup.</li></ul></br>
