document.addEventListener('DOMContentLoaded', () => {
    const hackmeText = document.getElementById('hackme-text');
    const text = "Hackme";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            hackmeText.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 200);
        }
    }
    typeWriter();

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('live-time').textContent = timeString;
    }
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display time immediately
});
