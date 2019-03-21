const x = require('events');
const y = new x.EventEmitter();

const z = () =>{
    console.log('psindu gona');
};

y.on('event1' , z);
y.emit('event1' );
