import React from "react";
import style from "./Card.module.css";

function Card(props) {
  return (
    <div className={style.Card}>
      <img src={props.imgurl} alt="" />
      <h5>{props.title}</h5>
      <h3>{props.data}</h3>
    </div>
  );
}

export default Card;
