$(document).ready(function () {

    var randomNumberHeading = $("#rdm-number");
    var winsHeading = $("#wins");
    var lossesHeading = $("#losses");
    var pointsHeading = $("#points");
    var images = $("#images");

   
    var wins = 0;
    var losses = 0;
    var points = 0;
    var fish = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var porcupine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var monkey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var bunny = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    var randomNumber = (Math.floor(Math.random() * 102) + 19);
    console.log(randomNumber);

    var fishNumber = fish[Math.floor(Math.random()*fish.length)];
    console.log(fishNumber);

    var porcupineNumber = porcupine[Math.floor(Math.random()*porcupine.length)];
    console.log(porcupineNumber);

    var monkeyNumber = monkey[Math.floor(Math.random()*monkey.length)];
    console.log(monkeyNumber);

    var monkeyNumber = bunny[Math.floor(Math.random()*monkey.length)];
    console.log(monkeyNumber);

    $("#rdm-number").text(randomNumber);
   
    

    function resetGame()   {

    wins = 0;
    losses = 0;
    points = 0;
    
    
   
    winsHeading.text("");
    lossesHeading.text("");
    pointsHeading.text("");

    }



});