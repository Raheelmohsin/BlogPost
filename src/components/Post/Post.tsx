import React from "react";
import AuthorName from "../common/AuthorName";
import Badge from "../common/Badge";
import ContentText from "../common/ContentText";
import "./post.scss";

const Post: React.FC = ({}) => {
  return (
    <>
      <Badge text="Travel" />
      <ContentText
        className="contentCls"
        details="Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all"
      />
      <ContentText
        className="smallcontentCls"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum. "
      />
      <AuthorName className="authorCls" authorName="U. R. Oliver" />
    </>
  );
};

export default Post;
