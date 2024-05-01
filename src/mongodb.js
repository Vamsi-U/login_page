const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignUpTutorial")
.then(()=>{
    console.log("mongodb connected");

})
.catch(()=>{
    console.log("failed to connect");
})
const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        requried:false

    }
})

const collection=new mongoose.model("Collection",LogInSchema)

module.exports=collection