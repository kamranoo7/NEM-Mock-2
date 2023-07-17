let express=require("express")
const { TaskModel } = require("../Model/task.model")
let taskRouter=express.Router()

//Create
taskRouter.post("/create",async(req,res)=>{
    try{
let task=new TaskModel(req.body)
await task.save()
res.status(200).json({msg:"New task has been Added"})
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

//Read
taskRouter.get("/",async(req,res)=>{
    try{
let task=await TaskModel.find()
res.send(task)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
//Update
taskRouter.patch("/update/:userID",async(req,res)=>{
    let {userID}=req.params
    let payload=req.body
    try{
await TaskModel.findByIdAndUpdate({_id:userID},payload)

res.status(200).json({msg:"data has been updated"})

}
    catch(err){
        res.status(400).json({"msg":err.message})
    }
})
//Delete
taskRouter.delete("/delete/:userID",async(req,res)=>{
    let {userID}=req.params
    
    try{
await TaskModel.findByIdAndDelete({_id:userID})

res.status(200).json({msg:"data has been deleted"})

}
    catch(err){
        res.status(400).json({"msg":err.message})
    }
})




module.exports={
    taskRouter
}