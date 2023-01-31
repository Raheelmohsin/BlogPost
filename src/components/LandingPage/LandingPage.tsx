import * as React from "react";
import Logo from "../Logo";
import Navigation from "../NavBar/Navigation";
import postImgOne from "../../assets/images/post_1.png";
import carImgOne from "../../assets/images/car_1.png";
import postImgTwo from "../../assets/images/img_1.png";
import Post from "../Post/Post";
import SmallPost from "../Post/SmallPost";
const LandingPage = () => {
  return (
    <div className="mainWrap">
      <div className="sectionWrap">
        <Logo />
        <Navigation />
      </div>
      <section>
        <div className="innerSection">
          <div className="leftSectionCls">
            <div className="leftSectionCls__leftinnerSection">
              <Post
                postName="Travel"
                badgeCls="badgeCls"
                detailCls="detailCls"
                details="Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all"
                hasMoreDetail={true}
                moreDetail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum."
                moreDetailCls="moreDetail"
                hasImg={true}
                imgSrc={postImgOne}
                className="imgclsMain"
              />
            </div>
          </div>
          <div className="rightSectionCls">
            <div className="rightSectionCls__smallSection">
              <div className="wrapper">
                <SmallPost
                  postName="Dine"
                  badgeCls="badgeCls"
                  hasMoreDetail={true}
                  moreDetail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."
                  moreDetailCls="smallDetailCls"
                  hasImg={false}
                />
              </div>
              <SmallPost
                postName="Dine"
                badgeCls="badgeCls"
                hasMoreDetail={true}
                moreDetail="Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium lobortis."
                moreDetailCls="smallDetailCls"
                hasImg={false}
              />

              <SmallPost
                postName="OPEN HOUSE"
                badgeCls="badgeCls"
                hasMoreDetail={true}
                moreDetail="Meals on wheels best food trucks in the UAE"
                moreDetailCls="smallDetailCls"
                hasImg={true}
                imgSrc={carImgOne}
                imgCls="imgCls"
              />
            </div>
            <div className="rightSectionCls__smallSection">
              <SmallPost
                postName="OPEN HOUSE"
                badgeCls="badgeCls"
                hasMoreDetail={true}
                moreDetail="UAE: CBSE Term 1 exams begin tomorrow; important guidelines announced"
                moreDetailCls="smallDetailCls"
                hasImg={true}
                imgSrc={postImgTwo}
                imgCls="imgCls"
              />
              <SmallPost
                postName="DINE"
                badgeCls="badgeCls"
                hasMoreDetail={true}
                moreDetail="Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all"
                moreDetailCls="smallDetailCls"
                hasImg={false}
              />

              <SmallPost
                postName="DINE"
                badgeCls="badgeCls"
                hasMoreDetail={true}
                moreDetail="Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all"
                moreDetailCls="smallDetailCls"
                hasImg={false}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="separater topMargin" />
      <section>
        <div className="portfolioBg"></div>
      </section>
    </div>
  );
};

export default LandingPage;
