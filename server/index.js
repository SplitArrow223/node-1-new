const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const app = express();
const PORT = 3213; //3000 - 8888

app.get('/api/products', getProducts.getProducts );
app.get('/api/product/:id', getProduct);


app.listen(PORT, () => console.log(`listen linda on ${PORT}`));













