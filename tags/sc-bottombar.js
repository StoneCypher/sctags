
(function() {



  xtag.register('sc-bottombar', {

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

        this.style.bottom   = 0;
        this.style.left     = 0;
        this.style.right    = 0;

      }

    }



  });
})();
