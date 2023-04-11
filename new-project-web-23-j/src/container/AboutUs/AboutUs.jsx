import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>

        <p className="p__opensans">
          The Flavorful Kitchen is a comprehensive food website that celebrates
          the joy of cooking and the pleasures of eating. Our platform features
          an extensive collection of recipes, cooking tips, and culinary
          resources to help home cooks of all skill levels prepare delicious
          meals.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img className="knife-1" src={images.knife} alt="about_knife" />
        <img className="knife-2" src={images.knife2} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>

        <p className="p__opensans">
          Abite Food Restaurant was founded in 2022 by two food enthusiasts,
          Jack and Emily, who shared a common passion for creating memorable
          dining experiences. With their backgrounds in the food industry, they
          envisioned a restaurant that would offer a unique blend of flavors and
          a cozy atmosphere that would make guests feel right at home.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
