window.addEventListener('load', characterPage) // DENNA SKA IN I MAIN SEN

// Starts functions
function characterPage() {
    defaultPage();
    addEventListeners();
}

// DENNA FUNGERAR INTE
// Shows registerDiv or signInDiv depending on local storage
function defaultPage() {
    document.getElementById("welcomeDiv").style.display = 'none';
    
    if (localStorage.getItem('username')) {
        //Items are stored in local storage
        document.getElementById("registerDiv").style.display = 'none';
        document.getElementById("signInDiv").style.display = 'unset';        
    } else {
        //Local storage is empty
        document.getElementById("registerDiv").style.display = 'unset';
        document.getElementById("signInDiv").style.display = 'unset';
    }
}

function addEventListeners() {
    const registerBtn = document.getElementById('registerBtn').addEventListener('click', registerStorage);    
    const signInBtn = document.getElementById('signInBtn').addEventListener('click', signInStorage);    
    const removeBtn = document.getElementById('removeBtn').addEventListener('click', removeLS);    
}

// Register user and saves in local storage
function registerStorage() {
    
    // Gets elements from HTML
    var createUsername = document.getElementById('createUsername');
    var createPw = document.getElementById('createPw');
    
    // Asks user to create username and password 
    if (createUsername.value.length == 0 && createPw.value.length == 0){
        alert('Please fill in email and password');
    } else {
        // Stores
        localStorage.setItem('createUsername', createUsername.value);
        localStorage.setItem('createPw', createPw.value);
        alert('acc created');
        
        // Hides and shows pages if registerBtn is pressed
        // document.getElementById('registerDiv').style.display = 'none'; 
        // document.getElementById('signInDiv').style.display = 'none'; 
        document.getElementById('welcomeDiv').style.display = 'unset'; 
    }

    // Retrieves
    document.getElementById("welcomePhrase").innerHTML = localStorage.getItem("createUsername");
}

// Checks if username and pw is matching with local storage
function signInStorage() {
    var createUsername = localStorage.getItem('createUsername');
    var createPw = localStorage.getItem('createPw');
    
    var username = document.getElementById('username');
    var pw = document.getElementById('pw');
    
    if (username.value == createUsername && pw.value == createPw) {
        alert('You are logged in.');
        // document.getElementById('registerDiv').style.display = 'none'; 
        // document.getElementById('signInDiv').style.display = 'none'; 
        document.getElementById('welcomeDiv').style.display = 'unset';  
    } else {
        alert('Error on login');
    }
    
    // Retrieves
    document.getElementById("welcomePhrase").innerHTML = localStorage.getItem("createUsername");
}

// TILLFÄLLIG 
function removeLS() {
    localStorage.removeItem('createUsername');
    localStorage.removeItem('createPw');
    localStorage.removeItem('username');
    localStorage.removeItem('pw');
}