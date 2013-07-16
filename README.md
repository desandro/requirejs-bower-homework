# Help me out: RequireJS & Bower

## Here's the deal

I've been cranking out some might-fine components that use [Bower](http://bower.io). I'm not a [RequireJS](http://requirejs.org) kind of guy, but a lot of my users are. I don't know the best way to setup dependencies for them.

If you have any feedback, please provide it in the Issue Tracker.

## The example

This repo has several versions of the same example. I'm trying to figure out the best way to implement it.

The example uses two components. Here's their file structure:

    components/
      greeter/
        greeter.js
      recipient/
        recipient.js
        name.js

And their dependency structure:

    greeter/greeter
      recipient/recipient
        recipient/name

`greeter/greeter` relies on `recipient/recipient`. `recipient/recipient` relies on `recipient/name`.

I've put together three versions:

### config-aliases-main

My initial attempt is to use shorthand aliases for dependencies. Users then have to set up these aliases as [config paths](http://requirejs.org/docs/api.html#config-paths).

``` js
// main script file base.js
requirejs.config({
  paths: {
    greeter: 'components/greeter/greeter',
    recipient: 'components/recipient/recipient'
  }
});

requirejs( [ 'greeter' ], function( Greeter ) {
  new Greeter();
});
```

Aliases can then be used for dependencies.

``` js
// greeter.js
define([ 'recipient' ], function( Recipient ) {
```

But this doesn't work as it breaks relative dependencies.

``` js
// recipient/recipient.js relies on recipient/name.js
define( [ './name' ], function( recipientName ) {
```

No dice.

    GET http://localhost/requirejs-relative/config-aliases-main/name.js 404 (Not Found) 

### config-aliases-all

To remedy this, I could require users to setup aliases for every file necessary.

``` js
requirejs.config({
  paths: {
    greeter: 'components/greeter/greeter',
    recipient: 'components/recipient/recipient',
    'recipient-name': 'components/recipient/name'
  }
});
```

``` js
// recipient/recipient.js
define( [ 'recipient-name' ], function( recipientName ) {
```

It works, but this seems a bit heavy-handed and hard to automate.

### component-path




## Components

These projects all use Bower to manage dependencies. Your assistance would go a long way.

+ [Masonry](https://github.com/desandro/masonry)
+ [Isotope](https://github.com/desandro/isotope) (eventually)
+ [Packery](https://github.com/metafizzy/packery/)
+ [imagesLoaded](https://github.com/desandro/imagesloaded)
+ [Draggabilly](https://github.com/desandro/draggabilly)

