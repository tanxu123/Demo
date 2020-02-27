window.onload = function () {

    /**
     * 实现下拉菜单
     */
    var test = document.getElementById("ui效果实现");
    var list = document.getElementById("list");

    var span = document.getElementsByTagName("span")[0];

    var a = test.getElementsByTagName("a")[0];

    //鼠标移入
    test.onmouseover = function () {
        this.style.border = "1px solid #e5e5e5";
        a.style.color = "#fe4912"
        span.className = "span2";
        list.style.display = "block";
    }
    //鼠标移除时
    test.onmouseout = function () {
        this.style.border = ""
        a.style.color = ""
        span.className = ""
        list.style.display = ""
    }

    //改变客服的css样式
    var lx = document.getElementById("lx");

    var span1 = lx.getElementsByTagName("span")[0];

    var a1 = lx.getElementsByTagName("a")[0];

    lx.onmouseover = function () {
        a1.style.color = "#fe4912"
        span1.className = "span3"
    }
    lx.onmouseout = function () {
        a1.style.color = ""
        span1.className = ""
    }


    //实现轮播效果
//保存当前焦点元素的索引

    var current_index = 0;

    var timer = window.setInterval(autoChange, 5000)

    var button_li = document.getElementById("button").getElementsByTagName("li")

    var pic_div = document.getElementById("banner_pic").getElementsByTagName("div");

    for (var i = 0; i < button_li.length; i++) {

        button_li[i].onmouseover = function () {
            //定时器存在时清理定时器
            if (timer) {
                clearInterval(timer)
            }

            //遍历元素
            for (var j = 0; j < pic_div.length; j++) {
                if (button_li[j] == this) {
                    current_index = j;
                    button_li[j].className = "current"
                    pic_div[j].className = "current"
                } else {
                    pic_div[j].className = "pic"
                    button_li[j].className = "but"
                }
            }
        }

        button_li[i].onmouseout = function () {
            timer = setInterval(autoChange, 5000)
        }
    }


    function autoChange() {
        ++current_index
        if (current_index == button_li.length) {
            current_index = 0
        }
        for (var i = 0; i < button_li.length; i++) {

            if (i == current_index) {
                button_li[i].className = "current"
                pic_div[i].className = "current"
            } else {
                button_li[i].className = "but"
                pic_div[i].className = "pic"
            }
        }

    }


}







