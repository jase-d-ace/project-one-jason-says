//alert('Woo, javascript is connected!')
$(document).ready(function () {
    //###########################################
    //variables
    //###########################################
    var $div = $('#main');
    var $square = $('.gamepiece');
    console.log($square);
    console.log($square.length);
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
        $timer.text(timeRemaining);
        timePassed++;
        if (timePassed === 10) {
            clearInterval(time);
        } //if statement that stops the counter at 0
    }, 1000); //end of setInterval
    //This timer function definitely works! commented out for now to stop the timer from distracting me.
    //    setTimeout(function () {
    //        alert("Time's Up!")
    //    }, 10000); //actually pops up an alert that says time's up
    //###########################################
    //end timer
    //###########################################
    /*time for pseudocode
    square flashes.check
    if square===clickedcheck
    flash next square.check-ish
    */
    //###########################################
    //make flash
    //###########################################
    //Thanks, Gersh.
    //BUUUUUUUUUUUUUUGGGGGGGGGGGGGGGSSSSSSSSSSSSSSS
    var makeFlash = function () {
        var singularSquare = $square[Math.floor(Math.random() * 4)];
        var flash = setInterval(function () {
            $(singularSquare).fadeOut(200).fadeIn(200);
        }, 400);
        $(singularSquare).one('click', function () {
            clearInterval(flash);
            makeFlash();
        });
    }
    makeFlash();
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