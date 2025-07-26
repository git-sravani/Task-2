const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});
function checkInput() {
    const nameValue = username.value.trim();
    const EmailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if (nameValue === '') {
        setErrorMessage(username, "Username shouldn't be blank");
    }
    else {
        setSuccessMessage(username);
    }
    if(EmailValue==='')
    {
        setErrorMessage(email,"This field is required");
    }
    else if(!ckeckEmail(EmailValue))
    {
        setErrorMessage(email,"This is not valid");
    }
    else{
        setSuccessMessage(email);
    }
    if(passwordValue==='')
    {
        setErrorMessage(password,'This field is required');
    }
    else if(passwordValue.length<5)
    {
        setErrorMessage(password,'Minimum length should be more than 5 char')
    }
    else
    {
        setSuccessMessage(password);
    }
    if(password2Value==='')
    {
        setErrorMessage(password2,'Thid field is required');
    }
    else if(passwordValue!==password2Value)
    {
        setErrorMessage(password2,'passwords are not matching')
    }
    else{
        setSuccessMessage(password2)
    }
    
}
function ckeckEmail(emailGiven) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailGiven);
}
function setErrorMessage(input, message) {
    const formControl = input.parentElement;
    const small=formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form-control error"
}
function setSuccessMessage(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
