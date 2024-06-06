function updateProgress() {
    const now = new Date();

    const progressBars = [
        { startDateId: 'startDate1', endDateId: 'endDate1', progressBarId: 'progressBar1' },
        { startDateId: 'startDate2', endDateId: 'endDate2', progressBarId: 'progressBar2' },
        { startDateId: 'startDate3', endDateId: 'endDate3', progressBarId: 'progressBar3' }
    ];

    progressBars.forEach(bar => {
        const startDateInput = document.getElementById(bar.startDateId);
        const endDateInput = document.getElementById(bar.endDateId);
        const progressBar = document.getElementById(bar.progressBarId);

        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        if (isNaN(startDate) || isNaN(endDate) || startDate >= endDate) {
            progressBar.style.width = '0%';
            progressBar.textContent = '0%';
            return;
        }

        const totalTime = endDate - startDate;
        const elapsedTime = now - startDate;
        let progress = Math.min(100, (elapsedTime / totalTime) * 100).toFixed(2);

        progressBar.style.width = progress + '%';
        progressBar.textContent = progress + '%';
    });
}

setInterval(updateProgress, 60000); // Actualiza cada minuto
updateProgress(); // Llama a la función inmediatamente para mostrar el progreso inicial

document.querySelectorAll('input[type="date"]').forEach(input => {
    input.addEventListener('change', updateProgress);
});
