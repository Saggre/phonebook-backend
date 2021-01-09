require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const errorHandler = require('./middleware/errorHandler');
const Person = require('./models/person');

morgan.token('body', (req) => JSON.stringify(req.body));

app.use(express.static('build'));
app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

app.get('/info', (req, res, next) => {
  Person.find({}).then((persons) => {
    res.write(`Phonebook has info for ${persons.length} people\n\n`);
    res.write(new Date().toString());
    res.end();
  }).catch((error) => next(error));
});

app.get('/api/persons', (req, res, next) => {
  Person.find({}).then((persons) => {
    res.json(persons.map((person) => person.toJSON()));
  }).catch((error) => next(error));
});

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (!person) {
        res.status(404).end();
      }

      return person;
    })
    .then((person) => person.toJSON())
    .then((personJson) => {
      res.json(personJson);
    })
    .catch((error) => next(error));
});

app.post('/api/persons', (req, res, next) => {
  const { body } = req;

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save()
    .then((p) => p.toJSON())
    .then((personJson) => {
      res.json(personJson);
    }).catch((error) => next(error));
});

app.put('/api/persons/:id', (req, res, next) => {
  const { body } = req;

  const person = {
    name: body.name,
    number: body.number,
  };

  Person.findByIdAndUpdate(req.params.id, person, {
    new: true,
    runValidators: true,
    context: 'query',
  })
    .then((p) => {
      res.json(p);
    })
    .catch((error) => next(error));
});

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

app.use((req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
