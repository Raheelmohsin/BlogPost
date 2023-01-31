import React from "react";
import AuthorName from "../common/AuthorName";
import Badge from "../common/Badge";

type Props = {
  className?: string;
  imgSrc?: string;
  hasImg?: boolean;
  details: string;
  hasMoreDetail?: boolean;
  detailCls?: string;
  moreDetail?: string;
  moreDetailCls?: string;
  hasDetail?: boolean;
  authorName?: string;
  badgeCls?: string;
  postName?: string;
};

const Post: React.FC<Props> = ({
  details,
  className,
  hasImg,
  imgSrc,
  hasMoreDetail,
  detailCls,
  moreDetail,
  moreDetailCls,
  hasDetail = true,
  postName,
  badgeCls,
}) => {
  return (
    <>
      <div className="postContentWrap">
        <div className={badgeCls}>{postName}</div>
        {hasDetail && <div className={detailCls}>{details}</div>}
        {hasMoreDetail && <div className={moreDetailCls}>{moreDetail}</div>}
        <AuthorName className="authorCls" authorName="U. R. Oliver" />
      </div>
      {hasImg && <img src={imgSrc} className={className} />}
    </>
  );
};

export default Post;
