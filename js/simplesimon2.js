"use strict";
//IFFE to secure global variables
//created global variables - a comparisonIndex to allow for comparison of arrays and a game variable to create an object
//created a game object to allow for possibilities between 1-4, empty arrays of currentGame and playerMoves, and set
//count to 1 (level 1)
(function () {
    var comparisonIndex = 0;
    var game;
    game = {
        possibilities: [1, 2, 3, 4],
        currentGame: [],
        playerMoves: [],
        count: 1

    };
//created animation when colors are clicked

    $(document).ready(function () {
        $("#red").click(function () {
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


//gives numbers to colors and pushes to playerMoves array as numbers to compare player's moves to simons move from currentGame
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
                comparisonIndex = 0;
                game.playerMoves = [];
                addCount();
                nextRound()
            }
        } else {
            alert("Game Over!");
            clearGame();
        }

        console.log("playerMoves" + game.playerMoves);
    });

//simon performs nextRound and after the above is if statement compares playersMoves to simons move from currentGame
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

//numbers are assigned to colors and animated
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

// need to create function to animate opacity for all colors and call function in switch case example: #blue and make it for .click functions too

//when player clicks end game (usually when they are tired of Simon), the window closes
    $("#end").click(function () {
        window.close()
    });
//function to clear the game when needed
    function clearGame() {
        comparisonIndex = 0;
        game.playerMoves = [];
        game.currentGame = [];
        game.count = 1;
        $("#gameLevel").removeClass("fadeOutDown").html(game.count).addClass("fadeInDown");
    }
//allows player to reset and start over at round 1 of the game
    $("#reset").click(function () {
        clearGame();
        console.log("Game resets")
    });

//adds the gameLevel and animates it using animate.css
    function addCount() {
        game.count++;
        $("#gameLevel").addClass("animated fadeOutDown");

        setTimeout(function () {
            $("#gameLevel").removeClass("fadeOutDown").html(game.count).addClass("fadeInDown");
        }, 600);
    }

})();