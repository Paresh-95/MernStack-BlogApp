const Blog = require("../models/PostModel");
const Comment = require("../models/commentModel")
const Like = require("../models/likeModel");
const bcrypt = require("bcryptjs")



exports.createBlog = async(req,res)=>{
    try{
        const {title,description,posterImage,pass} = req.body;

        const saltRound = 10;
        const hashPass = await bcrypt.hash(pass,saltRound)

        const response = await Blog.create({title,description,posterImage,pass:hashPass});

        res.status(200).json(
            {
                sucess:true,
                data:response,
                message:"Entry Created Successfully"
            }
        );

    }
    catch(err){
        
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}