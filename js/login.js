// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //  step-2: get the email address inside the email
    // always remember to use .value to grt text form input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.1 :set id on the html element
    // 3.2: get the element
    // 3.3 : get the value form the element 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    //  DO NOT VERIFY EMAIL PASSWORD ON THR CLIENT SIDE!
    // step -4 verify email and password
    if(email === 'sontan@baap.com' && password === '1234'){
        window.location.href = 'bank.html'
    }
    else{
        alert('FUCK YOU GET OUT')
    }
})