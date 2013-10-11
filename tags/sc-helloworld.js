
xtag.register('sc-helloworld', {



  extends : 'span',



  lifecycle : {

    created          : function() { this.innerHTML = 'Hello, world! &#x1f30e;'; },    
    inserted         : function() { },
    removed          : function() { },
    attributeChanged : function() { }

  },



  events    : { },
  accessors : { },
  methods   : { }



});
