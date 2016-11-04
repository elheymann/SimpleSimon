"use strict";
var comparisonIndex = 0;
var game;
game = {
    count: 0,
    possibilities: ["#green", "#blue", "#red", "#yellow"],
    currentGame: [],
    player: [],
    sound: {
        blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    }
};

function clearGame() {
    game.currentGame = [];
    game.count = 0;

}

function newGame() {
    clearGame();
    generateMove();
}

//Simon moves are generated
function callSound() {
    var i = 0;
    var moves = setInterval(function(){
        sound(game.currentGame[i]);
        i++;
        if (i >= game.currentGame.length) {
            clearInterval(moves);
        }
    }, 600);

    game.player = [];
    comparisonIndex = 0;
}

//play sound when corresponding color is called
function sound(color) {
    console.log(color);
    switch(color) {
        case'#green':
            game.sound.green.play();
            $("#green").css("opacity", ".2")
                .animate({
                    opacity: 1.0
                }, 350);
            console.log('greenAnimate');
            break;
        case '#blue':
            game.sound.blue.play();
            $("#blue").css("opacity", ".2")
                .animate({
                    opacity: 1.0
                }, 350);
            console.log('blueAnimate');
            break;
        case '#red':
            game.sound.red.play();
            $("#red").css("opacity", ".2")
                .animate({
                    opacity: 1.0
                }, 350);
            console.log('redAnimate');
            break;
        case '#yellow':
            game.sound.yellow.play();
            $("#yel").css("opacity", ".2")
                .animate({
                    opacity: 1.0
                }, 350);
            console.log('yellowAnimate');
            break;
    }
}

/*created variable to associate array from playerMoves to an ID and pushed the array to playersMove*/
/*$(".colors").click(function(id) {
    var play = "#" + id;
    sound(play);
    console.log(this);
    game.player.push(play);
    playersMove(play);
});*/

function addToPlayer(id) {
    var field = "#" + id;
    sound(field);
    console.log(field);
    game.player.push(field);
    if (game.player[comparisonIndex] == game.currentGame[comparisonIndex]){
        if (game.player[game.player.length - 1] == game.currentGame[game.player.length - 1]){
            addCount();
            comparisonIndex = 0;
            generateMove();
        } else {
            comparisonIndex++;
        }
    }   else {
            newGame();
            comparisonIndex = 0;
    }

//    playersMove(field);
}
//creates game.player array to annotate player's moves

//created function with if/else statements to determine whether player's moves were the same as Simon's
/*function playersMove(x) {
    console.log("Game player length is " + game.player.length);
    console.log("Current Game length is " + game.currentGame.length);
    if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
        alert("Wrong Move!");
        callSound();
    } else {
        sound(x);
        var check = game.player.length === game.currentGame.length;
        if (check) {
            if(game.count == 35){
                alert('You won! Congrats!!');
            } else {
                console.log("End Round " + (game.count) + "!");
                nextLevel();
            }
        }
    }
}

function nextLevel() {
    addCount();
}*/
function addCount() {
    game.count++;
    $("#countLevel").addClass("animated fadeOutDown");

     setTimeout(function(){
     $("#countLevel").removeClass("fadeOutDown").html(game.count).addClass("fadeInDown");
     }, 600);


}

function generateMove(){
    game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
    console.log("Round " + game.currentGame.length + ": Good luck!");
      callSound();
}


function endGame(){
    window.close()
}