function actualizarProgreso() {
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


   const progressBars = [
    {
        startDate: new Date('2020-07-17'), // Establece la fecha de inicio aquí
        endDate: new Date('2024-07-17'),   // Establece la fecha de término aquí
        progressBarId: 'progressBar1',
        startDateElementId: 'startDate1',
        endDateElementId: 'endDate1'
    },
    {
        startDate: new Date('2021-01-26'),
        endDate: new Date('2024-07-30'),
        progressBarId: 'progressBar2',
        startDateElementId: 'startDate2',
        endDateElementId: 'endDate2'
    },
    {
        startDate: new Date('2021-06-11'),
        endDate: new Date('2024-06-11'),
        progressBarId: 'progressBar3',
        startDateElementId: 'startDate3',
        endDateElementId: 'endDate3'
    },
    {
        startDate: new Date('2022-01-08'),
        endDate: new Date('2024-12-31'),
        progressBarId: 'progressBar4',
        startDateElementId: 'startDate4',
        endDateElementId: 'endDate4'
    },
    {
        startDate: new Date('2021-07-05'),
        endDate: new Date('2024-08-01'),
        progressBarId: 'progressBar5',
        startDateElementId: 'startDate5',
        endDateElementId: 'endDate5'
    },
    {
        startDate: new Date('2022-08-12'),
        endDate: new Date('2025-08-12'),
        progressBarId: 'progressBar6',
        startDateElementId: 'startDate6',
        endDateElementId: 'endDate6'
    },
    {
        startDate: new Date('2023-01-01'),
        endDate: new Date('2025-12-31'),
        progressBarId: 'progressBar7',
        startDateElementId: 'startDate7',
        endDateElementId: 'endDate7'
    },
    {
        startDate: new Date('2023-03-21'),
        endDate: new Date('2026-03-20'),
        progressBarId: 'progressBar8',
        startDateElementId: 'startDate8',
        endDateElementId: 'endDate8'
    },
    {
        startDate: new Date('2023-01-04'),
        endDate: new Date('2028-01-04'),
        progressBarId: 'progressBar9',
        startDateElementId: 'startDate9',
        endDateElementId: 'endDate9'
    },
    {
        startDate: new Date('2023-04-10'),
        endDate: new Date('2024-09-08'),
        progressBarId: 'progressBar10',
        startDateElementId: 'startDate10',
        endDateElementId: 'endDate10'
    },
    {
        startDate: new Date('2023-03-01'),
        endDate: new Date('2024-02-28'),
        progressBarId: 'progressBar11',
        startDateElementId: 'startDate11',
        endDateElementId: 'endDate11'
    },
    {
        startDate: new Date('2023-08-02'),
        endDate: new Date('2026-08-01'),
        progressBarId: 'progressBar12',
        startDateElementId: 'startDate12',
        endDateElementId: 'endDate12'
    },
    {
        startDate: new Date('2023-07-19'),
        endDate: new Date('2024-11-18'),
        progressBarId: 'progressBar13',
        startDateElementId: 'startDate13',
        endDateElementId: 'endDate13'
    },
    {
        startDate: new Date('2024-01-22'),
        endDate: new Date('2025-01-21'),
        progressBarId: 'progressBar14',
        startDateElementId: 'startDate14',
        endDateElementId: 'endDate14'
    },
    {
        startDate: new Date('2022-06-10'),
        endDate: new Date('2025-06-08'),
        progressBarId: 'progressBar15',
        startDateElementId: 'startDate15',
        endDateElementId: 'endDate15'
    },
    {
        startDate: new Date('2024-04-01'),
        endDate: new Date('2025-03-31'),
        progressBarId: 'progressBar16',
        startDateElementId: 'startDate16',
        endDateElementId: 'endDate16'
    }
];

function actualizarProgreso() {
    progressBars.forEach((poliza, index) => {
        const startDate = poliza.startDate;
        const endDate = poliza.endDate;
        const now = new Date();
        const elapsed = now - startDate;
        const total = endDate - startDate;
        const progress = Math.min(100, Math.floor((elapsed / total) * 100));

        // Actualizar el texto de las fechas y el ancho de la barra de progreso
        document.getElementById(poliza.startDateElementId).textContent = startDate.toLocaleDateString();
        document.getElementById(poliza.endDateElementId).textContent = endDate.toLocaleDateString();
        document.getElementById(poliza.progressBarId).style.width = `${progress}%`;
        document.getElementById(poliza.progressBarId).textContent = `${progress}%`;
    });
}

// Llamar a la función inicialmente para actualizar el progreso
actualizarProgreso();

// Actualizar el progreso cada segundo
setInterval(actualizarProgreso, 1000);
