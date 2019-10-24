const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const punchesRoutes = require('./routes/punches');

const app = express();

app.use(bodyParser.json());

usersRoutes(app);
punchesRoutes(app);

app.listen(3000,()=> {
    console.log('Server is up')
});