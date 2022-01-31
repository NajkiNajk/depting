import React from "react";
import "./CardAsset.scss";

const CardAsset = ({ item }) => {
  const shouldHaveBottomBorder =
     item.type === "text" &&
    (item.title === "VACANTSESELECT" || item.title === "O'NEILL");
  return (
    <div className={`cardAsset cardAsset-${item.type}`}>
      {(item.type === "asset" || item.type === "extendedAsset") && (
        <img src={require(`../../assets/Images/${item.asset}.png`)} />
      )}
      {item.type === "text" && (
        <div className="cardAsset-dividerTextTop"></div>
      )}
      <div className="cardAsset-title">{item.title}</div>
      <div className="cardAsset-subtitle">{item.subtitle}</div>
      <div className="cardAsset-viewCase">
        <div className="cardAsset-arrow"></div>
        <div className="cardAsset-link">VIEW CASE</div>
      </div>
      {shouldHaveBottomBorder && (
        <div className="cardAsset-dividerTextBottom"></div>
      )}
    </div>
  );
};

export default CardAsset;
