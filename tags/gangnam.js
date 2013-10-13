
(function() {



  xtag.register('gangnam', {
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
        this.innerHTML = '<sc-youtube video="9bZkp7q19f0"></sc-youtube>';
      }

    }



  });
})();
