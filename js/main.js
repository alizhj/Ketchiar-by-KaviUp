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
	//Dölj vid uppstart
	$("#player-wrapper").hide();
    $("#character-wrapper").hide();
    $("#final-answer").hide();
    $("#bottle").hide();

    //Om ja, visa alternativ och dölj Yes/No
    $("#yes").click(function() {	
    	optionYes()
    });
    //Vid nej, ställ följdfråga
    $("#no").click(function() {
    	optionNo()
    });

    function optionYes() {
    	$("#button-wrapper").hide();
    	$("#character-wrapper").show();
    	$("#head-slogan").html("Pick your player");
	}
	/*Om nej väljs, fråga "Are you sure?"" Om nej väljs på den frågan så rullar funktionen
	för ja (optionYes) men om de svarar ja så skriver den ut "But it's fun" och de gamla värdena
	skrivs över och några nya läggs till. DENNA FUNKTIONEN KAN NOG BLI BÄTTRE HAHA. Men nu funkar det iaf
	*/
	function optionNo() {
		$("#head-slogan").html("Are you sure?");
		$("#no").click(function() {	
    		optionYes()
    	});

    	$("#yes").click(function() {	
    		$("#head-slogan").html("But it's fun!");
    		$("#character-wrapper").hide();
    		$("#button-wrapper").hide();
    		$("#final-answer").show();
    		$("#final-answer").click(function() {
    			optionYes()
    			$("#final-answer").hide();
    		});
    	});
	}
	//Klickar på något huvud
    $(".headbox").click(function() {
    	//Två variabler skapas, ena för länk till bilderna, andra för vilken av "headbox" som valdes
    	var playerPicture = ["url(Images/lisa.png)", "url(Images/tobbe.png)", "url(Images/robin.png)"];

   		var clickedPlayer = $(this).attr("id");
   		//Gör om svaret för att kunna skriva ut namnet
   		if (clickedPlayer == "lisa-head") {
    		clickedPlayer = "Lisa";
    	} else if (clickedPlayer == "tobbe-head") {
    		clickedPlayer = "Tobbe";
    	} else {
    		clickedPlayer = "Robin";
    	}
    	//Skriv ut "You picked " samt namnet
   		$("#head-slogan").html("You picked" + " " + clickedPlayer);
   		/*Gör om namnen till booleans för att kunna välja plats i array
   		(notera att numren är beroende på vilken plats de har i arrayen)
   		*/
    	if (clickedPlayer == "Lisa") {
    		clickedPlayer = 0;
    	} else if (clickedPlayer == "Tobbe") {
    		clickedPlayer = 1;
    	} else {
    		clickedPlayer = 2;
    	}
    	//När man trycker så visas huvudet man valt samt namnet .5 sek innan showPlayer funktionen hämtas
    	$("#head-slogan").delay(500).fadeOut(500);
    	$(this).siblings().hide();
    	$(this).delay(500).fadeOut(500, showPlayer);
    	//Fade in på bilden och väljer en background image (med rätt värde från arrayen)
    	function showPlayer() {
    		$("#head-slogan").fadeIn().html("Press screen to start the game");
    		$("#player-wrapper").fadeIn().css("background-image", playerPicture[clickedPlayer]);
    		$(".three").click(function(){
    			$("#head-slogan").addClass("hidden");
				$("#bottle").fadeIn(1000, moveBottle);
			});
    	}

    	function moveBottle() {

    		var bottleSpeed = 500;

    		$("#bottle").animate({
    			top: "+=100%"
    		}, bottleSpeed, function() {
    			$("#bottle").animate({
    				top: "-=100%"
    			}, 0, function() {
	    			moveBottle();
	    		});
    		});

    		$(".three").click(function() {
    			$("#bottle").stop();
    		});
    	}
    });
});