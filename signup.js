// Function to handle user registration
async function registerUser() {
    // Get values from the form fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Send POST request to backend API
        const response = await axios.post('https://asora-backend.onrender.com/register', {
            username: username,
            email: email,
            password: password
        });

        // If successful, alert the success message and redirect to login page
        alert(response.data.message);  // "User registered successfully!"
        window.location.href = 'login.html'; // Redirect to login page
    } catch (error) {
        // Handle any errors (invalid fields, API errors, etc.)
        console.error('Sign-up error:', error);
        alert('Error: ' + (error.response ? error.response.data.message : 'An unexpected error occurred.'));
    }
}

// Add event listener to the sign-up button
document.getElementById('signup-button').addEventListener('click', registerUser);
