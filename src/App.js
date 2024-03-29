import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import BlogPost from "./components/blog/BlogPost";
import BlogPage from "./components/blog/BlogPage";
import GetPost from "./components/blog/GetPost";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-posts" element={<GetPost />} />
        <Route path="/blog-page/:name" element={<BlogPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
