# Style Guide 
### Changelog
When adding a new entry to the changelog, make sure you format the file such that the first several lines of the markdown file are:

`---`
`title: "November 2016"`
`path: "/changelog/2016/november"`
`date: "2016-11"`
`---`

### New Articles
You can add new articles to either the Hacker Book or the Program Book.

#### Hacker Book
When adding a new article, make sure you format the file such that the first several lines of the markdown file are:

`---
title: "Title of the Article"
path: "/hackers/title-of-the-article.html"
id: "hackers/title-of-the-article"
---`

#### Program Book
When adding a new article to the program book, make sure you format the file such that the first several lines of the markdown file are:

`---
title: "Title of the Article"
path: "/programs/title-of-the-article.html"
id: "programs/title-of-the-article"
---`

### Formatting
How do I... | Answer
----------- | -------
Add a link to a page within the docs site of the same book | `[Start H1 Response](start-h1-response.html)` or `[Start H1 Bounty](start-h1-bounty.html)`.
Add a link to a page within the docs site to an article in another book | `[Start H1 Bounty](/programs/start-h1-bounty.html)`
Add an image | `![image name](./images/signal-impact-2.png)`
Referencing the HackerOne blog link | Use `https://hackerone.com/blog` not www.hackerone.com/bog
