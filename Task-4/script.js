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

    // Redirect to the dashboard for a specific password
    if (password === "SmartServTest@123") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function openForgotPassword() {
    // Open the default email client with a pre-filled email for password reset
    window.location.href = "mailto:support@smartserv.io?subject=Password%20Reset%20Request";
}
