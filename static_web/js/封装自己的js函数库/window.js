/**
 * 返回窗口相对于屏幕左边和上边的位置
 * @returns {any[]} 返回的类型为数组，arr[0]为左边距，arr[1]为上边距
 */
function getScreen() {
    var arr = new Array();
    var screenL = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
    var screenT = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
    arr[0] = screenL;
    arr[1] = screenT;
    return arr;
}

/**
 * 依次返回浏览器的innerWidth,innerHeight,outerWidth,outerHeight,
 * 类型分别为页面视图的宽，页面视图的高，浏览器的宽，浏览器的高
 * @returns {any[]}，返回的是数组类型
 * 这种检测手段也有缺陷，各大浏览器的兼容性差异很大，同时还要满足
 * 移动设备的兼容，在这个函数没有考虑
 */
function getScreen() {
    var arr = new Array();
    arr[0] = window.innerWidth;
    arr[1] = window.innerHeight;
    arr[2] = window.outerWidth;
    arr[3] = window.outerHeight;

    if (typeof arr[0] != "number" || typeof arr[1] != "number") {

        if (typeof document.documentElement.clientHeight != "number" || typeof document.documentElement.clientWidth != "number") {
            arr[0] = document.body.clientWidth;
            arr[1] = document.body.clientHeight;
        } else {
            arr[0] = document.documentElement.clientWidth;
            arr[1] = document.documentElement.clientHeight;
        }
    }
    return arr;
}

/**
 * 检测浏览器的插件，这个方法的检测是非ie浏览器的检测方法，
 * 下面列举了一些检测的案例
 * alert("Flash:"+pluginTesting("Flash"));
 alert("QuickTime:"+pluginTesting("QuickTime"));
 * @param name 需要检测的插件名
 * @returns {boolean} 返回检测是否存在的boolean值，存在返回true，否则返回false
 */
function pluginTesting(name) {
    name = name.toLowerCase();
    if (navigator.plugins instanceof PluginArray) {
        for (var i = 0; i < navigator.plugins.length; i++) {
            if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
                return true;
            } else {
                return false;
            }
        }
    }
}

/**
 *  检测浏览器的插件，这个方法的检测是ie浏览器的检测方法，
 *  下面列举了一些检测的案例
 *  alert("hasPlugin(ShockwaveFlash.ShockwaveFlash)");检测flash
 * @param name Com的标识符，ie是以Com对象的方式实现插件的
 * @returns {boolean} 返回检测是否存在的boolean值，存在返回true，否则返回false
 */
function hasPlugin(name) {
    try {
        new ActiveXObject(name);
        return true;
    } catch (e) {
        return false;
    } finally {
    }
}

/**
 * 根据特定的id找到特定的dom对象
 * @param id
 * @returns {*}
 */
function getElement(id) {
    if (document.getElementById) {
        return document.getElementById(id);
    } else if (document.all) {
        return document.all[id];
    }
}

/**
 *检测浏览器所支持的功能
 * @param func 检测浏览器支持的功能
 * @param version 检测浏览器支持功能的版本
 * @returns {boolean} 支持返回true 不支持返回false
 */
function domConsistencyTesting(func, version) {
    var isSupport = document.implementation.hasFeature(func, version);
    return isSupport;
}

/**
 * 动态创建脚本
 * @param code 函数字符串
 */
function damicScript(code) {
    var head = document.head;
    var script = null;
    for (var i = 0; i < head.children.length; i++) {//元素节点对象
        if (head.children[i].nodeName.toLowerCase() == "script") {
            script = head.children[i];
        }
    }
    try {
        script.appendChild(document.createTextNode(code));
    } catch (e) {
        script.text = code;
    }
    document.head.appendChild(script);
}


/**
 * 动态增加css修饰
 * @param css 选择器以及修饰属性
 */
function styleAddtion(css) {
    var style = document.getElementsByTagName("style");
    if (!style) {
        style = document.createElement("style");
    }
    var divNodeStyle = document.createTextNode(css);
    try {
        style[0].appendChild(divNodeStyle);
    } catch (e) {
        style.styleSheet.cssText = css;
    } finally {
    }
}


/**
 * 获得元素内的文本
 * @param ele
 * @returns {*} 返回string类型的div的innerText
 */
function getInnerText(ele) {
    if (typeof ele.textContent == "string") {
        return ele.textContent;
    } else {
        return ele.innerText;
    }
}

/**
 *
 插入元素的文本
 * @param ele 元素对象
 * @param text 需要设置的文本
 */
function setInnerText(ele, text) {
    if (typeof ele.textContent == "string") {
        ele.textContent = text;
    } else {
        ele.innerText = text;
    }
}

/**
 *     //获得cssStyleSheet对象样式表对象
 * @returns {StyleSheet | ActiveX.IXMLDOMNode}
 */
function getStyleSheet() {
    var style = document.head.getElementsByTagName("style")[0];
    return style.sheet || style.stylesheet;
}

/**
 * 向样式表中插入规则
 * @param sheet
 * @param selectorText
 * @param cssText
 * @param position
 */
function insertRule(sheet, selectorText, cssText, position) {
    if (sheet.insertRule) {
        sheet.insertRule(selectorText + "{" + cssText + "}", position);
    } else if (sheet.addRule) {
        sheet.addRule(selectorText, cssText, position);
    }
}

/**
 * 从样式表中删除规则
 * @param sheet 样式表对象
 * @param index 要删除的索引
 */
function deleteRule(sheet, index) {
    if (sheet.deleteRule) {
        sheet.deleteRule(index);
    } else if (sheet.removeRule) {
        sheet.removeRule(index);
    }
}

/**
 * 确定文档的总高度
 * @returns {any[]} 返回的是数组类型，返回的数据存放在数组的0,1项中，0是宽1是高
 */
function getDocumentDimention() {
    var arr = new Array();
    var ele = null;
    if (document.compatMode == "BackCompat") {
        ele = document.body;
    } else {
        ele = document.documentElement;
    }
    var width = Math.max(ele.scrollWidth, document.ele.clientWidth);
    var height = Math.max(ele.scrollHeight, ele.clientHeight);
    arr[0] = width;
    arr[1] = height;
    return arr;
}

/**
 * 获得浏览器的视口大小 返回匿名对象，该对象有宽高两个属性
 * @returns {{width: number, height: number}}
 */
function getViewPort() {
    if (document.compatMode == "BackCompat") {//混杂模式
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}

/**
 * 返回的是跨浏览器的事件处理对象，有两个属性；addHandler和removeHandler,
 * 使用的处理程序以Dom2级事件处理程序为主体
 * @returns {{addHandler: addHandler, removeHandler: removeHandler}}
 */
function eventUtil() {
    var EventUtil = {
        addHandler: function (event, type, handler) {
            if (event.addEventListener) {
                event.addEventListener(type, handler, false);
            } else if (event.attachEvent) {
                event.attachEvent("on" + type, handler);
            } else {
                event["on" + type] = null;
            }
        },
        getEvent: function (event) {
            return event ? event : window.event;
        },
        getTarget: function (event) {
            return event.target || event.srcElement;
        },
        preventDefault: function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        removeHandler: function (event, type, handler) {
            if (event.removeEventListener) {
                event.removeEventListener(type, handler, false);
            } else if (event.detachEvent) {
                event.detachEvent("on" + type, handler);
            } else {
                event["on" + type] = null;
            }
        },
        stopPropagation: function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelable = true;

            }
        },
        getRelatedTarget: function (event) {
            if (event.relatedTarget) {
                return event.relatedTarget;
            } else if (event.toElement) {
                return event.toElement;
            } else if (event.fromElement) {
                return event.fromElement;
            } else {
                return null;
            }
        },
        getButton: function (event) {
            if (document.implementation.hasFeature("MouseEvents", "2.0")) {
                return event.button;
            } else {
                switch (event.button) {
                    case 0:
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                        return 0;
                    case 2:
                    case 6:
                        return 2;
                    case 4:
                        return 1;
                }
            }
        }
    };
    return EventUtil;
}

/**
 * 选择文本框中的文本
 * @param textBox 文本框
 * @param startIndex 选择的开始位置
 * @param endIndex 选择的结束位置
 */
function selectText(textBox, startIndex, endIndex) {
    if (textBox.setSelectionRange) {
        textBox.setSelectionRange(startIndex, endIndex);
    } else if (textBox.createTextRange) {
        var range = textBox.createTextRange();
        range.collapse(true);
        range.moveStart("character", 0);
        range.moveEnd("character", textBox.value.length);
        range.select();
    }
    textBox.focus();
}





