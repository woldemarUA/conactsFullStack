const express = require('express');
const path = require('path');

const PORT = 3000;
console.log(__dirname);
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Proxy route
app.get('/api/contacts', async (req, res) => {
  try {
    // if need to make update/delete then the code below should be reworked to accept the id parameterd
    const apiResponse = await fetch('http://api:3001/contacts');

    const data = await apiResponse.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/contacts', async (req, res) => {
  try {
    const apiResponse = await fetch('http://api:3001/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body), // Forward the already stringified request body  body: JSON.stringify(obj),
    });

    res.status(apiResponse.status);

    if (apiResponse.headers.get('content-type')?.includes('application/json')) {
      const data = await apiResponse.json();
      res.json(data);
    } else {
      res.end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
