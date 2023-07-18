const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello'));
app.get('/about', (req, res) => res.send('about'));
app.get('/login', (req, res) => res.send('login'));
app.get('/api/v1', (req, res) => res.send({ message: 'api version 1' }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('-- listening from --', port);
});