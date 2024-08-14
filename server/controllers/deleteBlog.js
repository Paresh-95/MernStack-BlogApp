const bcrypt = require('bcryptjs'); // Ensure bcrypt is imported
const Blog = require('../models/PostModel');
const Comment = require('../models/commentModel');
const Like = require('../models/likeModel');

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { pass } = req.body;

    // Step 1: Find the blog by ID
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        data: "No Blog Found for the ID",
      });
    }

    // Step 2: Compare the password
    const isMatch = await bcrypt.compare(pass, blog.pass);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        data: "Password is Incorrect",
      });
    }

    // Step 3: Delete the blog
    const deletedBlog = await Blog.findByIdAndDelete(id);
    
    // If deletion was successful
    return res.status(200).json({
      success: true,
      data: deletedBlog,
      message: `Blog with ID ${id} successfully deleted`,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
