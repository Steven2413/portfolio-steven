---
layout: '../../layouts/Post.astro'
title: 'Remote Work Tips for Developers: Thrive From Anywhere'
h1: 'Calculo de Prestacione'
date: 03.03.2024
custom_category: 'blog'
hreflang_en: '/blog/remote-work-tips/'
hreflang_ru: '/ru/blog/remote-work-tips/'

description: 'Master the art of remote development with these proven strategies for productivity and work-life balance.'
---
# Introducción
En esta sección presento una aplicación web para el cálculo de prestaciones laborales. 
El sistema permite ingresar datos del empleado, fechas de trabajo y salario, generando automáticamente los resultados correspondientes.
# Style o CSS

Para este proyecto desarrollé una interfaz limpia y moderna utilizando CSS personalizado, enfocado en la legibilidad, organización del contenido y una experiencia de usuario intuitiva.

Se implementó el uso de variables CSS (:root), lo que permite mantener consistencia visual y facilitar la escalabilidad del diseño.

Principales características del diseño:

- Uso de una paleta de colores corporativa (azul y verde)
- Diseño centrado y responsive
- Componentes reutilizables como .container y .form-section
- Mejora de la experiencia visual con sombras y bordes redondeados
- Tablas estilizadas para mejor lectura de datos
- Botones interactivos con efecto hover

## Código CSS Implementado


```css
Style:
 <style>
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

    header {
      margin-bottom: 20px; /* Margen inferior para separar el header */
      text-align: center; /* Centrar el logo */
    }

    header img {
      width: 950px;
      height: auto;
    }

    h1 {
      font-size: 20px;
      color: var(--primary-color);
      text-align: left;
    }

    .form-section {
      margin: 20px 0;
    }

    .form-section h2 {
      color: var(--primary-color);
      font-size: 18px;
      margin-bottom: 10px;
    }

    label {
      font-weight: bold;
      color: var(--text-color);
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      margin-bottom: 15px;
    }

    .radio-group {
      margin-bottom: 15px;
    }

    .radio-group label {
      font-weight: normal;
      margin-left: 5px;
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
    }

    button:hover {
      background: #218838;
    }

    #resultado {
      background: #f9f9f9;
      padding: 15px;
      border-radius: 5px;
      border: 1px solid #ddd;
      margin-top: 20px;
    }

    #resultado h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }

    table th, table td {
      padding: 10px;
      text-align: center;
      border: 1px solid #ccc;
    }

    table th {
      background-color: var(--primary-color);
      color: white;
    }

    table tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    table tr:hover {
      background-color: #f1f1f1;
    }

    footer {
      margin-top: 20px;
      font-size: 14px;
      color: #1D428A;
      text-align: center;
      background: #cacfd2;
    }

    footer a {
      color: var(--primary-color);
      text-decoration: none;
    }

    .footer-info {
      margin-top: 10px;
      font-size: 12px;
      color: #1D428A;
      background: #cacfd2;
    }
</style>
```
## Decisiones Técnicas

Durante el desarrollo del diseño, tomé en cuenta los siguientes aspectos:

🔹 Uso de variables CSS

Permiten mantener consistencia en colores y facilitan cambios futuros sin modificar múltiples líneas de código.

🔹 Diseño centrado (Flexbox)

Se utilizó display: flex para centrar el contenido vertical y horizontalmente, mejorando la presentación general.

🔹 Componentización visual

Clases como .form-section y .container ayudan a reutilizar estilos y mantener el código organizado.

🔹 Experiencia de usuario

Se añadieron efectos como hover en botones y filas de tablas para mejorar la interacción.



## Seccion De Datos Del Solicitante

```HTML
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

## Seccion De Fecha De Ingreso Y Salida

```html
 <div class="form-section">
      <h2>Selección de Fechas</h2>

      <label>Fecha de Ingreso</label>
      <input type="date" id="fechaInicio">

      <label>Fecha de Salida</label>
      <input type="date" id="fechaFin">

</div>
```

## Seccion De Datos Laborales

```HTML
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

      <div class="radio-group">
        <input type="radio" id="quincenal" name="periodo" value="quincenal">
        <label for="quincenal">Quincenal</label>
      </div>

      <div class="radio-group">
        <input type="radio" id="semanal" name="periodo" value="semanal">
        <label for="semanal">Semanal</label>
      </div>

      <div class="radio-group">
        <input type="radio" id="diario" name="periodo" value="diario">
        <label for="diario">Diario</label>
      </div>

  </div>

    <div class="form-section">
      <h2>Seleccione el tipo de cálculo</h2>
      <div class="radio-group">
        <input type="radio" id="ordinario" name="tipoCalculo" value="ordinario">
        <label for="ordinario">Ordinario</label>
      </div>

      <div class="radio-group">
        <input type="radio" id="intermitente" name="tipoCalculo" value="intermitente">
        <label for="intermitente">Intermitente</label>
      </div>

      <p><em>Jornada ordinaria es la ejecutada por trabajadores dentro de un período que no exceda de ocho (8) horas al día ni de cuarenta y cuatro (44) a la semana.</em></p>

    </div>
```

## Tabla De Salarios, Comisiones y Totales

```Html
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

          <tr>
            <td>2</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>3</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>4</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>5</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>6</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>7</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>8</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>9</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>10</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>11</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

          <tr>
            <td>12</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>

        </tbody>
      </table>
    </div>

    <button onclick="calcularPrestaciones()">Calcular</button>

    <div id="resultado"></div>
```

## Seccion Del Footer

```HTML
<footer>
      <p>© 2025 Ministerio de Trabajo. <a href="#">Visita el sitio oficial</a></p>

      <div class="footer-info">

        <p>Ave. Enrique Jiménez Moya # 5, Centro de los Héroes, La Feria, Santo Domingo, Distrito Nacional, R.D.</p>

        <p>Tel.: 809 535-44041 | info@mt.gob.do</p>

        <p>Copyright © 2017 Ministerio de Trabajo, Todos los derechos reservados v2.0</p>

      </div>
    </footer>
```
## Script De Calculos

```javascript
 <script>
    function calcularPrestaciones() {
      const salario = parseFloat(document.getElementById('salario').value) || 0;
      const fechaInicio = new Date(document.getElementById('fechaInicio').value);
      const fechaFin = new Date(document.getElementById('fechaFin').value);
      
      if (!salario || fechaInicio >= fechaFin) {
        document.getElementById('resultado').innerHTML = '<p style="color: red;">Datos incorrectos</p>';
        return;
      }
      
      const mesesTrabajados = Math.ceil((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24 * 30));
      const liquidacion = (salario * mesesTrabajados) / 12;
      const vacaciones = liquidacion;
      const salarioProporcional = (salario / 30) * (mesesTrabajados * 30);
      
      document.getElementById('resultado').innerHTML = `
        <h2>Resultados:</h2>
        <p><strong>Liquidación:</strong> RD$ ${liquidacion.toFixed(2)}</p>
        <p><strong>Vacaciones:</strong> RD$ ${vacaciones.toFixed(2)}</p>
        <p><strong>Salario Proporcional:</strong> RD$ ${salarioProporcional.toFixed(2)}</p>
      `;
    }
  </script>
```

Remote work is a skill. Like coding, it improves with practice and intentional effort. Be patient with yourself as you find your rhythm.

Remember: The best remote setup is the one that works for YOU.

---

*What are your favorite remote work tips? Share them below!* 