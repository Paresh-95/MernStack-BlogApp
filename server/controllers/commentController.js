const Comment = require("../models/commentModel")
const Post = require("../models/PostModel")

exports.createComment = async(req,res)=>{
    try{
        //fetch data from req body
        const {post,user,body} = req.body
        //create comment object
        const comment = new Comment({
            post,user,body
        })

        //save new comment into db 
        const saveComment  = await comment.save();

       const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id}},{new:true})
        .populate("comments") //populate the comments array with comments document
        .exec();   
        
        res.json({
            post:updatedPost,
        });

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


exports.deleteComment = async(req,res)=>{
    try{
        //fetch data from req body
        const {post,comment} = req.body
    
        const deletedComment = await Comment.findOneAndDelete({post:post,_id:comment})

       const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{comments:deletedComment._id}},{new:true})
        .populate("comments") //populate the comments array with comments document
        .exec();   
        
        res.json({
            post:updatedPost,
        });

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