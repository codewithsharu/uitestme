document.addEventListener('DOMContentLoaded', () => {
    const displayedUsername = document.getElementById('displayed-username');
    const displayedPassword = document.getElementById('displayed-password');
    const displayedEmail = document.getElementById('displayed-email');
    const displayedIp = document.getElementById('displayed-ip');
    const displayedLocation = document.getElementById('displayed-location');
    const displayedCreated = document.getElementById('displayed-created');
    const displayedLastLogin = document.getElementById('displayed-lastlogin');
    const displayedOs = document.getElementById('displayed-os');
    const displayedDevice = document.getElementById('displayed-device');
    const loadingOverlay = document.querySelector('.loading-data-overlay');
    const hackedDetailsGrid = document.querySelector('.hacked-details-grid');
    const backToHomeBtn = document.getElementById('back-to-home-btn');

    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const password = urlParams.get('password'); // This will be the simulated password

    // Function to generate random data
    function generateRandomData(user) {
        const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        const randomHex = () => Math.floor(Math.random() * 255).toString(16).padStart(2, '0');

        const ips = ['192.168.', '10.0.', '172.16.'];
        const randomIp = () => {
            const base = ips[randomInt(0, ips.length - 1)];
            return `${base}${randomInt(0, 255)}.${randomInt(0, 255)}`;
        };

        const locations = [
            'Düsseldorf, Germany', 'London, UK', 'New York, USA', 'Tokyo, Japan',
            'Paris, France', 'Sydney, Australia', 'Berlin, Germany', 'Moscow, Russia'
        ];

        const osList = ['Windows 10', 'macOS Ventura', 'Ubuntu Linux', 'Android 13', 'iOS 17'];
        const deviceList = ['Chrome Desktop', 'Firefox Mobile', 'Safari Tablet', 'Edge Laptop'];

        const year = randomInt(2015, 2023);
        const month = randomInt(1, 12).toString().padStart(2, '0');
        const day = randomInt(1, 28).toString().padStart(2, '0');
        const hour = randomInt(0, 23).toString().padStart(2, '0');
        const minute = randomInt(0, 59).toString().padStart(2, '0');

        return {
            email: `${user || 'target_user'}${randomInt(10, 99)}@example.com`,
            ip: randomIp(),
            location: locations[randomInt(0, locations.length - 1)],
            created: `${year}-${month}-${day} ${hour}:${minute}`,
            lastLogin: `2024-${month}-${day} ${hour}:${minute}`,
            os: osList[randomInt(0, osList.length - 1)],
            device: deviceList[randomInt(0, deviceList.length - 1)],
        };
    }
    // Simulate data loading
    loadingOverlay.classList.remove('hidden'); // Ensure loading overlay is visible initially
    hackedDetailsGrid.classList.add('hidden'); // Hide details until loaded

    setTimeout(() => {
        loadingOverlay.classList.add('hidden'); // Hide loading overlay after delay
        hackedDetailsGrid.classList.remove('hidden'); // Show details grid

        if (username) {
            displayedUsername.textContent = '********';
            displayedPassword.textContent = '********';

            // Obscure sensitive data with placeholders
            displayedEmail.textContent = '********';
            displayedIp.textContent = '********';
            displayedLocation.textContent = '********';
            displayedCreated.textContent = '********';
            displayedLastLogin.textContent = '********';
            displayedOs.textContent = '********';
            displayedDevice.textContent = '********';

        } else {
            // Fallback if no username/password are passed
            displayedUsername.textContent = '********';
            displayedPassword.textContent = '********';

            // Obscure sensitive data with placeholders
            displayedEmail.textContent = '********';
            displayedIp.textContent = '********';
            displayedLocation.textContent = '********';
            displayedCreated.textContent = '********';
            displayedLastLogin.textContent = '********';
            displayedOs.textContent = '********';
            displayedDevice.textContent = '********';
        }
    }, 2500); // 2.5 second delay for loading effect

    backToHomeBtn.addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to the main platform selection page
    });
});
