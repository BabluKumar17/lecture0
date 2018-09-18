let Emitter = require('events');
let eventConfig = require('./config').events;


let emtr = new Emitter(); 

emtr.on(eventConfig.GREET, function(){
    console.log('Hello world from India');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A simple gesture of Namaste can touch millions of hearts!');
});

console.log('Hello...');
emtr.emit(eventConfig.GREET);
