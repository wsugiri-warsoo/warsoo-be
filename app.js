const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use('/', require('./src/routes/view'));
app.use('/api', require('./src/routes/api'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('-- listening from --', port);
});