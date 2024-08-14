const mongoose = require('mongoose');

// Define the schema for the blog post
const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posterImage: {
        type: String, // Assuming this is a URL to an image
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }],
    updatedTime: {
        type: Date,
        default: Date.now
    },
    createdTime: {
        type: Date,
        default: Date.now
    }
});

// Create a Mongoose model based on the schema
module.exports = mongoose.model('Post', blogPostSchema);
