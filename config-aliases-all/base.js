requirejs.config({
	// all the dependencies are declared here so you speed up a lot your work flow
	shim: {
		// require knows now that greeter.js depends on recipient.js
		'greeter':{
			deps:[
				'recipient'
			]
		},
		// require knows now that recipient.js depends on name.js
		'recipient': {
			deps:[
				'components/recipient/name'
			]
		}
	},
  paths: {
    greeter: 'components/greeter/greeter',
    recipient: 'components/recipient/recipient'
  }
});

requirejs( [ 'greeter' ], function( Greeter ) {

  new Greeter();

});
