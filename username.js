// username.js — fetch and show logged in username

document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    fetch('https://asora-backend.onrender.com/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.username) {
          const el = document.getElementById('username');
          if (el) el.textContent = data.username;
        }
      })
      .catch(err => console.error('User fetch error:', err));
  });