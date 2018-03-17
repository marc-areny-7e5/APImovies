const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
const repo = require('./repository/movies.js');

app.get('/', (req, res) => res.render('index'));

app.get('/api/', (req, res) => {
    const searchTerm = req.query.s;
    if(searchTerm){
        if(searchTerm.length > 2){
            res.json(repo.getMovies(searchTerm));
        }else{
            res.status(400).send('Search term is too short, use three letters or more');
        }
    }else{
        res.status(400).send('Missing search term, use ?s=[input]');
    }
});

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`));

module.exports = app;