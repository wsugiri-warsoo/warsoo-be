const express = require('express');
const app = express();

app.use('/', require('./src/routes/view'));
app.use('/api', require('./src/routes/api'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('-- listening from --', port);
});