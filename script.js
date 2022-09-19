function submitHandler() {
    // let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    if (password.length < 8) {
        // document.getElementById('error_div').innerHTML = 'Password must be atleast 8 characters';
        alert('Password must be atleast 8 characters');
        // return false;
    } else if (confirmpassword !== password || confirmpassword === '') {
        alert('Password does not match')
        return false;
    } else if (confirmpassword == password || confirmpassword === password) {
        alert('login successful')
        return false;
    } else {
        // document.getElementById('error_div').innerHTML = ''
        document.getElementById('sign-up').submit();

    }
}