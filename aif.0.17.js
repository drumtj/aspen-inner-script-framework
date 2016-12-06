var $ = (function(){
    this["VERSION"] = '0.17';
    if( window.apn$ ) return window.apn$;

    var UNDEFINED = 'undefined';
    function attr(n, v, wait){
      if( typeof v === UNDEFINED ){
        return wgt.get(this.id,n);
      }else{
        wgt.set(this.id,n,v,wait);
        return this;
      }
    }

    function getRect(){
      return {
        x:this.attr('x'), y:this.attr('y'), width:this.attr('w'), height:this.attr('h'),
        contains: function(position){
          return rectContains.call(null, this, position);
        }
      };
    }

    /*
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
    */
   //#160602 file domain추가로 기능개선 반영
   //#160614 참조값 사용 기능개선
   function data(k, v){
     var d = file.get("__DATA__");
     if( d === "") d = {};
     if( typeof d[this.id] === UNDEFINED ){
       d[this.id] = {};
     }
     if( typeof v === UNDEFINED ){
       return d[this.id][k];
     }else{
       d[this.id][k] = v;
       file.set("__DATA__", d);
       return this;
     }
   }

    function position(p){
      if( typeof p === UNDEFINED ){
        return {x:this.attr('x'), y:this.attr('y')};
      }else{
        for(var o in p){
            if(o == 'x' || o == 'left') this.attr('x', p[o]);
            else if(o == 'y' || o == 'top') this.attr('y', p[o]);
        }
      }
      return this;
    }

    function getCenterPosition(){
      return {
        x: this.attr('x') + this.attr('w') * 0.5,
        y: this.attr('y') + this.attr('h') * 0.5
      }
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
        this.attr('dragAll', true);
      }else if(arguments[0] === true){
        this.attr('dragAll', true);
      }else if(arguments[0] === false){
        this.attr('dragAll', false);
      }else{
        if( arguments[0].x === arguments[0].y ) this.attr('dragAll', arguments[0].x);
        else {
          this.attr('dragX', arguments[0].x);
          this.attr('dragY', arguments[0].y);
        }
      }
      return this;
    }

    //clone(parentContainer?, layerName?)
    function clone(parentContainer, layerName){
      /*
      var c = $("__clone__");
      c.id = wgt.clone(this.id);
      var label = wgt.get(c.id, "label");
      if( label && label !== "" ){
        wgt.set(c.id, "label", label + "_clone" + (Date.now()%1000000));
      }
      return c;
      */
      var $c = $(null, {id:wgt.clone(this.id, ((typeof parentContainer === "string" || typeof parentContainer === UNDEFINED) ? parentContainer : parentContainer.id), layerName)});
      var label = wgt.get($c.id, "label");
      if( label && label !== "" ){
        wgt.set($c.id, "label", label + "_clone" + (Date.now()%1000000));
      }
      $c.list = this.list;
      var d = file.get("__DATA__");
      if( d === "") d = {};
      if( typeof d[this.id] === UNDEFINED ){
        d[this.id] = {};
      }
      d[$c.id] = JSON.parse(JSON.stringify(d[this.id]));
      file.set("__DATA__", d);
      return $c;
    }

    /*
    easing : 'none', 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'ease-out-in' -> default : 'linear'
    duration : ms -> default : 400
    roundtrip : boolean -> default : false
    delay : ms -> default : 0
    tracePath : 'arcCW 1.5', 'arcCCW 2.5' -> default : UNDEFINED
    effect : undefined

    $test.moveTo(33,44)
    $test.moveTo(33,44, 400)
    $test.moveTo(33,44, 400, {
      delay:1000,
      easing: "ease-in",
      roundtrip: true,
      tracePath: 'arrCW 1.5'
    })
    */
    var dftOption = {
      easing : 'linear',
      delay : 0,
      roundtrip : false
    }

    function mergeOption(options){
      var o = options || {};
      for(var p in dftOption){
        if(typeof o[p] === UNDEFINED) o[p] = dftOption[p];
      }
      return o;
    }

    //$target, duration, options
    function moveToTarget($target, duration, options){
      if( !$target ){
        consoleLog("[moveToTarget error] targetId is " + (typeof $target));
        return this;
      }

      if( typeof $target === "string" ){
        $target = $($target);
        if( !$target.id ){
          consoleLog("[moveToTarget error] target id is " + $target.id);
          return this;
        }
      }

      var pos;
      if( options && options.center ){
        pos = $target.getCenterPosition();
      }else{
        pos = $target.position();
      }
      this.moveTo(pos, duration, options);
      return this;
    }

    //function moveTo(x, y, duration, options){
    function moveTo(){
      var x,y,duration,options;
      if( typeof arguments[0] === "object" ){
        x = arguments[0].x;
        y = arguments[0].y;
        duration = arguments[1];
        options = arguments[2];
      }else{
        x = arguments[0];
        y = arguments[1];
        duration = arguments[2];
        options = arguments[3];
      }
      if(typeof duration === UNDEFINED) duration = 400;
      var o = mergeOption(options);
      wgt.moveTo(this.id, x, y, o.delay, o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':''), o.tracePath); return this;
    }

    function moveBy(deltaX, deltaY, duration, options){
      if(typeof duration === UNDEFINED) duration = 400;
      var o = mergeOption(options);
      wgt.moveBy(this.id, deltaX, deltaY, o.delay, o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':''), o.tracePath); return this;
    }

    function sizeTo(w, h, duration, options){
      if(typeof duration === UNDEFINED) duration = 400;
      var o = mergeOption(options);
      wgt.sizeTo(this.id, w, h, o.delay, o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':'')); return this;
    }

    function sizeBy(deltaW, deltaH, fromCenter, duration, options){
      if(typeof duration === UNDEFINED) duration = 400;
      var o = mergeOption(options);
      wgt.sizeBy(this.id, deltaW, deltaH, fromCenter, o.delay, o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':'')); return this;
    }

    function rotateTo(deg, duration, options){
      if(typeof duration === UNDEFINED) duration = 400;
      var o = mergeOption(options);
      wgt.rotateTo(this.id, deg, o.delay, o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':'')); return this;
    }

    function opacityTo(opacity, duration, options){
      if(typeof duration === UNDEFINED) duration = 400;
      var o = mergeOption(options);
      wgt.opacityTo(this.id, opacity, o.delay, o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':'')); return this;
    }

    ///////////////#161206
    //index -> 'top'|'bottom'|'restore'
    function zIndexTo(indexStr, wait){
      wgt.zIndexTo(this.id, indexStr, wait); return this;
    }

    function sizeByContent(w, h, bFromCenter, duration, options){
      if(typeof duration === UNDEFINED) duration = 400;
      var o = mergeOption(options);
      wgt.sizeByContent(this.id, w, h, bFromCenter, o.delay, o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':'')); return this;
    }

    function getLayer(layerTitle){
      return wgt.getLayer(this.id, layerTitle);
    }
    //////////////

    //function lineTo(sp,ep, duration, options){
    //function lineTo(sx,sy,ex,ey, duration, options){
    function lineTo(){
      var sx, sy, ex, ey, duration, options;
      if( typeof arguments[0] === "object" ){
        sx = arguments[0].x;
        sy = arguments[0].y;
        ex = arguments[1].x;
        ey = arguments[1].y;
        duration = arguments[2];
        options = arguments[3];
      }else{
        sx = arguments[0];
        sy = arguments[1];
        ex = arguments[2];
        ey = arguments[3];
        duration = arguments[4];
        options = arguments[5];
      }
      if(typeof duration === UNDEFINED) duration = 400;
      var o = mergeOption(options);
      wgt.lineTo(this.id, sx,sy,ex,ey, o.delay, o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':'')); return this;
    }

    function zoomTo(scx, scy, duration, options){
      if(typeof duration === UNDEFINED) duration = 400;
      var o = mergeOption(options);
      wgt.zoomTo(this.id, scx*100+"%", scy*100+"%", o.delay, o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':'')); return this;
    }

    /*
    Effect
    'cardUpLeft', 'cardUpRight', 'cardUpBottom', 'cardUpTop',
    'dissolve', 'zoomIn', 'zoomOut', 'fall', 'newspaper',
    'moveLeft', 'moveRight', 'moveBottom', 'moveTop',
    'slideUpLeft', 'slideUpRight', 'slideUpBottom', 'slideUpTop',
    'glueLeft', 'glueRight', 'glueBottom', 'glueTop',
    'timeLagLeft', 'timeLagRight', 'timeLagBottom', 'timeLagTop',
    'cubeLeft', 'cubeRight', 'cubeBottom', 'cubeTop',
    'flipLeft', 'flipRight', 'flipBottom', 'flipTop'
     */

    //changeStage(state [,duration] [,options]);
    function changeState(state, duration, options){
      var o = mergeOption(options);
      if( typeof duration !== UNDEFINED ){
        duration = o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':'');
      }
      wgt.changeState(this.id, state, o.delay, o.effect, duration); return this;
    }

    function rectContains(rect, position){
      return (position.x >= rect.x && position.x <= rect.x + rect.width && position.y >= rect.y && position.y <= rect.y + rect.height);
    }

    function visible(bool){
      if( typeof bool === UNDEFINED ) return this.attr("visibility");
      this.attr("visibility", bool?"visible":"hidden");
      return this;
    }

    function toString(){
      if(this.list.length){
        var a = [];
        for(var o in this.list){
          a.push( this.list[o].id );
        }
        return a.join();
      }else{
        return this.id;
      }
    }

    function isUndef(target){
        return typeof target === UNDEFINED;
    }

    function trace(){
        var arr = [], r = [];
        for(var i=0; i<arguments.length; i++){
            if( typeof arguments[i] === "object" ){
                r.push(JSON.stringify(arguments[i]));
            }else{
                r.push(arguments[i]);
            }
        }
        consoleLog(r.join(" "));
    }

    function trim(str){
      return str.replace(/^ +/,"").replace(/ +$/,"");
    }

    /*
    function each(fn){

    }
    */

    var cache = {};

    var $ = function(n, opt){

      if( typeof n === "object" && n && n["getCenterPosition"] ) return n;

      var id, list=[], wgid;
      /*
      if( n == "__clone__" ){
        id = null;
      } else */
      if( n == null ) {
        //pass
        if( opt && opt.id ){
          id = opt.id;
          list = "self";
        }else{
          //id = null;
          id = getWidget();
        }

      } else if( n ) {
        if( n.indexOf(",") > -1 ){
          var nl = n.split(",");
          for(var j in nl){
            nl[j] = $(nl[j].replace(/^ +/,"").replace(/ +$/,""));
          }
          id = null;
          list = nl;
        } else {
          wgid = getWidget(n);
          if( wgid.indexOf(",") == -1 ){
            id = wgid;
            list = "self";
          } else {
            //같은이름이 있어서 widgetId가 배열로 반환된 경우
            wgid = wgid.split(",");
            for(var o in wgid){
              wgid[o] = $(null, {id:wgid[o]});
            }
            id = null;
            list = wgid;
          }
        }
      }

      if( id && cache[id] ) return cache[id];

      var r = {
        /*
        id: (function(){
          if( n == "__clone__" ) return null;
          var wgid = getWidget(n);
          if( typeof wgid === "string" ) return wgid;
          else return wgid[0];
        })(),
        */
        id: id,
        attr: function(){ return attr.apply(this, arguments); },
        getRect: function(){ return getRect.apply(this, arguments); },
        data: function(){ return data.apply(this, arguments); },
        position: function(){ return position.apply(this, arguments); },
        width: function(){ return width.apply(this, arguments); },
        height: function(){ return height.apply(this, arguments); },
        draggable: function(){ return draggable.apply(this, arguments); },
        clone: function(){ return clone.apply(this, arguments); },
        moveTo: function(){ return moveTo.apply(this, arguments); },
        moveBy: function(){ return moveBy.apply(this, arguments); },
        sizeTo: function(){ return sizeTo.apply(this, arguments); },
        sizeBy: function(){ return sizeBy.apply(this, arguments); },
        opacityTo: function(){ return opacityTo.apply(this, arguments); },
        rotateTo: function(){ return rotateTo.apply(this, arguments); },
        changeState: function(){ return changeState.apply(this, arguments); },
        getCenterPosition: function(){ return getCenterPosition.apply(this, arguments); },
        lineTo: function(){ return lineTo.apply(this, arguments); },
        zoomTo: function(){ return zoomTo.apply(this, arguments); },
        visible: function(){ return visible.apply(this, arguments); },
        toString: function(){ return toString.call(this); },
        moveToTarget: function(){ return moveToTarget.apply(this, arguments); },
        zIndexTo: function(){ return zIndexTo.apply(this, arguments); },
        sizeByContent: function(){ return sizeByContent.apply(this, arguments); },
        getLayer: function(){ return getLayer.apply(this, arguments); }
      };

      cache[id] = r;

      if( list === "self" ) {
        r.list = [r];
      }else{
        r.list = list;
      }

      return r;
    }

    $.id = "global";
    $.version = VERSION;
    $.data = function(){ return data.apply(this, arguments); }
    $.isUndef = function(){ return isUndef.apply(this, arguments); };
    $.trace = function(){ return trace.apply(this, arguments); };
    $.trim = function(){ return trim.apply(this, arguments); };
    window.apn$ = $;

    return $;
})();
