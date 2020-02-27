/**
 *
 * @param modelWrapper ModelWrapper 模型的包装类
 */
function CreateDisplayTemplate(modelWrapper) {


    this.modelWrapper = modelWrapper;


    var isConner = this.modelWrapper.isConner;


    var imgClass = isConner == true ? "connerMenuImg" : "menuImg";

    var textAlignCenter = isConner == true ? "textAlignCenter" : "";

    /**
     *
     * 创建音乐菜单列表
     * 这个方法就是用来创建实际的html代码的
     */
    this.createMusicMenuList = function () {

        var container = "<div class=\"menuList\">"
        container += this.createHead();
        container += this.createContent();

        return container + "</div>"
    }


    this.addEvent = function (index) {

        var menuList = document.getElementsByClassName("menuList")[index];
        var columnList = menuList.getElementsByClassName("columnSingleMenu");

        for (var i = 0; i < columnList.length; i++) {

            columnList[i].tag = this.modelWrapper;
            columnList[i].index = i;
            columnList[i].onmouseover = function (ev) {
            }

            columnList[i].onmouseout = function (ev) {
            }
            columnList[i].onclick = function () {
                location.href = this.tag.list[this.index].link;
            }
        }

    }


    this.createHead = function () {

        var head = " <div class=\"headMenu\">\n" +
            "        <span class=\"title\">" + this.modelWrapper.title + "</span>\n" +
            "        <div class=\"divAllRight\"><a href='" + this.modelWrapper.linkAddress + "'><span style='color: #7d7e7c'>" + this.modelWrapper.linkName + " &gt;</span></a></div>\n" +
            "    </div>";
        return head;
    }

    this.createContent = function () {

        var content = " <div class=\"menuListContainer\">\n";


        if (this.modelWrapper.list[0] instanceof MusicMenu) {


            for (var i = 0; i < this.modelWrapper.list.length; i++) {
                var single;
                var obj = this.modelWrapper.list[i];

                single = " <div class=\"columnSingleMenu\">\n" +
                    "            <img src=\"" + servler + obj.image + "\" class=\"" + imgClass + "\"/>\n" +
                    "            <p class=\"" + textAlignCenter + " title1\">" + obj.title1 + "</p>\n" +
                    "            <p class=\"" + textAlignCenter + " title2\" > " + obj.title2 + "</p>\n" +
                    "            <p class=\"" + textAlignCenter + " title3\">" + obj.title3 + "</p>\n" +
                    "        </div>"
                content += single;
            }
        } else if (this.modelWrapper.list[0] instanceof Singer) {

            for (var i = 0; i < 8; i++) {
                var single;
                var obj = this.modelWrapper.list[i];
                single = " <div class=\"columnSingleMenu\">\n" +
                    "            <img src=\"" + servler + obj.image + "\" class=\"" + imgClass + "\"/>\n" +
                    "            <p class='title1 " + textAlignCenter + "'>" + obj.name + "</p>\n" +
                    "            <p class='title3 " + textAlignCenter + "' style='color:#f47615'>" + obj.describute + "</p>\n" +
                    "        </div>"
                content += single;
            }
        }

        return content + " </div>";
    }


}