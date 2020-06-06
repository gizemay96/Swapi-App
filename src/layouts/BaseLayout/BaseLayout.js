import React from "react";
import { Link } from "react-router-dom";
import "./BaseLayout.css";
import "../../fonts/Starjedi.ttf";

const BaseLayout = ({ children }) => (
  <div className="container">
    <div>
      <nav className="navbar">
        <div className="nav-brand">
          <img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG14.png" alt="icon"></img>
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/films">
            Films
          </Link>
          <Link className="nav-link" to="/planets">
            Planets
          </Link>
          <Link className="nav-link" to="/people">
            People
          </Link>
        </div>
      </nav>
    </div>

    {children}
  </div>
);

export default BaseLayout;
