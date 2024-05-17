document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
    
    var isValid = true;

    // Clear previous error messages
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    
    // Username validation
    if (username.length < 3 || username.length > 15) {
        usernameError.textContent = 'Username must be between 3 and 15 characters.';
        usernameError.style.display = 'block';
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordError.style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        this.submit();
    }
});
