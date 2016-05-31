////////////////////////////////////base//////////////////////////////////////////////////

var UNDEFINED = "undefined";

function $(name, id){
    return {
        id: (id ? id : getWidget(name)),
        attr: attr
    }
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


function isUf(target){
    return typeof target === UNDEFINED;
}

function attr(attrName, value){
    if( isUf(value) ){
        return wgt.get(this.id, attrName);
    }else{
        wgt.set(this.id, attrName, value);
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
