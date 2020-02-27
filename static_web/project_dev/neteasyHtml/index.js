window.onload = function () {
    var timer;

    var photo_galley = document.getElementsByClassName("photo_galley")[0];
    var photo = photo_galley.getElementsByTagName("li");

    var icon_galley = document.getElementsByClassName("icon_galley")[0];
    var icon = icon_galley.getElementsByTagName("li");
    var count = 0;


    var oprationChange = function (index) {

        if (photo[0] instanceof HTMLLIElement) {
            //得到所有的图片的li,进行重置
            for (var i = 0; i < photo.length; i++) {
                photo[i].className = "photo"
                icon[i].className = "icon"
            }
            photo[index % photo.length].className = "current"
            icon[index % photo.length].className = "current_icon"
            //下面设置对应的小图标变色
        }
    }

    timer = function () {
        //在这里执行周期函数
        count++;
        oprationChange(count);

    }


    setInterval(timer, 2000)

    //下面对每个小图标设置鼠标的点击事件
    for (var i = 0; i < icon.length; i++) {
        if (icon[i] instanceof HTMLLIElement) {
            icon[i].tag = i;
            icon[i].onmouseover = function (ev) {
                //取消之前的定时器。然后我们获得当前的位置进行设置
                if (timer != null) {
                    clearInterval(timer)
                }
                var index = this.tag;
                oprationChange(index);
            }
            icon[i].onmouseout = function (ev) {
                // setInterval(timer, 2000)
            }
        }
    }


}