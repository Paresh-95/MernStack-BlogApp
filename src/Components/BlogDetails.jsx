import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {toast} from "react-hot-toast"


function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  async function likeBlog()
  {
    try {
      toast.success("Blog Liked");
    } catch (error) {
        console.log(error);
        toast.danger("Something went wrong")
        
    }
  }



  async function fetchBlog() {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/getBlog/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const item = await response.json();
      setBlog(item.data);
    } catch (error) {
      console.log("Something went wrong => " + error);
      alert("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  return (
    <div className="flex justify-center items-center max-w-md m-10 lg:max-w-2xl xl:max-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:mx-4 xl:mx-8 border-2 border-black">
    <div id="inner" className="flex flex-row items-center">
      <div className="md:shrink-0">
        <img
          className="h-48 w-full object-cover md:h-64 lg:h-80 xl:h-96 md:w-full lg:w-64 xl:w-96 m-10"
          src={blog.posterImage}
          alt={blog.title}
        />
      </div>
      <div className="p-8 text-start">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {blog.title}
        </div>
        <p className="mt-2 text-gray-500">{blog.description}</p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          onClick={likeHandler}
        >
          Like
        </button>
      </div>
    </div>
  </div>
  );
}

export default BlogDetails;
