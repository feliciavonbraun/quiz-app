window.addEventListener('load', signUp)
// Starts functions
function signUp() {
    // defaultPage();
    addEventListeners();
}

// function defaultPage() {
// //     document.getElementById("howToPlayDiv").style.display = 'none';
// // }

function addEventListeners() {

    // const howToPlayAreaBtn = document.getElementById('howToPlayAreaBtn').addEventListener('click', openHowToPlayArea);
    const registerSubmitBtn = document.getElementById('registerSubmitBtn').addEventListener('click', registerStorage);    
    const signInSubmitBtn = document.getElementById('signInSubmitBtn').addEventListener('click', signInStorage);    
}

// function openHowToPlayArea() {
//     document.getElementById("howToPlayDiv").style.display = 'unset';
// }

//------------Register----------

// Register user and saves in local storage
function registerStorage() {

    // Gets elements from HTML
    let createUsername = document.getElementById('createUsername');
    let createPw = document.getElementById('createPw');
    
    // Asks user to create username and password 
    if (createUsername.value.length == 0 && createPw.value.length == 0){
        alert('Please fill in email and password');
    } else {
        // Store
        localStorage.setItem('createUsername', createUsername.value);
        localStorage.setItem('createPw', createPw.value);
        alert('acc created');
        document.location.href = '../character.html';
    }  
}

//--------------Sign In---------------
// Checks if username and pw is matching with local storage
function signInStorage() {
    var createUsername = localStorage.getItem('createUsername');
    var createPw = localStorage.getItem('createPw');
    
    var username = document.getElementById('username');
    var pw = document.getElementById('pw');
    
    if (username.value == createUsername && pw.value == createPw) {
        alert('You are logged in.');
        document.location.href = '../character.html';
    } else {
        alert('Error on login');
    }
}


