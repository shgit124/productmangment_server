const mongoose = require("mongoose")

mongoose.connect(process.env.CONNECTION_STRING).then((res)=>{
console.log("server connected with mongo db")

}).catch(err=>{
    console.log(err)
})