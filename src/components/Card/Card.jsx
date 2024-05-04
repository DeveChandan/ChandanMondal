import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href="https://www.linkedin.com/messaging/thread/2-ZjhhMGE3MWItYjgzMC00NTE2LThhNDYtMDRhNGEwYzM4NjFlXzAxMA==/" target="_blank" rel="noopener noreferrer">
      <button className="c-button">LEARN MORE</button> </a>
    </div>
  );
};

export default Card;

