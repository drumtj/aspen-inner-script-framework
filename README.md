# aspen-inner-script-framework
아스펜 내부 스크립팅시 사용함. jQuery와 비슷하게 쓸수있게 하는게 목표

##Constructor

>$(widgetLabel [, options])

>>@params (string [, object])

>>ex) $("test1")

>>ex) $("test1, test2")

>>ex) $(null, {id:"testid"})  --> 라벨을 모르고 id로 객체를 만들 때 사용


##Properties

>id: string

>>ASPEN widget ID

>list: array

>>같은 이름의 위젯이 여럿이거나, 여러 위젯을 잡을 ","로 구분된 셀렉터라면 여러 $객체들이 list에 들어간다.



##Methods

>attr(key [, value] [, wait])

>>@params (string, *, number)

>>@return value or self


>getRect()

>>@params 

>>@return rect object {x:number, y:number, width:number, height:number, contains:function}

>>>contains({x:number, y:number});


>data(key [, value])

>>@params (string, *)

>>@return value or self

>>참조값은 저장하지 못함


>position([{x:, y:}])

>>@params (position object {x:, y:})

>>@return position object or self


>getCenterPosition()

>>@params

>>@return position object {x,y} or self


>width([value])

>>@params (number);

>>@return width or self


>height([value])

>>@params (number);

>>@return height or self


>draggable([{x:true|false, y:true|false} | boolean])

>>@params (axis object or boolean)

>>@return self


>clone([parent$orID, layerName])

>>@params($|string, string)

>>@return clone $object

>>복제 시 특정 MultiLayer에 자식으로 넣을 수 있음


>visible([true|false])

>>@params undefined or boolean

>>@return self or visibility


>moveTo({x, y} [, duration] [,options])

>moveTo(x, y [, duration] [,options])

>>@params ({x:number, y:number}, number(microsec), option object)

>>@params (number, number, number(microsec), option object)

>>@return self


>moveBy(deltaX, deltaY [, duration] [,options])

>>@params (number, number, number(microsec), option object)

>>@return self


>sizeTo(w, h [, duration] [,options])

>>@params (number, number, number(microsec), option object)

>>@return self


>sizeBy(deltaW, deltaH [, duration] [,options])

>>@params (number, number, number(microsec), option object)

>>@return self


>rotateTo(degree [, duration] [,options])

>>@params (number, number(microsec), option object)

>>@return self


>opacityTo(opacity [, duration] [,options])

>>@params (number, number(microsec), option object)

>>@return self


>chageState(state, duration [,options])

>>@params (number, number(microsec), option object)

>>@return self


>lineTo({x, y}, {x, y} [, duration] [,options])

>lineTo(x1, y1, x2, y2 [, duration] [,options])

>>@params ({x:number, y:number}, {x:number, y:number}, number(microsec), option object)

>>@params (number, number, number, number, number(microsec), option object)

>>@return self


>zoomTo(scx, scy, [, duration] [,options])

>>@params (number, number, number(microsec), option object)

>>@return self


#####0.17 version 추가분######

>zIndexTo(indexStr [, wait])

>>//indexStr -> 'top'|'bottom'|'restore'

>>@params (string, number)

>>@return self



####option object

    {  
        easing: "linear",// ASPEN EASING
        delay: 400,//number(microsec)
        roundtrip: true, // false
        tracePath: undefined,// | 'arcCW 1.5(ratio)' | 'arcCCW 1.5' => use only 'moveTo', 'moveBy'
        effect: undefined// ASPEN EFFECT => use only 'changeState'
    }


##ASPEN EASING
'none', 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'ease-out-in'

##ASPEN EFFECT
'cardUpLeft', 'cardUpRight', 'cardUpBottom', 'cardUpTop',
'dissolve', 'zoomIn', 'zoomOut', 'fall', 'newspaper',
'moveLeft', 'moveRight', 'moveBottom', 'moveTop',
'slideUpLeft', 'slideUpRight', 'slideUpBottom', 'slideUpTop',
'glueLeft', 'glueRight', 'glueBottom', 'glueTop',
'timeLagLeft', 'timeLagRight', 'timeLagBottom', 'timeLagTop',
'cubeLeft', 'cubeRight', 'cubeBottom', 'cubeTop',
'flipLeft', 'flipRight', 'flipBottom', 'flipTop'
