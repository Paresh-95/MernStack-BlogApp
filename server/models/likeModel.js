const mongoose = require('mongoose');

// Define the schema for the blog post
const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //reference to post model
    },
    user:{
        type:String,
        required:true,
    },
});

// Create a Mongoose model based on the schema
module.exports = mongoose.model('Like',likeSchema);
