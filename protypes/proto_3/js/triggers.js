
//Document Events

$(window).on('load', function () {
    console.log('loaded')
    showPage('#landing_page')
    hidePage()

    console.log("Dirk: Style Landing Page")
})
//Audio Variables within Global scope so they can be referenced when and where needed.
var audio1 = new Audio("./audio/mellow-music-1.mp3")
var audio2 = new Audio("./audio/hype-music-1.mp3")
var audio3 = new Audio("./audio/transition-1.mp3")

//Auth setup

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjKV-rKdyPgb9PHhiBoOBNWomrEW2t0yE",
    authDomain: "allenergyproject.firebaseapp.com",
    databaseURL: "https://allenergyproject.firebaseio.com",
    projectId: "allenergyproject",
    storageBucket: "allenergyproject.appspot.com",
    messagingSenderId: "541298059757",
    appId: "1:541298059757:web:e3046ccc97bbaf10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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
    // kitty.sparkle('#landing_page')

})




$('#login_btn').on('click', function () {
    showPage('#login_page'); {
        //Plays the .mp3 referenced in the 'audio3' variable.
        audio3.play()
    }
},

    $('#login_btn').on('click', function () {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                showPage('#menu_page');
                hidePage('#login_page');
                //Plays the .mp3 referenced in the 'audio3' variable.
                audio3.play()
            } else {
                showPage('#login_page')
                audio3.pause()
                //Loops the .mp3 referenced in the 'audio1' variable.
                audio1.loop = true;
                //Plays the looped .mp3 referenced in the 'audio1' variable.
                audio1.play()
                hidePage('#landing_page')
            }
            console.log("Travis: Add Web Form")
            console.log("Dirk: Login Page Assets Needed - BLOCKING UX")
            console.log("Rebecca: Login Page UX Needed")
            console.log("William: Start Menu Intro Music")
        })
    }),

    $('#login_submit_btn').on('click', function (e, user) {
        e.preventDefault()
        auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log("user already logged in")
            } else {
                var email = $('#login-email').val();
                var password = $('#login-password').val();
                console.log('login:  ', email, password);
                //sign in user
                auth.signInWithEmailAndPassword(email, password).then(credential => {
                    console.log(credential)
                })
                $("input[type='password']").val("");
                $("input[type='username']").val("");
                showPage(menu_page);
                hidePage(login_page);
                audio3.play();

            }
        })
        console.log("Dirk: Menu Page Assets Needed - BLOCKING UX")
        console.log("Rebecca: Menu Page UX Needed")
    }),

    // let signUpForm = document.querySelector('#test-register-form');
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
    }),

    $('#signup_btn').on('click', function () {
        showPage(signup_page); {
            //Plays the .mp3 referenced in the 'audio3' variable.
            audio3.play()
            //Loops the .mp3 referenced in the 'audio1' variable.
            audio1.loop = true;
            //Plays the looped .mp3 referenced in the 'audio1' variable.
            audio1.play()
        }
        hidePage(login_page);
        hidePage(landing_page);
        audio3.play();
        console.log("Dirk: Signup Page Assets Needed - BLOCKING UX")
        console.log("Rebecca: Signup Page UX Needed")
    }),

    $('#signup_submit_btn').on('click', function () {
        showPage(login_page); {
            //Plays the .mp3 referenced in the 'audio3' variable.
            audio3.play()
        }
        hidePage(signup_page);
        console.log("Travis: User Needs to be Validated")
    }),

    $('#settings_btn').on('click', function () {
        showPage(settings_page); {
            //Plays the .mp3 referenced in the 'audio3' variable.
            audio3.play()
        }
        hidePage(menu_page);
        audio3.play();
        console.log("Dirk: Settings Interface Needed")
    }),

    $('#save_settings_btn').on('click', function () {
        showPage(menu_page); {
            //Plays the .mp3 referenced in the 'audio3' variable.
            audio3.play()
        }
        hidePage(settings_page);
        audio3.play();
        console.log("Dirk: Settings Interface Needed")
    }),

    $('#create_game_btn').on('click', function () {
        showPage(create_game_page); {
            //Plays the .mp3 referenced in the 'audio3' variable.
            audio3.play()
        }
        hidePage(menu_page)
        console.log("Dirk: Create Game Interface Needed")
        console.log("Travis: Add Game to Server")
    }),

    $('#launch_game_btn').on('click', function () {
        showPage(find_game_page); {
            //Plays the .mp3 referenced in the 'audio3' variable.
            audio3.play()
        }
        hidePage(create_game_page)
        console.log("Dirk: Lobby Interface Needed")
        console.log("Travis: Lobby Interface Needed")
    }),

    $('#find_game_btn').on('click', function () {
        showPage(find_game_page); {
            //Plays the .mp3 referenced in the 'audio3' variable.
            audio3.play()
        }
        hidePage(menu_page)
        console.log("Dirk: Find Game Interface Needed")
        console.log("Dirk: Find Game fix jQuery-UI plugin")
    }),

    $('#join_game_btn').on('click', function () {
        $(this).css('background-color', '#ff0000')
        console.log("William: Start Waiting for match music")
        hidePage(find_game_page)
        showPage(lobby_page); {
            //Plays the .mp3 referenced in the 'audio3' variable.
            audio3.play()
            //Pauses the .mp3 referenced in the 'audio1' variable.
            audio1.pause();
            //Sets the time of the .mp3 refereced in the 'audio1' wariable to 0.0 seconds.
            audio1.currentTime = 0.0
            //Loops the .mp3 referenced in the 'audio2' variable.
            audio2.loop = true;
            //Plays the looped .mp3 referenced in the 'audio2' variable.
            audio2.play();
        }
        console.log("William: Start Waiting for match music")
        console.log("William: Load all in-game audio assets")

    }),
    $('#start_game').on('click', function () {
        startGame()

    }),


    $('#quit_btn').on('click', function () {
        console.log("Travis: Log the user out")
        console.log("Rebecca: Hide Menu Page and show Landing Page")
        window.onbeforeunload = (function (event) {
            if (event) {
                auth.signOut()
            }
        });
    }))

