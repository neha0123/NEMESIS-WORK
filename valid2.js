<script type="text/javascript">
const form = document.getElementById('form1');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const email = document.getElementById('email');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate()
})
//more validation for email
const isEmail = (emailval) => {
    var atSymbol = emailval.indexOf("@");
    if (atSymbol < 1) {
        return false;
    }
    var dot = emailval.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailval.length - 1) return false;
    return true;
}
const isUsername = (usernameval) => {
    var exp = /^[a-zA-Z0-9]*$/gm;//use for validation of username from this only alphanumreic character allowed and no space allowed
    var str = usernameval;
 
    var result = exp.test(str);
    if (result) {
        return true;
    } return false;

}

//define the validate function
const validate = () => {
    const usernameval = username.value.trim();
    const phoneval = phone.value.trim();
    const addressval = address.value.trim();
    const emailval = email.value.trim();

    //validate username
    if (usernameval === "") {
        setErrormsg(username, 'username can not be blank');
    }
    else if (!isUsername(usernameval)) {
        setErrormsg(username, 'Not a valid username');
    }

    else {
        setSuccessMsg(username);
    }

    if (phoneval === "") {
        setErrormsg(phone, 'phone number can not be blank');
    }
    else if (phoneval.length != 10) {
        setErrormsg(phone, 'Only 10 digits of number allowded')
    }
    else {
        setSuccessMsg(phone);
    }
    if (addressval === "") {
        setErrormsg(address, 'Enter Your address here');
    }

    else {
        setSuccessMsg(address);
    }
    if (emailval === "") {
        setErrormsg(email, 'email can not be blank');


    }
    else if (!isEmail(emailval)) {
        setErrormsg(email, 'Not a valid Email');
    }
    else {
        setSuccessMsg(email);
    }
}
function setErrormsg(input, errormsgs) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = "form-control error";
    small.innerText = errormsgs;

}
function setSuccessMsg(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success"
}








        
      
       

</script>



