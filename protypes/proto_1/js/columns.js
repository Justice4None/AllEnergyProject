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
        event.preventDefault();

        nav.style.display = "none";

        var h1 = document.createElement('H1');

        leftColumn.className = "leftCol";
        rightColumn.className = "rightCol";

        rightColumn.id = "rightColumn"

        $('#newDiv').append(leftColumn);
        $('#newDiv').append(rightColumn);

        h1.innerHTML = "Add a Tower!"
        $('#rightColumn').append(h1);


        var tower = $('#rightColumn');

        var towerImages = [
            { name: 'tower1', image: "../proto_1/gfx/buildings/tower_1.png" },
            { name: 'tower2', image: "../proto_1/gfx/buildings/tower_2.png" },
            { name: 'tower3', image: "../proto_1/gfx/buildings/tower_3.png" }
        ];

        $.each(towerImages, function () {

            tower.append($('<img src="' + this.image + '">').addClass('image'));
        });
    });

    //FUNCTION TO ADD TOWER VALUE
    function swtichTower() {



    }

    //FUNCTION TO SWITCH TOWER VALUE WHEN CLICKED
    $(".image").on('click', function () {
        towerVal = $(this).val();





    });
});