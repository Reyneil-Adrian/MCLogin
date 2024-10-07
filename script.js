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
