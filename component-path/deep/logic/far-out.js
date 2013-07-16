requirejs.config({
  paths: {
    components: '../../components'
  }
});

requirejs( [ 'components/greeter/greeter' ], function( Greeter ) {

  new Greeter();

});
