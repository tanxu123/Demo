/**
 * @author miaov
 */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true;
        for (var attr in json) {
            var iCur = 0;

            if (attr == 'opacity') {
                iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                iCur = parseInt(getStyle(obj, attr));
            }

            //计算速度
            var iSpeed = (json[attr] - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            //3.获得当前的值
            if (iCur != json[attr]) {
                bStop = false;
            }

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;
            }
            else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }

        if (bStop) {
            clearInterval(obj.timer);

            if (fn) {
                fn();
            }
        }
    }, 30)
}