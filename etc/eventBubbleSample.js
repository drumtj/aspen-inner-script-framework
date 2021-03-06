//#160614
////////////////////////////////////base//////////////////////////////////////////////////

var UNDEFINED = "undefined";

function $(name, id){
    return {
        id: (id ? id : (name ? getWidget(name) : null)),
        attr: __attr,
        data: __data
    }
}

function _trace(arr){
    var r = []
    for(var o in arr){
        if( typeof arr[o] === "object" ){
            r.push(JSON.stringify(arr[o]));
        }else{
            r.push(arr[o]);
        }
    }
    consoleLog(r.join(" "));
}

function trace(){
    var arr = [];
    for(var i=0; i<arguments.length; i++){
        arr[i] = arguments[i];
    }
    _trace.call(this, arr);
}


var event = {
    type: getParam(2),
    targetId: getParam(3),
    $target: $(null, getParam(3)),
    param: getParam(1)
}


switch( event.type ){
    case "Tap": onTap(); break;
    case "Widget Event": onMenuChange(); break;
    case "Music Beat": onMusicBeat(); break;
    case "Music Note": onMusicNote(); break;
    case "Music Verse": onMusicVerse(); break;
    case "Music LineSet": onMusicLineSet(); break;
}


function isUndef(target){
    return typeof target === UNDEFINED;
}

function __attr(attrName, value){
    if( isUndef(value) ){
        return wgt.get(this.id, attrName);
    }else{
        wgt.set(this.id, attrName, value);
        return this;
    }
}

function __data(k, v){
    var d = file.get("__DATA__") || {};
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






/////////////////////////////////////event/////////////////////////////////////////////////

function onTap(){

}

function onMenuChange(){
    switch( event.param ){
        case "Menu 노래듣기":
        case "Menu 노래따라부르기":
        case "Menu 반주듣기":
            $("가사배경").attr("visibility", "visible");
            set("isBgShow", true);
        break;

        case "Menu 계명창":
        case "Menu 계명창따라부르기":
            $("가사배경").attr("visibility", "hidden");
            set("isBgShow", false);
        break;
    }
}

function onMusicBeat(){
  //setSync();
}

function onMusicNote(){

}

function onMusicLineSet(){
    if( event.$target.attr("label") === "노래듣기" ){
        setLine("lines", "line", event.param, wgt.getData(event.targetId, 'lineSetPosition'));
    }
}

function onMusicVerse(){
    /*
    if( get("isBgShow") ){
        var j = getParam();
        var lines = wgt.get(getWidget("lines"), "text").split(",");//[3,4,5];
        if( j !== "" ){
            for( var i=0; i<lines.length; i++ ){
                wgt.changeState(getWidget("line" + lines[i]), "Layer"+j);
            }
        }
    }
    */
}


///////////////////////////////////////custom/////////////////////////////////////////////////

function setLine(linesName, linePrefix, param, positions){
    var id,p,i,lines;
    lines = wgt.get(getWidget(linesName), "text").split(",");
    i = parseInt(param);
    if( lines.indexOf(i+"") > -1 ){
        //consoleLog(param);
        id = getWidget(linePrefix + i);
        p = JSON.parse(positions);
        wgt.set(id, "y", p[i-1].y);
        wgt.set(id, "visibility", (param.indexOf("Show") > -1 ? "visible" : "hidden"));
    }
}
/*
function setSync(){
  var l, msnames = JSON.parse(get("msnames"));
  if( (l = msnames[ wgt.get(event.targetId, "label") ]) >= 0 ){
      //consoleLog( param );
      var psp = event.param.split("/");
      //박자
      var i = parseInt(psp[0])-1;
      //절
      var j = parseInt(psp[1])-1;
      var idss;
      idss = JSON.parse(get("idss"));
      if( idss && idss[l][j][i] && idss[l][j][i] !== "" ){
          if( event.param.indexOf("Off") > -1 ){
              wgt.changeState(idss[l][j][i], "Off");
          }else{
              wgt.changeState(idss[l][j][i], "On");
          }
      }
  }
}
*/
