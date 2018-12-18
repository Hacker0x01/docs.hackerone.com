# Style Guide 
### Changelog
When adding a new entry to the changelog, make sure you format the file such that the first several lines of the markdown file are:

`---`<br>
`title: "November 2016"`<br>
`path: "/changelog/2016/november"`<br>
`date: "2016-11"`<br>
`---`

### New Articles
You can add new articles to either the Hacker Book or the Program Book.

#### Hacker Book
When adding a new article, make sure you format the file such that the first several lines of the markdown file are:

`---`<br>
`title: "Title of the Article"`<br>
`path: "/hackers/title-of-the-article.html"`<br>
`id: "hackers/title-of-the-article"`<br>
`---`

#### Program Book
When adding a new article to the program book, make sure you format the file such that the first several lines of the markdown file are:

`---`<br>
`title: "Title of the Article"`<br>
`path: "/programs/title-of-the-article.html"`<br>
`id: "programs/title-of-the-article"`<br>
`---`

### Formatting
How do I... | Answer
----------- | -------
Add a link to a page within the docs site of the same book | `[Start H1 Response](start-h1-response.html)` or `[Start H1 Bounty](start-h1-bounty.html)`.
Add a link to a page within the docs site to an article in another book | `[Start H1 Bounty](/programs/start-h1-bounty.html)`
Add an image | `![image name](./images/signal-impact-2.png)`
Referencing the HackerOne blog link | Use `https://hackerone.com/blog` not www.hackerone.com/bog
