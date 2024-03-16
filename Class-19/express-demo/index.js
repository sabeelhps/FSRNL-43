const express = require('express');

const app = express();

// app.use((req, res) => {
//     console.log('YOU MADE A REQUEST..');
//     res.send("YOU MADE A HTTP REQUEST!");
// });

app.get('/hello', (req, res) => {
    res.send('<h1>Hello from Express Server!</h1>');
});

app.get('/greet', (req, res) => {
    const { name = 'Anonymous' } = req.query;
    res.send(`Hello from ${name}`); 
});

app.get('/products/:productName', (req, res) => {
    // console.log(req.params);
    const { productName } = req.params;
    res.send(`You are looking for product : ${productName}`); 
});

app.post('/products', (req, res) => {
    res.send("This is a post request");
})

// Routing ---> Different request , you should get a different response.



app.listen(3000, () => {
    console.log('server started on port 3000');
});








