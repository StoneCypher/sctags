
(function() {



  xtag.register('sc-autoradio', {



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

        this.style.display = 'block';

        this.updateContents();

      },



      updateContents : function() {
        
        var lname    = this.getAttribute('name');
        var recsplit = this.getAttribute('recsplit') || '|';
        var valsplit = this.getAttribute('valsplit') || '=';
        
        var lines    = this.getAttribute('vals').split(recsplit);

        for (i in lines) {
          
          var rbox         = document.createElement('div');
          var rlabel       = document.createElement('span');
          var radio        = document.createElement('input');
          radio.type       = 'radio';
          radio.name       = lname;

          var lset         = lines[i].split(valsplit);
          radio.value      = lset[0];
          rlabel.innerHTML = (lset.length > 1)? lset[1] : lset[0];

          // tabindex, checked

          rbox.appendChild(radio);
          rbox.appendChild(rlabel);
          this.appendChild(rbox);

        }

      },

    }



  });



})();
