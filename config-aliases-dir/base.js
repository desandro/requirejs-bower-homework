requirejs.config({
  paths: {
    greeter: 'components/greeter',
    recipient: 'components/recipient'
  }
});

requirejs( [ 'greeter/greeter' ], function( Greeter ) {
  new Greeter();
});
