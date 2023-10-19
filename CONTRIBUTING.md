# Style Guide

### Adding New Articles
You can add new articles to either the Hacker Book or the Organization Book.

#### Review Process
All pull requests require approval before going live. New documents should be reviewed by the UX or Technical Writer before being approved. 

#### Hacker Book
When adding a new article, make sure you format the file such that the first several lines of the markdown file are:

```md
---
title: "Title of the Article"
path: "/hackers/title-of-the-article.html"
id: "hackers/title-of-the-article"
---
```

#### Program Book
When adding a new article to the program book, make sure you format the file such that the first several lines of the markdown file are:

```md
---
title: "Title of the Article"
path: "/organizations/title-of-the-article.html"
id: "organizations/title-of-the-article"
---
```

#### Changelog Entry For a New Month
You can also add a changelog entry for a new month that isn't listed on the changelog yet. To add a changelog entry for a new month, make sure you format the file such that the first several lines of the markdown file are:

```md
---
title: "Month Year"
path: "/changelog/[year]/[month]"
date: "year-month number"
---
```

Example:
```md
---
title: "November 2016"
path: "/changelog/2016/November"
date: "2016-11"
---
```

### GitHub Formatting
How do I... | Answer
----------- | -------
Add a link to a page within the docs site of the same book | `[Start H1 Response](start-h1-response.html)` or `[Start H1 Bounty](start-h1-bounty.html)`.
Add a link to a page within the docs site to an article in another book | `[Start H1 Bounty](/organizations/start-h1-bounty.html)`
Add an image | `![image name](./images/signal-impact-2.png)`
Reference the HackerOne blog link | Use `https://www.hackerone.com/blog` not www.hackerone.com/blog

### Active Voice
We use active voice at HackerOne as active voice is more personal and engaging vs. passive voice. In active voice, the subject does or acts upon the verb, while in passive voice, the subject is being acted upon.

Active Voice (Yes, please use this!) | Passive Voice (Steer away from this)
------------------------------------ | -------------------------------------
Click the link to search | The link should be clicked when you're ready to search for an article.
The hacker reported the vulnerability. | The vulnerability was reported by the hacker.
The security team triaged the report. | The report was triaged by the security team.

### Contractions
In order to convey a personal and less formal voice, it's best to use contractions instead of the formal non-contractions.

Contraction - (Yes, please use this!) | Non-Contracted Phrases (Steer away from this)
------------------------------------- | -----------------------------------
can't | cannot
don't | do not
won't | will not
it's | it is
they're | they are
we've | we have
you're | you are

### Abbreviations
>Do not use abbreviations in our platform without spelling them out completely first. Your first mention should be the full word with the abbreviation in parenthesis. After that, you can use the abbreviation for all further mentions. Eg: HackerOne's Bug Bounty Program (BBP) is a public program. Please be mindful that not all BBPs are public. 

Below are some common abbreviations used by HackerOne

Abbreviation | Definition
----------- | -----------
2FA | 2 Factor Authentication
API | Application Programming Interface
BBP | Bug Bounty Program
CTF | Capture The Flag
CVE | Common Vulnerabilities & Exposures
CVSS | Common Vulnerability Scoring System
MFA | Multi-Factor Authentication
SOC | Security Operations Center
VDP | Vulnerability Disclosure Program
XSS | Cross-Site Scripting


### Spelling
There are some words that can be used with multiple spellings. In order to keep consistency, we need to agree on which spelling to go with.

This | NOT | That
---- | --- | ----
cyberattack | NOT | cyber attack
engagement | NOT | program
organization | NOT | company
hacker-powered | NOT | hacker powered
internet | NOT | Internet
eBook | NOT | ebook or e-book
e-commerce | NOT | ecommerce (capitalized at the beginning of a sentence only)
pentest and pentesting as one word | NOT | pen test or pen testing
cybercriminal, bad actor, or malicious actor | NOT | criminal
hacker | NOT | researcher   Exception: communication with government programs
malicious hacker | NOT | black hat
ethical hacker | NOT | white hat
checkbox | NOT | check box
double-check | NOT | double check (this is a noun)

### Numbers
For numbers that are greater than 0, use the numerical number instead of spelling it out. For 0, spell out the word.

Yes | No
--- | ---
Zero | 0
There are **2** vulnerabilities in that program. | There are **two** vulnerabilities in that program.
The program has **3** valid reports. | The program has **three** valid reports.

### Error Messages
The purpose of error messages isn’t to tell users that they’ve made a mistake. The goal is to give them instructions with how to fix an error.

Good Error Message | Bad Error Message
------------------ | -----------------
Enter a date that isn’t before the reported date. | The resolved date can’t be before the reported date.
Sorry, we couldn’t find an account with that username. Can we help you recover your username? | That username doesn’t exist.
Sorry, that password isn’t right. We can help you recover your password. | Wrong password.
Enter a valid email address to use as your Apple ID. | The email address entered is invalid.
That account doesn’t exist. Enter a different account or create a new one. | Sign-in unsuccessful. Please try again.

### Embedded Videos
The preferred source of instructional embedded videos is the [HackerOne YouTube channel](https://www.youtube.com/@HackerOneTV) and configured to be `Unlisted`. These should render on-page as an iframe with the following parameters:
```html
<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube-nocookie.com/embed/<YOUTUBE_VIDEO_ID>" frameborder="0" allowfullscreen></iframe>
```
#### Community Video Contributions
If you're not a HackerOne employee or video content partner, please open a pull request or issue with a publicly accessible link to download the video file so it can be updloaded to HackerOne's YouTube channel. Note that video content will be need to be reviewed by various HackerOne teams; this may result in longer response times from the maintainers of this repository.
