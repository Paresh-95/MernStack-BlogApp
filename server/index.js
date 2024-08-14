const express = require("express")
const app = express();
// const cors = require("cors")


// app.use(cors());

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const blogRoutes = require("./routes/blogRoute") 

app.use("/api/v1",blogRoutes);

app.listen(PORT,(req,res)=>{
    console.log(`Port Started at Port ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("<h1>Home Page Blog Application</h1>")
})

const dbConnect = require("./config/database")
dbConnect();
