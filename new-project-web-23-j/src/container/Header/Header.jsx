import React from "react";

// import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <span className="h-sub">Expensive But The Best</span>
      <h1 className="app__header-h1">Deliciousness jumping into the mouth</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Welcome to Abite Restaurant, where food meets passion. Our website
        offers a glimpse into the world of our culinary experts who are
        dedicated to delivering exceptional dining experiences to our guests.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
