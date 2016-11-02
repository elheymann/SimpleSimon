"use strict";

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




//play sound when corresponding color is called
function sound(color) {
    console.log(color);
    switch(color) {
        case'#green':
            game.sound.green.play();
            $("#green").addClass("animated pulse");
            break;
        case '#blue':
            game.sound.blue.play();
            $("#blue").addClass("animated pulse");
            break;
        case '#red':
            game.sound.red.play();
            $("#red").addClass("animated pulse");
            break;
        case '#yellow':
            game.sound.yellow.play();
            $("#yellow").addClass("animated pulse");
            break;
    }
}

//Simon moves are generated

function simonMoves() {
    var i = 0;
    var moves = setInterval(function(){
        startGame(game.currentGame[i]);
        i++;
        if (i >= game.currentGame.length) {
            clearInterval(moves);
        }
    }, 600);

    playerMoves();
}
//game play is initiated
function startGame(play) {
    sound(play);
    setTimeout(function(){
    }, 600);
}

//creates game.player array to annotate player's moves

function playerMoves() {
    game.player = [];
}


//created variable to associate array from playerMoves to an ID and pushed the array to playersTurn
function addToPlayer(id) {
    var play = "#" + id;
    console.log(play);
    game.player.push(play);
    playersTurn(play);
}

//created function with if/else statements to determine whether player's moves were the same as Simon's
function playersTurn(x) {

    if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
        alert('Wrong move! Try again!');
        simonMoves();

    } else {
        sound(x);
        console.log("Good Move!");
        var check = game.player.length === game.currentGame.length;
        if (check) {
            if(game.count == 35){
                alert('You won! Congrats!!');
            } else {
                alert("End Round " + (game.count) + "!");
                nextLevel();
            }
        }
    }
}


function generateMove(){
    game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
    alert("Round " + game.currentGame.length + ": Good luck!");
    simonMoves();
}

function addCount() {
    game.count++;
    $("#countLevel").addClass("animated fadeOutDown");

    setTimeout(function(){
        $("#countLevel").removeClass("fadeOutDown").html(game.count).addClass("fadeInDown");
    }, 200);

    generateMove();
}


function nextLevel() {
    addCount();
}

function newGame() {
    clearGame();
}

function clearGame() {
    game.currentGame = [];
    game.count = 0;
    addCount();
}

function endGame(){
    window.close()
}
