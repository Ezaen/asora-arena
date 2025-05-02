// auth.js — for frontend HTML
if (!localStorage.getItem('token')) {
    window.location.href = 'login.html';
  }
  