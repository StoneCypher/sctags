
(function() {



  xtag.register('sc-leftbar', {

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

        this.style.position = 'fixed';

        this.style.top      = 0;
        this.style.left     = 0;
        this.style.bottom   = 0;

      }

    }



  });
})();
