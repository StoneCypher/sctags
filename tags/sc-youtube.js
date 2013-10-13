
(function() {



  xtag.register('sc-youtube', {



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
        this.innerHTML = '<iframe id="ytplayer" type="text/html" width="'     + (this.getAttribute('width')  || '640')               +
                         '" height="'                                         + (this.getAttribute('height') || '390')               +
                         '" src="http://www.youtube.com/embed/'               + (this.getAttribute('video')  || 'M7lc1UVf-VE')       +
                         '?autoplay=0&origin='                                + (this.getAttribute('origin') || 'http://sctags.com') +
                         '" frameborder="0"/>';
      }



    }

  });



})();
