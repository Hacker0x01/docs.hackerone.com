---
title: "HackerOne Platform Accessibility Conformance Report Revised Section 508 Edition"
path: "/accessibility/vpat.html"
id: "accessibility/vpat"
bookIndexFor: "accessibility"
---

**VPAT® Version 2.3 (Revised) – April 2019**

**Name of Product/Version:** HackerOne Bug Bounty & Vulnerability Disclosure Platform ("HackerOne Platform")

**Product Description:** The HackerOne Platform is a platform for an improved security coordination process. Security teams use HackerOne to implement their vulnerability disclosure policy and host bug bounty programs. The platform will communicate the procedures of how to discover and report security vulnerabilities in accordance with industry best practices.

**Last Updated:** September 26, 2019

**Evaluation Methods Used:** Accessibility testing consisted of but was not limited to: automated testing, extensive manual testing, general product knowledge, etc.

**Applicable Standards/Guidelines:** See below.

This report covers the degree of conformance for the following accessibility standard/guidelines:

Standard/Guideline | Included in Report
------------------ | ------------------
[Web Content Accessibility Guidelines 2.0](http://www.w3.org/TR/2008/REC-WCAG20-20081211) | Level A (Yes)<br>Level AA (Yes)<br>Level AAA (No)
[Revised Section 508 standards published January 18, 2017 and corrected January 22, 2018](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines) | (Yes)

## Terms
The terms used in the Conformance Level information are defined as follows:
* **Supports:** The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
* **Partially Supports:** Some functionality of the product does not meet the criterion.
* **Does Not Support:** The majority of product functionality does not meet the criterion.
* **Not Applicable:** The criterion is not relevant to the product.
* **Not Evaluated:** The product has not been evaluated against the criterion. This can be used only in WCAG 2.0 Level AAA.

## WCAG 2.0 Report
Tables 1 and 2 also document conformance with:
* Chapter 5 – 501.1 Scope, 504.2 Content Creation or Editing
* Chapter 6 – 602.3 Electronic Support Documentation

Note: When reporting on conformance with the WCAG 2.0 Success Criteria, they are scoped for full pages, complete processes, and accessibility-supported ways of using technology as documented in the [WCAG 2.0 Conformance Requirements](https://www.w3.org/TR/WCAG20/#conformance-reqs).

### Table 1: Success Criteria, Level A

Criteria | Conformance Level | Remarks and Explanations
-------- | ----------------- | ------------------------
[1.1.1 Non-text Content](http://www.w3.org/TR/WCAG20/#text-equiv-all) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li><li>602.3 (Support Docs) | Web: Supports | Web: The HackerOne Platform has no known accessibility issues. Non-text content provides discernible/accessible labels and name markup.
[1.2.1 Audio-only and Video-only (Prerecorded)](http://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li><li>602.3 (Support Docs)</li> | Web: Not Applicable | Web: There is no content to which success criterion applies. Audio and video media are not used.
[1.2.2 Captions (Prerecorded)](http://www.w3.org/TR/WCAG20/#media-equiv-captions) (Level A) <br>Also applies to:<br>Revised Section 508 <ul><li>501 (Web)(Software)</li><li>504.2 (Authoring Tool)</li><li>602.3 (Support Docs)</li> | Web: Not Applicable | Web: The HackerOne Platform has no prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.
[1.2.3 Audio Description or Media Alternative (Prerecorded)](http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: There is no content to which success criterion applies. Audio and video media are not used.
[1.3.1 Info and Relationships](http://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Semantic mark-up (e.g. landmarks, headings, labels) are provided.
[1.3.2 Meaningful Sequence](http://www.w3.org/TR/WCAG20/#content-structure-separation-sequence) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Pages follow a logical reading sequence.
[1.3.3 Sensory Characteristics](http://www.w3.org/TR/WCAG20/#content-structure-separation-understanding) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Descriptive mark-up (e.g. button text, tool-tips, alt tags) are provided.
[1.4.1 Use of Color](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: The HackerOne Platform does not use color anywhere as the sole indicator of functionality.
[1.4.2 Audio Control](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: There is no content to which success criterion applies. Audio media is not used.
[2.1.1 Keyboard](http://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Partially Supports | Web: Most forms support keyboard shortcuts though some functionality requires a pointer.
[2.1.2 No Keyboard Trap](http://www.w3.org/TR/WCAG20/#keyboard-operation-trapping) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. User focus can be moved away from any component using keyboard tab keys.
[2.2.1 Timing Adjustable](http://www.w3.org/TR/WCAG20/#time-limits-required-behaviors) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Partially supports | Web: There are some newer features within the pentest component that require a user to submit content within a time limit. This is not adjustable by the user.
[2.2.2 Pause, Stop, Hide](http://www.w3.org/TR/WCAG20/#time-limits-pause) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Pages do not have any moving, blinking, scrolling, or auto-updating information.
[2.3.1 Three Flashes or Below Threshold](http://www.w3.org/TR/WCAG20/#seizure-does-not-violate) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Pages do not include any flashing elements. Thank goodness we're out of the 90s!
[2.4.1 Bypass Blocks](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software) – Does not apply to non-web software</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs) – Does not apply to non-web docs</li> | Web: Supports | Web: The HackerOne Platform does not have any repetitive content where a skip or bypass functionality would be necessary.
[2.4.2 Page Titled](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Pages are labeled with descriptive titles.
[2.4.3 Focus Order](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Page elements follow a logical focus order.
[2.4.4 Link Purpose (In Context)](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li>| Web: Supports | Web: No known accessibility issues. Page links are labeled with descriptive text.
[3.1.1 Language of Page](http://www.w3.org/TR/WCAG20/#meaning-doc-lang-id) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Page markup indicates English for default language.
[3.2.1 On Focus](http://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Context does not change on page element focus.
[3.2.2 On Input](http://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Page context does not change on user input.
[3.3.1 Error Identification](http://www.w3.org/TR/WCAG20/#minimize-error-identified) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. When applicable, form pages provide error condition messaging text.
[3.3.2 Labels or Instructions](http://www.w3.org/TR/WCAG20/#minimize-error-cues) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. When applicable, web form pages provide self-describing labels and/or instructional text.
[4.1.1 Parsing](http://www.w3.org/TR/WCAG20/#ensure-compat-parses) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.
[4.1.2 Name, Role, Value](http://www.w3.org/TR/WCAG20/#ensure-compat-rsv) (Level A) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)<li> | Web: Partially Supports | Web: Name and value attributes on elements in most cases is discernible; role is sometimes absent.

### Table 2: Success Criteria, Level AA

Criteria | Conformance Level | Remarks and Explanations
-------- | ----------------- | ------------------------
[1.2.4 Captions (Live)](http://www.w3.org/TR/WCAG20/#media-equiv-real-time-captions) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Not Applicable | Web: There is no content to which success criterion applies. Live audio content is not used.
[1.2.5 Audio Description (Prerecorded)](http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc-only) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Not Applicable | Web: There is no content to which success criterion applies. Prerecorded video content is not used.
[1.4.3 Contrast (Minimum)](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Contrast minimums are supported.
[1.4.4 Resize Text](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Partially Supports | Web: No known accessibility issues. 200% zoom factor is supported and on most pages looks proper.
[1.4.5 Images of Text](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues.
[2.4.5 Multiple Ways](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software) – Does not apply to non-web software</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs) – Does not apply to non-web docs</li> | Web: Partially Supports | Web: In most cases there is more than one route to any given page.
[2.4.6 Headings and Labels](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Descriptive heading and label markup is provided.
[2.4.7 Focus Visible](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Focus indicator is natively provided via major browser software vendors.
[3.1.2 Language of Parts](http://www.w3.org/TR/WCAG20/#meaning-other-lang-id) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. Page markup indicates English for default language.
[3.2.3 Consistent Navigation](http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-locations) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software) – Does not apply to non-web software</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs) – Does not apply to non-web docs</li> | Web: Supports | Web: No known accessibility issues. Consistent page-to-page navigation is provided via our top nav.
[3.2.4 Consistent Identification](http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-functionality) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software) – Does not apply to non-web software</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs) – Does not apply to non-web docs</li> | Web: Supports | Web: No known accessibility issues. Consistent identification applied to components across pages.
[3.3.3 Error Suggestion](http://www.w3.org/TR/WCAG20/#minimize-error-suggestions) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: No known accessibility issues. When applicable, form pages provide error suggestion text.
[3.3.4 Error Prevention (Legal, Financial, Data)](http://www.w3.org/TR/WCAG20/#minimize-error-reversible) (Level AA) <br>Also applies to: <br>Revised Section 508 <ul><li>501 (Web)(Software)</li> <li>504.2 (Authoring Tool)</li> <li>602.3 (Support Docs)</li> | Web: Supports | Web: These actions are either checked or confirmed.

### Table 3: Success Criteria, Level AAA
Notes: Section removed as Section 508 Does not apply

## Revised Section 508 Report
Notes:

### Chapter 3: [Functional Performance Criteria](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#302-functional-performance-criteria) (FPC)
Notes:

Criteria | Conformance Level | Remarks and Explanations
-------- | ----------------- | ------------------------
302.1 Without Vision | Supports | Accessible mark-up utilized for screen readers.
302.2 With Limited Vision | Supports | Accessible mark-up utilized for screen readers.
302.3 Without Perception of Color | Supports | No input depends on perception of color.
302.4 Without Hearing | Supports | No dependency on sound.
302.5 With Limited Hearing | Supports | No dependency on sound.
302.6 Without Speech | Supports | No dependency on sound.
302.7 With Limited Manipulation | Supports | No place to input speech.
302.8 With Limited Reach and Strength | Supports | Screen reader support, mouse, and keyboard only operation are provided.
302.9 With Limited Language, Cognitive, and Learning Abilities | Supports | Simple design, ease of use in mind.

### Chapter 4: [Hardware](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#401-general)
Notes: Section removed.  Not applicable.  The HackerOne Platform is a web-only application.

### Chapter 5: [Software](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#501-general)
Notes: Section removed.  Not applicable.  The HackerOne Platform is a web-only application.

### Chapter 6: [Support Documentation and Services](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines#601-general)
Notes: Section removed.  Not applicable.  The HackerOne Platform is a web-only application.
