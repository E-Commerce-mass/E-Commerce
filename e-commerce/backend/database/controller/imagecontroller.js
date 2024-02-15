const image=require("../model/imagesModel")

async function getimage(req,res){
    const ress = await image.getOneimage(req.params.id)
  return   res.json(ress)

}

module.exports={getimage}