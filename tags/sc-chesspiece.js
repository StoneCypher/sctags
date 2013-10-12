
(function() {



  var toPiece = function(Sym) {

    switch (Sym) {

      case 'K' : return ['&#9812;','&#9818;',true];
      case 'Q' : return ['&#9813;','&#9819;',true];
      case 'R' : return ['&#9814;','&#9820;',true];
      case 'N' : return ['&#9816;','&#9822;',true];
      case 'B' : return ['&#9815;','&#9821;',true];
      case 'P' : return ['&#9817;','&#9823;',true];

      case 'k' : return ['&#9812;','&#9818;',false];
      case 'q' : return ['&#9813;','&#9819;',false];
      case 'r' : return ['&#9814;','&#9820;',false];
      case 'n' : return ['&#9816;','&#9822;',false];
      case 'b' : return ['&#9815;','&#9821;',false];
      case 'p' : return ['&#9817;','&#9823;',false];

      default  : return [Sym,'7',false];

    }
  };



  xtag.register('sc-chesspiece', {



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

        this.innerHTML             = '';

        this.style.display         = 'block';
        this.style.position        = 'absolute';
        this.style.height          = this.getAttribute('height') || '2em';
        this.style.width           = this.getAttribute('width')  || '2em';
        this.style.zIndex          = '1';

        var whiteFrontColor        = this.getAttribute('wfc') || 'black';
        var whiteBackColor         = this.getAttribute('wbc') || '#ff8';
        var blackFrontColor        = this.getAttribute('bfc') || 'black';
        var blackBackColor         = this.getAttribute('bbc') || '#03b';

        var pieceFront             = document.createElement('span');
        var pieceBack              = document.createElement('span');

        var faces                  = toPiece(this.getAttribute('symbol') || '');

        pieceFront.style.fontSize  = this.getAttribute('size') || '200%';
        pieceBack.style.fontSize   = this.getAttribute('size') || '200%';

        pieceFront.style.position  = 'absolute';
        pieceBack.style.position   = 'absolute';

        pieceFront.style.textAlign = 'center';
        pieceBack.style.textAlign  = 'center';

        pieceFront.style.height    = '1em';
        pieceBack.style.height     = '1em';

        pieceFront.style.width     = '1em';
        pieceBack.style.width      = '1em';

        pieceFront.style.display   = 'inline-block';
        pieceBack.style.display    = 'inline-block';

        pieceFront.style.top       = '-0.2em';
        pieceBack.style.top        = '-0.2em';

        pieceFront.style.left      = '0';
        pieceBack.style.left       = '0';

        pieceFront.style.zIndex    = '3';
        pieceBack.style.zIndex     = '2';

        pieceFront.innerHTML       = faces[0];
        pieceBack.innerHTML        = faces[1];

        pieceFront.style.color     = faces[2]? whiteFrontColor : blackFrontColor;
        pieceBack.style.color      = faces[2]? whiteBackColor  : blackBackColor;

        this.appendChild(pieceBack);
        this.appendChild(pieceFront);

      },

    }



  });



})();
