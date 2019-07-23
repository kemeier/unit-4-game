$(document).ready(function () {

    var randomNumberHeading = $("#rdm-number");
    var winsHeading = $("#wins");
    var lossesHeading = $("#losses");
    var pointsHeading = $("#point-value");


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

    var bunnyNumber = bunny[Math.floor(Math.random()*monkey.length)];
    console.log(monkeyNumber);

    $("#rdm-number").text("Goal:  " + randomNumber);
    $("#point-value").text(points);
    $("#wins").text(wins);
    $("#losses").text(losses);



    var checker = function()    {
        
        if (points > randomNumber)  {
            alert("You lost, sucker!");

            losses++;

            $("#losses").text(losses);

            resetGame();
        }
        else if (points===randomNumber) {
            alert("Congrats, you won!");

            wins++;

            $("#wins").text(wins);

            resetGame();
        }
    }


    
    $("#bunny").attr("value", bunnyNumber);

    $("#bunny").on("click", function()   {
        points += parseInt(this.value);
        $("#point-value").text(points);
        console.log(points)
        $("#bunny").attr("value", bunnyNumber);
        checker();
    });

    $("#fish").attr("value", fishNumber);

    $("#fish").on("click", function()   {
        points += parseInt(this.value);
        $("#point-value").text(points);
        console.log(points)
        $("#fish").attr("value", fishNumber);
        checker();
    });

    

    function resetGame()   {

    points = 0;
    randomNumber = (Math.floor(Math.random() * 102) + 19);
    console.log(randomNumber);

    fishNumber = fish[Math.floor(Math.random()*fish.length)];
    console.log(fishNumber);

    porcupineNumber = porcupine[Math.floor(Math.random()*porcupine.length)];
    console.log(porcupineNumber);

    monkeyNumber = monkey[Math.floor(Math.random()*monkey.length)];
    console.log(monkeyNumber);

    bunnyNumber = bunny[Math.floor(Math.random()*monkey.length)];
    console.log(monkeyNumber);

    randomNumberHeading = $("#rdm-number");
    winsHeading = $("#wins");
    lossesHeading = $("#losses");
    pointsHeading = $("#point-value");

    


    }

});