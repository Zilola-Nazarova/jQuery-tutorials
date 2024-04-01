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
