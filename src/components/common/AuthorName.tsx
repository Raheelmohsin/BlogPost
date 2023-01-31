import React from "react";
import "./common.scss";

type Props = {
  authorName: string;
  className?: string;
};

const AuthorName: React.FC<Props> = ({ authorName, className }) => {
  return (
    <>
      <div className={className}>{authorName}</div>
    </>
  );
};

export default AuthorName;
