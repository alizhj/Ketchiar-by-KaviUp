$(document).ready(function() {

$(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y >= 100) {
        TweenMax.to($(".content"),2, {x: "0px", y: "800px"});
      }  
      else {
      	TweenMax.to($(".content"),2, {x: "0px", y: "0px"});
      }
    });
});