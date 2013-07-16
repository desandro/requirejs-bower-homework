// the dependencies of this file have already been defined inside the require.config object
define( [], function( recipientName ) {
  return function Recipient() {
    this.name = recipientName();
  };
});
