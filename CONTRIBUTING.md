# Style Guide

### Adding New Articles
You can add new articles to either the Hacker Book or the Program Book.

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
path: "/programs/title-of-the-article.html"
id: "programs/title-of-the-article"
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
Add a link to a page within the docs site to an article in another book | `[Start H1 Bounty](/programs/start-h1-bounty.html)`
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

### Spelling
There are some words that can be used with multiple spellings. In order to keep consistency, we need to agree on which spelling to go with.

Yes | No
--- | ---
checkbox | check box
double-check | double check (this is a noun)

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
