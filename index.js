let express =require("express")
const { connection } = require("./db")
const { taskRouter } = require("./Route/task.route")
const { subtaskRouter } = require("./Route/subtask.route")
let cors=require("cors")

let app=express()
app.use(cors())
require("dotenv").config()
app.use(express.json())

app.use("/task",taskRouter)
app.use("subtask",subtaskRouter)

app.listen(process.env.port,async()=>{
    try{
await connection
console.log("Connected to DB")
    }catch(err){
console.log(err)
console.log("not connected to DB")
    }
    console.log("server is running")
} 
  
)