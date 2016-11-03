"use strict";

var comparisonIndex = 0;
var game;
game = {
    possibilities: [1, 2, 3, 4],
    currentGame: [],
    playerMoves: []
};
//created animation when colors are clicked
$(document).ready(function () {
    $(".colors").click(function () {
        $("#red").animate({
            opacity: "0"
        }, 400).animate({
            opacity: "1"
        }, 400);
    });
});

$(document).ready(function () {
    $("#blue").click(function () {
        $("#blue").animate({
            opacity: "0"
        }, 400).animate({
            opacity: "1"
        }, 400);
    });
});

$(document).ready(function () {
    $("#green").click(function () {
        $("#green").animate({
            opacity: "0"
        }, 400).animate({
            opacity: "1"
        }, 400);
    });
});

$(document).ready(function () {
    $("#yellow").click(function () {
        $("#yellow").animate({
            opacity: "0"
        }, 400).animate({
            opacity: "1"
        }, 400);
    });
});

//Simon moves

function simonMoves() {
    game.currentGame.push(game.possibilities[(Math.floor(Math.random() * 4))]);
    console.log("game.possibilities: " + game.possibilities);
    console.log("game.currentGame: " + game.currentGame);
}

$("#play").click(nextRound);


//gives numbers to colors and pushes to playerMoves array as numbers to check player's moves
$(".colors").click(function () {
    var numbers = {
        red: 3,
        green: 1,
        yellow: 4,
        blue: 2
    };
    var number = $(this).attr("id");
    game.playerMoves.push(numbers[number]);

    if (game.playerMoves[comparisonIndex] == game.currentGame[comparisonIndex]) {
        comparisonIndex++;
        if (comparisonIndex == game.currentGame.length) {
            nextRound();
            alert("Start Round " + (comparisonIndex + 1));
            comparisonIndex = 0;
            game.playerMoves = [];
        }
    } else {
        alert("Game Over!");
        clearGame();
    }

    console.log("playerMoves" + game.playerMoves);
});


function nextRound() {
    simonMoves();
    var i = 0;
    var id = setInterval(function () {
        assignNumbersToColors(game.currentGame[i]);
        i++;
        if (i >= game.currentGame.length) {
            clearInterval(id);
        }
    }, 800);
}


function assignNumbersToColors(number) {
    console.log(number);
    switch (number) {
        case 1:
            $("#green").css("opacity", ".2")
                .animate({
                    opacity: 1.0
                }, 400);
            console.log('greenAnimate');
            break;
        case 2:
            $("#blue").css("opacity", ".2")
                .animate({
                    opacity: 1.0
                }, 400);
            console.log('blueAnimate');
            break;
        case 3:
            $("#red").css("opacity", ".2")
                .animate({
                    opacity: 1.0
                }, 400);
            console.log('redAnimate');
            break;
        case 4:
            $("#yellow").css("opacity", ".2")
                .animate({
                    opacity: 1
                }, 400);
            console.log('yellowAnimate');
            break;
    }
}

$("#end").click(function () {
    window.close()
});

function clearGame() {
    comparisonIndex = 0;
    game.playerMoves = [];
    game.currentGame = [];
}

$("#reset").click(function () {
    clearGame();
    console.log("Game resets")
});

