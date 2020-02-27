/**
 * 点击对象的封装
 * @param itemName
 * @param linkAddress
 * @constructor
 */
function ClickItem(itemName, linkAddress) {

    this.itemName = itemName;
    this.linkAddress = linkAddress;

}


/**
 * 歌手对象
 * @param id
 * @param name
 * @param destribute
 * @constructor
 */
function Singer(id, name, describute, image, link) {

    this.id = id;
    this.name = name;
    this.link = link;
    this.image = image;
    this.describute = describute;
}


/**
 * 这个是music的数据库的数据分类
 * @param id
 * @param name
 * @param albumId
 * @param clasfyId
 * @param image
 * @param singerId
 * @param playTime
 * @param playCount
 * @constructor
 */
function Music(id, name, albumId, clasfyId, image, singerId, playTime, playCount) {
    this.id = id;
    this.albumId = albumId;
    this.classfyId = clasfyId;
    this.image = image;
    this.singerId = singerId;
    this.playTime = playTime;
    this.playConut = playCount;
}


function Classfy(id, classfyName, image) {
    this.id = id;
    this.className = classfyName;
    this.image = image;
}


/**
 * 分类的包装对象
 * 这个类新歌的分类返回的数据
 * @param classfy
 * @param musicArray    这里的music的构建是  id  .歌名  ,  歌手名    时长
 * @constructor
 */
function ClassfyWrapper(classfy, musicArray) {
    this.classfy = classfy;
    this.musicArray = musicArray;
}


/**
 * @param title
 * @param linkName
 * @param linkAddress
 * @param isConner
 * @param list 这个是一个集合存放的是singer或者是MusicMenu对象
 * @constructor
 */
function ModelWrapper(title, linkName, linkAddress, isConner, list) {

    this.title = title;
    this.linkName = linkName;
    this.linkAddress = linkAddress;
    this.isConner = isConner;
    this.list = list;
}

/**
 *@param music 歌曲的封装对象
 *@param image  歌单的图片
 *@param link  点击的链接
 *@param title1 标题1
 *@param title2  标题2
 *@param title3  标题3
 */
function MusicMenu(music, image, link, title1, title2, title3,id) {
    this.music = music;
    this.id=id;
    this.image = image;
    this.link = link;
    this.title1 = title1;
    this.title2 = title2;
    this.title3 = title3;
}



