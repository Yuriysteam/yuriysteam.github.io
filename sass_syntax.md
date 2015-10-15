---
layout: default
title: Sass syntax cheatseet
cover: false
logo: true

---

##Sass cheatsheet

###Basic

```
.entry
  color: blue
  font-size: 0.3em
``` 

###Nasting

```
#main
  color: blue
  font-size: 0.3em

  a
    font:
      weight: bold
      family: serif
    &:hover
      background-color: #eee
```

###Variables

```
$var: blue
a 
	color: $var
```

###Import

```
@import 'font.css'
```
###Multipal selectors


```
.users #userTab,
.posts #postTab
  width: 100px
  height: 30px
```

###Mixin

```
=large-text
  font:
    family: Arial
    size: 20px
    weight: bold
  color: #ff0000

h1
  +large-text
```
