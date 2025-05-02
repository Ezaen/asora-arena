// auth.js (frontend)

// Redirect to login.html if no token is found
if (!localStorage.getItem('token')) {
    window.location.href = 'login.html';
  }
  
  // Logout handler for button with id "logoutBtn"
  document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'login.html';
      });
    }
  });
  