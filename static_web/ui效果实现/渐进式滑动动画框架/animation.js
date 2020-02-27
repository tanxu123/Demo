function scrollnumber(element, cssname, offset) {
    var a, b, c, d;
    d = $(element).offset().top;
    a = eval(d + offset);
    b = $(window).scrollTop();
    c = $(window).height();
    if (b + c > a) {

        /**
         * 如果是下移动画 ，就去获得当前节点的子节点进行的动画的计算
         * {@link animation.css#.downTranRoot}
         * {@link animation.css#.downTranContainer}
         */
        if (element == ".downTranRoot") {
            //下移动
            element = ".downTranContainer";
        }

        $((element)).addClass((cssname));
    }
}


/**
 * 高度测量函数 ，用来执行下移动画 测量高度 ，计算动画滑动距离
 */
function heightDimension() {
    let height = $(".downTranContainer").css("height");
    //设置top
    $(".downTranContainer").css("top", "-" + height);
}

/**
 * 动画执行的初始化工具
 * 1.进行 下移动画 高度测量
 *
 *
 */
function animationEntryInit() {

    heightDimension();

}
