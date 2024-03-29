import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import blaiti from "../assets/images/blaiti.png";

function Header() {
  return (
    <header>
      <NavBar />
      <div className="info space-x-2">
        <div className="info-1">
          <button>Front-End Developer</button>
          <h1>
            Talk is cheap.
            <br /> Show me the code!
          </h1>
          <p>
            I design and code beautiful simple things, and I love what I do.
          </p>
          <Link to="/blog-posts">
            <h2>check my blog!</h2>
          </Link>
        </div>
        <div className="info-img">
          <img src={blaiti} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
