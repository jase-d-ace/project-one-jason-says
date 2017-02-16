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
    //make flash
    //###########################################
    //Thanks, Gersh.
    var round = [];
    var counter = 0;
    //generates the sequence that serves as the "game board"
    for (var i = 0; i < 50; i++) {
        var singularSquare = $square[Math.floor(Math.random() * 4)];
        round.push(singularSquare);
        $(singularSquare).fadeOut(200).fadeIn(200);
    };
    $($square).click(function () {
        counter++;
        console.log(counter);
    })
    console.log(round);
    console.log($square);
    //    var makeFlash = function () {
    //            var singularSquare = $square[Math.floor(Math.random() * 4)];
    //            $(singularSquare).fadeOut(200).fadeIn(200);
    //            round.push(singularSquare);
    //            console.log(round.length);
    //            //thanks to the random person who suggested .one() at
    //            //stackoverflow.com/questions/14969960/jquery-click-events-firing-multiple-times
    //            $(singularSquare).one('click', function () {
    //                makeFlash();
    //                console.log(round);
    //            });
    //            //stops you from clicking after the timer runs out
    //            setTimeout(function () {
    //                $square.off('click')
    //            }, 10000)
    //        }
    //        //delays the start of the game
    //    setTimeout(makeFlash, 3000);
    //###########################################
    //end make flash
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
}); //end of jQuery stuff. Don't touch this bracket or else!!!!