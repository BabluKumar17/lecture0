let greet1 = require('./greet1');
greet1();


let greet2 = require('./greet2');  // this is same as
greet2.greet();  // Hello World!!!

// as this one below
let greet3 = require('./greet2').greet;
greet3();   // Hello World!!!

// --------------- Not good: because it can be accedently overwritten or anything else can also heppen 
let greet4 = require('./greet3');
greet4.greet();
greet4.greeting = "Changed Hello World!!";

let greet4b = require('./greet3');
greet4b.greet();
// -----------------

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();