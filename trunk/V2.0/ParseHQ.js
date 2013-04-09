var downform = document.getElementById("form");
var ratelist = downform.getElementsByTagName("li");
var nodecount = ratelist.length;
var hqurl = "";
var ulNode = ratelist[0].parentNode;
var datadata = "";
var hqNode = document.createElement("li");
var lihtml = "<label hidefocus=\"true\" for=\"bit320\"><input class=\"down-radio\" type=\"radio\" disabled name=\"chooserate\" id=\"bit320\"><span class=\"excellent-icon\"></span>超高品质"

if (Check320Exists()) {
    var mp3Size = GetSongSize();
    var mp3Id   = GetSongId();
    var mp3Url  = GetSongUrl(mp3Id);
    ulNode.removeChild(ratelist[2]); // 参数获取完毕再删除节点
    hqNode.innerHTML  = lihtml + "<span class=\"fwb\">" + mp3Size + "</span> (mp3 320kbps)</label>";
    hqNode.innerHTML += "<a href=\"" + mp3Url + "\" title=\"点击下载超高品质MP3\"><strong>点击下载</strong></a>"; 
} else {
    hqNode.innerHTML  = lihtml + "</label>";
    hqNode.innerHTML += "本歌曲没有超高品质可供下载";
}

hqNode.innerHTML += "(Powered By <a href=\"http://www.programlife.net/\" target=\"_blank\">HqBaiduMusic</a>)<br/>";
hqNode.innerHTML += "<br/>温馨提示：如果下载链接失效，请前往";
hqNode.innerHTML += "<a href=\"http://www.programlife.net/\" target=\"_blank\">主页</a>下载最新版本插件！";
ulNode.appendChild(hqNode);
//VisitStatics();

// 获取歌曲的ID
function GetSongId() {
    var url = window.location.href;
    var arrRes = url.split("/");
    return arrRes[4];
}

// 检查是否存在320KBPS歌曲
function Check320Exists() {
    var downform = document.getElementById("form");
    var ratelist = downform.getElementsByTagName("li");
    var strHtml = ratelist[0].parentNode.innerHTML;
    
    if (strHtml.indexOf("320kbps") == -1) {
        return false;
    }
    return true;
}

// 获取歌曲的大小
function GetSongSize() { 
    var downform = document.getElementById("form");
    var ratelist = downform.getElementsByTagName("li");
    var strHtml = ratelist[0].parentNode.innerHTML;
    var strSize = strHtml.match(/\d+\.*\d*M<\/span> \(mp3 320kbps/g);
    if (strSize != null) {
        strSize = strSize[0];
        strSize = strSize.substring(0, strSize.indexOf("<"));
        return strSize;
    }
    return null;
}

// 获取歌曲下载URL
function GetSongUrl(songId) {
    var url = "http://yinyueyun.baidu.com/data/cloud/downloadsongfile?songIds=";
    url = url + songId;
    url = url + "&rate=320";
    return url;
}

// 访问统计页面 - 貌似没用，不要得了
/*
function VisitStatics() {
    var client = new XMLHttpRequest();
    var url = "http://www.programlife.net/tj/hqbaidumusic.html";
    client.open("GET", url, true);
    client.setRequestHeader();
    client.send();
}
*/
