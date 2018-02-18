/*

Made notes on my laptop re: requiring and putting in this section...

- require-ing a file actually returns you the exports object of that file.
- Like all objects, exports has properties

- To access the e.g. book property (which can be an object or just an e.g. string), you would type:

var gradebook = require('../library/grades').book;

- In the above instance, 'book' is a property of the exports object in the grades.js file

*/