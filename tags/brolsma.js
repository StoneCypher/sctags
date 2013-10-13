
(function() {



  var Brolsma = {
    extends : 'div',
    lifecycle : {

      created          : function() { this.initialize(); },
      inserted         : function() { },
      removed          : function() { },
      attributeChanged : function() { this.updateContents(); }

    },



    events    : { },
    accessors : { },
    methods   : { 



      initialize : function() {
        this.updateContents();
      },



      updateContents : function() {
        this.innerHTML = '<sc-youtube video="60og9gwKh1o"></sc-youtube>';
      }

    }



  };

  xtag.register('brolsma',  Brolsma);
  xtag.register('numanuma', Brolsma);

})();
