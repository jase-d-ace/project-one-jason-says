//alert('Woo, javascript is connected!')
//Next steps: craft logic that makes things flash in sequence
$(document).ready(function () {
    //###########################################
    //variables
    //###########################################
    var $div = $('#main');
    var $square = $('.gamepiece');
    var $timer = $('.timer');
    var timeRemaining = 10;
    var timePassed = 0;
    var $button = $('button');
    //###########################################
    //end variables
    //###########################################
    //###########################################
    //timer
    //###########################################
    //appending a timer generates a countdown, which is what i want!
    var time = setInterval(function () {
        timeRemaining--;
        $timer.text("Time: " + timeRemaining);
        timePassed++;
        if (timePassed === 10) {
            clearInterval(time);
        } //if statement that stops the counter at 0
    }, 1000); //end of setInterval
    //This timer function definitely works!
    //    setTimeout(function () {
    //        alert("Time's Up!")
    //    }, 10000); //actually pops up an alert that says time's up
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
    //make flash
    //###########################################
    //###########################################
    //end make flash
    //###########################################
    //Thanks, Gersh and Taka.
    //CPU's array to generate the pattern
    var round = [];
    //CPU will generate a random square at the end of your turn
    var generatePath = function () {
        //pick a random square
        var singularSquare = $square[Math.floor(Math.random() * 4)];
        //push it into the array
        round.push(singularSquare.id);
        console.log(round);
    }; //end of generatePath();
    //call it to start the game
    generatePath();
    //counter to keep track of the player's moves
    var counter = 0;
    //array that will try to match the CPU's
    var playerClicks = [];
    console.log(playerClicks);
    console.log(round);
    //click function that moves the game forward
    $('.gamepiece').click(function () {
        console.log(counter);
        //this checks the ID of the thing you clicked...
        if (this.id === round[counter]) {
            //...and if it matches, it gives you the chance to keep going.
            playerClicks.push(this.id);
            counter++;
        } //end of checking if you're right
        //...if not, you lose.
        else {
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
                //reset the counter to 0
            counter = 0;
            //and give the turn back to the CPU
            generatePath();
        } //end of if-statement
    });
}); //end of jQuery stuff. Don't touch this bracket or else!!!!