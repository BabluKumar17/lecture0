// pass by value
// Primitive variables create each copy of a new variable
// Primitive: a type of data that represents a single value
function change(b){
    b = 2;
}

var a = 1;
change(a);
console.log(a); // 1

// Pass by reference
function changeObj(d){
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
