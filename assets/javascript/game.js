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
 * play(crystalPoints)
 */
function play()


/* reset()
 * Reset for new game.
 */
function reset() {

    // Refresh display
    var refreshedHTML =  "<p>Wins: " + wins + "</p>" +
                            "<p>Losses: " + losses;

    $("#status").html(refreshedHTML);

    // spin crystals
    $("crystal-image").attr("src", "../images/crystal-spin.gif");
}

// wait for start button click to start
$(document).ready(function() {

    $("#start-button").on("click", function() {
        reset();
    });

    $("#crystal-image-1").on("click"), function() {
        play(crystal1);
    }
});