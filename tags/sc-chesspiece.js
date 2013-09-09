
(function() {



  var toPiece = function(Sym) {

    switch (Sym) {

      case 'K' : return ['&#9812;','&#9818;',true];
      case 'Q' : return ['&#9813;','&#9819;',true];
      case 'R' : return ['&#9814;','&#9820;',true];
      case 'N' : return ['&#9816;','&#9822;',true];
      case 'B' : return ['&#9815;','&#9821;',true];
      case 'P' : return ['&#9817;','&#9823;',true];

      case 'k' : return ['&#9818;','&#9812;',false];
      case 'q' : return ['&#9819;','&#9813;',false];
      case 'r' : return ['&#9820;','&#9814;',false];
      case 'n' : return ['&#9822;','&#9816;',false];
      case 'b' : return ['&#9821;','&#9815;',false];
      case 'p' : return ['&#9823;','&#9817;',false];

      default  : return Sym;

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

        this.style.display  = 'block';
        this.style.position = 'absolute';
        this.style.height   = this.getAttribute('height') || '2em';
        this.style.width    = this.getAttribute('width')  || '2em';

        var whiteFrontColor = this.getAttribute('wfc') || 'black';
        var whiteBackColor  = this.getAttribute('wbc') || 'white';
        var blackFrontColor = this.getAttribute('bfc') || 'white';
        var blackBackColor  = this.getAttribute('bbc') || 'black';

        var pieceFront      = document.createElement('span');
        var pieceBack       = document.createElement('span');

        var faces           = toPiece(this.getAttribute('symbol') || '.');

        pieceFront.style.fontSize = this.getAttribute('size') || '200%';
        pieceBack.style.fontSize  = this.getAttribute('size') || '200%';

        pieceFront.style.position = 'absolute';
        pieceBack.style.position  = 'absolute';

        pieceFront.style.top      = '0';
        pieceBack.style.top       = '0';

        pieceFront.style.left     = '0';
        pieceBack.style.left      = '0';

        pieceFront.innerHTML      = faces[0];
        pieceBack.innerHTML       = faces[1];

        pieceFront.style.color    = faces[2]? whiteFrontColor : blackFrontColor;
        pieceBack.style.color     = faces[2]? whiteBackColor  : blackBackColor;

        this.appendChild(pieceBack);
        this.appendChild(pieceFront);

      },




      parseState : function() {

        var orig = (this.getAttribute('board') || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1').split(' ');
        if (orig.length !== 6) { this.innerHTML = 'malformed board'; return; }

        var board     = [];
        var boarddata = orig[0].split('/');

        for (i in boarddata) {

          var row = [];

          for (var j=0; j<boarddata[i].length; ++j) {
            if ((boarddata[i][j] <= '8') && (boarddata[i][j] >= '1')) {
              var dist = parseInt(boarddata[i][j],10);
              for (var ct = 0; ct < dist; ++ct) {
                row.push('.');
              }
            } else {
              row.push(boarddata[i][j]);
            }
          }

          board[7-i] = row;

        }

        return board;

      },




      updateContents : function() {
        
        var state = this.parseState();

      },

    }



  });



})();
