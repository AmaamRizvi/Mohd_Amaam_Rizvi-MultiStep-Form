import React from "react";
import { motion } from "framer-motion";
import "./addressInfo.css";

const AddressInfo = ({ data, updateFieldHandler, errors }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="address-info">
        <div className="form-control form-group">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            required
            value={data.addressLine1 || ""}
            onChange={(e) => updateFieldHandler("addressLine1", e.target.value)}
          />
          {errors.addressLine1 && (
            <span className="error">{errors.addressLine1}</span>
          )}
        </div>
        <div className="form-control form-group">
          <label htmlFor="addressLine2">Address Line 2</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            required
            value={data.addressLine2 || ""}
            onChange={(e) => updateFieldHandler("addressLine2", e.target.value)}
          />
          {errors.addressLine2 && (
            <span className="error">{errors.addressLine2}</span>
          )}
        </div>
        <div className="form-control form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={data.city || ""}
            onChange={(e) => updateFieldHandler("city", e.target.value)}
          />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className="form-control form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            required
            value={data.state || ""}
            onChange={(e) => updateFieldHandler("state", e.target.value)}
          />
          {errors.state && <span className="error">{errors.state}</span>}
        </div>
        <div className="form-control form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            required
            value={data.zipCode || ""}
            onChange={(e) => updateFieldHandler("zipCode", e.target.value)}
          />
          {errors.zipCode && <span className="error">{errors.zipCode}</span>}
        </div>
      </div>
    </motion.div>
  );
};

export default AddressInfo;
