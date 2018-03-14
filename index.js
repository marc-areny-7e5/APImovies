const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.render('index'))

app.get('/api/', (req, res) => {
    const searchTerm = req.query.s;
    if(searchTerm){
        if(searchTerm.length > 2){
            res.json(getMovie(searchTerm));
        }else{
            res.status(400).send('Search term is too short, use three letters or more');
        }
    }else{
        res.status(400).send('Missing search term, use ?s=[input]');
    }
})

function getMovie(searchTerm){
    if('batman'.includes(searchTerm)) return batman;
    return {Search: []}
}

const batman = {
    Search: [
        {imdbID: 'tt0096895', Title: 'Batman', Year: '1989', Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_.jpg'}
    ]
}

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`))