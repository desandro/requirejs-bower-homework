requirejs.config({
  paths: {
  	// please avoid partial paths and use the 'baseUrl' combining it with the 'shim' property
  	// use the 'paths' object to point to an unique script id
    components: '../../components'
  }
});

requirejs( [ 'components/greeter/greeter' ], function( Greeter ) {

  new Greeter();

});