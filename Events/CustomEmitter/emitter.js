function Emitter() {
    this.event = {};
}


Emitter.prototype.on = function(type, listener){
    this.event[type] = this.event[type] || [];
    this.event[type].push(listener);
}

/*  It will look something like this:
{
    gotSomethingFromInternet: [function() {}, function() {}]
}
*/

Emitter.prototype.emit = function(type){
    if(this.event[type]){
        this.event[type].forEach(event => {
            event();
        });
    }
}


module.exports = Emitter;