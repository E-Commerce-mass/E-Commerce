const {addToblock,getBlocked,removefromblock} = require('../model/blockModel.js')

const addBlock = async (req,res) => {
    const x= await addToblock(req.body)
    try{
        res.send(x)
    }
    catch(err){
   console.log(err);
    }
}

const getallblocked= async (req,res)=>{
    const x= await getBlocked()
    try{
        res.send(x)
    }
    catch(err){
   console.log(err);
    }
}

const deleteFromblock= async (req,res)=>{
    const x= await removefromblock(req.params.id)
    try{
        res.send("deleted")
    }
    catch(err){
   console.log(err);
    }
}

module.exports={addBlock,getallblocked,deleteFromblock}