function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate email format for username
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate password criteria
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[^\s]*$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain an uppercase letter, a number, and only the '@' special character.");
        return;
    }

    // If all validations pass, you can proceed with further actions (e.g., submit form)
    alert("Login successful!");
}
