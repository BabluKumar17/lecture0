let Emitter = require('./emitter');

let emtr = new Emitter(); 

emtr.on('greet', function(){
    console.log('Hello world from India');
});

emtr.on('greet', function(){
    console.log('A simple gesture of Namaste can touch millions of hearts!');
});


console.log('Hello...');
emtr.emit('greet');
