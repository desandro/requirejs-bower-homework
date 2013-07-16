define( [ 'recipient-name' ], function( recipientName ) {
  return function Recipient() {
    this.name = recipientName();
  }
});
