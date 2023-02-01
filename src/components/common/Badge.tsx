import React from "react";
import "../../assets/styles/style.css";
type Props = {
  text: string;
  badgeClass?: string;
};

const Badge: React.FC<Props> = ({ text, badgeClass }) => {
  return (
    <>
      <div className={badgeClass}>{text}</div>
    </>
  );
};

export default Badge;
