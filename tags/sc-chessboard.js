
(function() {

  // uses shredder-fen
  // http://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation



  var toPiece = function(Sym) {

    switch (Sym) {

      case 'K' : return '&#9812;';
      case 'Q' : return '&#9813;';
      case 'R' : return '&#9814;';
      case 'N' : return '&#9816;';
      case 'B' : return '&#9815;';
      case 'P' : return '&#9817;';

      case 'k' : return '&#9818;';
      case 'q' : return '&#9819;';
      case 'r' : return '&#9820;';
      case 'n' : return '&#9822;';
      case 'b' : return '&#9821;';
      case 'p' : return '&#9823;';

      default  : return Sym;

    }
  };



  xtag.register('sc-chessboard', {



    extends : 'div',




    table : undefined,




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

        this.style.position = 'relative';

        this.table = document.createElement('table');
        this.table.style.border = '0 transparent none';
        this.table.style.borderCollapse = 'collapse';

        this.style.display = 'block';
        var tbody = document.createElement('tbody');

        for (var j=0; j<8; ++j) {

          var tr = document.createElement('tr');

          for (var i=0; i<8; ++i) {

            var td = document.createElement('td');
            
            td.innerHTML             = '';
            td.style.backgroundColor = ((i ^ j) & 1)? '#d18b47':'#ffce9e';
            td.style.width           = '2em';
            td.style.height          = '2em';
            td.style.padding         = '0';
            tr.appendChild(td);

          }

          tbody.appendChild(tr);

        }

        this.table.appendChild(tbody);
        this.appendChild(this.table);

        var state = this.parseState();
        for (j=0; j<8; ++j) {
          for (i=0; i<8; ++i) {

            if (state[j][i] !== '.') {

              var piece            = document.createElement('sc-chesspiece');
              piece.setAttribute('symbol', state[j][i]);
              piece.setAttribute('size',   '200%');

              piece.style.position = 'absolute';
              piece.style.top      = ((7-j)*2).toString() + 'em';
              piece.style.left     = (i*2).toString() + 'em';
              piece.classname      = 'x' + j.toString() + ' y' + i.toString();

              this.appendChild(piece);

            }          
          }
        }

        this.updateContents();

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
