

$(document).mousemove(function(e){
    $("#mouse_circle").css({left:e.clientX, top:e.clientY});
});

document.getElementByClassName("daysoftype").onmouseover = mouseOver();

function mouseOver() {
  document.getElementByByClassName("header").style.background.color = "red";
}
