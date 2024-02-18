const favoritModel = require('../model/favoritModel')

const likeProduct = (req, res) => {
    const {product, id} =req.body
    favoritModel.addFav({
        product: product,
        userIduser: id
    })
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

module.exports = {likeProduct}