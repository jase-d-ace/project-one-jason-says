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
    }, 1000); //end of set interval
    //This timer function definitely works! commented out for now to stop the timer from distracting me.
    //    setTimeout(function () {
    //        alert("Time's Up!")
    //    }, 10000); //actually pops up an alert that says time's up
    //JQUERY SELECTORS GIVE YOU AN ARRAY!!!!!
    //###########################################
    //end timer
    //###########################################
    /*time for pseudocode
    square flashes.
    if square===clicked
    flash next square.
    */
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
    var singularSquare = $square[Math.floor(Math.random() * 4)]
    var flash = setInterval(function () {
        $(singularSquare).fadeOut(200).fadeIn(200)
    }, 100);
    //    $square.each(function (i, anything) {
    //        $(anything).fadeTo(100, 0.3, function () {
    //            $(this).fadeTo(500, 1.0);
    //        });
    //    });
    //test function to make sure i know how to code an event listener
    //        $square.click(function () {
    //        alert('clicked! Good job, you coded this right');
    //    })
}); //end of jQuery stuff. Don't touch this bracket or else!!!!