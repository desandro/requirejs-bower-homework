define( [], function() {

  var names = [
    'world',
    'Harold',
    'James',
    'Diana',
    'Michelangelo',
    'you crazy grumpkin',
    'Mortimer',
    'buddy'
  ];

  return function RecipientName() {
    var index = Math.floor( Math.random() * names.length );
    return names[ index ];
  }

});
