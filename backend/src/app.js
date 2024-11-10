const express = require('express');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(cors());
app.use(express.json());

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'movies.db'
    },
    useNullAsDefault: true
});

app.get('/movies', async (req, res) => {
    const movies = await db('movies').select('*');
    res.status(200).json(movies);
});

app.get('/movies/:movieId', async (req, res) => {
    const movies = await db('movies').select('*'). where({ id: req.params.movieId }).first();
    res.json(movies);
});

app.post('/movies', async (req, res) => {
    await db('movies').insert({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year
    });

    res.status(201).json({});
});

app.put('/movies/:title', async (req, res) => {
    await db('movies').where({
        title: req.params.title
    }).update({
        title: req.body.title,
        description: req.body.population,
        year: req.body.year
    });

    res.status(201).json({});
});

app.delete('/movies/:title', async (req, res) => {
    const movieTitle = req.params.title;
    await db('movies').del().where({title: movieTitle});

    res.status(204).json({});
});

app.listen(8080, () => {
    console.log('El backend ha iniciado en el puerto 8080');
});