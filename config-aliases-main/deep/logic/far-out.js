requirejs.config({
	// the baseUrl attribute is there just to simplify our life
	baseUrl:'../../',
  paths: {
    greeter: 'components/greeter/greeter',
    recipient: 'components/recipient/recipient'
  }
});

requirejs( [ 'greeter' ], function( Greeter ) {

  new Greeter();

});
