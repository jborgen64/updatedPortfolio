// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser')

const app = express();

//Set port 
const PORT = process.env.PORT || 3000;

//Data parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Router
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//allows bringing in CSS & JS files to html
app.use(express.static(path.join(__dirname, 'public')));

//===============================================================

//GET
app.get('/api/', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) throw err;
    res.send(JSON.parse(data));
});
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });