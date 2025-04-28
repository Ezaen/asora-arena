// Function to handle user registration
async function registerUser() {
    const username = document.getElementById('username').value; // Get username from the form input
    const email = document.getElementById('email').value; // Get email from the form input
    const password = document.getElementById('password').value; // Get password from the form input

    try {
        // Make a POST request to the backend /register route
        const response = await axios.post('https://asora-backend.onrender.com/register', {
            username: username,
            email: email,
            password: password
        });

        // If successful, alert the success message
        alert(response.data.message);  // "User registered successfully!"
        window.location.href = 'login.html'; // Redirect to the login page after successful registration
    } catch (error) {
        // Handle any errors (username already taken, etc.)
        alert('Error: ' + error.response.data.message);
    }
}
