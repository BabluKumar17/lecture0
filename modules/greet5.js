let greeting = 'Hello world!!!!!!';

function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}

// This technique is known as 'revealing module pattern': Exposing only the properties and methods you want 
// via a returned object. It is a very common and clearn way to structure and protect code within modules.