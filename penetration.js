document.addEventListener('DOMContentLoaded', () => {
    const penetrationPlatformLogo = document.getElementById('penetration-platform-logo');
    const penetrationPlatformName = document.getElementById('penetration-platform-name');
    const penetrationUsernameInput = document.getElementById('penetration-username-input');
    const startPenetrationBtn = document.getElementById('start-penetration-btn');
    const penetrationSimulationSection = document.querySelector('.penetration-simulation-section');
    const penetrationLog = document.getElementById('penetration-log');
    const penetrationProgressBar = document.getElementById('penetration-progress-bar');
    const penetrationPercentage = document.getElementById('penetration-percentage');
    const finishPenetrationBtn = document.getElementById('finish-penetration-btn');
    const penetrationErrorMessage = document.getElementById('penetration-error-message');
    const penetrationInputSection = document.querySelector('.penetration-input-section');
    const backButton = document.getElementById('back-button'); // Get the back button

    const platformLogos = {
        instagram: 'instagram-logo-vector_svgstack_com_4011765566623.png',
        facebook: 'facebook-app-vector_svgstack_com_15451765566853.png',
        youtube: 'youtube-logo-vector_svgstack_com_4001765566698.png',
        google: 'google-logo_svgstack_com_50421765566662.png',
        discord: 'discord-vector_logo_svgstack_com_4591765566835.png'
    };

    // Get platform from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPlatform = urlParams.get('platform');

    if (selectedPlatform) {
        if (platformLogos[selectedPlatform]) {
            penetrationPlatformLogo.src = platformLogos[selectedPlatform];
        } else {
            penetrationPlatformLogo.src = ''; // Fallback for missing logo
        }
        penetrationPlatformName.textContent = selectedPlatform.toUpperCase();
    } else {
        penetrationPlatformName.textContent = 'Unknown Platform';
        // Handle case where platform param is missing or invalid
        penetrationErrorMessage.textContent = 'No platform selected. Redirecting to home...';
        penetrationErrorMessage.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    }

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Navigate back to the platform selection page
    });

    startPenetrationBtn.addEventListener('click', () => {
        const username = penetrationUsernameInput.value.trim();
        if (username) {
            penetrationErrorMessage.classList.add('hidden');
            penetrationInputSection.classList.add('hidden'); // Hide input section
            penetrationSimulationSection.classList.remove('hidden');
            startPenetrationSimulation(username, selectedPlatform);
        } else {
            penetrationErrorMessage.textContent = 'Please enter a username or email.';
            penetrationErrorMessage.classList.remove('hidden');
        }
    });

    // Remove the old finish button listener, as it's now handled inside the simulation
    // finishPenetrationBtn.addEventListener('click', () => {
    //     window.location.href = 'index.html'; // Redirect to home or another page
    // });

    function logMessage(targetLog, message, color = '#00ff00') {
        const p = document.createElement('span');
        p.style.color = color;
        p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        targetLog.appendChild(p); // Add to bottom for scrolling up effect
        targetLog.scrollTop = targetLog.scrollHeight; // Auto-scroll to the bottom
        if (targetLog.children.length > 50) { // Keep log clean
            targetLog.removeChild(targetLog.lastChild);
        }
    }

    function updateProgressBar(progress) {
        penetrationProgressBar.style.width = `${progress}%`;
        penetrationPercentage.textContent = `${progress}%`;
    }

    function getPenetrationSteps(platform) {
        const baseSteps = [
            { message: `Initiating secure connection to ${platform.toUpperCase()} servers...`, color: '#00ff00' },
            { message: `Authenticating session tokens for ${platform.toUpperCase()}...`, color: '#00ff00' },
            { message: `Bypassing ${platform.toUpperCase()} firewall protocols...`, color: '#00ff00' },
            { message: `Injecting data streams into ${platform.toUpperCase()} network...`, color: '#00ff00' },
            { message: `Final attack on ${platform.toUpperCase()} password lock...`, color: '#ff0000' },
            { message: `Cracking last encryption layer...`, color: '#ff0000' },
            { message: `Password wall weakening...`, color: '#ff0000' },
            { message: `Security shields collapsing...`, color: '#ff0000' },
            { message: `Injecting final override key...`, color: '#ff0000' },
            { message: `FORCE breach successful...`, color: '#ff0000' },
            { message: `Password structure breaking...`, color: '#ff0000' },
            { message: `PASSWORD BROKEN — system unlocked.`, color: '#ff0000' },
            { message: `Collecting user data packets...`, color: '#00ff00' },
            { message: `Pulling hidden account information...`, color: '#00ff00' },
            { message: `Rebuilding captured data blocks...`, color: '#00ff00' },
            { message: `Decrypting stored credentials...`, color: '#00ff00' },
            { message: `Extracting full access token...`, color: '#00ff00' },
            { message: `Data capture complete.`, color: '#00ff00' },
            { message: `Validating control access...`, color: '#00ff00' },
            { message: `Pushing admin takeover command...`, color: '#00ff00' },
            { message: `System responding...`, color: '#00ff00' },
            { message: `FULL ACCESS GRANTED to ${platform.toUpperCase()} account.`, color: '#00ff00' },
        ];

        const platformSpecificSteps = [];

        switch (platform) {
            case 'instagram':
                platformSpecificSteps.push(
                    { message: 'Establishing connection to Instagram API...', color: '#00ff00' },
                    { message: 'Enumerating Instagram user data...', color: '#00ff00' },
                    { message: 'Cracking Instagram account hashes...', color: '#00ff00' }
                );
                break;
            case 'facebook':
                platformSpecificSteps.push(
                    { message: 'Connecting to Facebook server...', color: '#00ff00' },
                    { message: 'Analyzing Facebook security protocols...', color: '#00ff00' },
                    { message: 'Exploiting Facebook session vulnerabilities...', color: '#00ff00' }
                );
                break;
            case 'youtube':
                platformSpecificSteps.push(
                    { message: 'Accessing YouTube content delivery network...', color: '#00ff00' },
                    { message: 'Interrogating YouTube user profiles...', color: '#00ff00' },
                    { message: 'Overriding YouTube access controls...', color: '#00ff00' }
                );
                break;
            case 'google':
                platformSpecificSteps.push(
                    { message: 'Connecting to Google authentication services...', color: '#00ff00' },
                    { message: 'Scanning Google security layers...', color: '#00ff00' },
                    { message: 'Compromising Google account management...', color: '#00ff00' }
                );
                break;
            case 'discord':
                platformSpecificSteps.push(
                    { message: 'Initiating Discord gateway connection...', color: '#00ff00' },
                    { message: 'Probing Discord server vulnerabilities...', color: '#00ff00' },
                    { message: 'Elevating Discord user privileges...', color: '#00ff00' }
                );
                break;
            default:
                // No specific steps, just use base steps
                break;
        }
        return [...platformSpecificSteps, ...baseSteps];
    }

    // Modify startPenetrationSimulation to use the message and color from the steps array
    function startPenetrationSimulation(username, platform) {
        penetrationLog.innerHTML = ''; // Clear previous logs
        updateProgressBar(0);

        let progress = 0;
        let step = 0;
        const steps = getPenetrationSteps(platform);
        const totalSteps = steps.length;

        const simulationInterval = setInterval(() => {
            if (step < totalSteps) {
                logMessage(penetrationLog, steps[step].message, steps[step].color);
                progress = Math.min(100, Math.floor(((step + 1) / totalSteps) * 100));
                updateProgressBar(progress);
                step++;
            } else {
                clearInterval(simulationInterval);
                const simulatedPassword = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2).toUpperCase(); // Generate a fake password
                logMessage(penetrationLog, `Access to ${platform.toUpperCase()} account for ${username} successful!`, '#00ff00');
                updateProgressBar(100);
                finishPenetrationBtn.classList.remove('hidden');

                // Redirect to hacked_account.html with username and password as URL params
                finishPenetrationBtn.addEventListener('click', () => {
                    window.location.href = `hacked_account.html?username=${username}&password=${simulatedPassword}`;
                }, { once: true }); // Ensure this listener only fires once
            }
        }, 1000 + Math.random() * 500); // Simulate varying step times
    }
});
