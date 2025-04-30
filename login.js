// login.js
const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  try {
    const response = await axios.post('https://asora-backend.onrender.com/login', {
      email,
      password
    });

    alert(response.data.message);
    // Optionally redirect on success
    // window.location.href = '/dashboard.html';
  } catch (error) {
    alert(error.response?.data?.message || 'Login failed');
  }
});
