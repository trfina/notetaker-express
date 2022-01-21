const express = require('express');
const app = express();

app.get('/api/notes', (req,res) => {
    res.json(notes);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});

const {notes} = require('./develop/data/notes');