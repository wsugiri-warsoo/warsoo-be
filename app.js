const express = require('express');
const app = express();

app.use('/', require('./src/routes/view'));
app.use('/api', require('./src/routes/api'));
// app.get('/about', (req, res) => res.send('about'));
// app.get('/login', (req, res) => res.send('login'));
// app.get('/api/v1', (req, res) => res.send({ message: 'api version 1' }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('-- listening from --', port);
});