# TheNetNinja jQuery tutorial notes
## Installation
### CDN
Include the CDN in the head section of HTML file:  
```js
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="scripts/my_jquery_functions.js"></script>
</head>
```
The main script can be included in the head section or before closing body tag.

### File
Download and include file 'jquery-version':
```js
<head>
  <script src="scripts/jquery-version"></script>
  <script src="scripts/my_jquery_functions.js"></script>
</head>
```
### NPM
`npm install jquery` installs jQuery in node_modules/jquery/dist/

## Basic Syntax
Basic syntax looks like:
`$(selector).action()`

### wrapped
Grab an element (returns a jQuery object):
`$(selector)`

### unwrapped
Grab an element (returns a vanilla JavaScript object, we don't have access to jQuery methods and effeccts):
`$(selector)[0]`

## Selectors
It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.

`$(selector)`

[List of selectors](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

[Selectors tester](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

## Events
**Mouse Events:**	click, dblclick, mouseenter, mouseleave

**Keyboard Events:v keypress, keydown, keyup

**Form Events:** submit, change, focus,	blur

**Document/Window Events:** load, resize, scroll, unload

Example:
```js
$("p").click(function(){
  // action goes here!!
});
```
The on() method attaches one or more event handlers for the selected elements:
```js
$("p").on("click", function(){
  $(this).hide();
});
```
```js
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});
```
### The Document Ready Event
Standard (readable):
```js
$(document).ready(function(){
  // jQuery methods go here...
});
```
Shortcut (new, easier):
```js
$(function(){
  // jQuery methods go here...
});
```
