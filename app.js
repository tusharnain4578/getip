const express = require("express")

const app = express()


app.get("/", (req, res)=>{
res.send(`your ip is ${req.ip}`)
})


app.listen(3000 || process.env.PORT, ()=>console.log("Express server running at port 3000."))
