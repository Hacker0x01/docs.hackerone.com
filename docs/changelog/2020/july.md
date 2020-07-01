---
title: "July 2020"
path: "/changelog/2020/july"
date: "2020-07"
---

### Reputation, Signal and Impact Calculation Enhancements
We've made these changes to how [reputation](/hackers/reputation.html), [signal and impact](/hackers/signal-and-impact.html) are calculated:  
* The first 10 bounties of a program will now be rewarded with the BOUNTY_LOW reputation instead of the BOUNTY_MEDIUM. After 10 bounties have been paid out, a hacker’s reputation will be recalculated based on the standard deviation of the program’s mean bounty.
* Reports marked as *Informative* are now **not** included in the calculation of Signal.
* Hacker's signal for [Signal Requirements](/hackers/restricted-from-submissions.html#signal-requirements) will be based on a rolling 365-day window.
 
