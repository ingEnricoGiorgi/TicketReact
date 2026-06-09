const express = require('express');
const db = require('./config/db');

const app = express();

db.query('SELECT 1', (err) => {

    if (err) {
        console.error('Errore MySQL:', err);
    } else {
        console.log('MySQL connesso');
    }
});

app.get('/', (req, res) => {
    res.send('Backend OK');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});