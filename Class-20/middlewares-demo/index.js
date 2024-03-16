const express = require('express');
const app = express();

const verify1 = (req, res, next) => {
    const { apiKey } = req.query;
    if (apiKey !== 'orange') {
        return res.send('Please provide the correct API Key!');
    }
    return next();
}

const verify2 = (req, res, next) => {
    const { apiSecret } = req.query;
    if (apiSecret !== '1234') {
        return res.send('Please provide the correct Secret Key!');
    }
    return next();
}

app.use((req, res, next) => {
    console.log('Inside my first middleware');
    req.username = 'max'
    next();
    console.log('Inside my first middleware after calling next');
});

app.use((req, res, next) => {
    console.log('Inside my second middleware');
    next();
    console.log('Inside my second middleware after calling next.')
});

app.get('/', (req, res, next) => {
    const { username } = req;
    console.log('Inside my home route')
    res.send(`Hello from ${username}`);
});

app.get('/secret', verify1,verify2, (req, res) => {
    res.send('Sometime I wear the headphones in public so that i dont have to talk to anyone!');
})

app.listen(3000, () => {
    console.log('server running at port 3000');
});