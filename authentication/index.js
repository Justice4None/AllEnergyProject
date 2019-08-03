//onclick of sign up button reveal registration form
$('#signup-button').on('click', function (e, user) {
    e.preventDefault();
    $('#signup-button').hide();
    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log('this part working');
            $('#login-error').text('user must log out before registering new user');
        } else {
            $('#register-div').css('display', '');
        }
    });
});

const auth = firebase.auth();
const dataRef = firebase.firestore();

//==========================signup user==============================
const signUpForm = document.querySelector('#test-register-form');
$('#register-button').on('click', function (e) {
    e.preventDefault();

    //get user email and password
    const email = $('#signup-email').val();
    const password = $('#signup-password').val();

    //sign up user
    auth.createUserWithEmailAndPassword(email, password).then(credential => {
        console.log('user signed in');
        $('#test-register-form').hide();
        $('#register-div').text('You were successfully registered!');
    });
});

//======================logout user========================
const logout = document.querySelector('#test-register-form');
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
            const email = $('#login-email').val();
            const password = $('#login-password').val();
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

//================listen for auth status change===============
auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log('user logged in:  ', user.email);
        $('#login-div').text('You are signed in as:  ' + user.email);
    } else {
        $('login-div').text('no user logged in');
    }
});

//on window close logout
window.onbeforeunload = (function (event) {
    if (event) {
        auth.signOut()
    }
    //login error
    function error(errorObject) {
        console.log("The read failed: " + errorObject.code);
    }

});
