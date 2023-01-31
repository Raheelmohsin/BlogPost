import * as React from "react";
import "./landingPage.scss";
import Logo from "../Logo";
import Navigation from "../NavBar/Navigation";

import Post from "../Post/Post";
const LandingPage = () => {
  return (
    <div className="mainWrap">
      <div className="sectionWrap">
        <Logo />
        <Navigation />
      </div>

      <div className="innerSection">
        <div className="leftSectionCls">
          <div className="leftSectionCls__leftinnerSection">
            <Post />
          </div>
        </div>
        <div className="rightSectionCls">Right section</div>
      </div>
    </div>
  );
};

export default LandingPage;
