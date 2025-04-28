// Function to handle user registration
async function registerUser(event) {
    event.preventDefault();  // Prevent the form from submitting the default way

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('https://asora-backend.onrender.com/register', {
            username: username,
            email: email,
            password: password
        });

        // If successful, show the success message and redirect
        alert(response.data.message);  // "User registered successfully!"
        window.location.href = 'login.html'; // Redirect to login page after successful registration
    } catch (error) {
        // Handle any errors (missing fields, duplicate username, etc.)
        if (error.response && error.response.data && error.response.data.message) {
            alert('Error: ' + error.response.data.message);
        } else {
            alert('An unexpected error occurred. Please try again later.');
        }
    }
}

// Attach the registerUser function to the form submit event
document.getElementById('signupForm').addEventListener('submit', registerUser);
