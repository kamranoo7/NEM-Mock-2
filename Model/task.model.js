let mongoose=require("mongoose")
let taskSchema=mongoose.Schema({
    title:String,
    description:String,
    status:String,
    subtask:String
})

let TaskModel=mongoose.model("task",taskSchema)
module.exports={
    TaskModel
}