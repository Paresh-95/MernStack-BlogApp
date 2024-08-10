const Blog = require("../models/PostModel");
const Comment = require("../models/commentModel")
const Like = require("../models/likeModel");



exports.createBlog = async(req,res)=>{
    try{
        const {title,description,posterImage} = req.body;

        const response = await Blog.create({title,description,posterImage});

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