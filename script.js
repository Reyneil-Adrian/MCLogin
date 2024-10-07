function validateLoginPassword() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginError = document.getElementById("loginError");
    var errorMessage = '';
    if (!username.includes("@") || !username.includes(".")) {
        errorMessage += "Invalid email. Must contain '@' and '.'. ";
    }
    if (password.length !== 8) {
        errorMessage += "Password must be exactly 8 characters long. ";
    }
    if (errorMessage) {
        loginError.textContent = errorMessage; 
        loginError.style.color = "red"; 
    } else {
        loginError.textContent = "Logging in..."; 
        loginError.style.color = "green"; 
    }
}
function validateForgotPasswordEmail() {
    var email = document.getElementById("e-mail").value;
    var errorMessage = document.getElementById("errorMessage");
    var message = '';
    if (!email.includes("@") || !email.includes(".")) {
        message += "Invalid email. Must contain '@' and '.'.";
    }
    if (message) {
        errorMessage.textContent = message;
        errorMessage.style.color = "red"; 
    } else {
        errorMessage.textContent = "Enabling password reset."; 
        errorMessage.style.color = "green"; 
    }
}
function validateSignUpForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var lastname = document.getElementById("lastname").value;
    var firstname = document.getElementById("firstname").value;
    var middleInitial = document.getElementById("middleInitial").value;
    var signUpError = document.getElementById("signUpError");
    var errorMessage = '';

    if (!email.includes("@") || !email.includes(".")) {
        errorMessage += "Invalid email. Must contain '@' and '.'. ";
    }
    if (password.length < 8) {
        errorMessage += "Password must be at least 8 characters long. ";
    }
    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match. ";
    }
    if (lastname === "" || firstname === "" || middleInitial === "") {
        errorMessage += "All fields must be filled. ";
    }
    if (errorMessage) {
        signUpError.textContent = errorMessage; 
        signUpError.style.color = "red"; 
        return false; 
    } else {
        signUpError.textContent = "Sign-up successful!";
        signUpError.style.color = "green"; 
        return true; 
    }
}