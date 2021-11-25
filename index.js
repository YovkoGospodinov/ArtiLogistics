var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5012));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index_bg');
});

app.get('/en', function(request, response) {
    response.render('pages/index_en');
});

app.get('/contacts-bg', function(request, response) {
    response.render('pages/contacts_bg');
});

app.get('/contacts-en', function(request, response) {
    response.render('pages/contacts_en');
});

app.get('/services-bg', function(request, response) {
    response.render('pages/services_bg');
});

app.get('/services-en', function(request, response) {
    response.render('pages/services_en');
});

app.get('/energy-projects-bg', function(request, response) {
    response.render('pages/energy_projects_bg');
});

app.get('/energy-projects-en', function(request, response) {
    response.render('pages/energy_projects_en');
});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});