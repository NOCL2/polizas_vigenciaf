function updateProgress() {
    const now = new Date();

    // Obtener el elemento HTML donde se mostrará la fecha y hora actual
var dateTimeElement = document.getElementById("currentDateTime");

// Función para obtener la fecha y hora actual en un formato específico
function getCurrentDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString(); // Puedes personalizar el formato según tus preferencias
    return dateTimeString;
}

// Función para actualizar la fecha y hora actual cada segundo
function updateDateTime() {
    var currentDateTime = getCurrentDateTime();
    dateTimeElement.textContent = currentDateTime;
}

// Llamar a la función inicialmente para mostrar la fecha y hora actual
updateDateTime();

// Actualizar la fecha y hora actual cada segundo
setInterval(updateDateTime, 1000);


    const polizas = [
    { start: new Date('2020-07-17'), end: new Date('2024-07-17') },
    { start: new Date('2021-01-26'), end: new Date('2024-07-30') },
    { start: new Date('2021-06-11'), end: new Date('2024-06-11') },
    { start: new Date('2022-01-08'), end: new Date('2024-12-31') },
    { start: new Date('2021-07-05'), end: new Date('2024-08-01') },
    { start: new Date('2022-08-12'), end: new Date('2025-08-12') },
    { start: new Date('2023-01-01'), end: new Date('2025-12-31') },
    { start: new Date('2023-03-21'), end: new Date('2026-03-20') },
    { start: new Date('2023-01-04'), end: new Date('2028-01-04') },
    { start: new Date('2023-04-10'), end: new Date('2024-09-08') },
    { start: new Date('2023-03-01'), end: new Date('2024-02-28') },
    { start: new Date('2023-08-02'), end: new Date('2026-08-01') },
    { start: new Date('2023-07-19'), end: new Date('2024-11-18') },
    { start: new Date('2024-01-22'), end: new Date('2025-01-21') },
    { start: new Date('2022-06-10'), end: new Date('2025-06-08') },
    { start: new Date('2024-04-01'), end: new Date('2025-03-31') },
];

    progressBars.forEach(bar => {
        const progressBar = document.getElementById(bar.progressBarId);
        document.getElementById(bar.startDateElementId).textContent = bar.startDate.toDateString();
        document.getElementById(bar.endDateElementId).textContent = bar.endDate.toDateString();

        const startDate = bar.startDate;
        const endDate = bar.endDate;

        if (startDate >= endDate) {
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

setInterval(updateProgress, 1000); // Actualiza cada minuto
updateProgress(); // Llama a la función inmediatamente para mostrar el progreso inicial
