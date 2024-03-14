function validateForm(form) {
    // get the values of email and password fields
    var email = form.querySelector('input[type="text"]').value;
    var password = form.querySelector('input[type="password"]').value;

    // check if both email and password are not empty
    return email.trim() !== '' && password.trim() !== '';
}

document.getElementById('loginBtn').addEventListener('click', function() {
    // show the login form and hide the signup form
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    // add 'active' class to the login button and remove it from the signup button
    this.classList.add('active');
    document.getElementById('signupBtn').classList.remove('active');
});

document.getElementById('signupBtn').addEventListener('click', function() {
    // show the signup form and hide the login form
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
    // add 'active' class to the signup button and remove it from the login button
    this.classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the default form submission behavior

    if (validateForm(this)) {
        alert('Login Successful!'); 
    } else {
        alert('Please fill in both email and password fields.'); 
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the default form submission behavior

    // getting the values of all input fields
    var firstName = document.getElementById('firstBtn').value;
    var lastName = document.getElementById('lastBtn').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // construct popup message with submitted information
    var popupMessage = "SUBMITTED INFORMATION:\n\n" +
    "First Name: " + firstName + "\n" +
    "Last Name: " + lastName + "\n" +
    "Email: " + email + "\n" +
    "Password: " + password + "\n" +
    "Confirm Password: " + confirmPassword;

    // create popup div
    var popup = document.createElement('div');
    popup.classList.add('popup');

    // create popup close button
    var closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;'; // unicode for close symbol
    closeButton.addEventListener('click', function() {
        popup.remove(); // remove the popup when the close button is clicked
        document.querySelector('.main-content').classList.remove('blur'); // remove blur effect from main content
    });
    popup.appendChild(closeButton);

    // create popup message content
    var popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContent.innerHTML = popupMessage.replace(/\n/g, "<br>"); // replace newline characters with <br> tags
    popup.appendChild(popupContent);

    // append popup to the body
    document.body.appendChild(popup);
    // add blur effect to the main content
    document.querySelector('.main-content').classList.add('blur');
});

function validatePasswords() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        // set custom validation message for password mismatch
        document.getElementById('confirmPassword').setCustomValidity('Passwords do not match!');
    } else {
        // reset custom validation message if passwords match
        document.getElementById('confirmPassword').setCustomValidity('');
    }
}

// for triggering the validatePasswords function when the password and confirm password fields are being typed
document.getElementById('password').addEventListener('input', validatePasswords);
document.getElementById('confirmPassword').addEventListener('input', validatePasswords);

