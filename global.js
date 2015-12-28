/**
 * Note: The `require` function is global to import other node modules.
 * Refs: https://nodejs.org/api/path.html
 * */
var path = require("path");

var hello = "Hello World from Node.js";

var justNode = hello.slice(17);

/**
 * Note: `console` is Global Object. Used to print 'stdout' and 'stderr'.
 * For e.g. global.console.log(`Rock on World from ${justNode}`);
 * */
global.console.log(`Rock on World from ${justNode}`);

/**
 * Note: The name of the directory that the currently executing script resides in.
 * Output: /home/tanzim/Projects/nodejs.org
 * */
console.log(__dirname);

/**
 * Note: The filename of the code being executed. This is the resolved absolute path of this code file. For a main program this is not necessarily the same filename used in the command line. The value inside a module is the path to that module file.
 * Output: /home/tanzim/Projects/nodejs.org/global.js
 * */
console.log(__filename);

/**
 * Note: Return the last portion of a path. Similar to the Unix basename command.
 * Output: global.js
 * */
console.log(`Base Filename: ${path.basename(__filename)}`);