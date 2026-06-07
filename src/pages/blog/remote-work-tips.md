---
layout: '../../layouts/Post.astro'
title: 'Aplicación para Cálculo de Prestaciones Laborales'
h1: 'Cálculo de Prestaciones Laborales'
date: 03.03.2024
custom_category: 'blog'
hreflang_en: '/blog/remote-work-tips/'
hreflang_ru: '/ru/blog/remote-work-tips/'
description: 'Presentación técnica y diseño de una aplicación web para el cálculo automático de prestaciones laborales.'
---

# Introducción

En esta sección presento una aplicación web para el cálculo de prestaciones laborales. El sistema permite ingresar datos del empleado, fechas de trabajo y salario, generando automáticamente los resultados correspondientes.

# Estilos y Diseño (CSS)

Para este proyecto desarrollé una interfaz limpia y moderna utilizando CSS personalizado, enfocado en la legibilidad, organización del contenido y una experiencia de usuario intuitiva.

Se implementó el uso de **variables CSS (`:root`)**, lo que permite mantener consistencia visual y facilitar la escalabilidad del diseño.

### Principales características del diseño:

- **Paleta de colores corporativa**: tonos de azul (`#1D428A`) y verde (`#28a745`).
- **Diseño centrado y responsive**: uso de Flexbox para alinear el contenido.
- **Componentes reutilizables**: clases como `.container` y `.form-section`.
- **Mejora de la experiencia visual**: sombras y bordes redondeados (`box-shadow`, `border-radius`).
- **Tablas estilizadas**: para una mejor lectura de datos y reportes.
- **Botones interactivos**: con efectos `hover` para mejor retroalimentación visual.

---

## Decisiones Técnicas

Durante el desarrollo de la interfaz, tomé en cuenta los siguientes aspectos:

1. **Uso de variables CSS**: Permiten mantener consistencia en colores y facilitan cambios futuros sin modificar múltiples líneas de código.
2. **Diseño centrado (Flexbox)**: Se utilizó `display: flex` para centrar el contenido vertical y horizontalmente.
3. **Componentización visual**: El uso de módulos aislados ayuda a reutilizar estilos.
4. **Experiencia de Usuario (UX)**: Se añadieron efectos visuales interactivos.

---

# Implementación de la Interfaz (HTML)

El diseño está dividido en varias secciones (formularios) para recolectar la información del usuario paso a paso.

### 1. Datos del Solicitante
```html
<div class="form-section">
  <h2>Datos del Solicitante</h2>
  <label>Documento de Identidad</label>
  <input type="text" id="documentoIdentidad" placeholder="Ej: 001-1234567-8">

  <label>Nombre</label>
  <input type="text" id="nombreSolicitante" placeholder="Ej: Juan Pérez">

  <label>Nombre de la Empresa</label>
  <input type="text" id="nombreEmpresa" placeholder="Ej: Empresa XYZ">
</div>
```

### 2. Fechas de Ingreso y Salida
```html
<div class="form-section">
  <h2>Selección de Fechas</h2>
  <label>Fecha de Ingreso</label>
  <input type="date" id="fechaInicio">

  <label>Fecha de Salida</label>
  <input type="date" id="fechaFin">
</div>
```

### 3. Datos Laborales y Período
```html
<div class="form-section">
  <h2>Datos Laborales</h2>
  <label>Salario Mensual (RD$)</label>
  <input type="number" id="salario" placeholder="Ej: 25000">
</div>

<div class="form-section">
  <h2>Seleccione el período</h2>
  <div class="radio-group">
    <input type="radio" id="mensual" name="periodo" value="mensual">
    <label for="mensual">Mensual</label>
  </div>
  <!-- Opciones adicionales: Quincenal, Semanal, Diario -->
</div>
```

### 4. Tabla de Salarios y Comisiones
Se implementó una tabla para mostrar el desglose mensual de los últimos 12 meses:
```html
<div class="form-section">
  <h2>Salarios, Comisiones y Totales</h2>
  <table>
    <thead>
      <tr>
        <th>Mes</th>
        <th>Salarios</th>
        <th>Comisiones</th>
        <th>Totales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>0.00</td>
        <td>0.00</td>
        <td>0.00</td>
      </tr>
      <!-- Filas del 2 al 12 -->
    </tbody>
  </table>
</div>
```

---

# Lógica del Cálculo (JavaScript)

La aplicación toma los datos ingresados y realiza los cálculos de liquidación y proporciones usando JavaScript.

```javascript
function calcularPrestaciones() {
  const salario = parseFloat(document.getElementById('salario').value) || 0;
  const fechaInicio = new Date(document.getElementById('fechaInicio').value);
  const fechaFin = new Date(document.getElementById('fechaFin').value);
  
  if (!salario || fechaInicio >= fechaFin) {
    document.getElementById('resultado').innerHTML = '<p style="color: red;">Datos incorrectos</p>';
    return;
  }
  
  // Lógica base de meses trabajados
  const mesesTrabajados = Math.ceil((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24 * 30));
  const liquidacion = (salario * mesesTrabajados) / 12;
  const vacaciones = liquidacion;
  const salarioProporcional = (salario / 30) * (mesesTrabajados * 30);
  
  // Renderizado del resultado
  document.getElementById('resultado').innerHTML = `
    <h2>Resultados:</h2>
    <p><strong>Liquidación:</strong> RD$ ${liquidacion.toFixed(2)}</p>
    <p><strong>Vacaciones:</strong> RD$ ${vacaciones.toFixed(2)}</p>
    <p><strong>Salario Proporcional:</strong> RD$ ${salarioProporcional.toFixed(2)}</p>
  `;
}
```

---

# Código Fuente Completo (CSS)

A continuación, el archivo completo de estilos que da vida a este componente:

<details>
<summary>Ver código CSS completo</summary>

```css
:root {
  --primary-color: #1D428A;
  --secondary-color: #28a745;
  --background-color: #f4f4f4;
  --text-color: #333;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body {
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  padding: 20px;
}

.container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;
}

h1, .form-section h2 {
  color: var(--primary-color);
}

label {
  font-weight: bold;
  color: var(--text-color);
  display: block;
  margin-bottom: 5px;
}

input[type="text"], input[type="number"], input[type="date"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
}

button {
  width: 100%;
  padding: 12px;
  background: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background: #218838;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

table th {
  background-color: var(--primary-color);
  color: white;
  padding: 10px;
}

table td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
}

table tr:nth-child(even) {
  background-color: #f9f9f9;
}
```
</details>

> [!TIP]
> **Recomendación:** Puedes integrar esta herramienta fácilmente en cualquier portal corporativo o gubernamental gracias a su estructura modular en HTML, CSS puro y JavaScript vainilla, sin depender de librerías externas pesadas.