//alert('Woo, javascript is connected!')
//###########################################
//variables
//###########################################
$(document).ready(function () {
    var $div = $('#main');
    var $square = $('.gamepiece')
    var $timer = $('.timer')
    var timeRemaining = 10;
    var timePassed = 0;
    var $button = $('button')
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
        console.log(red, green, blue);
        $(anything).css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    });
    //###########################################
    //end generate colors
    //###########################################
    //test function to make sure i know how to code an event listener
    $square.click(function () {
        alert('clicked! Good job, you coded this right');
    })
}); //end of jQuery stuff. Don't touch this bracket or else!!!!