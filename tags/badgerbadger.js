
(function() {



  xtag.register('badgerbadger', {
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
        this.innerHTML = '<sc-youtube video="EIyixC9NsLI‎"></sc-youtube>';
      }

    }



  });
})();
