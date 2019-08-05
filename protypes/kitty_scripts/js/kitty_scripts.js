

var kitty = {
    transitionSpeed: 1,
    parallax: function (layersArray) {
        for (var i = 0; i < layersArray.length; i++) {
            var pw = $(layersArray[i]).parent().css('width')
            $(layersArray[i]).css('left', x / pw * (i + 1) + "px")
            $(layersArray[i]).css('position', "fixed")
            $(layersArray[i]).css('top', y * (i + 1) + "px")
        }
        console.log($(layersArray[i]).parent().id)
    },
    parallaxFadeIn: function (layersArray, x, y, aperture, influence) {
        for (var i = 0; i < layersArray.length; i++) {
            $(layersArray[i]).css('left', influence * x * (aperture * i + 1) + "px")
            $(layersArray[i]).css('position', "fixed")
            $(layersArray[i]).css('top', influence * y * (aperture * i + 1) + "px")
        }
    },
    parallaxOnScroll: function () {

    },
    fadeIn: function (elem, direction) {

    },
    fadeOut: function (elem, direction) {

    },
    sparkle: function (elem) {
        var can = $("<canvas></canvas>").css("background-color", "#00ff00")
        $(elem).append(can)
    },
    sparkleOn: false,
    sculpt: function (elem, theme) {
        //convert to 3D
        //texture to theme
    },
    wiggle: function (elem) {
        $(elem).addClass('horizTranslate');
    },
    stopWiggle: function (elem) {
        var computedStyle = $(elem).css('margin-left');
        $(elem).removeClass('horizTranslate');
        $(elem).css('margin-left', computedStyle);
    },
    shake: function (elem, xMagnitude, yMagnitude) {

    },
    toggleHeartBeat: function () {

    },
    heartBeatOn: false,
    mural: function () {

    },
    sway: function (elem, originX, originY) {

    }
}