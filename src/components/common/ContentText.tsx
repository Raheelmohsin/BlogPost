import React from "react";
import "./common.scss";

type Props = {
  details: string;
  className?: string;
};

const ContentText: React.FC<Props> = ({ details, className }) => {
  return (
    <>
      <div className={className}>{details}</div>
    </>
  );
};

export default ContentText;
