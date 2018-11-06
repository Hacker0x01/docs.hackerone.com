---
title: "Google SSO Setup via SAML"
path: "/programs/google-sso-saml-setup.html"
id: "programs/google-sso-saml-setup"
---

You can use your Google credentials to sign in to HackerOne. To set up SSO via SAML for Google:

1. Log in to the G Suite Admin Console.
2. Click <b>Apps</b>.

![google-saml-2](./images/google-saml-2.png)

3. Click <b>SAML apps</b>.

![google-saml-3](./images/google-saml-3.png)

4. Click on the '+' in the bottom right hand corner to enable SSO for a SAML application.  

![google-saml-4](./images/google-saml-4.png)

5. Find and click on HackerOne in the Apps list.

![google-saml-5](./images/google-saml-5.png)

6. Copy the SSO URL and Certificate.

![google-saml-6](./images/google-saml-6.png)

7. Click <b>Next</b>.
8. Click <b>Next</b> on the Basic Information for HackerOne window

![google-saml-8](./images/google-saml-8.png)

9. Click <b>Next</b> on the Service Provider Details window

![google-saml-9](./images/google-saml-9.png)

10. Adjust the attribute mapping as needed.

![google-saml-10](./images/google-saml-10.png)

11. Click <b>Finish</b>.
12. Click <b>OK</b> to confirm.

![google-saml-12](./images/google-saml-12.png)

13. Click <b>Edit Service</b>.

![google-saml-13](./images/google-saml-13.png)

14. Edit the options to enroll users or organizational units into the HackerOne application. The status will change stating that the application is ON.

![google-saml-14](./images/google-saml-14.png)

![google-saml-14-1](./images/google-saml-14-1.png)

15. Follow the SAML setup instructions [here](https://docs.hackerone.com/programs/single-sign-on-sso-via-saml.html).<br><ul><li>Paste the Single-Sign On URL and the X.509 Certificate that you copied from step 6 into the corresponding fields during SAML setup.</li></ul></br>
