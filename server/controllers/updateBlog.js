const Blog = require("../models/PostModel");
const Comment = require("../models/commentModel")
const Like = require("../models/likeModel");


exports.updateBlog = async(req,res) =>{
    try{
         const {id} = req.params
         const {title,description,posterImage} = req.body
         const blogs = await Blog.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now(),posterImage }
     )

        res.status(200).json({
            success:true,
            data:blogs,
            message:"All Blogs are Fetched"
        })
    }
    catch(err)
    {
        console.log(err)
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}