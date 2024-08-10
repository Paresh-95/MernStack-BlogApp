const express = require("express")
const router = express.Router()

const {createBlog} = require("../controllers/createBlog")
const {getBlog,getBlogById} = require("../controllers/getBlog")
const {deleteBlog} = require("../controllers/deleteBlog")
const {updateBlog} = require("../controllers/updateBlog")
const {createComment , deleteComment} = require("../controllers/commentController")
const {likePost, unlikePost} = require("../controllers/likeController")
 
router.post("/createBlog",createBlog);
router.get("/getBlog",getBlog)
router.get("/getBlog/:id",getBlogById);
router.delete("/deleteBlog/:id",deleteBlog)
router.put("/updateBlog/:id",updateBlog)
router.post("/comments/create",createComment)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)
router.post("/comments/delete",deleteComment)


module.exports = router;