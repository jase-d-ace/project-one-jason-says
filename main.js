//Thanks, Taka, Gersh, w3schools, stackoverflow, api.jquery, and coffee.
$(document).ready(function () {
    console.log('Woo, javascript is connected!');
    //###########################################
    //variables
    //###########################################
    var $div = $('#main');
    var $square = $('.gamepiece');
    var $timer = $('.timer');
    var timeRemaining = 21;
    var $button = $('button');
    var score = 0;
    //###########################################
    //end variables
    //###########################################
    //takes the user input from the front page...
    var name = window.location.href.split('=')[1];
    //###########################################
    //timer
    //###########################################
    var time = setInterval(function () {
        //...and appends it to the timer
        timeRemaining--;
        $timer.text(name + "'s Time Left: " + timeRemaining);
        if (timeRemaining === 0) {
            clearInterval(time);
            var lost = confirm('Time is up! Play again?');
            if (lost) {
                location.reload();
            };
        }; //if statement that stops the counter at 0 and forces a loss
    }, 1000); //end of setInterval
    //###########################################
    //end timer
    //###########################################
    //###########################################
    //generate colors
    //###########################################
    $square.each(function (i, anything) {
        //personal flair: Not only will the sequence be different every time...
        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);
        //...but the squares will be different every time as well!
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
    //NB: The selector looks for a '#' because the /round/ array is full of IDs (read: numbers), not actual square identifiers.
    //figured this out when it wouldn't flash if all I had in here was round[i] in the for-loop version of this iteration
    //I have coffee-fueled 11pm Friday night desperation to thank for this realization. 
    //The same desperation that led me to trying literally every permutation and combination of selector to make these damn squares flash.
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
            //...if not, you lose...
            var lose = confirm('You Lose!! Play again?');
            //...and you start over.
            if (lose) {
                location.reload();
            };
        }; //end of checking if you're wrong
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
            //..and gives you an extra 4 seconds every round
            timeRemaining += 8
                //what's a game without a scoreboard??
            score++;
            $('.score').text('Score: ' + score);
        }; //end of turn check
        //###########################################
        //end game logic
        //###########################################
        //###########################################
        //Difficulty Increasers
        //###########################################
        if (score === 4) {
            console.log('level one');
            //When the player gets through 4 rounds...
            var singularSquare = $square[Math.floor(Math.random() * 4)];
            $(singularSquare).animate({
                //...the squares will move one at a time!
                left: 25 + 'vw'
                    //and now they're all slightly shifted left
            }, 200)
        } //end of distraction level 2
        if (score === 7) {
            console.log('level two')
            $square.each(function (i, anything) {
                //When the player gets through 7 rounds...
                var red = Math.floor(Math.random() * 255);
                var green = Math.floor(Math.random() * 255);
                var blue = Math.floor(Math.random() * 255);
                //...the squares suddenly change color again!
                $(anything).css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
            });
        }; //end of distraction level 1
        if (score === 10) {
            console.log('level three')
                //when the player gets through 10 rounds...
            var red = Math.floor(Math.random() * 255);
            var green = Math.floor(Math.random() * 255);
            var blue = Math.floor(Math.random() * 255);
            //...this game turns into a disco party...
            var distraction = setInterval(function () {
                //...and the background flashes as a distraction!!
                $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')')
            }, 3000);
            //Originally, the lights flashed a LOT faster.
            //But I got worried that someone playing my game may have a condition
        }; //end of distraction level 3
        //###########################################
        //End Difficulty Increasers
        //###########################################
    }); //end of click listener (official end of logic)
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