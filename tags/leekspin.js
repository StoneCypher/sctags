
(function() {



  xtag.register('leekspin', {
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
        this.innerHTML = '<sc-youtube video="1wnE4vF9CQ4‎"></sc-youtube>';
      }

    }



  });
})();
