const { Pool } = require('pg');

const pool = new Pool({
  user: 'contactsOwner',
  host: 'db',
  port: 5432,
  database: 'contacts',
  password: '*****',
});

const getContacts = async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM contacts');
    res.status(200).send(data.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const addContact = async (req, res) => {
  try {
    const { nom, prenom, portable, domicile, email, rue, code_postal, ville } =
      req.body;
    const values = [
      nom,
      prenom,
      portable,
      domicile,
      email,
      rue,
      code_postal,
      ville,
    ];
    const query = `
    INSERT INTO contacts 
    (nom, prenom, portable, domicile, email, rue, code_postal, ville) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
`;
    const result = await pool.query(query, values);
    const insertedRow = result.rows[0];
    res.status(200).send(insertedRow);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const updateContact = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updates = Object.keys(req.body).map(
      (key, idx) => `${key} = $${idx + 1}`
    );

    const updateString = updates.join(', ');
    const query = `UPDATE contacts SET ${updateString} WHERE id = ${id} RETURNING *;`;
    const values = [...Object.values(req.body)];
    const result = await pool.query(query, values);

    res.status(200).send(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const deleteContact = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await pool.query(
      'DELETE FROM contacts WHERE id = $1 RETURNING*',
      [id]
    );
    const deletedRow = result.rows[0];
    if (deletedRow) {
      res.status(200).json(deletedRow);
    } else {
      res.status(404).send('Contact not found');
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = { getContacts, addContact, deleteContact, updateContact };
