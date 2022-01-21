const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/api/notes', (req,res) => {
    res.json(notes);
});

app.listen(PORT, () => {
    console.log('API server is now on port ${PORT}!');
});

const {notes} = require('./develop/data/notes');