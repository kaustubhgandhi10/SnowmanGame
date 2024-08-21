import React from "react";
import snowmanImg from "../assets/images/snowman-img.png";
import "../snowman.css";
import { Accessories } from "./Accessories";

export const Snowman = () => {
  return (
    <div className="snowman-body">
      <div className="snow-content">SNOWMAN DRESS-UP</div>
      <img className="snowman-puppet" src={snowmanImg} id="snowman" />
      <Accessories />
    </div>
  );
};
