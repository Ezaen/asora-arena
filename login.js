// login.js
console.log("Login script loaded");

const form = document.getElementById('loginForm');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', async (e) => {
  e.preventDefault();

  const email = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Both fields are required.');
    return;
  }

  try {
    const response = await axios.post('https://asora-backend.onrender.com/login', {
      email,
      password
    });

    alert(response.data.message);
    // Example: store token and redirect
    // localStorage.setItem('token', response.data.token);
    // window.location.href = 'profile.html';
  } catch (error) {
    console.error('Login error:', error);
    alert(error.response?.data?.message || 'Login failed');
  }
});