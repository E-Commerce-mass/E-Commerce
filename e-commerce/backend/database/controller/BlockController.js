const {addToblock} = require('../model/blockModel.js')

const addBlock = async (req,res) => {
    const x= await addToblock(req.body)
    try{
        res.send(x)
    }
    catch(err){
   console.log(err);
    }
}


module.exports={addBlock}