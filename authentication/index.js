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

//===========onclick of sign up button reveal registration form=============
$('#signup-button').on('click', function (e, user) {
    e.preventDefault();
    $('#signup-button').hide();
    auth.onAuthStateChanged(function (user) {
        if (user) {
            $('#login-error').text('user must log out before registering new user');
        } else {
            //reveals register div by cancelling display:  none
            $('#register-div').css('display', '');
        }
    });
});




//==========================signup user==============================
var signUpForm = document.querySelector('#test-register-form');
$('#register-button').on('click', function (e) {
    e.preventDefault();

    //get user email and password
    var email = $('#signup-email').val().trim();
    var password = $('#signup-password').val().trim();
    var userName = $("#username").val().trim();
    //sign up user
    auth.createUserWithEmailAndPassword(email, password).then(credential => {
        $('#test-register-form').hide();
        $('#register-div').text('You were successfully registered!');
    });

    dataRef.ref(User).push({
        email: email,
        userName: userName,
    });
});

// db.ref(User).on("value", function (snapshot) {
//     console.log(snapshot.val().email);
//     console.log(snapshot.val().userName);
// });
//======================logout user========================
var logout = document.querySelector('#test-register-form');
$('#logout-button').on('click', function (e, user) {
    e.preventDefault();
    auth.signOut().then(function (user) {
        console.log('logged out');
        auth.onAuthStateChanged(function (user) {
            //if no user logged in run 
            if (user) {
                console.log('user still logged in')
            } else {
                console.log('user successfully logged')
            }
        });
    });
    $('#login-error').hide()
});

//========================login user=======================
$('#submit').on('click', function (e, user) {
    e.preventDefault();
    auth.onAuthStateChanged(function (user) {
        //if no user logged in run 
        if (user) {
            // console.log('user logged in');
        } else {
            //get user email and password
            var email = $('#login-email').val();
            var password = $('#login-password').val();
            console.log('login:  ', email, password);
            //sign in user
            auth.signInWithEmailAndPassword(email, password).then(credential => {
                $('#register-div').text('');
            });
            $("input[type='password']").val("");
            $("input[type='username']").val("");
        };
    });
});

//=======on window close--logout======
window.onbeforeunload = (function (event) {
    if (event) {
        auth.signOut()
    }
});


//================listen for auth status change===============
auth.onAuthStateChanged(function (user) {
    if (user) {
        //launch game here
        $('#login-div').text('You are signed in as:  ' + user.email);
        //----------------------------------------------------------------------------------------------------------
        // Fetch the current user's ID from Firebase Authentication.
        var uid = firebase.auth().currentUser.uid;
        var email = firebase.auth().currentUser.email;


        // Create a reference to this user's specific status node.
        // This is where we will store data about being online/offline.
        var userStatusDatabaseRef = firebase.database().ref('/status/' + uid);

        // We'll create two constants which we will write to
        // the Realtime database when this device is offline
        // or online.
        var isOfflineForDatabase = {
            userID: uid,
            userEmail: email,
            state: 'offline',
            last_changed: firebase.database.ServerValue.TIMESTAMP,
        };

        var isOnlineForDatabase = {
            userID: uid,
            userEmail: email,
            state: 'online',
            last_changed: firebase.database.ServerValue.TIMESTAMP,
        };

        // Create a reference to the special '.info/connected' path in
        // Realtime Database. This path returns `true` when connected
        // and `false` when disconnected.
        firebase.database().ref('.info/connected').on('value', function (snapshot) {
            // If we're not currently connected, don't do anything.
            if (snapshot.val() == false) {
                return;
            };

            // If we are currently connected, then use the 'onDisconnect()'
            // method to add a set which will only trigger once this
            // client has disconnected by closing the app,
            // losing internet, or any other means.
            userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function () {
                // The promise returned from .onDisconnect().set() will
                // resolve as soon as the server acknowledges the onDisconnect()
                // request, NOT once we've actually disconnected:
                // https://firebase.google.com/docs/reference/js/firebase.database.OnDisconnect

                // We can now safely set ourselves as 'online' knowing that the
                // server will mark us as offline once we lose connection.
                userStatusDatabaseRef.set(isOnlineForDatabase);
            });
        });
        //-----------------------------------------------------------------------------------------------------------
    } else {
        $('#login-div').text('no user logged in');
    }
});