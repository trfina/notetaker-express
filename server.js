const store = require('./Develop/data/db.json');
const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static(__dirname + '/Develop/public'));
console.log(__dirname);
// get all notes
app.get('/api/notes', (req,res) => {
    console.log(req.query);
    // console.log(req.query)
    res.json(store.notes);
});

// console.log(store.notes);

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    saveNote(req.body, storeNotes);
});

function saveNote(input, presentDatabase ) {

}  

// function createNewNote(body, notesArray) {
//     console.log(body);

//     return body;
// }

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));    
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/Develop/public/notes.html'));    
});

app.listen(PORT, () => {
    console.log('API server is now on port', `${PORT}`, '!');
});

