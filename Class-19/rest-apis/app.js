const express = require('express');
const { v4 : uuid } = require('uuid');
const app = express();

app.use(express.json());

let PRODUCTS_DATA = [
    {
        id: uuid(),
        title: "Iphone",
        image: "Image Url 1"
    },
    {
        id: uuid(),
        title: "Apple Watch",
        image: "Image Url 2"
    },
    {
        id: uuid(),
        title: "Macbook Air",
        image: "Image Url 3"
    },
    {
        id: uuid(),
        title: "Macbook Mini",
        image: "Image Url 4"
    }
]


// Get all products
app.get('/products', (req, res) => {
    res.json(PRODUCTS_DATA);
});


// Create Product
app.post('/products', (req, res) => {
    const { title, image } = req.body;
    PRODUCTS_DATA.push({  id: uuid(), title, image});
    res.json({message:'product created successfully.'});
});

// Show a product
app.get('/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = PRODUCTS_DATA.find((product) => product.id === productId);
    res.status(200).json(product);
});

app.patch('/products/:productId', (req, res) => {
    const { title, image } = req.body;
    const { productId } = req.params;
    const product = PRODUCTS_DATA.find((product) => product.id === productId);
    product.title = title;
    product.image = image;
    res.json({ message: 'product updated successfully.' });
});


app.delete('/products/:productId', (req, res) => {
    const { productId } = req.params;
    const newProductList = PRODUCTS_DATA.filter((product) => product.id !== productId);
    PRODUCTS_DATA = newProductList;
    res.json({ message: 'Product Deleted Successfully' });
});


app.listen(3000, () => {
    console.log('server started on port 3000');
})


// For more info please read
// https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/#document-your-api-properly


