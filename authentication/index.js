//onclick of sign up button reveal registration form
$('#signup-button').on('click', function (user) {
    auth.onAuthStateChanged(user => {
        if (user) {
            $('#login-error').text('user must log out before registering new user');
        } else {
            $('#register-div').css('display', '');
        }
    });

});


const auth = firebase.auth();
const db = firebase.firestore();

//==========================signup user==============================
const signUpForm = document.querySelector('#test-register-form');
$('#register-button').on('click', function (e) {
    e.preventDefault();

    //get user email and password
    const email = $('#signup-email').val();
    const password = $('#signup-password').val();

    //sign up user
    auth.createUserWithEmailAndPassword(email, password).then(credential => {
        console.log('user signed in')
        $('#test-register-form').hide();
        $('#register-div').text('You were successfully registered!');
    });
});

//======================logout user========================
const logout = document.querySelector('#test-register-form');
$('#logout-button').on('click', function (e, user) {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('logged out');
        if (user) {
            console.log('issue signing out')
        } else {
            console.log('sign out successful')
            $('#login-div').text('You were successfully logged out!');
        }
    });
    $('#login-error').hide()
});

//========================login user=======================
$('#submit').on('click', function (e, user) {
    e.preventDefault();
    auth.onAuthStateChanged(user => {
        //if no user logged in run 
        if (!user) {

            //get user email and password
            const email = $('#login-email').val();
            const password = $('#login-password').val();
            console.log('login:  ', email, password);


            //sign in user
            auth.signInWithEmailAndPassword(email, password).then(credential => {
                $('#login-div').text('You were successfully signed in!');
            });
            $("input[type='password']").val("");
            $("input[type='username']").val("");
        } else {
            $('#login-div').text('User already logged in!');
        }
    });
});

//================listen for auth status change===============
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in:  ', user);
    } else {
        console.log('user logged out')
    }
});