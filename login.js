// Function to handle user login
async function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Send POST request to backend API for login
        const response = await axios.post('https://asora-backend.onrender.com/login', {
            username: username,
            password: password
        });

        // If successful, alert and redirect to the lobby page
        alert('Login successful!');
        window.location.href = 'lobby.html'; // Redirect to the lobby page after successful login
    } catch (error) {
        // Handle any errors (invalid credentials, API errors, etc.)
        console.error('Login error:', error);
        alert('Error: ' + (error.response ? error.response.data.message : 'An unexpected error occurred.'));
    }
}

// Add event listener to the login button
document.getElementById('login-button').addEventListener('click', loginUser);
