document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    const targetDate = new Date('2025-03-30T00:00:00').getTime(); // Update to the new date of Eid Fitri

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "Eid Fitri has started!";
        }
    }

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
});
