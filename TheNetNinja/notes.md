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

### Binding
The on() method attaches (binds) one or more event handlers for the selected elements:
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
Event helpers (special methods to simplify event binding):
```js
$("p").click(function(){
  // action goes here!!
});
```

### Unbinding
The off() method detaches(unbinds) an event for the selected elements:
```js
$("p").off("click");
```

### The Document Ready Event
Standard (readable):
```js
$(document).ready(function(){
  // jQuery methods go here...
});
$(document).on("ready", function(){
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

## Callbacks
Will happen sequentially:
```js
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
});
```
Will happen all at once (except animations queue functionality):
```js
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide("slow")
    alert("The paragraph is now hidden");
  });
});
```

## Chaining
Single-line:
```js
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
```
Multi-line:
```js
$(document).ready(function(){
  $("button").click(function(){
    $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  });
});
```


## Traversing DOM
```js
$(selector).next().action()
$(selector).prev().action()
$(selector).parent().action()
$(selector).parents().action()
$(selector).children().action()
$(selector).find().action()
$(selector).closest().action()
prev()
```

## Manipulating DOM
### Creating Elements
```js
var txt1 = "<p>Text.</p>";               // Create element with HTML 
var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
var txt3 = document.createElement("p");  // Create with DOM
txt3.innerHTML = "Text.";
```

### Getting content/attr
Content:
```js
$(selector).html()
$(selector).text()
$(selector).val()
```
Attribute value:
```js
$(selector).attr("attr_name")
```

### Setting content/attr
Content:
```js
$(selector).html("node/html")
$(selector).text("text")
$(selector).val("text")
```
Attribute value:
```js
$(selector).attr("attr_name", "attr_value")
```
Multiple attributes:
```js
$(selector).attr({
  "attr_name1" : "attr_value1",
  "attr_name2" : "attr_value2"
});
```
We can set html/text/val/attr with callback. The callback function should return the new value:
```js
$("#test2").html(function(i, origText){
  return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
});
```
```js
$(selector).attr("href", function(i, origValue){
  return origValue + "/jquery/";
});
```
_i - the index of the current element in the list of elements selected_

_origText - the original (old) attribute value_

### Removing content/attr
```js
// selected element(s) and its child elements
$(selector).remove();
// child elements of the selected element(s)
$(selector).empty();
// An attribute:
$(selector).removeAttr()
```
We can pass a filter to **remove()** method:
```js
$("p").remove(".test, .demo");
```

### Adding content
```js
$(selector).append("node/html")
$(selector).prepend("node/html")
$(selector).after("node/html")
$(selector).before("node/html")
// multiple elements
$("img").after(elem1, elem2, elem3); 
```
Example:
```js
function afterText() {
  var txt1 = "<b>I </b>";
  var txt2 = $("<i></i>").text("love ");
  var txt3 = document.createElement("b");
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3);
}
```

### Wrap/unwrap content (fullscreen, disable button)
```js
$(selector).wrap("node")
$(selector).unwrap()
$(selector).wrapAll("node")
```

### Changing classes
```js
// Adding one/multiple
$(selector).addClass("class_name");
$(selector).addClass("class_name1 class_name2 class_name3");
// Removing one/multiple
$(selector).removeClass("class_name");
// Toggling one/multiple
$(selector).toggleClass("class_name");
```

### Changing CSS
Reads/returns css property value:
```js
$(selector).css("prop_name")
```
Sets css property:
```js
$(selector).css("prop_name", "value")
```
Sets multiple css properties:
```js
$(selector).css({
  "prop1": "value1",
  "prop2": "value2",
  "prop3": "value3"
})
```

## Manipulating DOM
### Creating Elements
```js
var txt1 = "<p>Text.</p>";               // Create element with HTML 
var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
var txt3 = document.createElement("p");  // Create with DOM
txt3.innerHTML = "Text.";
```

### Getting content/attr
Content:
```js
$(selector).html()
$(selector).text()
$(selector).val()
```
Attribute value:
```js
$(selector).attr("attr_name")
```

### Setting content/attr
Content:
```js
$(selector).html("node/html")
$(selector).text("text")
$(selector).val("text")
```
Attribute value:
```js
$(selector).attr("attr_name", "attr_value")
```
Multiple attributes:
```js
$(selector).attr({
  "attr_name1" : "attr_value1",
  "attr_name2" : "attr_value2"
});
```
We can set html/text/val/attr with callback. The callback function should return the new value:
```js
$("#test2").html(function(i, origText){
  return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
});
```
```js
$(selector).attr("href", function(i, origValue){
  return origValue + "/jquery/";
});
```
_i - the index of the current element in the list of elements selected_

_origText - the original (old) attribute value_

### Removing content/attr
```js
// selected element(s) and its child elements
$(selector).remove();
// child elements of the selected element(s)
$(selector).empty();
// An attribute:
$(selector).removeAttr()
```
We can pass a filter to **remove()** method:
```js
$("p").remove(".test, .demo");
```

### Adding content
```js
$(selector).append("node/html")
$(selector).prepend("node/html")
$(selector).after("node/html")
$(selector).before("node/html")
// multiple elements
$("img").after(elem1, elem2, elem3); 
```
Example:
```js
function afterText() {
  var txt1 = "<b>I </b>";
  var txt2 = $("<i></i>").text("love ");
  var txt3 = document.createElement("b");
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3);
}
```
