const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());
app.post('/api/tickets', (req, res) => {

    const { title, category, description } = req.body;
    if (!title || !category || !description) {
    return res.status(400).json({
        success: false,
        message: 'Tutti i campi sono obbligatori'
    });
}

    db.query(
        'INSERT INTO tickets (title, category, description) VALUES (?, ?, ?)',
        [title, category, description],
        async (err, result) => {

            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: false
                });
            }

            //axios start
            //webhook n8n
            try {

                    await axios.post(
                        'http://localhost:5678/webhook-test/ticket',
                        {
                            id: result.insertId,
                            title,
                            category,
                            description
                        }
                    );

                } catch (e) {
                console.error('Errore webhook n8n:', e.message);
            }
            //axios end

            res.json({
                success: true,
                id: result.insertId
            });
        }
    );
});

app.get('/', (req, res) => {
    res.send('Backend OK');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});