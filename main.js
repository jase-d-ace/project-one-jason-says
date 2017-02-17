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
    //Thanks, Gersh and Taka.
    var round = [];
    var index = 0;
    var generatePath = function () {
        var singularSquare = $square[Math.floor(Math.random() * 4)];
        round.push(singularSquare.id);
        index++;
    };
    var setPattern = function () {
        for (var i = 0; i < round.length; i++) {
            setTimeout(function () {
                $(round[i]).fadeOut(200).fadeIn(200)
            }, i * 1000)
        }
    }
    generatePath();
    setPattern();
    var counter = 0;
    var playerClicks = [];
    console.log(playerClicks);
    console.log(round);
    $('.gamepiece').click(function () {
        counter++;
        if (this.id === round[counter]) {
            playerClicks.push(this.id);
        }
        //        console.log(playerClicks);
        //        console.log(round);
        if (counter === round.length) {
            console.log(round);
            counter = 0;
            generatePath();
            setPattern();
            //            checkUserClick();
        }
    });
    //    else {
    //        var lose = confirm('You Lose!! Play again?');
    //        if (lose) {
    //            location.reload();
    //        };
    //    };
    var checkUserClick = function () {
            for (var i = 0; i < round.length; i++) {
                if (playerClicks[i] === round[i]) {}
            }
        }
        //    var setPattern = function () {
        //        for (var i = 0; i < round.length; i++) {
        //            setInterval(function () {
        //                $(round[i]).fadeOut(200).fadeIn(200)
        //            }, (i * 1000));
        //        };
        //    };
        //    if (playerClicks.length === round.length) {}
        /*counter needs to be less than round.length
        and go up only when you finish a round
        and when index = counter, that means that you've finished a round
        */
        //    setTimeout(function () {
        //        $square.off('click');
        //    }, 10000);
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
    //    var setPattern = function () {
    //        for (var i = 0; i < round.length; i++) {
    //            setTimeout(function () {
    //                $(round[i]).fadeOut(200).fadeIn(200)
    //            }, (i * 1000));
    //        };
    //    };
    //    setPattern();
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
}); //end of jQuery stuff. Don't touch this bracket or else!!!!