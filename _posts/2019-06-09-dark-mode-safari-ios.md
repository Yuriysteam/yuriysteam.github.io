---
layout: post
title: "Enable dark mode in CSS for Safari iOS 13"
description: ""
date: 2019-06-09 00:00:00
categories: Design
tags: interface
promo: promo.html
---

With MacOS to Mojave 10.14 Apple introduced dark theme support with CSS. With the release of iOS 13 same benefit [comes](https://developer.apple.com/documentation/safari_release_notes/safari_13_beta_release_notes) to Safari on the iPhone and iPad.

Implementing dark mode is easy. Include media query to CSS of a web page:

`@media (prefers-color-scheme: dark) {/* styles for dark mode */}`

I believe we should provide the best experience when the browser automatically detects the user’s choice. Soon there will be a crowd on iPhones and iPads with iOS 13 who turn on dark mode and go browsing.  Care about the viewer and their eyes. Prepare your web pages.

<span class="p1000">![Dark mode iOS web](/blog_img/advices/dark.png)</span>

### Three main design principles for dark mode

1. Use shades of white and black. White text on pure black background makes reading hard for eyes.
2. Use lighter weights for fonts if possible. This will increase readable and make letterforms sharper.   
3. Switch to PNG for transparency.