//GLOBAL VARIABLES

//NEED MORE FOR STATS ETC...
var userScore = null;
var healthScore = null;
var buildingType = null;

//HTML ELEMENTS
var leftColumn = null;
var rightColumn = null;
var nav = document.getElementById("nav");

$(document).ready(function () {
    leftColumn = document.createElement("div");
    rightColumn = document.createElement("div");


    // WILL CHANGE WHEN BUTTONS ARE FINISHED
    $("#submitButt").on('click', function (event) {
        console.log("stuff is working");
        event.preventDefault();

        nav.style.display = "none";

        leftColumn.className = "leftCol";
        rightColumn.className = "rightCol";

        $('#newDiv').append(leftColumn);
        $('#newDiv').append(rightColumn);
    });
});