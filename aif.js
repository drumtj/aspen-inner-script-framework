var $ = (function(){
    var VERSION = '0.1';
    var UNDEFINED = 'undefined';
    function attr(n, v){
      if( typeof v === UNDEFINED ){
        return wgt.get(this.id,n);
      }else{
        wgt.set(this.id,n,v);
        return this;
      }
    }

    function getRect(){
      return [this.attr('x'),this.attr('y'),this.attr('w'),this.attr('h')];
    }

    function data(k, v){
        if( typeof v === UNDEFINED ){
            var d = get(this.id+'_'+k);
            if( d === '') return null;
            return JSON.parse(d);
        }else{
            set(this.id+'_'+k, JSON.stringify(v));
            return this;
        }
    }

    function position(p){
      for(var o in p){
          if(o == 'x' || o == 'left') this.attr('x', p[o]);
          else if(o == 'y' || o == 'top') this.attr('y', p[o]);
      }
      return this;
    }

    function height(v){
      if( typeof v === UNDEFINED ){
        return this.attr('h');
      }else{
        this.attr('h', v);
        return this;
      }
    }

    function width(v){
      if( typeof v === UNDEFINED ){
        return this.attr('w');
      }else{
        this.attr('w', v);
        return this;
      }
    }

    /*
    $test.draggable();//drag start
    $test.draggable({x:true});// for axis X
    $test.draggable({y:true});// for axis Y
    $test.draggable(false);// drag disabled
     */
    function draggable(){
      if(arguments.length == 0){
        this.attr('dragX', true).attr('dragY', true);
      }else if(arguments[0] === false){
        this.attr('dragX', false).attr('dragY', false);
      }else{
        if( typeof arguments[0].x === "boolean" ) this.attr('dragX', arguments[0].x);
        if( typeof arguments[0].y === "boolean" ) this.attr('dragX', arguments[0].y);
      }
      return this;
    }

    function clone(){
      var c = $("__clone__");
      c.id = wgt.clone(this.id);
      return c;
    }

    var $ = function(n){
      return {
        id: (function(){
          if( n == "__clone__" ) return null;
          var wgid = getWidget(n);
          if( typeof wgid === "string" ) return wgid;
          else return wgid[0];
        })(),
        attr: function(){ return attr.apply(this, arguments); },
        getRect: function(){ return getRect.apply(this, arguments); },
        data: function(){ return data.apply(this, arguments); },
        position: function(){ return position.apply(this, arguments); },
        width: function(){ return width.apply(this, arguments); },
        height: function(){ return height.apply(this, arguments); },
        draggable: function(){ return draggable.apply(this, arguments); },
        clone: function(){ return clone.apply(this, arguments); }
      }
    }

    $.id = "global";
    $.version = VERSION;
    $.data = function(){ return data.apply(this, arguments); }

    return $;
})();
