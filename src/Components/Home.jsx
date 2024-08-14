import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import axios from "axios"


export function handleNewBlogsRefresh()
  { 
    setBlogAdded(prev=>!prev);
  }

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogAdded,setBlogAdded] = useState(false);

  async function fetchBlogs() {
    setLoading(true);
    try {
      const res = await axios.get("/api/v1/getBlog/");
      console.log(res);
      setBlogs(res.data.data);
    } catch (error) {
      console.log("Something went wrong =>" + error);
      alert("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchBlogs();
  }, [setBlogAdded]);

  console.log(blogs);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-row flex-wrap gap-5 mx-3 justify-evenly my-10 h-full">
          {blogs.map((item) => (
            <div key={item._id} className="card card-side bg-[#FFFFF] my-12 border-black shadow-xl w-full sm:w-[300px] h-[250px] lg:w-[500px] lg:h-[300px] overflow-hidden shadow-black ">
              <figure className="w-[40%] h-full overflow-hidden border-r border-black">
                <img
                  src={item.posterImage}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body w-[60%] h-full overflow-hidden p-4">
                <h2 className="card-title font-bold text-sm sm:text-lg lg:text-xl">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm lg:text-base">
                  {item.description.substring(0, 120)}
                  {item.description.length > 120 ? "..." : ""}
                </p>
                <div className="flex flex-row card-actions justify-end mt-auto">
                  <p className="p-2 rounded-lg text-red-500 text-start bg-red">{item.likes.length} <span className="text-black">Likes</span></p>
                  <p className="p-2 rounded-lg text-red-500 text-start bg-red" >{item.comments.length} <span className="text-black">Comments</span></p>
                  <Link to={`/blogdetails/${item._id}`}>
                  <button className="btn bg-black text-white btn-sm sm:btn-md">
                    Open
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
