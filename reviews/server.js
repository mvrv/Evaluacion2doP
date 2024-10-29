// server.js
const express = require('express');
const db = require('./FirebaseConfig');
const app = express();
const port = 9004; // Puerto específico para el servicio de reviews

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Ruta para obtener las reseñas y mostrarlas
app.get('/', async (req, res) => {
    try {
        const snapshot = await db.collection('reviews').get();
        const reviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.render('reviews', { reviews });
    } catch (error) {
        console.error('Error al obtener las reseñas:', error.message);
        res.status(500).send('Error al obtener las reseñas');
    }
});

// Iniciar el servicio de reviews
app.listen(port, () => {
    console.log(`Servicio de reviews escuchando en http://localhost:${port}`);
});
