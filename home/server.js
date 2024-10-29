// home/server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 9002;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta para mostrar la vista principal (será /)
app.get('/', (req, res) => {
    res.render('inicio'); 
});

// Iniciar el servicio de inicio
app.listen(port, () => {
    console.log(`Servicio de inicio escuchando en http://localhost:${port}`);
});
