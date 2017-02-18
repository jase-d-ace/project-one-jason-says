//alert('Woo, javascript is connected!')
//Thanks, Gersh and Taka.
$(document).ready(function () {
    //###########################################
    //variables
    //###########################################
    var $div = $('#main');
    var $square = $('.gamepiece');
    var $timer = $('.timer');
    var timeRemaining = 21;
    var timePassed = 0;
    var $button = $('button');
    var score = 0;
    //###########################################
    //end variables
    //###########################################
    //###########################################
    //timer
    //###########################################
    //appending a timer generates a countdown, which is what i want!
    var time = setInterval(function () {
        timeRemaining--;
        $timer.text($('#your-name').value + "'s Time: " + timeRemaining);
        timePassed++;
        if (timePassed === 10) {
            clearInterval(time);
        } //if statement that stops the counter at 0
    }, 1000); //end of setInterval
    //This timer function definitely works!
    //    setTimeout(function () {
    //        alert("Time's Up!")
    //    }, 20000); //actually pops up an alert that says time's up
    //###########################################
    //end timer
    //###########################################
    //###########################################
    //generate colors
    //###########################################
    $square.each(function (i, anything) {
        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);
        $(anything).css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    });
    //###########################################
    //end generate colors
    //###########################################
    //###########################################
    //game logic
    //###########################################
    //CPU's array to generate the pattern
    var round = [];
    //CPU will generate a random square at the end of your turn
    var generatePath = function () {
        //pick a random square...
        var singularSquare = $square[Math.floor(Math.random() * 4)];
        //...and push it into the array.
        round.push(singularSquare.id);
        console.log(round);
    }; //end of generatePath();
    //call it to start the game
    generatePath();
    //###########################################
    //make flash
    //###########################################
    var setPattern = function () {
        //iterates over the CPU's array...
        $(round).each(function (i, square) {
            //...and sets up a timeout method...
            setTimeout(function () {
                //...for every square in the current sequence...
                $('#' + [square]).fadeOut(200).fadeIn(200);
                //...to flash one by one and guide you
            }, (i * 500)); //end of setTimeout
        }); //end of .each() method
    }; //end of setPattern();
    //again, call it to start the game.
    setPattern();
    //###########################################
    //end make flash
    //###########################################
    //counter to keep track of the player's moves
    var counter = 0;
    //array that will try to match the CPU's
    var playerClicks = [];
    console.log(playerClicks);
    console.log(round);
    //click function that moves the game forward
    $('.gamepiece').click(function () {
        console.log(counter);
        //this checks if the ID of the thing you clicked matches...
        if (this.id === round[counter]) {
            //...if it does, it gives you the chance to keep going.
            playerClicks.push(this.id);
            counter++;
        } //end of checking if you're right
        else {
            //...if not, you lose.
            var lose = confirm('You Lose!! Play again?');
            if (lose) {
                location.reload();
            };
        }; //end of game over check
        console.log(playerClicks);
        console.log(round);
        //if you get the right amount of clicks, and they all match...
        if (counter === round.length) {
            console.log('you got to the end!')
                //...reset the counter to 0...
            counter = 0;
            //...and give the turn back to the CPU!
            generatePath();
            setPattern();
            //what's a game without a scoreboard??
            score++;
            $('.score').text('Score: ' + score)
        } //end of if-statement
    }); //end of click listener
    //###########################################
    //end game logic
    //###########################################
    //###########################################
    //reload button
    //###########################################
    $('button').click(function () {
        location.reload()
    });
    //###########################################
    //end reload button
    //###########################################
}); //end of jQuery stuff. Don't touch this bracket or else!!!!