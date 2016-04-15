var $ = (function(){
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

    var $ = function(n){
      return {
        id: getWidget(n),
        attr: function(){ return attr.apply(this, arguments); },
        getRect: function(){ return getRect.apply(this, arguments); },
        data: function(){ return data.apply(this, arguments); },
        position: function(){ return position.apply(this, arguments); },
        width: function(){ return width.apply(this, arguments); },
        height: function(){ return height.apply(this, arguments); }
      }
    }

    $.id = "global";
    $.data = function(){ return data.apply(this, arguments); }

    return $;
})();
