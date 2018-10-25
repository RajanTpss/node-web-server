const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('View Engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (Text) => {
    return Text.toUpperCase();
});

/**
 * @res represent response
 * @req represents request
 */
app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.get('/home', (req, res) => {

    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'
    });

});

app.get('/about', (req, res) => {

    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.get('/helloJson', (req, res) => {

    res.send({
        name: "Rajan Goyal",
        likes: [
            "Gaming",
            "Codding"
        ]
    });

});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    });
});

app.listen(port, () => {
    console.log(`App is listen on ${port}`);
});