---
title: "Two-Factor Authentication"
path: "/programs/two-factor-authentication.html"
id: "programs/two-factor-authentication"
---

Two-factor authentication (2FA) enables you to add an extra layer of protection from getting your account compromised. You can set up two-factor authentication using any device capable of generating Time-based One-Time Password (TOTP) authentication codes (RFC 6238) to log in to your HackerOne account. You can use Google Authenticator or Duo Mobile or any other compatible application to generate the codes.

To set up two-factor authentication for your account:
1. Go your profile’s  **Settings > Authentication**.
![2fa-1](./images/2fa-1.png)
2. Click **Set up**.
3. Add your phone number and click **Next**.
4. Enter the verification code sent to your phone number. This will enable account recovery.
5. Click **Turn on** to enable two-factor authentication.
![2fa-4](./images/2fa-4.png)
6. Scan the QR  code in your authenticator app or enter the code manually.
7. Store your backup codes.
8. Enter the verification code from your authenticator app as well as one of the backup codes from the previous page.
![2fa-7](./images/2fa-7.png)
9. Click **Save**.

Once your two-factor authentication is successfully enabled, you’ll be prompted to enter a 6-digit verification code from your authenticator app to log in to your HackerOne account.
![2fa-8](./images/2fa-8.png)

You can choose to change your account recovery phone number, turn off two-factor authentication, or regenerate your backup codes.
![2fa-9](./images/2fa-9.png)

Once your two-factor authentication has been verified, when you log in to HackerOne, you’ll be prompted to enter a 6-digit verification code from your authentication application. You must enter the verification code in order to successfully log in to HackerOne.

On your user management settings, under <b>Settings > General > User Management</b>, you'll be able to see those with two-factor authentication on or off via the 2FA column. Users with **N/A** mean that they are authenticating via Single Sign-On (SSO) using a third-party identity provider. For example, HackerOne Security Analysts will have a 2FA status of N/A because they use SSO.

![2fa-10](./images/2fa-10.png)

><i>Note: Two-factor Authentication is on a per-user basis. You can’t have SSO and 2FA simultaneously.</i>
