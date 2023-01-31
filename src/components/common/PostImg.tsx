import React from "react";
import "./common.scss";

type Props = {
  className?: string;
  img?: string;
  hasImg?: boolean;
};

const PostImg: React.FC<Props> = ({ className, img, hasImg }) => {
  return <>{hasImg && <img src={img} className={className} />}</>;
};

export default PostImg;
