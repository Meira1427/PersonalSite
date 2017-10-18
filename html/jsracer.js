var prevBlueKey = 'a';
var prevRedKey = 'a';

$(document).keypress(function(e){
    if(! ($('#title').text() == 'Blue Wins!' || $('#title').text() == 'Red Wins!')) {
        if(e.key == 'p' || e.key == 'o') {
            var blue = $('.blue');
            if(checkBorder(blue)) {
                $('#title').text('Blue Wins!');
                $('.instructions').text(' ');
            }
            else if (e.key == 'p' && (prevBlueKey == 'o' || prevBlueKey == 'a')){
                prevBlueKey = 'p';
                moveCar(blue, e);
            }
            else if (e.key == 'o' && (prevBlueKey == 'p'|| prevBlueKey == 'a')) {
                prevBlueKey = 'o';
                moveCar(blue, e);
            }
        }
        if (e.key == 'q' || e.key == 'w') {
            var red = $('.red');
            if(checkBorder(red)) {
                $('#title').text('Red Wins!');
                $('.instructions').text(' ');
            }
            else if (e.key == 'q' && (prevRedKey == 'w' || prevRedKey == 'a')){
                prevRedKey = 'q';
                moveCar(red, e);
            }
            else if (e.key == 'w' && (prevRedKey == 'q'|| prevRedKey == 'a')) {
                prevRedKey = 'w';
                moveCar(red, e);
            }
        }
    }
});

var moveCar = function(obj, event) {
    $(obj).css('marginLeft', '+=10px');
}

var checkBorder = function(obj) {
    var leftMargin = parseInt($(obj).css('marginLeft'));
    if ((leftMargin+50) >= $(window).width()) {
        return true;
    }
    return false;
}
