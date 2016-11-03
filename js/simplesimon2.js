"use strict";
var comparisonIndex = 0;
var game;
game = {
    possibilities: [1, 2, 3, 4],
    currentGame: [],
    playerMoves: []
};
//created animation when colors are clicked
$("#red").click(function() {
        $("#red").animate({
            opacity: "0"
        }, 500).animate({
            opacity: "1"
        }, 500);
    });


$("#blue").click(function() {
        $("#blue").animate({
            opacity: "0"
        }, 500).animate({
            opacity: "1"
        }, 500);
    });


$("#green").click(function() {
        $("#green").animate({
            opacity: "0"
        }, 500).animate({
            opacity: "1"
        }, 500);
    });

$("#yellow").click(function() {
        $("#yellow").animate({
            opacity: "0"
        }, 500).animate({
            opacity: "1"
        }, 500);
    });


//Simon moves

function simonMoves() {
    game.currentGame.push(game.possibilities[(Math.floor(Math.random() * 4)+ 1)]);
    console.log(game.possibilities);
    console.log(game.currentGame);
}

$("#play").click(nextRound);

$(".colors").click(function(){
    var numbers = {
        red: 3,
        green: 1,
        yellow: 4,
        blue: 2
    };
    var number = $(this).attr("id");
    game.playerMoves.push(numbers[number]);

    if (game.playerMoves[comparisonIndex] == game.currentGame[comparisonIndex]){
        comparisonIndex++;
        if (comparisonIndex == game.currentGame.length){
            nextRound();
            alert("Start Next Round");
            comparisonIndex = 0;
            game.playerMoves = [];
        }
    } else {
        alert("Game Over!");
        //create clearGame to startOver
    }

    console.log(game.playerMoves);
});

function nextRound(){
    simonMoves();
    var i =0;
    var id = setInterval(function(){
        assignNumbersToColors(game.currentGame[i]);
        i++;
        if (i >= game.currentGame.length) {
            clearInterval(id);
        }
    },750);
}


function assignNumbersToColors(number) {
    console.log(number);
    switch(number) {
        case 1:
            $("#green").css("opacity", ".2")
                .animate({
                    opacity: 1.0
                }, 350);
            console.log('greenAnimate');
            break;
        case 2:
            $("#blue").css("opacity", ".2")
                .animate({
                    opacity: 1.0
                }, 350);
            console.log('blueAnimate');
            break;
        case 3:
            $("#red").css("opacity", ".2")
                .animate({
                    opacity: 1.0
                }, 350);
            console.log('redAnimate');
            break;
        case 4:
            $("#yellow").css("opacity", ".2")
                .animate({
                    opacity: 1
                }, 350);
            console.log('yellowAnimate');
            break;
    }
}
