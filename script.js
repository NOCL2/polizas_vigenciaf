// Datos de las pólizas
const policies = [
    { id: 1, empresa: "Bestel", id_proyect: "BEST-2011-22", name: "Sec. Fun. Pública", start: '2022-08-12', end: '2025-08-12' },
    { id: 2, empresa: "IFT", id_proyect: "IFT-2202-22", name: "IFT CPD", start: '2023-01-01', end: '2025-12-31' },
    { id: 3, empresa: "Grupo Senda", id_proyect: "TTM-2001-22", name: "Senda", start: '2023-03-01', end: '2026-02-28' },
    { id: 4, empresa: "SKY", id_proyect: "SKY-2007-21", name: "Netbotz SKY", start: '2023-01-04', end: '2028-01-04' },
    { id: 5, empresa: "Telefónica", id_proyect: "TELE-2302-23", name: "Sabadell", start: '2023-03-01', end: '2025-04-30' },
    { id: 6, empresa: "KIO", id_proyect: "KIO-2328-23", name: "Equipos TOR", start: '2023-08-02', end: '2026-08-01' },
    { id: 7, empresa: "Bestel", id_proyect: "BEST-2301-23", name: "TELECOM", start: '2023-09-01', end: '2026-09-30' },
    { id: 8, empresa: "Soriana", id_proyect: "TSOR-2301-23", name: "Soriana IDEAHUB", start: '2024-01-22', end: '2025-01-21' },
    { id: 9, empresa: "Bestel", id_proyect: "BEST-2313-23", name: "Ciudad Digital ADIP", start: '2023-11-07', end: '2025-11-06' },
    { id: 10, empresa: "Bestel", id_proyect: "BEST-2314-23", name: "Ciudad Digital ADIP Legada", start: '2023-04-01', end: '2025-03-31' },
    { id: 11, empresa: "Bestel", id_proyect: "BEST-2327-23", name: "Póliza NBD Ciudad Digital", start: '2023-10-01', end: '2025-03-31' },
    { id: 12, empresa: "Tren Maya", id_proyect: "MAYA-2300-23", name: "Tren Maya", start: '2024-10-01', end: '2025-03-31' },
    { id: 13, empresa: "Bestel", id_proyect: "BEST-2008-22", name: "Hotel las Quintas", start: '2022-06-10', end: '2025-06-08' },
    { id: 14, empresa: "Hola Innovación", id_proyect: "HOLA-2401-24", name: "Kenworth", start: '2024-04-01', end: '2025-03-31' },
    { id: 15, empresa: "Bestel", id_proyect: "BEST-2410-24", name: "Routers Multiva", start: '2024-07-01', end: '2027-08-01' },
    { id: 16, empresa: "CVR", id_proyect: "CVR-2402-24", name: "MILESTONE MAVC", start: '2024-06-01', end: '2025-05-31' },
    { id: 17, empresa: "Soriana", id_proyect: "FALA-2401-24", name: "Falabella Soriana", start: '2024-07-15', end: '2027-06-15' },
    { id: 18, empresa: "Atalait", id_proyect: "LATAM-2301-23", name: "Atalait", start: '2024-10-08', end: '2025-04-09' },
    { id: 19, empresa: "ANAM", id_proyect: "ANAM", name: "ANAM", start: '2024-11-01', end: '2025-03-31' },
    { id: 20, empresa: "Bestel", id_proyect: "BEST-2420-24", name: "Estadio Azteca", start: '2024-11-11', end: '2025-09-22' },
    { id: 21, empresa: "IFT", id_proyect: "IFT-2401-24", name: "IFT RESANHI", start: '2025-01-01', end: '2027-12-31' }
];




// Configuración del gráfico
const margin = { top: 20, right: 20, bottom: 100, left: 200 }; // Aumentamos el margen izquierdo
const width = 1200 - margin.left - margin.right; // Aumentamos el ancho del gráfico
const height = 600 - margin.top - margin.bottom;
const svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleLinear().range([0, width]); // Cambiamos a escala lineal para el eje x
const y = d3.scaleBand()
    .domain(policies.map(d => d.id))
    .range([height, 0])
    .padding(0.1);

const xAxis = d3.axisBottom(x).tickFormat(d => `${d}%`).tickValues([0, 25, 50, 75, 100]); // Formateamos los ticks del eje x como porcentajes y establecemos los valores
const yAxis = d3.axisLeft(y);

// Agregar eje X al SVG
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${height})`) // Mover el eje X al fondo del gráfico
    .call(xAxis);

// Agregar eje Y al SVG
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

    // Crear la tabla una vez
    const table = d3.select("#table").append("table");
    const thead = table.append("thead");
    const tbody = table.append("tbody");

    // Encabezado de la tabla
    const columns = ["ID", "Empresa","Proyecto","ID de Proyecto", "Fecha de Inicio", "Fecha de Fin", "% Avance de Poliza"];
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
        .text(column => column);
// Verificar si el texto ya existe
let currentDateText = svg.select(".current-date");

// Si no existe, lo creamos
if (currentDateText.empty()) {
    currentDateText = svg.append("text")
        .attr("class", "current-date")
        .attr("text-anchor", "end")
        .attr("alignment-baseline", "hanging")
        .attr("x", width - 10) // Ajusta la posición en x para que esté a 10 píxeles del borde derecho
        .attr("y", 10) // Ajusta la posición en y para que esté a 10 píxeles del borde superior
        .attr("dx", -10) // Desplaza el texto 10 píxeles hacia la izquierda para mejorar el aspecto visual
        .attr("dy", 10);
}
// Función para actualizar el gráfico
function updateChart() {
    
    const now = new Date();
   // Formatear la fecha y hora actual
   const formattedDateTime = d3.timeFormat("%Y-%m-%d %H:%M:%S")(now);

   // Actualizar texto con la fecha y hora actual
   currentDateText.text(formattedDateTime);

    // Parsear las fechas y calcular el progreso
    policies.forEach(d => {
        d.startDate = new Date(d.start);
        d.endDate = new Date(d.end);
        d.progress = (now - d.startDate) / (d.endDate - d.startDate) * 100;
        d.progress = Math.min(Math.max(d.progress, 0), 100); // Limitar entre 0 y 100
    });

    x.domain([0, 100]); // Ahora el dominio del eje x es de 0 a 100 (porcentaje)
    y.domain(policies.map(d => d.id)).padding(0.1); // Ajuste de padding

    svg.select(".x.axis").call(xAxis);
    svg.select(".y.axis").call(yAxis);

    const bars = svg.selectAll(".bar")
        .data(policies, d => d.id);

    bars.enter().append("rect")
        .attr("class", "bar")
        .merge(bars)
        .transition()
        .duration(500)
        .attr("y", d => y(d.id))
        .attr("height", y.bandwidth())
        .attr("width", d => x(d.progress))
        .style("fill", d => `rgba(0, 128, 0, ${d.progress / 100})`);

    bars.exit().remove();

    // Agregar texto con el porcentaje centrado en cada barra
    svg.selectAll(".progress-text").remove(); // Limpiar texto anterior
    svg.selectAll(".progress-text")
        .data(policies)
        .enter().append("text")
        .attr("class", "progress-text")
        .attr("x", d => x(d.progress))
        .attr("y", d => y(d.id) + y.bandwidth() / 2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .text(d => `${Math.round(d.progress)}%`);


// Actualizar las filas de la tabla
const rows = tbody.selectAll("tr")
    .data(policies);

// Agregar filas nuevas si es necesario y aplicar clase
const rowsEnter = rows.enter().append("tr")
    .merge(rows)
    .attr("class", d => (d.progress === 100 ? "highlight" : ""));

// Agregar celdas a las filas
const cells = rowsEnter.selectAll("td")
    .data(row => [row.id, row.empresa, row.name, row.id_proyect, row.start, row.end, row.progress])
    .enter()
    .append("td");

// Llenar las celdas con texto excepto la última columna (porcentaje)
cells.filter((d, i) => i < 6) // Omitimos la última columna (índice 6)
    .text(d => d);

// Para la columna "% Avance de Póliza", agregamos un div con barra de progreso
cells.filter((d, i) => i === 6)
    .append("div")
    .style("width", "100px") // Ancho de la barra de progreso
    .style("height", "15px") // Altura de la barra de progreso
    .style("background", "#ddd") // Fondo de la barra
    .style("border-radius", "5px")
    .style("position", "relative")
    .append("div")
    .style("height", "100%")
    .style("width", d => `${d}%`) // Ajustar el ancho según el porcentaje
    .style("background", "green") // Color de la barra
    .style("border-radius", "5px")
    .style("text-align", "center")
    .style("color", "white")
    .style("font-size", "12px")
    .text(d => `${Math.round(d)}%`);
}

// Actualizar el gráfico cada segundo
setInterval(updateChart, 1000);

// Inicializar el gráfico
updateChart();

// Contenedor para las dos nuevas tablas
const tablesContainer = d3.select("#table")
    .append("div")
    .attr("id", "extra-tables")
    .style("display", "flex") // Hace que las tablas estén una al lado de otra
    .style("gap", "20px"); // Espacio entre las tablas

// Crear Tabla 1 - Prospecto a Renovación
const table1 = tablesContainer.append("table")
    .style("border", "1px solid black")
    .style("border-collapse", "collapse");

// Encabezado de la tabla 1
table1.append("tr")
    .append("th")
    .attr("colspan", 3) // Para que el título abarque 3 columnas
    .text("Prospecto a Renovación")
    .style("text-align", "center")
    .style("background", "#4CAF50")
    .style("color", "white")
    .style("padding", "10px");

// Encabezados de columnas
const headers1 = ["Cliente", "ID de Proyecto", "Proyecto"];
table1.append("tr")
    .selectAll("th")
    .data(headers1)
    .enter()
    .append("th")
    .text(d => d)
    .style("border", "1px solid black")
    .style("padding", "8px");

    const filat1 = ["AIFA", "AIFA-2401-24", "AIFA Frente 7/43"];
    table1.append("tr")
        .selectAll("td")
        .data(filat1)
        .enter()
    .append("th")
    .text(d => d)
    .style("border", "1px solid black")
    .style("padding", "8px");


        const filat2 = ["AIFA", "AIFA-2402-24", "AIFA APOC"];
    table1.append("tr")
        .selectAll("td")
        .data(filat2)
        .enter()
        .append("th")
        .text(d => d)
        .style("border", "1px solid black")
        .style("padding", "8px");
    

        const filat3 = ["AIFA", "AIFA-2403-24", "AIFA DAS"];
    table1.append("tr")
        .selectAll("td")
        .data(filat3)
        .enter()
    .append("th")
    .text(d => d)
    .style("border", "1px solid black")
    .style("padding", "8px");



// Crear Tabla 2 - Próximas Pólizas
const table2 = tablesContainer.append("table")
    .style("border", "1px solid black")
    .style("border-collapse", "collapse");

// Encabezado de la tabla 2
table2.append("tr")
    .append("th")
    .attr("colspan", 3)
    .text("Próximas Pólizas")
    .style("text-align", "center")
    .style("background", "#4CAF50")
    .style("color", "white")
    .style("padding", "10px");

// Encabezados de columnas
const headers2 = ["Cliente", "ID de Proyecto", "Proyecto"];
table2.append("tr")
    .selectAll("th")
    .data(headers2)
    .enter()
    .append("th")
    .text(d => d)
    .style("border", "1px solid black")
    .style("padding", "8px");


const fila1 = ["CLARO", "CLA-2401-24", "ECOPETROL"]; 
    table2.append("tr")
        .selectAll("td")
        .data(fila1)
        .enter()
    .append("th")
    .text(d => d)
    .style("border", "1px solid black")
    .style("padding", "8px");


        const fila2 = ["INTERNEXA", "COL-2402-24", "SENA"]; 
    table2.append("tr")
        .selectAll("td")
        .data(fila2)
        .enter()
        .append("th")
        .text(d => d)
        .style("border", "1px solid black")
        .style("padding", "8px");
    

        const fila3 = ["METLIFE", "METL-2418-24", "METLIFE WIFI"]; 
    table2.append("tr")
        .selectAll("td")
        .data(fila3)
        .enter()
        .append("th")
        .text(d => d)
        .style("border", "1px solid black")
        .style("padding", "8px");
    

