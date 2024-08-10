const Blog = require("../models/PostModel") 
const Comment = require("../models/commentModel")
const Like = require("../models/likeModel");


exports.deleteBlog = async(req,res)=>{
    try{
        const {id} = req.params
        const blogs = await Blog.findByIdAndDelete({_id:id})

           
        res.status(200).json({
            success:true,
            data:blogs,
            message:`Blog for ${id} successfully deleted`
        })


    }
    catch(err){
        console.log(err)
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })

    }
}