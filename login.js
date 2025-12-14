document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const errorMessage = document.getElementById('error-message');
    const loader = document.getElementById('loader');

    loginButton.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'admin345' && password) {
            errorMessage.classList.add('hidden');
            loader.classList.remove('hidden');

            setTimeout(() => {
                sessionStorage.setItem('loggedIn', 'true'); // Set session storage item
                window.location.href = 'index.html';
            }, 3000); // 3-second delay
        } else {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.classList.remove('hidden');
        }
    });
});
