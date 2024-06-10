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


    const progressBars = [
        {
            startDate: new Date('17/07/2020'), // Soporte Typhoon
            endDate: new Date('17/07/2024'),    
            progressBarId: 'progressBar1',
            startDateElementId: 'startDate1',
            endDateElementId: 'endDate1'
        },
        {
            startDate: new Date('2021-01-26'), //Ciudad Digital
            endDate: new Date('2024-07-30'),
            progressBarId: 'progressBar2',
            startDateElementId: 'startDate2',
            endDateElementId: 'endDate2'
        },
        {
            startDate: new Date('2021-06-11'), //Bestel CMP WLAN
            endDate: new Date('2024-06-11'),
            progressBarId: 'progressBar3',
            startDateElementId: 'startDate3',
            endDateElementId: 'endDate3'
        },
        {
            startDate: new Date('2022-01-08'), //Licitación IFT
            endDate: new Date('2024-12-31'),
            progressBarId: 'progressBar4',
            startDateElementId: 'startDate4',
            endDateElementId: 'endDate4'
        },
        {
            startDate: new Date('2021-07-05'), //Bolsa Mexicana de valores
            endDate: new Date('2024-08-01'),
            progressBarId: 'progressBar5',
            startDateElementId: 'startDate5',
            endDateElementId: 'endDate5'
        },
        {
            startDate: new Date('2022-08-12'), //Secretaria de la Función Pública
            endDate: new Date('2025-08-12'),
            progressBarId: 'progressBar6',
            startDateElementId: 'startDate6',
            endDateElementId: 'endDate6'
        },
        {
            startDate: new Date('2023-01-01'), //Renovación de las pólizas de soporte y servicio de mtto al DC del IFT
            endDate: new Date('2025-12-31'),
            progressBarId: 'progressBar7',
            startDateElementId: 'startDate7',
            endDateElementId: 'endDate7'
        },
        {
            startDate: new Date('2023-03-21'), //CHEVY SAN CARLOS
            endDate: new Date('2026-03-20'),
            progressBarId: 'progressBar8',
            startDateElementId: 'startDate8',
            endDateElementId: 'endDate8'
        },
        {
            startDate: new Date('2023-01-04'), //Solución Netbotz SKY
            endDate: new Date('2028-01-04'),
            progressBarId: 'progressBar9',
            startDateElementId: 'startDate9',
            endDateElementId: 'endDate9'
        },
        {
            startDate: new Date('2023-04-10'), //ATALAIT Póliza de Soporte
            endDate: new Date('2024-09-08'),
            progressBarId: 'progressBar10',
            startDateElementId: 'startDate10',
            endDateElementId: 'endDate10'
        },
        {
            startDate: new Date('2023-03-01'), //Implementación con Póliza Sabadell
            endDate: new Date('2024-02-28'),
            progressBarId: 'progressBar11',
            startDateElementId: 'startDate11',
            endDateElementId: 'endDate11'
        },
        {
            startDate: new Date('2023-08-02'), //Implementación y póliza de servicio Break&Fix para equipos TOR
            endDate: new Date('2026-08-01'),
            progressBarId: 'progressBar12',
            startDateElementId: 'startDate12',
            endDateElementId: 'endDate12'
        },
        {
            startDate: new Date('2023-07-19'), //Servicios de implementación MPO MTY
            endDate: new Date('2024-11-18'),
            progressBarId: 'progressBar13',
            startDateElementId: 'startDate13',
            endDateElementId: 'endDate13'
        },
        {
            startDate: new Date('2024-01-22'), //Servicio de Suministro, logística y montaje para 26 Huawei IdeaHub
            endDate: new Date('2025-01-21'),
            progressBarId: 'progressBar14',
            startDateElementId: 'startDate14',
            endDateElementId: 'endDate14'
        },
        {
            startDate: new Date('2022-06-10'), //Hotel las Quintas
            endDate: new Date('2025-06-08'),
            progressBarId: 'progressBar15',
            startDateElementId: 'startDate15',
            endDateElementId: 'endDate15'
        },
        {
            startDate: new Date('2024-04-01'), //Kenworth Fase 1 - Señalización Digital
            endDate: new Date('2025-03-31'),
            progressBarId: 'progressBar16',
            startDateElementId: 'startDate16',
            endDateElementId: 'endDate16'
        }
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
