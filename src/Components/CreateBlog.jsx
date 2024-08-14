import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { handleNewBlogsRefresh } from "./Home";

function CreateBlog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    posterImage: "",
    pass: "",
  });

  function changeHandler(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = fetch("/api/v1/createBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      toast.success("Blog Created");
      handleNewBlogsRefresh();
      navigate("/"); // Go back to the previous page
    } catch (error) {
      toast.danger("Error Creating Blog");
      console.log("register " + error);
    }
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-[100%] flex-col lg:flex-row lg:justify-evenly gap-14 lg:gap-48">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create Blog</h1>
            <p className="py-6">
              Your words have the power to inspire, inform, and connect with
              others. As you start your blogging journey, remember that you're
              not just writing for yourself—you're joining a community of
              thinkers, creators, and dreamers. Let's create something amazing
              together.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form method="POST" onSubmit={submitHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-md font-bold">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Blog Title"
                  onChange={changeHandler}
                  name="title"
                  value={formData.title}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-md font-bold">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Enter Blog Description"
                  onChange={changeHandler}
                  className="input input-bordered h-52"
                  name="description"
                  value={formData.description}
                  required
                  rows={2}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-md font-bold">Blog Image Url</span>
                </label>
                <input
                  type="tex"
                  placeholder="Enter Blog Image Url "
                  onChange={changeHandler}
                  value={formData.posterImage}
                  name="posterImage"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-md font-bold">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Password "
                  onChange={changeHandler}
                  value={formData.pass}
                  name="pass"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary font-bold">
                  Create Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
