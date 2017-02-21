jQuery(function () {
    //this little minigame lets you play a rudimentary Duck Hunt 
    //if you want.
    //This is also a shameless recycling of the Duck Hunt lab we worked on in class.
    //That being said, most of this is Jackie's idea...
    var body = $('body');
    var box = $('<div>');
    box.text("Hehehe can't catch me!!")
    box.addClass('box');
    body.append(box);
    //this makes the things actually move around 
    var start = function () {
        //gets viewport height
        var vph = $(window).innerHeight();
        //gets viewport width
        var vpw = $(window).innerWidth();
        //gets box height to stop from moving offscreen
        var boxHeight = box.height();
        //gets box width to stop from moving offscreen
        var boxWidth = box.width();
        //this is set up so that if you resize your browser, you don't lose boxes offscreen
        var flight = setInterval(function () {
            $(box).animate({
                'top': Math.round(Math.random() * (vph - boxHeight)) + 'px'
            });
            $(box).animate({
                'left': Math.round(Math.random() * (vpw - boxWidth)) + 'px'
            });
        }, (Math.random() * 2000));
        //if you resize the window, it'll change the box's flight 
        var reset = function () {
            window.clearInterval(flight);
            start();
        };
        $(window).resize(function () {
            reset();
        });
        box.click(function () {
            var responses = ['Stop that!!!', 'Leave me alone!!', "Don't touch me!!!", 'Go away!!', 'Aww, I liked that color...', "Who are you?!"]
            box.text(responses[Math.floor(Math.random() * 6)])
            var red = Math.floor(Math.random() * 255);
            var green = Math.floor(Math.random() * 255);
            var blue = Math.floor(Math.random() * 255)
            $(this).css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ', 0.2)')
        });
    };
    start();
})