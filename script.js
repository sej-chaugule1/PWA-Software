function validateLogin() {
const correctUsername = "username123";
const correctPassword = "password123";

const enteredUsername = document.getElementById("user").value;
const enteredPassword = document.getElementById("pass").value;
const errorMessage = document.getElementById("error-message");
const emptyMessage = document.getElementById("empty-message");

errorMessage.style.display = "none";
emptyMessage.style.display = "none";

if (enteredUsername === "" || enteredPassword === "") {
    emptyMessage.style.display = "block";
    return false; // Prevent form submission
}

// Check if the credentials are correct
if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    window.location.href = "Penny-wise.html";
    return false; // Prevent form from actually submitting
} else {
    errorMessage.style.display = "block"; 
    return false; // Prevent form submission
}

}