const EventEmitter = require('events');

class Emitter extends EventEmitter { }

const myE = new Emitter();

myE.on('foo', () => {
    console.log('an event occurred 1');
})

myE.on('foo', () => {
    console.log('an event occurred 2');
})

myE.on('foo', (x) => {
    console.log('an event with data: ' + x);
})

myE.emit('foo');
myE.emit('foo', 'bar');

myE.once('bar', () => {
    console.log('a bar event occurred 1');
})

myE.emit('bar');
myE.emit('bar');


console.log(myE.eventNames());
console.log(myE.listenerCount('foo'));