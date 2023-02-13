// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address inside the email input field
    const userEmail = document.getElementById('user-email');
    const userPass = document.getElementById('user-pass');
    // always remember to usr .value to get text from an input field
    const email = userEmail.value ;
    const pass = userPass.value ;

    // do not check email and password on the client side\
    if(email === 'shakil@gmail.com' && pass === 'apnarjamai'){
        window.location.href = 'bank.html';
    } else{
        alert('Tui Amar Jamai Na.......!');
    }

    
});