function getStyle(obj, attr)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj, attr, iTarget)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        var iCur=parseInt(getStyle(obj, attr));
        var iSpeed=(iTarget-iCur)/8;
        iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

        if(iCur==iTarget)
        {
            clearInterval(obj.timer);
        }
        else
        {
            obj.style[attr]=iCur+iSpeed+'px';
        }
    }, 30)






}
