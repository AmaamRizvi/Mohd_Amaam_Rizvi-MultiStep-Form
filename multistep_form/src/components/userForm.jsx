import React from "react";
import { motion } from "framer-motion";

const userForm = ({ data, updateFieldHandler }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          required
          value={data.phone || ""}
          onChange={(e) => updateFieldHandler("phone", e.target.value)}
        />
      </div>
    </motion.div>
  );
};

export default userForm;
