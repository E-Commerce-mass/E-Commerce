const product=require("../model/productModel")

async function getall(req,res){
   const ress= await product.getAllproducts()
   return res.json(ress)
}

module.exports={getall}
