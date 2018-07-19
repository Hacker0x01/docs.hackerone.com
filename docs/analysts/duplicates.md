---
title: "Determining Duplicate Reports"
path: "/analysts/duplicates.html"
id: "analysts/duplicates"
---

A duplicate report occurs when a hacker reports a vulnerability that has already been reported. There are two main steps of determining if the report is considered a duplicate: finding which one is the first submission and determining if the reports are the same vulnerability.

## 1. Finding the first submission

### 1.1. Compare with the submission dates and times

Two reports can be ordered by comparing with their submission dates and times, in which the earlier is considered the first one.

#### Example 1:
```
Report A – submitted on Jun 20, 2018 (First submission)
Report B – submitted on Jun 22, 2018 
```
#### Example 2:
```
Report A – submitted on Jun 20, 2018. 07:00 (First submission)
Report B – submitted on Jun 20, 2018. 07:15
```
### 1.2. Compare with the report IDs

They can also be ordered by comparing with their report IDs, in which the lower number is considered the first submission, for example:
```
Report A – ID: #1234 (First submission)
Report B –ID: #1300
```
## 2. Same Vulnerability

There are many ways to determine if the reports are of a single vulnerability:

### 2.1. Duplication based on the vulnerable code location

Reports are duplicated if they will be fixed with a single or the same vulnerable code change. The code may occur on the same or on the different endpoints. The following list some of the example cases:

#### Example – Reports of the same vulnerability type on the same endpoint:
```
Report A:	XSS on http://example.com/vuln1
Report B:	XSS on http://example.com/vuln1
```
-	The report A is a duplicate of B if the vulnerability resides in the single source code location of the endpoint, for example:
```
[http://example.com/vuln1]
<?php
  echo $xss1;		// Report A & Report B – Fix 1
?>
```
-	Otherwise, the report A is not a duplicate if there are different fix locations in the source code, for example:
```
[http://example.com/vuln1]
<?php
	echo $xss1;		// Report A – fix 1
	…
	echo $xss2;		// Report B – fix 2
?>
```
#### Example – Reports of the same vulnerability type on the different endpoints:

```
Report A: XSS on http://example.com/vuln1
Report B: XSS on http://example.com/vuln2
```
There are times when two or more endpoints use the same code base from another endpoint. They will be considered as a duplicate if the fixing requires a single source code location (usually on the root endpoint), for example:
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
In the most cases, reports of a single vulnerability that occurs on many endpoints are not duplicates as each one needs its own fix, for example:
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
However, sometimes the programs may decide otherwise, see section 2.2. “Duplication based on the root cause or component”.

#### Example – Reports of the different vulnerability types on the same endpoint:
```
Report A: XSS on http://example.com/vuln1
Report B: SQL Injection on http://example.com/vuln1
```
Generally, two vulnerability types are not duplicates even if they live in the same endpoint because fixing requires a separated fix for each bug, for example:
```
[http://example.com/vuln1]
<?php
	echo $xss1;		// Report A – fix 1
	…
	sqli_query();		// Report B – fix 2
?>
```
#### Example – Reports of the different vulnerability types on the different endpoints:
```
Report A: XSS on http://example.com/vuln1
Report B: SQL Injection on http://example.com/vuln2
```
Usually, two vulnerability types on the different endpoints are not duplicates, because they require a separate fixe for each bug, for example:
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
Even if the endpoints use the same code base, they still require distinct fixes, for example:
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
### 2.2. Duplication based on the root cause or component

Some programs decide the duplication based on the root cause or component. Though they require separate fixes, the reported vulnerability may already be aware by the programs. In that case, some programs treat them as duplicates, and some awards a smaller bounty than the original report. For example:

#### Example – Two vulnerable endpoints use the same copy of code base:
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
#### Example – Two vulnerable endpoints use a single component, library, or framework:
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

## Related Articles:

Report Management – Duplicate Reports https://docs.hackerone.com/programs/duplicate-reports.html
