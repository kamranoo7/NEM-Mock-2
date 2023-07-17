let mongoose=require("mongoose")
let subtaskSchema=mongoose.Schema({
    title:String,
   isCompleted:Boolean
})

let SubTaskModel=mongoose.model("subtask",subtaskSchema)
module.exports={
    SubTaskModel
}