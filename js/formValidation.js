const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const num = document.getElementById('num');
const address = document.getElementById('address');
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const row= element.parentElement;
    const errorDisplay = row.querySelector('.error');
    errorDisplay.innerText = message;
    row.classList.add('error');
    row.classList.remove('success')
}

const setSuccess = element => {
    const row = element.parentElement;
    const errorDisplay = row.querySelector('.error');
    errorDisplay.innerText = '';
    row.classList.add('success');
    row.classList.remove('error');
};

const isValidNum = num => {
  var re = /^\d{10}$/;
  return re.test(num);
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const numValue = num.value.trim();
    var msex = document.getElementById("rd1");
    var fsex = document.getElementById("rd2");
    var mal = document.getElementById("lan1");
    var eng= document.getElementById("lan2");
    var hin= document.getElementById("lan3");
   
    if(fnameValue === '') {
        setError(fname, 'First Name is required');
    } else {
        setSuccess(fname);
    }

	if(lnameValue === '') {
        setError(lname, 'Second Name is required');
    } else {
        setSuccess(lname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(numValue === '') {
        setError(num, 'Please enter your phone number');
    } else if (!isValidNum(numValue)) {
        setError(num, "Provide a valid phone number");
    } else {
        setSuccess(num);
    }
    if(msex.checked == true || fsex.checked == true){
		setSuccess(msex);
	}
	else{
		setError(msex,"select any one");
	}
      if(mal.checked == true || eng.checked == true ||eng.checked == true){
		setSuccess(mal);
	}
	else{
		setError(mal,"select any one");
	}
	
};
