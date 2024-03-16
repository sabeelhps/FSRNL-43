const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb' }));

app.get('/users', (req, res) => {
    console.log(req.query)
    res.send('You made a GET Request');
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('You made a POST Request');
});

app.listen(8000, () => {
    console.log('server running on port 8000');
})

