//定义ajax加载函数
function Request() {
    /**
     * 创建一个ajax对象
     */
    this.createAJAX = function () {
        var xhr;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xhr = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        return xhr;
    }

    /**
     * @param url 请求的资源的地址
     * @param parseJsonData ajax响应数据产生的回调函数
     */
    this.requestGet = function (url, parseJsonData) {
        var xhr = this.createAJAX();
        //alert(xhr)
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = function (ev) {
            // alert(xhr.status)
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var response = xhr.responseText;
                    parseJsonData(response);
                }
            }
        }
    }

    /**
     * @param url 请求的url
     * @param parseJsonData 响应的回调函数
     * @param requestparam 请求的参数
     */
    this.requestPost = function (url, parseJsonData, requestparam) {
        var xhr = this.createAJAX();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(requestparam);
        xhr.onreadystatechange = function (ev) {
            // alert(xhr.status)
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var response = xhr.responseText;
                    parseJsonData(response);
                }
            }
        }

    }
}