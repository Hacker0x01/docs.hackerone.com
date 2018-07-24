---
title: "Scope Best Practices"
path: "/programs/scope-best-practices.html"
id: "programs/scope-best-practices"
---

Well-defined scopes clearly communicate your program's needs and expectations with hackers. This enables hackers to have a better idea around what you would like them to focus on and how they should prioritize their time.

Here are some practical guidelines to help you define and set up your scope:

* **Provide granularity**
  * The more defined each asset is, the less room there is for misunderstanding. Avoid setting a wildcard to encapsulate different domains into one asset, e.g., keep your `blog.yourprogram.com` distinct from `secure.yourprogram.com`.
* **List Assets that are out of scope**.
  * It is perfectly fine, normal, and very encouraged, to have items that are out of scope. Do you have a completely isolated "affiliated site" maintained by a third party? List that as out of scope. No surprises for the hacker that spent hours hacking it, no surprises for you trying to explain "We do not own that property" after the fact.
  * If possible, explain why in the instructions field.
* **If you offer a bug bounty, make it clear which assets it is applicable to**.
  * It is a common best practice to only offer bug bounties in specific assets, and to slowly expand that list over time. Set proper expectations with hackers by explicitly white-listing those assets that are eligible for bounties.
  * If possible, explain why in the instructions field. Over communication helps prevent future disagreements. 
* **Set the Environmental Score for the Asset**.
  * The environmental score determines the severity of the vulnerability for the asset. You can set the environmental score for these 3 metrics:
    <br>1) Confidentiality: Whether the data being obtained is actually confidential to their business, i.e., if there is a business risk when the data is leaked.
    <br>2) Integrity: What the business risk is if the data is modified
    <br>3) Availability: Business risk depending on if the component is on or offline
  * Not all of your assets are created equal. You should take the time to assess potential business impact and configure these fields in order to:
      * Create alignment in expectations by prioritizing business critical assets.
      * Constrain maximum severity for the asset so that hackers can't give you alerts that there's a "critical" vulnerability in your static marketing site. 
