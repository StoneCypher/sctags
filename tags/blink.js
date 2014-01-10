
(function() {

  var startTimer = function() {
  }

  var stopTimer = function() {
    
  }



  xtag.register('blink', {



    extends : 'span',



    lifecycle : {

      created          : function() { },    
      inserted         : function() { startTimer(); },
      removed          : function() { stopTimer(); },
      attributeChanged : function() { stopTimer(); startTimer(); }

    },



    events    : { },
    accessors : { },
    methods   : { }



  });



}());
