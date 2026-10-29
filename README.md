# Página "Nosotros" – Equipo de Trabajo

Trabajo práctico de la Clase 3 de JavaScript · Diplomatura en Desarrollo Fullstack con React, NodeJS y Herramientas de IA.

## Descripción

Página de una sola vista (`index.html`) con navbar, sección "Nosotros" y footer.
Los miembros del equipo no están escritos en el HTML: se cargan desde `data/miembros.json`
con `fetch` + `await` y se muestran en cards de Bootstrap generadas con JavaScript.

## Tecnologías

- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript (fetch, async/await, manipulación del DOM)

## Estructura

├── index.html
├── data/miembros.json
├── img/
├── css/style.css
└── js/app.js

## Cómo ejecutarlo

`fetch` no funciona abriendo el archivo con doble clic (`file://`), así que hay que usar un servidor local:

1. Abrir la carpeta en VS Code.
2. Instalar la extensión **Live Server**.
3. Clic derecho en `index.html` → **Open with Live Server**.

## Autor

Nahuel Solveira
