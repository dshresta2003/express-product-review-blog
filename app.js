const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let reviews = [
    { title: "Amazing Phone", body: "This phone has excellent battery life and a stunning display." },
    { title: "Great Laptop", body: "This laptop is perfect for developers with its powerful specs." }
];

app.get('/', (req, res) => {
    res.render('index', { reviews });
});

app.get('/new', (req, res) => {
    res.render('newReview');
});

app.post('/reviews', (req, res) => {
    const { title, body } = req.body;
    reviews.push({ title, body });
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
