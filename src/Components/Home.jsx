import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchBlogs() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/v1/getBlog/");
      const item = await res.json();
      console.log(item);
      setBlogs(item.data);
    } catch (error) {
      console.log("Something went wrong =>" + error);
      alert("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-row flex-wrap gap-5 justify-evenly mx-8 my-20 h-full">
          {blogs.map((item) => (
            <div key={item._id} className="card card-side bg-[#DEF9C4] border-2 border-black shadow-xl w-full sm:w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] overflow-hidden">
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
                <div className="card-actions justify-end mt-auto">
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
