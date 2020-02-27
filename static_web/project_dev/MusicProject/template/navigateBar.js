/**
 导航条的设置以及创建
 */

//定义全局的img的图片地址
var imgAddress = "../images/logo.png";

var clickItems;

var navigateItemUL;

/**
 * 默认选中的index
 */
var defalutSelectIndex = 0;

var spanSet;

/**
 * 注册界面的地址
 */
var registerAddress;
/**
 * 登录的地址
 */
var loginAddress;


/**
 *加载数据
 */
function onloadData() {
    var logo = document.getElementById("logo");
    logo.src = window.imgAddress;

    navigateItemUL = document.getElementById("navigateItemUl");
    //加载其他的item数据
    for (var i = 0; i < clickItems.length; i++) {

        var itemName = clickItems[i].itemName;
        var linkAddress = clickItems[i].linkAddress;
        navigateItemUL.innerHTML
            += "<li><a href=\"" + linkAddress +
            "\"><span class=\"navigateItm\">"
            + itemName + "</span></a></li>";
    }

}

/**
 */
function addMouseEvent() {

    spanSet = navigateItemUL.getElementsByClassName("navigateItm");
    for (var i = 0; i < spanSet.length; i++) {
        spanSet[i].onmouseover = function (ev) {
            this.beforeColor = this.style.color;
            this.style.color = "#fe9e00"
        }
        spanSet[i].onmouseout = function (ev) {
            this.style.color = this.beforeColor;
        }

    }

}


var createView = "<div class=\"navigateBarContainer\">\n" +
    "    <img id=\"logo\"/>\n" +
    "    <ul id=\"navigateItemUl\">\n" +
    "    </ul>\n" +
    "    <!--用户登录的显示-->\n" +
    "    <div class=\"user\">\n" +
    "        <span onclick=\"login()\">登录</span>\n" +
    "        /\n" +
    "        <span onclick=\"register()\">注册</span>\n" +
    "    </div>\n" +
    "    <!--搜索区域-->\n" +
    "    <div class=\"searchArea\">\n" +
    "        <input class=\"input\" placeholder=\"输入歌名或歌手\"/>\n" +
    "    </div>\n" +
    "</div>";


/**
 * 设置登录的状态
 * @param statusBool
 * @param userName
 */
function setLoginStatus(statusBool, userName) {

    if (statusBool) {//如果已经登录
        var userElement = document.getElementsByClassName("user")[0];
        var inner = " <span onclick=\"\">" + name + "</span>\n" +
            "        /\n" +
            "        <span onclick=\"\">" + 注销 + "</span>\n";

        userElement.innerHTML = inner;

    }

}

/**
 *  用来创建给一个导航条
 * @param imageAddress 图片的地址
 * @param itemArray 点击的对象数组是一个ClickItem的实例   @{ClickItem}
 */
function createNavigate(imageAddress, clickItems, loginAddress, registerAddress) {

    if (imageAddress != null) {
        window.imgAddress = imgAddress;
    }
    window.clickItems = clickItems;

    window.loginAddress = loginAddress;
    window.registerAddress = registerAddress;
    onloadData();
    setSelect(defalutSelectIndex);
    addMouseEvent();

    return createView;
}


/**
 * 设置默认的选中
 * @param int
 */
function setSelect(index) {

    spanSet = navigateItemUL.getElementsByTagName("li")
    spanSet[index].className = "selectStyle";

}


function register() {
    location.href = registerAddress;
}

function login() {

    location.href = loginAddress;

}