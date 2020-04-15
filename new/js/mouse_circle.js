//import jquery

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//mouse circle

$(document).mousemove(function(e) {
  $("#mouse_circle").css({
    left: e.clientX,
    top: e.clientY
  });
});
