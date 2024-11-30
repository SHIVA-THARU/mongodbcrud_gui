const mongoose=require('mongoose');

const brandSchema=new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    description: String
});

module.exports=mongoose.model('Brand',brandSchema);