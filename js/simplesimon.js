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
    switch(color) {
        case'#green':
            game.sound.green.play();
            break;
        case '#blue':
            game.sound.blue.play();
            break;
        case '#red':
            game.sound.red.play();
            break;
        case '#yellow':
            game.sound.yellow.play();
            break;
    }
}

//Simon moves are generated

function simonMoves() {
    var i = 0;
    var moves = setInterval(function(){
        playGame(game.currentGame[i]);
        i++;
        if (i >= game.currentGame.length) {
            clearInterval(moves);
        }
    }, 600);

    playerMoves();
}

//sound is associated with color played by Simon and player

function playGame(play) {
    $(play).addClass("hover");
    sound(play);
    setTimeout(function(){
        $(play).removeClass("hover");
    }, 400);
}


//creates game.player array to annotate player's moves

function playerMoves() {
    game.player = [];
}


//created variable to associate array from playerMoves to an ID and pushed the array to playerTurn
function addToPlayer(id) {
    var play = "#" + id;
    console.log(play);
    game.player.push(play);
    playerTurn(play);
}

//created function with if/else statements to determine whether player's moves were the same as Simon's
function playerTurn(x) {
    if (game.player[game.player.length - 1] !== game.currentGame[game.player.length - 1]) {
        alert('Wrong move! Try again!');
        simonMoves();

    } else {
        console.log("Good Move!");
        sound(x);
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
    $('#countLevel').addClass();
    setTimeout(function(){
        $('#countLevel').removeClass().html(game.count).addClass();
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