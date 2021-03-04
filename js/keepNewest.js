function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
var time = getQueryString("time");
var nowTime = Date.now();
if (time == null || Number.parseInt(time) < nowTime - 300000) {
    window.location.href = "?time=" + nowTime;
}