import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";


function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [deleteRefresh,setDeleteRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user: "",
    body: "",
    comment: "",
    pass:"",
    post: id,
  });

  // Change Handler for form inputs
  function changeHandler(e) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }

  function setCommentForDeletion(commentId) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      comment: commentId,
    }));
  }

  //LIKE BLOG HANDLERS
  async function LikeButton(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/likes/like", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Blog Liked");
    } catch (error) {
      toast.error("Error liking blog");
    }
  }

  async function UnlikeButton(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/likes/unlike", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Blog Unliked");
    } catch (error) {
      toast.error("Error unliking blog");
    }
  }

  // COMMENT BLOG HANDLERS
  async function createComment(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/comments/create/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Comment Added");
      setDeleteRefresh(prev=>!prev)
    } catch (error) {
      toast.error("Error commenting on blog");
    }
  }

  async function deleteComment(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/comments/delete/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Comment Removed");
      setDeleteRefresh(prev=>!prev)
    } catch (error) {
      toast.error("Error removing comment on blog");
    }
  }

  async function fetchBlog() {
    setLoading(true);
    try {
      const response = await axios.get(`/api/v1/getBlog/${id}`);
      setBlog(response.data.data);
    } catch (error) {
      alert("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchBlog();
  }, [id,deleteRefresh]);



 

  // Delete Blog Handler
  async function deleteBlog(e) {
    e.preventDefault();

    try {
      const response = await axios.delete(`/api/v1/deleteBlog/${id}`, {
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Blog Deleted");
      navigate(-1);
    } catch (error) {
      toast.error("Error Deleting blog");
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 p-8">
      <div className="container mx-auto max-w-7xl bg-white p-6 rounded-lg flex flex-col md:flex-row shadow-2xl shadow-black">
        {/* Image Section */}
        <div className="flex-1 h-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
          <img
            src={blog.posterImage}
            alt="Blog Poster"
            className="w-full h-auto object-cover rounded-lg shadow-2xl shadow-black"
          />
          <div className="flex flex-row justify-center gap-20">
          <p className="my-20 font-bold text-2xl">Likes : <span className="text-red-500 ">{blog.likes.length}</span></p>
          <p className="my-20 font-bold text-2xl">Comments : <span className="text-red-500 ">{blog.comments.length}</span></p>
          </div>
        </div>

        {/* Blog Details Section */}
        <div className="flex-1 md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg mb-6">{blog.description}</p>
          <div className="md:flex-col flex-row space-x-4">
            <button className="rounded-xl bg-red-500 py-2 btn text-white px-6 m-2">
              <label htmlFor="like_modal" className="">
                Like
              </label>
            </button>
            <button className="rounded-xl bg-gray-500 py-2 btn text-white px-6">
              <label htmlFor="unlike_modal" className="">
                Unlike
              </label>
            </button>
            <button className="rounded-xl bg-gray-500 py-2 btn text-white px-3">
              <label htmlFor="comment_modal" className="">
                Comment
              </label>
            </button>
            <button className="rounded-xl bg-gray-500 py-2 btn text-white px-6">
              <label htmlFor="delete_modal" className="">
                Delete
              </label>
            </button>
          </div>

          {/* Like Modal */}
          <input type="checkbox" id="like_modal" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <form onSubmit={LikeButton} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-md font-bold">User Name</span>
                  </label>
                  <input
                    type="text"
                    onChange={changeHandler}
                    name="user"
                    value={formData.user}
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary font-bold">
                    Like
                  </button>
                </div>
              </form>
              <div className="modal-action">
                <label htmlFor="like_modal" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>

          {/* Unlike Modal */}
          <input type="checkbox" id="unlike_modal" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <form onSubmit={UnlikeButton} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-md font-bold">User Name</span>
                  </label>
                  <input
                    type="text"
                    onChange={changeHandler}
                    name="user"
                    value={formData.user}
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary font-bold">
                    Unlike
                  </button>
                </div>
              </form>
              <div className="modal-action">
                <label htmlFor="unlike_modal" className="btn hover:bg-grey">
                  Close
                </label>
              </div>
            </div>
          </div>

          {/* Comment Modal */}
          <input type="checkbox" id="comment_modal" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <form onSubmit={createComment} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-md font-bold">User Name</span>
                  </label>
                  <input
                    type="text"
                    onChange={changeHandler}
                    name="user"
                    value={formData.user}
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                    required
                  />
                  <label className="label">
                    <span className="text-md font-bold">Comment</span>
                  </label>
                  <textarea
                    type="text"
                    onChange={changeHandler}
                    name="body"
                    value={formData.body}
                    placeholder="Comment here"
                    className="textarea textarea-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary font-bold">
                    Comment
                  </button>
                </div>
              </form>
              <div className="modal-action">
                <label htmlFor="comment_modal" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>

          {/* Delete Blog */}
          <input type="checkbox" id="delete_modal" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <form onSubmit={deleteBlog} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-md font-bold">User Name</span>
                  </label>
                  <input
                    type="text"
                    onChange={changeHandler}
                    name="pass"
                    value={formData.pass}
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary font-bold">
                    Delete Blog
                  </button>
                </div>
              </form>
              <div className="modal-action">
                <label htmlFor="delete_modal" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="container mx-auto max-w-7xl bg-white p-6 rounded-lg flex flex-col shadow-2xl shadow-black mt-6">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {blog.comments.map((comment) => (
          <div key={comment._id} className="p-4 mb-4 bg-gray-100 rounded-lg">
            <p className="font-bold">{comment.user}</p>
            <p className="mb-2">{comment.body}</p>
            <button
              onClick={() => setCommentForDeletion(comment._id)}
              className="btn bg-red-500 text-white"
            >
              <label htmlFor="delete_comment_modal">Delete Comment</label>
            </button>
          </div>
        ))}
      </div>

      {/* Delete Comment Modal */}
      <input type="checkbox" id="delete_comment_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form onSubmit={deleteComment} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-md font-bold">User Name</span>
              </label>
              <input
                type="text"
                onChange={changeHandler}
                name="user"
                value={formData.user}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary font-bold">
                Delete Comment
              </button>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="delete_comment_modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
