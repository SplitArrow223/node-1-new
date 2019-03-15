const products = require('../products.json')

const getProduct = (req, res) => {
   const {id} = req.params
   const item = products.find((val) => val.id === id * 1)
   if(!item){
      return res.status(500).send('item doesnt exist')
   }
   res.status(200).send(item)
}
module.exports = getProduct

