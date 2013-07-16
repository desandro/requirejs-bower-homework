requirejs.config({
  paths: {
    greeter: '../../components/greeter/greeter',
    recipient: '../../components/recipient/recipient'
  }
});

requirejs( [ 'greeter' ], function( Greeter ) {

  new Greeter();

});
