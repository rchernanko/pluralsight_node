//This is my very basic program so far...

lunch = "pizza";
console.log(lunch);

//And when i run this file with node ```node 2_debugging.js```... pizza is printed in the REPL

//But what if I e.g. removed the = assignment and then tried to run the program again:

lunch "pizza";
console.log(lunch);

/*

Now, I see an error in the console

/Users/richardchernanko/Development/pluralsight_node/learn_to_program/1_and_2_introduction/2_debugging.js:10
lunch "pizza";
      ^^^^^^^

SyntaxError: Unexpected string
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:607:28)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Function.Module.runMain (module.js:684:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3

As you can see, node is pretty useful - it gives me the file name and line number where the error has occurred +
also points to what the "unexpected string” is (in this case "pizza”):

 */