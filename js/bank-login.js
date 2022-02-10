 document.getElementById('bank-login-btn').addEventListener('click', function(){
    // get user emeil 
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;
    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check user password 
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    }else{
        console.log('Invalid User');
    }

});

