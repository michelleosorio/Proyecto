const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

const indexRoutes = require('./routes/index');
// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use(indexRoutes);
// static files

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});