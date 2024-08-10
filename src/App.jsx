import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import CreateBlog from "./Components/CreateBlog";
import ContactUs from "./Components/ContactUs";
import About from "./Components/About";
import Footer from "./Components/Footer";
import BlogDetails from "./Components/BlogDetails";

function App() {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/createblogs"} element={<CreateBlog />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contactus"} element={<ContactUs />} />
            <Route path={"/blogdetails/:id"} element={<BlogDetails/>} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
