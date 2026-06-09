const express = require('express');
const db = require('./config/db');

const app = express();

app.use(express.json());

app.post('/api/tickets', (req, res) => {

    const { title, category, description } = req.body;

    db.query(
        'INSERT INTO tickets (title, category, description) VALUES (?, ?, ?)',
        [title, category, description],
        (err, result) => {

            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: false
                });
            }

            res.json({
                success: true,
                id: result.insertId
            });
        }
    );
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});