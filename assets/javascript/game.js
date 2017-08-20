/*
 * CrystalsCollector!
 * Michael Stange
 * UCSD Coding Boot Camp - Assignment #4
 */

var wins = 0;
var losses = 0;

var crystal1;
var crystal2;
var crystal3;
var crystal4;

var randomNumber;

var totalScore = 0;

var sound = new Audio();

/*
 * writeHTML()
 * Update HTML based on results of click event.
 */
function writeHTML() {
    $("#score").html(totalScore);
    $("h3#wins").html(wins);
    $("h3#lossses").html(losses);
}

/* reset()
 * Reset for new game.
 */
function reset() {

    // spin crystals
    $("crystal-image").attr("src", "../images/crystal-spin.gif");

    // get a new random number
    randomNumber = Math.floor(Math.random() * 102 + 19);
    $("#random").html(randomNumber);

    // reset score
    totalScore = 0;
    $("#score").html(0);

    crystal1 = Math.floor(Math.random() * 13 + 1);
    crystal2 = Math.floor(Math.random() * 12 + 1);
    crystal3 = Math.floor(Math.random() * 12 + 1);
    crystal4 = Math.floor(Math.random() * 12 + 1);
}


/*
 * applyCrystalValue(crystalValue)
 * Adds the value of the clicked crystal to the total score.
 * Check to see if the total score is equal to the random number (win),
 * greater than the random number (loss).  If neither (the else condition),
 * return back to the document ready function and listen for more click events.
 */
function applyCrystalValue(crystalValue) {
    
    totalScore += crystalValue;
    
    writeHTML();

    // WINNER!
    if (totalScore === randomNumber) {
        
        wins++;
        $("#wins").html(wins);

        sound.src = "assets/audio/space-ripple.wav";
        sound.play();

        $(".crystal-image").attr("src", "assets/images/crystal.gif");

        reset();

        setTimeout(function() {
            $(".crystal-image").attr("src", "assets/images/tmp-45.gif");
        }, 3730);
    }

    // Loss
    else if (totalScore > randomNumber) {

        losses++;
        $("#losses").html(losses);
        
        sound.src = "assets/audio/bell-toll.wav";
        sound.play();
 
        $(".crystal-image").attr("src", "assets/images/crystal.gif");

        reset();

        setTimeout(function() {
            $(".crystal-image").attr("src", "assets/images/tmp-45.gif");
        }, 3730);
    }
}

// wait for start button click to start
$(document).ready(function() {

    $(".crystal-image").attr("src", "assets/images/crystal.gif");
       
    reset();

    setTimeout(function() {

        $(".crystal-image").attr("src", "assets/images/tmp-45.gif");
    }, 1250);

    $("#crystal-image-1").on("click", function() {
       
        $("#crystal-image-1").attr("src", "assets/images/crystal.gif");
        
        applyCrystalValue(crystal1);

        setTimeout(function() {
            $(".crystal-image").attr("src", "assets/images/tmp-45.gif");
        }, 1250);
    });

    $("#crystal-image-2").on("click", function() {

        $("#crystal-image-2").attr("src", "assets/images/crystal.gif");

        applyCrystalValue(crystal2);

        setTimeout(function() {
            $(".crystal-image").attr("src", "assets/images/tmp-45.gif");
        }, 1250);
    });

    $("#crystal-image-3").on("click", function() {
       
        $("#crystal-image-3").attr("src", "assets/images/crystal.gif");

        applyCrystalValue(crystal3);

        setTimeout(function() {
            $(".crystal-image").attr("src", "assets/images/tmp-45.gif");
        }, 1250);
    });

    $("#crystal-image-4").on("click", function() {

        $("#crystal-image-4").attr("src", "assets/images/crystal.gif");

        applyCrystalValue(crystal4);

        setTimeout(function() {
            $(".crystal-image").attr("src", "assets/images/tmp-45.gif");
        }, 1250);
    });
});