function Polygon (pss){
    this.mVertexs = [];
    if( typeof pss === "string" ){
        this.addPoints(pss);
    }
}

Polygon.prototype = {
    addPoint: function(xPos, yPos) {
        this.mVertexs.push({x:xPos, y:yPos});
    },
    addPoints: function(pointsSequenceString){
        var ptArr = pointsSequenceString.split(",");
        for(var i=0,len=ptArr.length; i<len; i+=2){
            this.addPoint(parseFloat(ptArr[i]), parseFloat(ptArr[i+1]));
        }
    },
    clear: function(){
        this.mVertexs = [];
    },
    contains: function(xPosf, yPosf){
        var sizeOfVertexs = this.mVertexs.length;

        if (sizeOfVertexs < 3) {
            return false;
        }

        var followIndex = sizeOfVertexs - 1;
        var isOddNodes = false;

        /**
         * 아래 알고리즘은 "Point in Polygon" 알고리즘이다.
         * 다만 좌우 양 방향을 체크하는 것이 아니라 왼쪽 방향만을 체크한다.
         */
        var frontPoint, followPoint;
        for (var frontIndex = 0; frontIndex < sizeOfVertexs; frontIndex++) {
            frontPoint   = this.mVertexs[frontIndex];
            followPoint  = this.mVertexs[followIndex];

            if (frontPoint.y < yPosf && followPoint.y >= yPosf || followPoint.y < yPosf && frontPoint.y >= yPosf) {
                /**
                 * "직선의 기울기 m을 갖는 yPosf에 해당하는 x" < xPosf 인지 체크
                 * 두 점을 지나는 직선의 방정식 참고.
                 *      y - y1 = M * (x - x1)
                 *      M = (y2 - y1) / (x2 - x1)
                 */
                if (frontPoint.x + (yPosf - frontPoint.y) / (followPoint.y - frontPoint.y) * (followPoint.x - frontPoint.x) < xPosf) {
                    isOddNodes = !isOddNodes;
                }
            }
            followIndex = frontIndex;
        }

        /**
         * "기울기 m을 갖는 yPosf에 해당하는 x" < xPosf의 개수가 홀수이면
         * 다각형안에 포함된 점이다.
         */
        return isOddNodes;
    }
}
