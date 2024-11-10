const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const movies =  [
    {
        "title": "Batman",
        "description": "Batman description",
        "year": 2003
    },
    {
        "title": "Spiderman",
        "description": "Spiderman description",
        "year": 1998
    },
    {
        "title": "Superman",
        "description": "Superman description",
        "year": 1980
    }
]

app.get('/movies', (req, res) => {
    res.json(movies);
});

app.get('/movies/:title', (req, res) => {
    // Buscar la pelicula y devolverla en formato JSON
});

app.patch('/movies/:title', (req, res) => {

});

app.listen(8080, () => {
    console.log('El backend ha iniciado en el puerto 8080');
});