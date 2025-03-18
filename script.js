document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('timer');
    const eidDate = new Date('2023-04-21T00:00:00'); // Example date for Eid al-Fitr

    function updateCountdown() {
        const now = new Date();
        const timeDifference = eidDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Eid Mubarak!';
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
