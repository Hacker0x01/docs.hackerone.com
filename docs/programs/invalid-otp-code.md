---
title: "Invalid OTP Code"
path: "/programs/invalid-otp-code.html"
id: "programs/invalid-otp-code"
---

### Why is my OTP code invalid?

When signing in to your HackerOne account using two-factor authentication, your OTP code generated on Google Authenticator may be invalid. If you run into this issue, it may be because your device time differs from the HackerOne system time by more than 90 seconds, which will result in the generation of the wrong code.

The time discrepancy may occur because:
* You set your phone time settings manually and it later switched to automatic (or vice versa)
* Your device switched NTP servers (a server used to sync clocks in networks)

To fix the the issue, set your clock settings to sync automatically:

Android Users | iOS Users
------------- | ----------
On your Google Authenticator app: <br>1. Go to **Settings > Time correction for codes**.<br>2. Click **Sync now**. | On your iphone: <br>1. Go to **Settings > General > Date & Time**.<br>2. Enable **Set Automatically**.
