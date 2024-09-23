// Register new user
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Save user details to localStorage
    if (localStorage.getItem(username)) {
        alert('Username already exists! Try a different one.');
    } else {
        localStorage.setItem(username, password);
        alert('Registration successful! Now you can login.');
        window.location.href = 'index.html';
    }
});

// Login existing user
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists and password matches
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'secured.html';
    } else {
        alert('Invalid username or password!');
    }
});

// Logout user
document.getElementById('logoutBtn')?.addEventListener('click', function() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
});

// Secured page access control
if (window.location.pathname === '/secured.html') {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert('You must be logged in to access this page.');
        window.location.href = 'index.html';
    }
}
