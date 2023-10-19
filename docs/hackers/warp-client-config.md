---
title: "Configure Client for a specific Program"
path: "/hackers/warp-client-config.html"
id: "hackers/warp-client-config"
---
These guides assume you already have the WARP Client installed, if you haven't please go to: [Warp Client Install](/hackers/warp-client-install.html)

* [Configuration](#configuration)
* [Troubleshooting](#troubleshooting)

## Configuration

* [Windows](#windows)
* [macOS](#macos)
* [Linux](#linux)

### Windows
1. Go to account preferences in the client, and click **Login with Cloudflare for Teams**.
2. Fill in the team domain and click **OK**:
![image](./images/warp_win_teams.png)
> **Note:** If you do not know the team domain please contact support.

3. Login to the WARP authentication website (pops-up automatically). Use your whitelisted @wearehackerone.com e-mail address.
![image](./images/warp_login_email.png)
> **Note:** Please use your @wearehackerone.com alias.

4. Authentication succesfull, register client into program
Click the "Open Cloudflare WARP" button
![image](./images/warp_login_success.png)

5. Client changed
The client should now display "Zero Trust" instead of "WARP"
![image](./images/warp_win_main.png)

### macOS
1. Go to account preferences in the client. 
Click "account" tab, and click **Login with Cloudflare Zero Trust**.
![image](./images/warp_account.png)

2. Fill in the team domain and click **Done**:
![image](./images/warp_team_name.png)
> **Note:** If you do not know the team domain please contact support.

3. Login to the WARP authentication website (pops-up automatically). Use your whitelisted @wearehackerone.com e-mail address.
![image](./images/warp_login_email.png)
> **Note:** Please use your @wearehackerone.com alias.

4. Authentication succesfull, register client into program
Click the "Open Cloudflare WARP" button
![image](./images/warp_login_success.png)

5. Client changed
The client should now display "Zero Trust" instead of "WARP"
![image](./images/warp_result.png)

### Linux
1. To connect for the very first time you must register first warp in your system. Register the client
```console
warp-cli register
```
**Note:** (Repeat in case of API error)

2. Convert WARP to Zero Trust, by logging into the team domain
```console
warp-cli teams-enroll [team-domain]
```
> **Note:** If you do not know the team domain please contact support.

3. Navigate to the domain page, add your whitelisted e-mail address, get the one-pin and connect
```console
A browser window should open at the following URL:
https://[team-domain].cloudflareaccess.com/warp 
If the browser fails to open, please visit the URL above directly in your browser.
```
> **Note:** Please use the same email you registered with HackerOne.

3a. CLI only login
Alternatively if you have CLI only access you can:
```console
warp-cli teams-enroll [team-domain]
```
After this open the URL listed in the output on you local machine, or via terminal based browser.
Then within 30 seconds of authenticating. Copy the token and use it in terminal:
![screenshot](./images/warp_zt_jwt_token.png)

```console
warp-cli teams-enroll-token com.cloudflare.warp://[team-domain].cloudflareaccess.com/auth?token=[token]
```
If the timer runs out before you enter the token you will get the following error:
```console
Error: Invalid JWT provided.
```
4. Connect the WARP Client
```console
warp-cli connect
warp-cli status -> Must show "Status update: Connected"
warp-cli account -> will show if connecting to account was successful
```

## Troubleshooting
### Split tunnel policy
It is possible to check the split-tunnel policy from the client.<br/>
In Settings go to Advanced<br/>
Click on the button Split Tunnel
![image](./images/warp_split_tunnel.png)

The same is possible from the command-line:
```code
warp-cli settings
```
Which will return something like
```code
$ warp-cli settings
Merged configuration:
Always On: true
Switch Locked: false
Mode: WarpWithDnsOverHttps
Cloudflare for Families: Off
Disabled for Wifi: false
Disabled for Ethernet: false
Gateway Id: [gateway_id]
Onboarding: true
Include mode, with hosts/ips:
  ifconfig.me
Fallback domains:
  home.arpa
...
```