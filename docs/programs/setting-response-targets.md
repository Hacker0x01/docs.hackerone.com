---
title: "Setting Response Targets"
path: "/programs/setting-response-targets.html"
id: "programs/setting-response-targets"
---

You can customize your program's response targets by configuring the number of business days.

To customize your program's response target:
1. Go to **Program Settings > Program > Customization > Response Targets**.
2. Input the response target in days for your program under the **Target** column.
3. *(Optional)* Set targets for time to resolution by severity. To set targets by severity:
   * Select the checkbox for **Advanced: Set target by severity**.
   * Input the target in days for each severity level.

*Keep in mind that: it's recommended that your targets fall within the Recommended and Response Standard times.*

Time | Recommended | Response Standard
---- | ----------- | ------------------
Time to first response | 1 day | 5 days
Time to triage | 2 days | 10 days
Time to bounty | 1 day (after triage) | N/A
Time to resolution | 30 days | N/A

* To edit your program's response targets, you need to have program permissions.
* Modified targets will be applied to reports created after the modification.
* Reports created before modification will have previous response targets applied.

![response targets](./images/response-targets.png)
