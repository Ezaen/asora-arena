// login.js
console.log("Login script loaded");

const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Email and password are required.');
    return;
  }

  try {
    const response = await axios.post('https://asora-backend.onrender.com/login', {
      email,
      password
    });

    alert(response.data.message);

    // Store token and redirect to profile
    localStorage.setItem('token', response.data.token);
    console.log("Redirecting to profile.html");
    window.location.assign('profile.html');
  } catch (error) {
    console.error('Login error:', error);
    alert(error.response?.data?.message || 'Login failed');
  }
});