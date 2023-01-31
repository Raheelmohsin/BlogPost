import React from "react";
import "../../assets/styles/style.css";
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
