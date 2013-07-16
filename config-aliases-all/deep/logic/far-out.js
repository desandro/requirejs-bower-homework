requirejs.config({
  paths: {
    greeter: '../../components/greeter/greeter',
    recipient: '../../components/recipient/recipient',
    'recipient-name': '../../components/recipient/name'
  }
});

requirejs( [ 'greeter' ], function( Greeter ) {

  new Greeter();

});
