
xtag.register('sc-helloworld', {



  extends : 'span',



  lifecycle : {

    created          : function() { this.innerHTML = 'Hello, world!'; },    
    inserted         : function() { },
    removed          : function() { },
    attributeChanged : function() { }

  },



  events    : { },
  accessors : { },
  methods   : { }



});
