// the dependencies of this file have already been defined inside the require.config object
define([], function( Recipient ) {
  return function Greeter( greeting ) {
    greeting = greeting || 'Hello';
    var recipient = new Recipient();
    var message = greeting + ' ' + recipient.name;
    console.log( message )
  }
});
