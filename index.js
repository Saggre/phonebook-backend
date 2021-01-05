const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

morgan.token('body', function (req, res) {
    return JSON.stringify(req.body);
});

app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let persons = [
    {
        'name': 'Arto Hellas',
        'number': '040-123456',
        'id': 1
    },
    {
        'name': 'Ada Lovelace',
        'number': '39-44-5323523',
        'id': 2
    },
    {
        'name': 'Dan Abramov',
        'number': '12-43-234345',
        'id': 3
    },
    {
        'name': 'Mary Poppendieck',
        'number': '39-23-6423122',
        'id': 4
    }
];

/**
 * Generate a random id
 * @returns Number
 */
const generateId = () => Math.floor(Math.random() * (~0 >>> 1)) + 1;

app.get('/info', (req, res) => {
    res.write(`Phonebook has info for ${persons.length} people\n\n`);
    res.write(new Date().toString());
    res.end();
});

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.post('/api/persons', (req, res) => {
    const body = req.body;

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'content missing'
        });
    }

    if (persons.filter(person => person.name === body.name).length > 0) {
        return res.status(409).json({
            error: 'name must be unique'
        });
    }

    const person = {
        'name': body.name,
        'number': body.number,
        'id': generateId()
    };

    persons = [...persons, person];

    res.json(person);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);
    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(note => note.id !== id);
    res.status(204).end();
});

app.use((req, res) => {
    res.status(404).send({error: 'unknown endpoint'});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});