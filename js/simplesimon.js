var game;
game = {
    count: 0,
    possibilities: ['#green', '#blue', '#red', '#yellow'],
    currentGame: [],
    player: [],
    sound: {
        blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    }

};



function simonMoves() {
    var i = 0;
    var moves = setInterval(function(){
        playGame(game.currentGame[i]);
        i++;
        if (i >= game.currentGame.length) {
            clearInterval(moves);
        }
    }, 600);

    clearPlayer();
}

function sound(name) {
    switch(name) {
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

function lights(){
    $(selector).animate({
        property: "value"
    }, duration1).animate({
        property: "value"
    }, duration2).animate({
        property: "value"
    }, duration3);
}



function playGame(field) {
    $(field).addClass("hover");
    sound(field);
    setTimeout(function(){
        $(field).removeClass("hover");
    }, 400);
}
function clearPlayer() {
    game.player = [];
}

function addToPlayer(id) {
    var field = "#" + id;
    console.log(field);
    game.player.push(field);
    playerTurn(field);
}

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

function nextLevel() {
    addCount();
}

function generateMove(){
    game.currentGame.push(game.possibilities[(Math.floor(Math.random()*4))]);
    //alert(game.currentGame.length);
    simonMoves();
}

function addCount() {
    game.count++;
    $('#countLevel').addClass("animated fadeOutDown");

    setTimeout(function(){
        $('#countLevel').removeClass("fadeOutDown").html(game.count).addClass("fadeInDown");
    }, 200);

    generateMove();
}
function clearGame() {
    game.currentGame = [];
    game.count = 0;
    addCount();
}

function newGame() {
    clearGame();
}
$("#quadrant").click(function() {
    $("#quadrant").animate({
        opacity: "0"
    }, 500).animate({
        opacity: "1"
    }, 500);
});

function endGame(){
    window.close()
}