---
title: "Authenticated Testing"
path: "/organizations/authenticated-testing.html"
id: "organizations/authenticated-testing"
---

* HackerOne recommends providing credentials and contextual information to hackers wherever possible
    * HackerOne recommends offering elevated rewards for unauthenticated vulnerability findings
* The HackerOne platform includes a secure [credential management feature](https://docs.hackerone.com/organizations/credential-management.html) that allows customers to quickly upload multiple sets of credentials
    * Includes the ability to provision multiple roles
        * Essential for PrivEsc, IDOR, broken authentication, data segregation testing, etc.
    * Hackers can claim credentials in the platform and immediately proceed with testing

## Enabling Unauthenticated Testing

* Many HackerOne programs are interested in finding unauthenticated vulnerabilities as they can be exceptionally severe
* HackerOne recommends specifying an elevated reward level for unauthenticated vulnerabilities within either the [bounty table](https://docs.hackerone.com/organizations/importance-of-bounty-tables.html) or the policy
    * Be sure to provide clarity in your policy on what unauthenticated vulnerabilities are eligible for the elevated reward level
