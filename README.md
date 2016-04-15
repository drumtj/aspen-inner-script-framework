# aspen-inner-script-framework
아스펜 내부 스크립팅시 사용함. jQuery와 비슷하게 쓸수있게 하는게 목표


##Methods

>attr(key [, value])

>>@params (string, *)

>>@return value or self


>getRect()

>>@params 

>>@return rect object {x:, y:, width:, height:}


>data(key [, value])

>>@params (string, *)

>>@return value or self

>>참조값은 저장하지 못함


>position([{x:, y:}])

>>@params (position object {x:, y:})

>>@return position object or self


>width([value])

>>@params (number);

>>@return width or self


>height([value])

>>@params (number);

>>@return height or self


>draggable([{x:true|false, y:true|false} | boolean])

>>@params (axis object or boolean)

>>@return self


>clone()

>>@params

>>@return clone $object


>moveTo(x, y [, duration] [,options])

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


####option object{
  easing: ASPEN EASING
  delay: number(microsec),
  roundtrip: true|false,
  tracePath: undefined | 'arcCW 1.5(ratio)' | 'arcCCW 1.5' => use only 'moveTo', 'moveBy'
  effect: ASPEN EFFECT => use only 'changeState'
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
