import React from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import "./steps.css";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className={`step ${currentStep >= 0 ? "active" : ""}`}>
        <AiOutlineUser />
        <p>Personal Info.</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Address Info.</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Review</p>
      </div>
    </div>
  );
};

export default Steps;
