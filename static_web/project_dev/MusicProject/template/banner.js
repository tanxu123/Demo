/**

 这个界面的作用是用来构建具体的banner的js 代码，我门不在使用原html来实现对banner的编写和
 而是使用变量定义的形式，使用js代码自动生成banner

 */


/**
 * banner切换时间间隔
 */ var timeout = 5000;
/**
 * banner下标
 */ var bannerIndex = 1000;
/**
 * banner定时器
 */ var bannerInterval;
/**
 * banner内容json
 */ var bannerJson = [
    "../images/one.jpg",
    "../images/two.jpg",
    "../images/three.jpg",
    "../images/four.jpg",
    "../images/five.jpg"];

/********** 函数 **********/
/**
 * banner单次执行内容
 */ function interval() {
    if (bannerIndex > 1000) bannerIndex -= 1000;
    if (bannerIndex < 0) bannerIndex += 1000;
    var banner = document.getElementsByClassName("img_banner")[0];
    banner.src = bannerJson[bannerIndex % bannerJson.length];
    bannerIndex++;
}

/**
 * banner启动
 */ function startBanner() {
    interval();
    bannerInterval = setInterval('interval()', timeout);
}

/**
 * 鼠标悬停banner
 */ function bannerOver() {
    var btn = document.getElementsByName('btn_shift');
    for (var i = 0; i < btn.length; i++) {
        btn[i].style = 'visibility:visible;';
    }
}

/**
 * 鼠标移出banner
 */ function bannerOut() {
    var btn = document.getElementsByName('btn_shift');
    for (var i = 0; i < btn.length; i++) {
        btn[i].style = 'visibility:hidden;';
    }
}

/**
 * 点击上一项
 */ function clickPrev() {
    clearInterval(bannerInterval);
    bannerIndex -= 2;
    startBanner();
}

/**
 * 点击下一项
 */ function clickNext() {
    clearInterval(bannerInterval);
    startBanner();
}


var containerView = "<div class=\"div_banner\">\n" +
    "    <button class=\"btn_shift\" name=\"btn_shift\">&lt;</button>\n" +
    "    <img class=\"img_banner\" id=\"banner\" src=\"../images/one.jpg\" width=\"1000\" height=\"600\"/>\n" +
    "    <button class=\"btn_shift\" name=\"btn_shift\">&gt;</button>\n" +
    "</div>";





/**
 * 动态的创建一个banner
 * @param imageAddress  参数是图片的地址
 */
function createBanner(imageAddress) {

    if (imageAddress != null && imageAddress.length != 0) {
        window.bannerJson = imageAddress;
    }

    startBanner();
    bannerOver();
    this.onclickEvent = function () {

        var div_banner = document.getElementsByClassName("div_banner")[0];
        // div_banner.onmouseover = bannerOver;
        // div_banner.onmouseout = bannerOut;

        var btn_shift = document.getElementsByClassName("btn_shift")[0];
        btn_shift.onclick = clickPrev;
        var btn_shift1 = document.getElementsByClassName("btn_shift")[1];
        btn_shift1.onclick = clickNext;
    };

    this.onclickEvent();
}







