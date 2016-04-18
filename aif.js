var $ = (function(){
    this["VERSION"] = '0.4';
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
      return {x:this.attr('x'), y:this.attr('y'), width:this.attr('w'), height:this.attr('h')};
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
      var label = wgt.get(c.id, "label");
      if( label && label !== "" ){
        wgt.set(c.id, "label", label + "_clone" + (Date.now()%1000000));
      }
      return c;
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
      roundtrip : false,
    }

    function mergeOption(options){
      var o = options || {};
      for(var p in dftOption){
        if(typeof o[p] === UNDEFINED) o[p] = dftOption[p];
      }
      return o;
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
        x = arguments[1];
        y = arguments[2];
        duration = arguments[3];
        options = arguments[4];
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

    function sizeBy(deltaW, deltaH, duration, options){
      if(typeof duration === UNDEFINED) duration = 400;
      var o = mergeOption(options);
      wgt.sizeBy(this.id, deltaW, deltaH, o.delay, o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':'')); return this;
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
    function chageState(state, duration, options){
      var o = mergeOption(options);
      if( typeof duration !== UNDEFINED ){
        duration = o.easing+' '+duration+'ms' + (o.roundtrip?' roundTrip':'');
      }
      wgt.changeState(this.id, state, o.effect, duration); return this;
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
        zoomTo: function(){ return zoomTo.apply(this, arguments); }
      }
    }

    $.id = "global";
    $.version = VERSION;
    $.data = function(){ return data.apply(this, arguments); }

    return $;
})();
