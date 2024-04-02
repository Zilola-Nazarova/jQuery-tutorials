# TheNetNinja jQuery tutorial notes
## Installation
### CDN
Include the CDN in the head section of HTML file:  
```html
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="scripts/my_jquery_functions.js"></script>
</head>
```
The main script can be included in the head section or before closing body tag.

### File
Download and include file 'jquery-version':
```html
<head>
  <script src="scripts/jquery-version"></script>
  <script src="scripts/my_jquery_functions.js"></script>
</head>
```
### NPM
Installs jQuery in node_modules/jquery/dist/:
> npm install jquery

## Basic Syntax
Basic syntax looks like:
> $(selector).action()

### wrapped
Grab an element (returns a jQuery object):
> $(selector)

### unwrapped
Grab an element (returns a vanilla JavaScript object, we don't have access to jQuery methods and effeccts):
> $(selector)[0]

## Selectors
It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.
> $(selector)
> $(selector1, selector2, selector 3)
Example:
```js
$("p:not(.intro), ul li:first-child, a[target='_blank']").addClass("blue");
```

[List of selectors](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

[Selectors tester](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

## Events
**Mouse Events:**	click, dblclick, mouseenter, mouseleave

**Keyboard Events:** keypress, keydown, keyup

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

### The Window Load Event
E.g. when we want to get image dimensions we'd need to wait all images (not only their tags) to be loaded in the first place.
```js
$(window).load(function(){
  // jQuery methods go here...
});
$(window).on("load", function(){
  // jQuery methods go here...
});
```

## Effects
Hide/show:
> $(selector).hide(speed,callback)
> 
> $(selector).show(speed,callback)
> 
> $(selector).toggle(speed,callback)

Fade:
> $(selector).fadeIn(speed,callback)
> 
> $(selector).fadeOut(speed,callback)
> 
> $(selector).fadeToggle(speed,callback)
> 
> $(selector).fadeTo(speed<sup>required</sup>,opacity<sup>required</sup>,callback)

Slide:
> $(selector).slideDown(speed,callback)
> 
> $(selector).slideUp(speed,callback)
> 
> $(selector).slideToggle(speed,callback)

Animate:
> $(selector).animate({params}<sup>required</sup>,speed,callback);

Animate multiple props:
```js
$(selector).animate({
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3'
});
```
Speed param: `slow`, `fast`, or `milliseconds`.

All property names must be camel-cased when used with the animate() method: `paddingLeft` instead of `padding-left`, `marginRight` instead of `margin-right`, and so on.

The [difference](https://stackoverflow.com/questions/33982329/jquery-difference-between-hide-and-fadeout-show-and-fadein) between `hide()` and `fadeOut()`, `show()` and `fadeIn()`.

Using relative values:
```js
$("div").animate({
  left: '250px',
  height: '+=150px',
  width: '+=150px'
});
```
Using pre-defined values (show/hide/toggle):
```js
$("div").animate({
  height: 'toggle'
});
```

_By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!_

By default, jQuery comes with queue functionality for animations (will happen sequentially):
```js
$("button").click(function(){
  var div = $("div");
  div.animate({left: '100px'}, "slow");
  div.animate({fontSize: '3em'}, "slow");
});
```
