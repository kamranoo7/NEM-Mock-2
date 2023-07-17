let express=require("express")
const { TaskModel } = require("../Model/task.model")
const { SubTaskModel } = require("../Model/subtask.model")
let subtaskRouter=express.Router()

//Create
subtaskRouter.post("/create",async(req,res)=>{
    try{
let task=new SubTaskModel(req.body)
await task.save()
res.status(200).json({msg:"New task has been Added"})
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

//Read
subtaskRouter.get("/",async(req,res)=>{
    try{
let task=await SubTaskModel.find()
res.send(task)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
//Update
subtaskRouter.patch("/update/:userID",async(req,res)=>{
    let {userID}=req.params
    let payload=req.body
    try{
await SubTaskModel.findByIdAndUpdate({_id:userID},payload)

res.status(200).json({msg:"data has been updated"})

}
    catch(err){
        res.status(400).json({"msg":err.message})
    }
})
//Delete
subtaskRouter.delete("/delete/:userID",async(req,res)=>{
    let {userID}=req.params
    
    try{
await SubTaskModel.findByIdAndDelete({_id:userID})

res.status(200).json({msg:"data has been deleted"})

}
    catch(err){
        res.status(400).json({"msg":err.message})
    }
})




module.exports={
    subtaskRouter
}