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

    $(".headbox").click(function() {

    	var playerPicture = ["url(Images/lisa.png)", "url(Images/tobbe.png)", "url(Images/robin.png)"];

   		var clickedPlayer = $(this).attr("id");

   		if (clickedPlayer == "lisa-head") {
    		clickedPlayer = "Lisa";
    	} else if (clickedPlayer == "tobbe-head") {
    		clickedPlayer = "Tobbe";
    	} else {
    		clickedPlayer = "Robin";
    	}

   		$("#head-slogan").html("You picked" + " " + clickedPlayer);

    	if (clickedPlayer == "Lisa") {
    		clickedPlayer = 0;
    	} else if (clickedPlayer == "Tobbe") {
    		clickedPlayer = 1;
    	} else {
    		clickedPlayer = 2;
    	}

    	$("#head-slogan").delay(500).fadeOut(500);
    	$(this).siblings().hide();
    	$(this).delay(500).fadeOut(500, showPlayer);

    	function showPlayer() {
    		$("#player-wrapper").fadeIn().css("background-image", playerPicture[clickedPlayer]);
    	}
    });

});