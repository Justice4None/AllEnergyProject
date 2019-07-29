
$('#test-register').on('click', function () {

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
    console.log(email, password)

    //sign up user
    auth.createUserWithEmailAndPassword(email, password).then(credential => {
        console.log('user signed in')
        $('#test-register-form').hide();
        $('#test-register-form').clear();
        $('#test-register-div').text('You were successfully registered!');
    });
});

//======================logout user========================
const logout = document.querySelector('#test-register-form');
$('#logout-button').on('click', function (e) {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('logged out')
    });
    $('#test-register-div').text('You were successfully logged out!');
});

//========================login user=======================
$('#submit').on('click', function (e) {
    e.preventDefault();

    //get user email and password
    const email = $('#login-email').val();
    const password = $('#login-password').val();
    console.log('login:  ', email, password)

    //sign up user
    auth.signInWithEmailAndPassword(email, password).then(credential => {
        console.log('user signed in', user.credential)
        $('#login-form').reset();
        $('#login-div').text('You were successfully signed in!');
    });
});