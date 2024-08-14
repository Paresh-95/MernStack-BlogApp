const Comment = require("../models/commentModel")
const Post = require("../models/PostModel")
const Like = require("../models/likeModel")

exports.likePost = async (req,res)=>{
    try{
        const{post,user} = req.body;       
        
        const existingLike = await Like.findOne({post,user})
        
        if(existingLike)
        {
            return res.status(400).json({
                success:false,
                message:"User has already liked this post by this name"
            })
        }


        const like = new Like({
            post,user
        })


        const saveLiked = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:saveLiked._id}},{new:true})
        .populate("likes") 
        .exec();   
        
        return res.json({
            post:updatedPost,
        });

    }
    catch(err){
        console.log(err)
       return res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}

//unlike a post 

exports.unlikePost = async(req,res)=>{
    try{
        const {post,user} = req.body;
      
        //find and delete the like collection me se 


        const deletedLike = await Like.findOneAndDelete({post:post,user:user})
        console.log(deletedLike);

        if(!deletedLike)
        {
            return res.status(400).json({
                success:false,
                message:"Invalid Unlike by User First Like By this name"
            })
        }
        
        
        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})
        .populate("likes")
        .exec()
        res.json({
            post:updatedPost,
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