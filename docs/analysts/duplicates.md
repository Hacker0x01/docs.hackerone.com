---
title: "Determining Duplicate Reports"
path: "/analysts/duplicates.html"
id: "analysts/duplicates"
---

A duplicate report is a report about a vulnerability that another hacker has reported. There are 2 main steps in determining if the report is considered a duplicate:
1. Find the first report submission for the vulnerability.
2. Determine if the reports are about the same vulnerability. 

### Finding the First Submission

#### Compare the submission dates and times

You can order reports by comparing their submission dates and times.

##### Example 1:
```
Report A – submitted on Jun 20, 2018 (First submission)
Report B – submitted on Jun 22, 2018 
```
##### Example 2:
```
Report A – submitted on Jun 20, 2018. 07:00 (First submission)
Report B – submitted on Jun 20, 2018. 07:15
```
#### Compare the report ID numbers

You can also order reports by comparing the associated report ID numbers, in which the ID number that comes first is the first submission. For example:
```
Report A – ID: #1234 (First submission)
Report B –ID: #1300
```
### Determining if the Reports are About the Same Vulnerability

To determine if multiple reports are about a single vulnerability, you can check whether the vulnerabilities:
* Are fixed with the same vulnerable code change
* Have the same root cause or component

#### Same Vulnerable Code Change

Reports are considered duplicates if they're fixed with the same vulnerable code change. The code may occur on the same or on  different endpoints. The following lists some of the example cases:

##### Example – Reports of the same vulnerability type on the same endpoint:
```
Report A:	XSS on http://example.com/vuln1
Report B:	XSS on http://example.com/vuln1
```
-	Report A is a duplicate of B if the vulnerability resides in the single source code location of the endpoint. For example:
```
[http://example.com/vuln1]
<?php
  echo $xss1;		// Report A & Report B – Fix 1
?>
```
-	Report A isn't a duplicate if there are different locations to fix in the source code. For example:
```
[http://example.com/vuln1]
<?php
	echo $xss1;		// Report A – fix 1
	…
	echo $xss2;		// Report B – fix 2
?>
```
##### Example – Reports of the same vulnerability type on different endpoints:

```
Report A: XSS on http://example.com/vuln1
Report B: XSS on http://example.com/vuln2
```
There are times when 2 or more endpoints use the same code base from another endpoint. They'll be considered duplicates if the fix requires a single source code location (usually on the root endpoint), for example:
```
[http://example.com/vuln1]
<?php
	Include(‘http://example.com/vuln3’);
	vuln3();		// Report A
?>

[http://example.com/vuln2]
<?php
	Vuln3();		// Report B
?>

[http://example.com/vuln3]
<?php
	echo $xss;		// Fix 1
?>
```
In most cases, reports of a single vulnerability that occur on many endpoints aren't duplicates as each one needs its own fix. For example:
```
[http://example.com/vuln1]
<?php
	echo $xss1;		// Report A – fix 1
?>

[http://example.com/vuln2]
<?php
	echo $xss2;		// Report B – fix 2
?>
```
However, sometimes the programs may decide otherwise, see the section on "Root cause or Component”.

##### Example – Reports of different vulnerability types on the same endpoint:
```
Report A: XSS on http://example.com/vuln1
Report B: SQL Injection on http://example.com/vuln1
```
Generally, having 2 different vulnerability types aren't considered duplicates even if they live in the same endpoint because separate fixes are required for each bug. For example:
```
[http://example.com/vuln1]
<?php
	echo $xss1;		// Report A – fix 1
	…
	sqli_query();		// Report B – fix 2
?>
```
##### Example – Reports of different vulnerability types on different endpoints:
```
Report A: XSS on http://example.com/vuln1
Report B: SQL Injection on http://example.com/vuln2
```
Generally, 2 different vulnerability types on different endpoints aren't duplicates because each bug requires a separate fix. For example:
```
[http://example.com/vuln1]
<?php
	echo $xss1;		// Report A – fix 1
?>

[http://example.com/vuln2]
<?php
	sqli_query();		// Report B – fix 2
?>
```
Even if the endpoints use the same code base, they still require distinct fixes. For example:
```
[http://example.com/vuln1]
<?php
	Include(‘http://example.com/vuln3’); 
	xss_sqli();		// Report A
?>

[http://example.com/vuln2]
<?php
	Include(‘http://example.com/vuln3’);
	xss_sqli();		// Report B
?>

[http://example.com/vuln3]
<?php
	echo $xss1;		// Fix 1
	…
	sqli_query();		// Fix 2
?>
```
### Root cause or Component

Some programs decide that the reports are duplicates based on the root cause or component. Though they require separate fixes, the reported vulnerability may already be aware by the programs. In these cases, some programs may treat them as duplicates, while others may award a smaller bounty than the original report. For example:

##### Example – Two vulnerable endpoints using the same copy of the code base:
```
[http://example.com/vuln1]
<?php
	function xss1() {
		echo $xss1;		// Report A – fix 1
	}	
?>

[http://example.com/vuln2]
<?php
	function xss1() {
		echo $xss1;		// Report B – fix 2
	}	
?>
```
##### Example – Two vulnerable endpoints use a single component, library, or framework:
```
[http://example.com/vuln1]
<?php
	Include(‘csrf-framework’);			// fix 1
	csrf-framework-bypass();			// Report A 
?>

[http://example.com/vuln2]
<?php
	Include(‘csrf-framework’);
	csrf-framework-replay-attack();		// Report B
?>
```
In the last example, the program may fix the two bugs at once by upgrading or changing to a new framework.
