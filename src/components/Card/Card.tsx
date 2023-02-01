import React from "react";
import "../../assets/styles/style.css";

type Props = {
  description: string;
  userImg: string;
  holderName: string;
  cardTitleCls: string;
};

const Card: React.FC<Props> = ({
  description,
  cardTitleCls,
  userImg,
  holderName,
}) => {
  return (
    <>
      <div className="cardWrap">
        <img src={userImg} width="187px" height="187px" />
        <div className="contentWrapper">
          <div className={cardTitleCls}> {holderName}</div>
          <p className="cardDetailText">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
