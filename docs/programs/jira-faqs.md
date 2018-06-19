---
title: "Jira FAQs"
path: "/programs/jira-faqs.html"
id: "programs/jira-faqs"
---

Question | Answer
-------- | ------
The HackerOne markdown doesn't convert correctly to Jira. How can I convert the markdown correction to Jira? | You can use a Jira optimized template by setting the escalation template to: {{details_custom_jira}}.
What fields are supported in the bi-directional Jira integration? | We currently support these 4 fields:<br><ul><li>Summary</li><li> Description</li><li>Project</li><li>Issue_type</li></ul>All of the fields are required to correctly set up the Jira integration.<br><br>If you have an issue template that has more required fields than these 4, you need to update or create a new template to only require the 4 fields above.</br> 
I have multiple HackerOne programs. Can I integrate each of these programs to the same Jira instance? | Yes, you can integrate multiple HackerOne programs to the same Jira instance, only if you're using Jira Server. To integrate Jira with multiple HackerOne programs:<ul>1. For your first program to integrate with Jira, follow all of the steps outlined [here](jira-server.html).</ul><ul>2. For each subsequent program you need to add an integration for, only follow steps 12-16 in [this article](jira-server.html).<ul><li>You only need to follow steps 12-16 here because the application link has already been created when integrating with your first program, and only 1 application link is needed to set up a Jira integration.</li></ul></ul>If you're using Jira Cloud, you can't integrate multiple programs to a shared Jira instance as we don't support this with our Jira Cloud integration. In order to work around this, you can set up your integration following the Jira Server Steps listed above as they also work with the Jira Cloud integration. 
