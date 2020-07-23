---
title: "Using Markdown"
path: "/programs/using-markdown.html"
id: "programs/using-markdown"
---

<style>
.contents {
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  border-radius: 0.3em;
  width: 60%;
}
</style>

HackerOne supports markdown syntax on reports, profiles, and security pages.

### Headers

Markdown Input:

```
A First Level Header
=====================

A Second Level Header
---------------------

### Header 3
```

Output:

![headers](./images/markdown-headers.png)

### Blockquotes

Markdown Input:

```
>text in blockquote
>more text in blockquote
```

Output:

![blockquotes](./images/markdown-blockquote.png)

<br>

### Text emphasis

Markdown Input:

```
*This text is italicized*
_This text is underlined_
**This text is bold**
__This text is bold__
~~This text is deleted~~
==This text is highlighted==
```

Output:
![text emphasis output](./images/markdown-5.png)


### Lists

#### Unordered Lists

Markdown Input:

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

![unordered list](./images/markdown-bullets.png)

#### Numbered Lists

Markdown Input:

```
1. Red
2. Green
3. Blue
```

Output:

![ordered list](./images/markdown-numbered-list.png)

If you put blank lines between items, you’ll get `<p>` tags for the list item text. You can create multi-paragraph list items by indenting the paragraphs by 4 spaces or 1 tab:

```
* A list item.

  With multiple paragraphs.

* Another item in the list.
```

![multiple](./images/markdown-multiple.png)

### Links

Markdown supports two styles for creating links: *inline* and *reference*. With both styles, you use square brackets to delimit the text you want to turn into a link.

Inline-style links use parentheses immediately after the link text. For example:

Markdown Input:
```
This is an [example link](http://example.com/).
```

Output:

![link](./images/markdown-link-3.png)

Optionally, you may include a title attribute in the parentheses. Hover on the link to see the title:
```
This is an [example link](http://example.com/ "With a Title").
```
This is an [example link](http://example.com/ "With a Title").

Reference-style links allow you to refer to your links by names, which you define elsewhere in your document:

Markdown Input:

```
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"
```

Output:

![multiple links](./images/markdown-links-2.png)

The title attribute is optional. Link names may contain letters, numbers and spaces, but are not case sensitive.

Markdown Input:

```
I start my morning with a cup of coffee and
[The New York Times][NY Times].

[ny times]: http://www.nytimes.com/
```

Output:

![ny times link](./images/markdown-links.png)

#### Email Links
You don't need to use markdown to create a `mailto:` link. Simply enter the email as is and it will automatically be converted to a `mailto:` link.

### Code

In a regular paragraph, you can create code span by wrapping text in back tick quotes. Any ampersands (&) and angle brackets (< or >) will automatically be translated into HTML entities. This makes it easy to use Markdown to write about HTML example code.

Markdown Input:

```
The text has sample `code`
```

Output:

![code](./images/markdown-code.png)

To specify an entire block of pre-formatted code, wrap the text within 3 back tick quotes \`\`\`. Just like with code spans, &, <, and > characters will be escaped automatically.

Markdown Input:

![codeblock input](./images/markdown-codeblock-input.png)

Output:

![codeblock output](./images/markdown-codeblock-output.png)

To use syntax highlighting, specify the content type after the three opening back tick quotes.

Markdown Input:

```
```javascript
document.location = 'https://hackerone.com';
```

Output:

![markdown code syntax](./images/markdown-code-syntax.png)

Go to the following web page to see which content types are available for syntax highlighting: https://github.com/jneen/rouge/tree/master/lib/rouge/demos.

### User mentions
You can mention a user by prefixing username with '@' symbol

Markdown Input:

```
@demo-member reported the issue
```

Output:

![markdown user mention](./images/markdown-user-mentions.png)


<br>

### Report references

You can reference a report by prefixing report id with '#' symbol
```
#105887 is a publicly disclosed bug
```
[#105887](https://hackerone.com/reports/105887) is a publicly disclosed bug

### Attachment references

You can reference an attachment while writing reports, comments in reports and report summary. You can do this by writing 'F' followed by attachment id (F). The attachment id is displayed before the attachment name once the upload is successful.

Example: Consider a user is creating a report and uploads an attachment. Once the attachment is uploaded successfully, you will see see the reference id with the attachment name.
![markdown-1](./images/markdown-1.png)

Now you can reference the attachment in the report by writing 'F1' and the attachment is referenced in the report as shown below.
![markdown-2](./images/markdown-2.png)

When the link is clicked, the attachment is displayed in the modal.
![markdown-3](./images/markdown-3.png)

### Inline images and videos

You can insert inline images and videos in the report description, comments and report summary by writing the attachment reference id within curly braces (as in {F:id}).

Example: For the above attachment, the markdown


```
 Here is an inlined image of an apple {F1}
```

will render the following:

![markdown-4](./images/markdown-4.png)
