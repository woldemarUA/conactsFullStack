const express = require('express');
const cors = require('cors');

const {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} = require('./db');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello');
});
app.get('/contacts', getContacts);

app.post('/contacts', addContact);

app.put('/contacts/:id', updateContact);

app.delete('/contacts/:id', deleteContact);

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
