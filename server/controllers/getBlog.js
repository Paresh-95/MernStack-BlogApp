const Blog = require("../models/PostModel");
const Comment = require("../models/commentModel")
const Like = require("../models/likeModel");

exports.getBlog = async(req,res)=>{
    try{
        const blogs = await Blog.find().populate("likes").populate("comments").exec()
        res.status(200).json({
            success:true,
            data:blogs,
            message:"All Blogs are Fetched"
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


exports.getBlogById = async(req,res)=>{
    try{
        const {id} = req.params;
        const blogs =  await Blog.findById({_id:id}).populate("comments").populate("likes").exec()
     
        res.status(200).json({
            success:true,
            data:blogs,
            message:`Data for ${id} fetched `
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