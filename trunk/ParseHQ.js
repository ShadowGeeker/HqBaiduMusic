var downform = document.getElementById("form");
var ratelist = downform.getElementsByTagName("li");
var nodecount = ratelist.length;
var hqurl = "";
var ulNode = ratelist[0].parentNode;
var datadata = "";
var hqNode = document.createElement("li");
var lihtml = "<label hidefocus=\"true\" for=\"bit320\"><input class=\"down-radio\" type=\"radio\" disabled name=\"chooserate\" id=\"bit320\"><span class=\"excellent-icon\"></span>超高品质 (mp3 320kbps)</label>"

if (nodecount == 3) {
    var hqnode = ratelist[2];
    datadata = hqnode.getAttribute("data-data");
    var obj = JSON.parse(datadata);
    hqurl = obj.link;
    ulNode.removeChild(ratelist[2]);
    
    hqNode.setAttribute("data-data", datadata);
    hqNode.innerHTML = lihtml;
    
    if (typeof(hqurl) == "undefined") {
        hqNode.innerHTML += "尚未登录，请先登入百度账号！(Powered By <a href=\"http://www.programlife.net/\" target=\"_blank\">HqBaiduMusic</a>)";
    } else {
        hqurl = "http://music.baidu.com" + hqurl;
        hqNode.innerHTML += "<a href=\"" + hqurl + "\" title=\"点击下载超高品质MP3\"><strong>点击下载</strong></a> (Powered By <a href=\"http://www.programlife.net/\" target=\"_blank\">HqBaiduMusic</a>)";
    }
} else {
    hqNode.innerHTML = lihtml;
    hqNode.innerHTML += "本歌曲没有超高品质可供下载 (Powered By <a href=\"http://www.programlife.net/\" target=\"_blank\">HqBaiduMusic</a>)";
}

ulNode.appendChild(hqNode);