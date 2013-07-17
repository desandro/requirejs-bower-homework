define([ 'recipient/recipient' ], function( Recipient ) {
  return function Greeter( greeting ) {
    greeting = greeting || 'Hello';
    var recipient = new Recipient();
    var message = greeting + ' ' + recipient.name;
    console.log( message )
  }
});
