import React from "react";
import AuthorName from "../common/AuthorName";

type Props = {
  imgCls?: string;
  imgSrc?: string;
  hasImg?: boolean;
  hasMoreDetail?: boolean;
  moreDetail?: string;
  moreDetailCls?: string;
  badgeCls?: string;
  postName?: string;
};

const SmallPost: React.FC<Props> = ({
  imgCls,
  hasImg,
  imgSrc,
  hasMoreDetail,
  moreDetail,
  moreDetailCls,
  postName,
  badgeCls,
}) => {
  return (
    <>
      {hasImg && <img src={imgSrc} className={imgCls} />}
      <div className={badgeCls}>{postName}</div>
      {hasMoreDetail && <div className={moreDetailCls}>{moreDetail}</div>}
      <AuthorName className="authorCls" authorName="U. R. Oliver" />
    </>
  );
};

export default SmallPost;
