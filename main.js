//alert('Woo, javascript is connected!')
$(document).ready(function () {
    var div = $('#main');
    var timer = $('<p>');
    var timeRemaining = 10;
    var timePassed = 0;
    div.append(timer);
    //appending a timer generates a countdown, which is what i want!
    var time = setInterval(function () {
        console.log(timePassed)
        timeRemaining--;
        timer.text(timeRemaining);
        timePassed++;
        if (timePassed === 10) {
            clearInterval(time);
        }
    }, 1000);
    //This timer function definitely works!
    setTimeout(function () {
        alert("Time's Up!")
    }, 10000)
});