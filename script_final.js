function updateProgressBar(progressBar, currentTime) {
    const totalDuration = progressBar.endDate - progressBar.startDate;
    const elapsedDuration = currentTime - progressBar.startDate;
    const progressPercentage = Math.min((elapsedDuration / totalDuration) * 100, 100);

    const progressBarElement = document.getElementById(progressBar.progressBarId);
    if (progressBarElement) {
        progressBarElement.style.width = progressPercentage + '%';
        progressBarElement.innerText = Math.round(progressPercentage) + '%';
    }

    const startDateElement = document.getElementById(progressBar.startDateElementId);
    const endDateElement = document.getElementById(progressBar.endDateElementId);
    if (startDateElement && endDateElement) {
        startDateElement.innerText = progressBar.startDate.toLocaleDateString();
        endDateElement.innerText = progressBar.endDate.toLocaleDateString();
    }
}

const progressBars = [
    {
        startDate: new Date('2020-07-17'),
        endDate: new Date('2024-07-17'),
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
        startDate: new Date('2021-07-05'),
        endDate: new Date('2024-08-01'),
        progressBarId: 'progressBar11',
        startDateElementId: 'startDate11',
        endDateElementId: 'endDate11'
    },
    {
        startDate: new Date('2021-01-26'),
        endDate: new Date('2024-07-30'),
        progressBarId: 'progressBar12',
        startDateElementId: 'startDate12',
        endDateElementId: 'endDate12'
    },
    {
        startDate: new Date('2020-07-17'),
        endDate: new Date('2024-07-17'),
        progressBarId: 'progressBar13',
        startDateElementId: 'startDate13',
        endDateElementId: 'endDate13'
    },
    {
        startDate: new Date('2021-06-11'),
        endDate: new Date('2024-06-11'),
        progressBarId: 'progressBar14',
        startDateElementId: 'startDate14',
        endDateElementId: 'endDate14'
    },
    {
        startDate: new Date('2023-03-01'),
        endDate: new Date('2024-02-28'),
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

const currentTime = new Date();

progressBars.forEach(progressBar => {
    console.log(`Updating progress bar: ${progressBar.progressBarId}`);
    updateProgressBar(progressBar, currentTime);
});
