---
layout: post
title: "How to Disable Tab Preview in Safari MacOS Big Sur"
description: "How to turn off hover on tabs in Safari 14 in MacOS Big Sur and Catalina"
date: 2020-09-21 02:00:00
categories: Design
tags: design
---

You can disable tab previews in debug menu.

### Allow access to Full Disk for Terminal

Go to Settings > Security & Privacy > Privacy 

<span class="p800"><img src="/assets/images/lazy.png" alt="How to Disable Tab Preview in Safari MacOS Big Sur" data-echo="/blog_img/advices/fulldisk.png"></span>

Restart the Mac

### Type in Terminal

`defaults write com.apple.Safari IncludeInternalDebugMenu 1`

<span class="p800"><img src="/assets/images/lazy.png" alt="How to Disable Tab Preview in Safari MacOS Big Sur" data-echo="/blog_img/advices/terminal.png"></span>

and Launch Safari

### Unselect Show Tab Preview on Hover

In Tab Features > Show Tab Preview on Hover remove the check mark

<span class="p800"><img src="/assets/images/lazy.png" alt="How to Disable Tab Preview in Safari MacOS Big Sur" data-echo="/blog_img/advices/safaridebug.png"></span>

To hide Debug menu type in Terminal

<span class="p800"><img src="/assets/images/lazy.png" alt="How to Disable Tab Preview in Safari MacOS Big Sur" data-echo="/blog_img/advices/terminal2.png"></span>