
function binkWindow() {
    var oBtn = document.getElementById("btnLogin");
    oBtn.onclick = function () {
        //获取页面的高度和宽度 
        var sHeight = document.documentElement.scrollHeight;
        var sWidth = document.documentElement.scrollWidth;
        //获取可视区域的高度宽度
        var wHeight = document.documentElement.clientHeight;
        var wWidth = document.documentElement.clientWidth;
        var oMask = document.createElement("div");
        oMask.id = "mask";
        oMask.style.height = sHeight + "px";
        oMask.style.width = sWidth + "px";
        document.body.appendChild(oMask);
        var oLogin = document.createElement("div");
        oLogin.id = "login";
        oLogin.innerHTML = "<div class='loginCon'><div id='close'></div></div>";
        document.body.appendChild(oLogin);
        var dHeight = oLogin.offsetHeight;
        var dWidth = oLogin.offsetWidth;
        oLogin.style.left = (sWidth - dWidth) / 2 + "px";
        oLogin.style.top = (wHeight - dHeight) / 2 + "px";
        var oClose = document.getElementById("close");
        oMask.onclick = oClose.onclick = function () {
            document.body.removeChild(oMask);
            document.body.removeChild(oLogin);
        };
    };
}

