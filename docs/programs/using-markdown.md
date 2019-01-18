---
title: "Using Markdown"
path: "/programs/using-markdown.html"
id: "programs/using-markdown"
---

HackerOne supports the following markdown syntax on reports, profiles, and security pages.

### HEADERS
```
A First Level Header
=====================

A Second Level Header
---------------------

### Header 3
```
A First Level Header
=====================

A Second Level Header
---------------------

### Header 3

### BLOCKQUOTE
```
>text in blockquote
>more text in blockquote
```
>text in blockquote

>more text in blockquote

### TEXT EMPHASIS
Markdown Input:
```
*This text is italicized*
_This text is underlined_
**This text is bold**
__This text is bold__
~~This text is deleted~~
```
Output:
![text emphasis output](./images/markdown-5.png)

### LISTS
#### Unordered Lists
```
* Candy.
* Gum.
* Juice.
```
this:
```
+ Candy.
+ Gum.
+ Juice.
```
and this:
```
- Candy
- Gum.
- Juice.
```
all produce the same output:
* Candy.
* Gum.
* Juice.

#### Numbered Lists
```
1. Red
2. Green
3. Blue
```
1. Red
2. Green
3. Blue

If you put blank lines between items, you’ll get `<p>` tags for the list item text. You can create multi-paragraph list items by indenting the paragraphs by 4 spaces or 1 tab:
```
* A list item.

  With multiple paragraphs.

* Another item in the list.
```
* A list item.

  With multiple paragraphs.

* Another item in the list.

### LINKS
Markdown supports two styles for creating links: *inline* and *reference*. With both styles, you use square brackets to delimit the text you want to turn into a link.

Inline-style links use parentheses immediately after the link text. For example:
```
This is an [example link](http://example.com/).
```
This is an [example link](http://example.com/).

Optionally, you may include a title attribute in the parentheses. Hover on the link to see the title:
```
This is an [example link](http://example.com/ "With a Title").
```
This is an [example link](http://example.com/ "With a Title").

Reference-style links allow you to refer to your links by names, which you define elsewhere in your document:
```
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"
```
I get 10 times more traffic from [Google](http://google.com/) than from [Yahoo](http://search.yahoo.com/) or [MSN](http://search.msn.com/).

The title attribute is optional. Link names may contain letters, numbers and spaces, but are not case sensitive:
```
I start my morning with a cup of coffee and
[The New York Times][NY Times].

[ny times]: http://www.nytimes.com/
```
I start my morning with a cup of coffee and [The New York Times](http://www.nytimes.com/).

### CODE
In a regular paragraph, you can create code span by wrapping text in back tick quotes. Any ampersands (&) and angle brackets (< or >) will automatically be translated into HTML entities. This makes it easy to use Markdown to write about HTML example code.
```
The text has sample `code`
```
The text has sample code

To specify an entire block of pre-formatted code, wrap the text within 3 back tick quotes \`\`\`. Just like with code spans, &, <, and > characters will be escaped automatically.
```
This is a multiline code block.
```

To use syntax highlighting, specify the content type after the three opening back tick quotes.

```
```javascript
document.location = 'https://hackerone.com';
```

Go to the following web page to see which content types are available for syntax highlighting: https://github.com/jneen/rouge/tree/master/lib/rouge/demos.

### USER MENTIONS
You can mention a user by prefixing username with '@' symbol
```
@demo-member reported the issue
```
@demo-member reported the issue

### REPORT REFERENCES
You can reference a report by prefixing report id with '#' symbol
```
#105887 is a publicly disclosed bug
```
[#105887](https://hackerone.com/reports/105887) is a publicly disclosed bug

### ATTACHMENT REFERENCES
You can reference an attachment while writing reports, comments in reports and report summary. You can do this by writing 'F' followed by attachment id (F). The attachment id is displayed before the attachment name once the upload is successful.

Example: Consider a user is creating a report and uploads an attachment. Once the attachment is uploaded successfully, you will see see the reference id with the attachment name.
![markdown-1](./images/markdown-1.png)

Now you can reference the attachment in the report by writing 'F1' and the attachment is referenced in the report as shown below.
![markdown-2](./images/markdown-2.png)

When the link is clicked, the attachment is displayed in the modal.
![markdown-3](./images/markdown-3.png)

### INLINE IMAGES AND VIDEOS
You can inline images and videos in the report description, comments and report summary by writing the attachment reference id within curly braces (as in {F:id}). Example: For the above attachment, the markdown
```
 Here is an inlined image of an apple {F1}
```
will render the following:
![markdown-4](./images/markdown-4.png)
