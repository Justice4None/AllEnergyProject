
//Document Events

$(window).on('load', function () {
    console.log('loaded')
    showPage('#landing_page')
    hidePage()

    console.log("Dirk: Style Landing Page")
})
//Audio Variables within Global scope so they can be referenced when and where needed.
var audio1 = new Audio("./audio/menu-music-1.mp3")
var audio2 = new Audio("./audio/upbeat-music-1.mp3")
var audio3 = new Audio("./audio/menu-transition.mp3")

//Auth setup
var config = {
    apiKey: "AIzaSyDjKV-rKdyPgb9PHhiBoOBNWomrEW2t0yE",
    authDomain: "allenergyproject.firebaseapp.com",
    databaseURL: "https://allenergyproject.firebaseio.com",
    projectId: "allenergyproject",
    storageBucket: "allenergyproject.appspot.com",
    messagingSenderId: "541298059757",
    appId: "1:541298059757:web:e3046ccc97bbaf10"
};
firebase.initializeApp(config);

var auth = firebase.auth();
var dataRef = firebase.firestore();
var user = firebase.auth().currentUser;
var db = firebase.database();
// var uid = firebase.auth().currentUser.uid;
// var email = firebase.auth().currentUser.email;


//log('dirk', 'Need close tab listener for log out event')


//HUD Events

//User Input Events
$(canvas).mousemove(function (event) {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    //game.hoverTile = getSpace(x, y)
})

$(canvas).on('click', function (event) {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate

    console.log("Ghett: Engine Click Logic")
    console.log("Travis: Send Click to Sever")
    console.log("Travis: Update Latest Click for both Players")
    console.log("Dirk: Canvas Graphics from Tile objects")
})

$(window).resize(function () {
    console.log("Dirk: Need proper window resize logic")
})



//UI Events

$('#landing_page').mousemove(function () {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate

    var prxArray = ['#fog_1', '#fog_2']
    kitty.parallax(prxArray, x, y, 0.8, 0.1)
    kitty.sparkle('#landing_page')

})

$('#login_btn').on('click', function () {
    auth.onAuthStateChanged(function (user) {
        //if user logged in ---menu 
        if (user) {
            showPage(menu_page);
            hidePage(login_page);
            audio3.play();
            console.log('login btn:  ' + user.email)
        } else {
            showPage('#login_page')
            //Plays the .mp3 referenced in the 'audio3' variable.
            audio3.play();
            hidePage('#landing_page')
            console.log("Dirk: Login Page Assets Needed - BLOCKING UX")
            console.log("Rebecca: Login Page UX Needed")
            console.log("William: Start Menu Intro Music")

            //Loops the .mp3 referenced in the 'audio1' variable.
            audio1.loop = true;
            //Plays the looped .mp3 referenced in the 'audio1' variable.
            audio1.play()
        };
    });
});

$('#login_submit_btn').on('click', function (e, user) {
    e.preventDefault();
    auth.onAuthStateChanged(function (user) {
        //if no user logged in run 
        if (user) {
            console.log('user already logged in');

        } else {
            //get user email and password
            var email = $('#login-email').val();
            var password = $('#login-password').val();
            console.log('login:  ', email, password);
            //sign in user
            auth.signInWithEmailAndPassword(email, password).then(credential => {
                console.log(credential)
            });
            $("input[type='password']").val("");
            $("input[type='username']").val("");
            showPage(menu_page);
            hidePage(login_page);
            audio3.play();
        };
    });

    console.log("Dirk: Menu Page Assets Needed - BLOCKING UX")
    console.log("Rebecca: Menu Page UX Needed")
});




$('#signup_btn').on('click', function () {

    showPage(signup_page); {
        audio3.play();
    }

    showPage(signup_page)

    hidePage(login_page)
    hidePage(landing_page)

    console.log("Dirk: Signup Page Assets Needed - BLOCKING UX")
    console.log("Rebecca: Signup Page UX Needed")
})

//register or sign up user
var signUpForm = document.querySelector('#test-register-form');
$('#register-button').on('click', function (e, user) {
    e.preventDefault();
    //get user email and password
    var email = $('#signup-email').val().trim();
    var password = $('#signup-password').val().trim();
    var userName = $("#display-name").val().trim();
    //sign up user
    auth.createUserWithEmailAndPassword(email, password).then(credential => {
        $('#test-register-form').hide();
        $('#register-div').text('You were successfully registered!');
        showPage(menu_page)
    });
    // dataRef.ref(user).push({
    //     email: email,
    //     userName: userName,
    // });

});

$('#settings_btn').on('click', function () {

    showPage(settings_page); {
        audio3.play();
    }

    showPage(settings_page)

    hidePage(menu_page)

    console.log("Dirk: Settings Interface Needed")
})

$('#save_settings_btn').on('click', function () {

    showPage(menu_page); {
        audio3.play();
    }

    showPage(menu_page)

    hidePage(settings_page)

    console.log("Dirk: Settings Interface Needed")
})

$('#create_game_btn').on('click', function () {

    showPage(create_game_page); {
        audio3.play();
    }

    showPage(create_game_page)

    hidePage(menu_page)

    console.log("Dirk: Create Game Interface Needed")
    console.log("Travis: Add Game to Server")
})

$('#launch_game_btn').on('click', function () {

    showPage(find_game_page); {
        audio3.play();
    }

    showPage(find_game_page)

    hidePage(create_game_page)

    console.log("Dirk: Lobby Interface Needed")
    console.log("Travis: Lobby Interface Needed")
})

$('#find_game_btn').on('click', function () {
    showPage(find_game_page); {
        audio3.play();
    }

    showPage(find_game_page)

    hidePage(menu_page)

    console.log("Dirk: Find Game Interface Needed")
    console.log("Dirk: Find Game fix jQuery-UI plugin")
})

$('#join_game_btn').on('click', function () {
    $(this).css('background-color', '#ff0000')

    audio3.play();
    hidePage(find_game_page); {
        //Pauses the .mp3 referenced in the 'audio1' variable.
        audio1.pause();
        //Sets the time of the .mp3 refereced in the 'audio1' wariable to 0.0 seconds.
        audio1.currentTime = 0.0
        //Loops the .mp3 referenced in the 'audio2' variable.
        audio2.loop = true;
        //Plays the looped .mp3 referenced in the 'audio2' variable.
        audio2.play();
    }
    showPage(lobby_page)

    console.log("William: Start Waiting for match music")

    hidePage(find_game_page)
    showPage(lobby_page)

    console.log("William: Start Waiting for match music")
    console.log("William: Load all in-game audio assets")

});

$('#quit_btn').on('click', function () {
    console.log("Travis: Log the user out")
    console.log("Rebecca: Hide Menu Page and show Landing Page")
});

//before unload log off
window.onbeforeunload = (function (event) {
    if (event) {
        auth.signOut()
    }
});