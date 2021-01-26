window.addEventListener('load', characterPage) // DENNA SKA IN I MAIN SEN

// Starts functions
function characterPage() {
    defaultPage();
    addEventListeners();
    // kollar();
}

// BESTÄMMER VAD SOM VISAS PÅ FÖRSTASIDAN
function defaultPage() {
    document.getElementById("logInDiv").style.display = 'unset';
    document.getElementById("welcomeDiv").style.display = 'none';
}

function addEventListeners() {
    const logInBtn = document.getElementById('logInBtn').addEventListener('click', storeInputs,);    
}

// Stores AND Retrieves AND hides
function storeInputs() {

    // Hides and shows pages if logInBtn is pressed
    document.getElementById('logInDiv').style.display = 'none'; 
    document.getElementById('welcomeDiv').style.display = 'unset'; 

    // Gets elements from HTML
    var username = document.getElementById('username');
    var pw = document.getElementById('pw');
    
    // Stores
    localStorage.setItem('username', username.value);
    localStorage.setItem('pw', pw.value);
    
    // Retrieves
    document.getElementById("welcomePhrase").innerHTML = localStorage.getItem("username");
    
}


// den måste skickas till denna funktionen någonstans????
// function kollar() {

//      // stored data from the register-form
//      var storedName = localStorage.getItem('username');
//      var storedPw = localStorage.getItem('pw');
 
//      // entered data from the login-form
//      var userName = document.getElementById('userYooo');
//      var userPw = document.getElementById('userPwyooo');

//     if(userYooo.value == storedName && userPwyooo.value == storedPw) {
//         alert('You are logged in.');
//     } else {
//         alert('ERROR.');
//     }
// }



// Store
// localStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("presentera på någon annan skärm??").innerHTML = localStorage.getItem("lastname");