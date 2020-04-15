// import jQuery

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// Mouse Circle

$(document).mousemove(function(e) {
  $("#mouse_circle").css({
    left: e.clientX,
    top: e.clientY
  });
});

//Topic Preview

const one = document.getElementById("one");
const preview = document.getElementById("preview");

one.addEventListener("mouseover", func);
one.addEventListener("mouseout", func2);



function func() {
  $(document).mousemove(function(f) {
    $('#preview').css({
       left:  f.clientX,
       top:   f.clientY,
       display: "block"
    });
  });
}

function func2() {
  $(document).mousemove(function(f) {
    $('.preview').css({
       display: "none"
    });
  });
}

//cycle thru
