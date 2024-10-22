const EventEmiter = require('events');

const emiter = new EventEmiter();

// Listen to the event
emiter.on('massageLogged', function (){
  console.log('Listener called here');
})


// Raise an event
emiter.emit('massageLogged');