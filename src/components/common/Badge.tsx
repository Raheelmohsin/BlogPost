import React from "react";
import "./common.scss";

type Props = {
  text: string;
};

const Badge: React.FC<Props> = ({ text }) => {
  return (
    <>
      <div className="badgeCls">{text}</div>
    </>
  );
};

export default Badge;
