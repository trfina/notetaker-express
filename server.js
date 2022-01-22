const store = require('./Develop/data/db.json');
const { notes } = require('./Develop/data/db.json');
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
    console.log('req query from get', req.query);
    // console.log(req.query)
    res.json(store.notes);
    // console.log('store notes', store.notes);
});


// console.log(store.notes);

app.post('/api/notes', (req, res) => {
    // set id base on what the next index of the array will be
    req.body.id = notes.length.toString();

    //add note to json file and notes array in this function
    const note = createNewNote(req.body, notes);

    res.json(notes);
});

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './Develop/data/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    // return finished code to post route for response
    return note;
};

// get index.html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));    
});

//get notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/Develop/public/notes.html'));    
});

app.listen(PORT, () => {
    console.log('API server is now on port', `${PORT}`, '!');
});

