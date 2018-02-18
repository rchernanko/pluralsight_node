/*

- Console is an object that I can use with node - we can use it to do e.g. console.log
- Process is another object in node that I can interact with (https://nodejs.org/api/process.html)
- As well as looking at the documentation above, I can also go into the node REPL, type ```process.``` + then hit
the tab key twice, and all the options will be listed:

> process.
process.__defineGetter__            process.__defineSetter__
process.__lookupGetter__            process.__lookupSetter__
process.__proto__                   process.constructor
process.hasOwnProperty              process.isPrototypeOf
process.propertyIsEnumerable        process.toLocaleString
process.toString                    process.valueOf

process._events                     process._maxListeners
process.addListener                 process.domain
etc etc



- And then once you’ve figured out which one you want to use…

```node```
```process.title```

prints out 'node'

('node' is the title for my iTerm window / shell)


- Anyway, back to getting user input...
- What’s a process? A running instance of a program

process.argv = allows you to pass in a load of command parameters:

var totalCost = 14.99;
var sizeOfParty = process.argv[2]
var averageCost = totalCost / sizeOfParty;

- Why the [2]?
- process.argv is an array of multiple items
- so if i run this file with

```node 3_getting_user_input.js 4```

process.argv[0] = node
process.argv[1] = 3_getting_user_input
process.argv[2] = 4

 */