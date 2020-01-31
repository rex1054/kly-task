var closeBtSrc = "https://lh4.googleusercontent.com/proxy/mRTcxoAiX8Yws2N-U-X9P76GD8ugFb5OcUPvP21_QiTRjoHReZyvgxYoKj8vbXQ0TJwM5CA-ZP_YvuHBIcz4l6rSKhRBPzYHnYYgUCB2IDsnab8APKuSVQwLonDAMw";

var div = document.createElement("div");
var center = document.createElement("center");
var wrapper = document.createElement("div");
var img = document.createElement("img");
var closeBt = document.createElement("img");

var style = `display: none;
width: 100vw;
height: 400px;
position: fixed;
top: 50%;
transform: translateY(-50%);
align: center;
margin-right: auto;
margin-bottom: auto;
z-index: 99999`;

var closeStyle = `position: absolute;
margin-left: 565px;
top: 1%;
z-index: 999999;
width: 30px;`;

div.setAttribute("id", "modals");
wrapper.setAttribute("id", "img-wrapper");
wrapper.setAttribute("style", "width: 600px; height: 400px");
img.setAttribute("src", "https://www.a1carpet-to.com/wp-content/uploads/2015/08/600x400.png");
closeBt.setAttribute("id", "tombolTutup");
closeBt.setAttribute("src", closeBtSrc);
closeBt.style = closeStyle;
closeBt.setAttribute("onclick", "hidePop()");
div.style = style;

wrapper.appendChild(closeBt);
wrapper.appendChild(img);
center.appendChild(wrapper);
div.appendChild(center);
document.body.appendChild(div);

document.body.addEventListener("load", popTime());
img.addEventListener("click", hidePop());

function popTime(){
    setTimeout(function(){
        var modal = document.getElementById("modals");
        modal.style.display = "block";
    }, 5000)}

function hidePop(){
    var modal = document.getElementById("modals");
        modal.style.display = "none";
}