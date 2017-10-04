var wins = 0;
$("#wins").text("Wins: " + wins);
var losses = 0;
$("#losses").text("Losses: " + losses);
var currentNumber = 0; 
var randomNumber = 0;
crystalValueOne = 0;
crystalValueTwo = 0;
crystalValueThree = 0;
crystalValueFour = 0;  

startGame();

function startGame(){
    randomNumber = generateRandomNumber(120, 19);
    $("#randomNumber").html("<h1>" + randomNumber + "</h1>");
    crystalValueOne = generateRandomNumber(12, 1);
    crystalValueTwo = generateRandomNumber(12, 1);
    crystalValueThree = generateRandomNumber(12, 1);
    crystalValueFour = generateRandomNumber(12, 1);   
    currentNumber = 0;
    $("#currentNumber").html(currentNumber);
}

function generateRandomNumber(max, min){
    return Math.floor(Math.random() * max) + min;
}

$("#crystalOne").on("click", function() {
    currentNumber += crystalValueOne;
    $("#currentNumber").html(currentNumber);
    checkScore();
});

$("#crystalTwo").on("click", function() {
    currentNumber += crystalValueTwo;
    $("#currentNumber").html(currentNumber);
    checkScore();
});

$("#crystalThree").on("click", function() {
    currentNumber += crystalValueThree;
    $("#currentNumber").html(currentNumber);
    checkScore();
});

$("#crystalFour").on("click", function() {
    currentNumber += crystalValueFour;
    $("#currentNumber").html(currentNumber);
    checkScore();
});

function checkScore(){
    if (currentNumber == randomNumber) {
        console.log ("You Win!");
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#status").html("You Win!");
        startGame();
    }
    else if (currentNumber > randomNumber) {
        console.log("You lose!");
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#status").html("You Lose!");
        startGame();
    }
};
