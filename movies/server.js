// server.js
const express = require('express');
const db = require('./firebaseconfig');
const app = express();
const port = 9003; // Puerto específico para el servicio de movies

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Ruta para mostrar la lista de películas
app.get('/movies', async (req, res) => {
    try {
        const snapshot = await db.collection('movies').get();
        const movies = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.render('movies', { movies });
    } catch (error) {
        console.error('Error al obtener las películas:', error.message);
        res.status(500).send('Error al obtener las películas');
    }
});

// Iniciar el servicio de movies
app.listen(port, () => {
    console.log(`Servicio de movies escuchando en http://localhost:${port}`);
});
