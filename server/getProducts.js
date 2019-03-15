const products = require('../products.json')


module.exports = {
 getProducts: (req, res) => {
   const {price} = req.query  
   if(price){
     let product = products.filter(e => e.price >= price * 1)
     return res.status(200).send(product)
   }
   res.status(200).send(products)
 }
}
    