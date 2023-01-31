import React from "react";

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
