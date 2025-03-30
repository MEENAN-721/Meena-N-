const mongoose=require('mongoose')

const userScheme=mongoose.Schema({
    user:(type:String,require:true),
    email:(type:String,require:true),
    password:(type:String,require:true)
})

module.exports=mongoose.model('User',UserSchema)