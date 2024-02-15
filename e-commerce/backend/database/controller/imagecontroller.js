const image=require("../model/imagesModel")

async function getimage(req,res){
    const ress = await image.getOneimage(req.params.productIdProducts)
  return   res.json(ress)

}

module.exports={getimage}