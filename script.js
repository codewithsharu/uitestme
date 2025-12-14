document.addEventListener('DOMContentLoaded', () => {
    const optionsContainer = document.querySelector('.options');
    const searchSection = document.querySelector('.search-section');
    const hackingSection = document.querySelector('.hacking-section');
    const usernameInput = document.getElementById('username-input');
    const searchButton = document.getElementById('search-button');
    const passwordInput = document.getElementById('password-input');
    const penetrateButton = document.getElementById('penetrate-button');
    const logDiv = document.getElementById('log');

    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', () => {
            const selectedPlatform = button.dataset.platform;
            window.location.href = `penetration.html?platform=${selectedPlatform}`;
        });
    });

    // Existing (hidden) search and hacking logic, kept for reference/future use if needed
    searchButton.addEventListener('click', () => {
        const username = usernameInput.value;
        if (username) {
            optionsContainer.classList.add('hidden');
            searchSection.classList.add('hidden');
            hackingSection.classList.remove('hidden');
            logDiv.innerHTML = '';
            logMessage(logDiv, `Attempting to log in as ${username}...`, '#00ff00');
            // This part of the simulation is now handled by penetration.js
            // For the original design, this would simulate a 'search' or 'initial hacking' phase.
        } else {
            alert('Please enter a username or email.');
        }
    });

    penetrateButton.addEventListener('click', () => {
        const password = passwordInput.value;
        if (password) {
            logMessage(logDiv, 'Password provided. Initiating advanced penetration...', '#ff0000');
            // This part of the simulation is now handled by penetration.js
        } else {
            logMessage(logDiv, 'Please enter a fake password to continue the simulation.', '#ffff00');
        }
    });

    function logMessage(targetLog, message, color = '#00ff00') {
        const p = document.createElement('span');
        p.style.color = color;
        p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        targetLog.prepend(p); // Add to top
        if (targetLog.children.length > 50) { // Keep log clean
            targetLog.removeChild(targetLog.lastChild);
        }
    }
});


