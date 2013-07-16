define( [
	// if this file path is not into your aliases you must link to it beginning from the baseUrl set into your require config
	'components/recipient/name' 
	], function( recipientName ) {
  return function Recipient() {
    this.name = recipientName();
  }
});
