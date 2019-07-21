$(document).ready(function () {

    var randomNumberHeading = $("#rdm-number");
    var winsHeading = $("#wins");
    var lossesHeading = $("#losses");
    var pointsHeading = $("#points");
    var images = $("#images");

    
    var computerChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var wins = 0;
    var losses = 0;
    var points = 0;
    var bunny = 0;
    var fish = 0;
    var porcupine = 0;
    var monkey = 0;
    var images = [];
    
    
    var randomNumber = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    console.log(randomNumber);

    var images = 

    function resetGame()   {

    wins = 0;
    losses = 0;
    points = 0;
    
    
    randomNumberHeading.text(randomNumber);
    winsHeading.text("");
    lossesHeading.text("");
    pointsHeading.text("");

    }



});