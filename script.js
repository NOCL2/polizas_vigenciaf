// Datos de las pólizas
const policies = [
    { id: 1, name: "SOPORTE TYPHOON", start: '2020-07-17', end: '2024-07-17' },
    { id: 2, name: "Ciudad Digital CDMX", start: '2021-01-26', end: '2024-07-30' },
    { id: 3, name: "Bestel CMP WLAN", start: '2021-06-11', end: '2024-06-11' },
    { id: 4, name: "Licitación IFT", start: '2022-01-08', end: '2024-12-31' },
    { id: 5, name: "Bolsa Mexicana de valores", start: '2021-07-05', end: '2024-08-01' },
    { id: 6, name: "Secretaria de la Función Pública", start: '2022-08-12', end: '2025-08-12' },
    { id: 7, name: "Renovación de las pólizas de soporte y servicio de mtto al DC del IFT", start: '2023-01-01', end: '2025-12-31' },
    { id: 8, name: "CHEVY SAN CARLOS", start: '2023-03-21', end: '2026-03-20' },
    { id: 9, name: "Solución Netbotz SKY", start: '2023-01-04', end: '2028-01-04' },
    { id: 10, name: "ATALAIT Póliza de Soporte", start: '2023-04-10', end: '2024-09-08' },
    { id: 11, name: "Implementación con Póliza Sabadell", start: '2023-03-01', end: '2024-02-28' },
    { id: 12, name: "Implementación y póliza de servicio Break&Fix para equipos TOR", start: '2023-08-02', end: '2026-08-01' },
    { id: 13, name: "Servicios de implementación MPO MTY", start: '2023-07-19', end: '2024-11-18' },
    { id: 14, name: "Servicio de Suministro, logística y montaje para 26 Huawei IdeaHub", start: '2024-01-22', end: '2025-01-21' },
    { id: 15, name: "Hotel las Quintas", start: '2022-06-10', end: '2025-06-08' },
    { id: 16, name: "Kenworth Fase 1 - Señalización Digital", start: '2024-04-01', end: '2025-03-31' }
];



// Configuración del gráfico
const margin = { top: 20, right: 20, bottom: 100, left: 400 }; // Aumentamos el margen izquierdo
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
    const columns = ["ID", "Nombre de Poliza", "Fecha de Inicio", "Fecha de Fin", "Porcentaje"];
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
 // Actualizar las celdas existentes y agregar filas nuevas si es necesario
// Actualizar las filas de la tabla

// Agregar filas nuevas si es necesario y aplicar clase
const rowsEnter = rows.enter().append("tr")
    .merge(rows)
    .attr("class", d => (d.progress === 100 ? "highlight" : ""));




// Agregar celdas a las filas
rowsEnter.selectAll("td")
 .data(row => [row.id, row.name, row.start, row.end, `${Math.round(row.progress)}%`])
 .enter()
 .append("td")
 .text(d => d);
}

// Actualizar el gráfico cada segundo
setInterval(updateChart, 1000);

// Inicializar el gráfico
updateChart();
