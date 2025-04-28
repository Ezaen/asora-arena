// Function to handle user login
async function loginUser() {
    const username = document.getElementById('username').value; // Get username from the input field
    const password = document.getElementById('password').value; // Get password from the input field

    try {
        // Send POST request to /login with username and password
        const response = await axios.post('http://localhost:3000/login', {
            username: username,
            password: password
        });

        // If successful, show the success message and store the JWT token
        alert(response.data.message);  // "Login successful!"
        const token = response.data.token;

        // Save the JWT token in localStorage for future requests
        localStorage.setItem('jwtToken', token);

        // Redirect the user to the lobby page or dashboard
        window.location.href = 'lobby.html'; // Redirect to a protected page after login
    } catch (error) {
        // Handle errors (invalid credentials)
        alert('Error: ' + error.response.data.message);
    }
}
