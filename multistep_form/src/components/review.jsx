import React from "react";
import { motion } from "framer-motion";
import "./review.css";

const Review = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="review-container"
    >
      <h2>Confirmation</h2>
      <p>Thanks for signing up on our website.</p>
      <p>Your account has been created successfully.</p>
      <p>You can review your information here.</p>
      <div className="review-data">
        <span>
          Personal Information: {data.name}, {data.email}, {data.phone}.
        </span>
      </div>
      <div className="review-data">
        <span>
          Address Information: {data.addressLine1}, {data.addressLine2},{" "}
          {data.city}, {data.state}, {data.zipCode}
        </span>
      </div>
    </motion.div>
  );
};

export default Review;
