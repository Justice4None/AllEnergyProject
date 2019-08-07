

var kitty = {
    transitionSpeed: 1,
    parallax: function (layersArray, x, y, aperture, influence) {
        for (var i = 0; i < layersArray.length; i++) {
            $(layersArray[i]).css('left', influence * x * (aperture * i + 1) + "px")
            $(layersArray[i]).css('position', "fixed")
            $(layersArray[i]).css('top', influence * y * (aperture * i + 1) + "px")
        }
    },
    parallaxFadeIn: function (layersArray, x, y, aperture, influence) {
        for (var i = 0; i < layersArray.length; i++) {
            $(layersArray[i]).css('left', influence * x * (aperture * i + 1) + "px")
            $(layersArray[i]).css('position', "fixed")
            $(layersArray[i]).css('top', influence * y * (aperture * i + 1) + "px")
        }
    },
    fadeIn: function (element, direction) {

    },
    fadeOut: function (element, direction) {

    },
    sparkle: function (elem) {
        var can = $("<canvas></canvas>").css("background-color", "#00ff00")
        //can.style.backgroundColor = '#00ff00'
        $(elem).append(can)
    },
    sparkleOn: false,
    sculpt: function (elem, theme) {
        //convert to 3D
        //texture to theme
    },
    wiggle: function (elem, xMagnitude, yMagnitude) {

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