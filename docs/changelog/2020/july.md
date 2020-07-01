---
title: "July 2020"
path: "/changelog/2020/july"
date: "2020-07"
---

### Reputation, Signal and Impact Calculation Enhancements
We've made these changes to how [reputation](/hackers/reputation.html), [signal and impact](/hackers/signal-and-impact.html) are calculated:  
* The first 10 bounties of a program will now be rewarded with the BOUNTY__LOW reputation instead of the BOUNTY__MEDIUM. After 10 bounties have been paid out, a hacker’s reputation will be recalculated based on the standard deviation of the program’s mean bounty.
* Reports marked as *Informative* are now **not** included in the calculation of Signal.
* All hacker's signal for [signal requirements](/hackers/restricted-from-submissions.html#signal-requirements) will now be based on the last 365 days so that hackers won't be penalized for their past performance affecting their signal.
