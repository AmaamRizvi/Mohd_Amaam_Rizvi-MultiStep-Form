import "./addressInfo.css";

const AddressInfo = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="address-info">
        <form>
          <div className="form-control form-group">
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              required
              value={data.addressLine1 || ""}
              onChange={(e) =>
                updateFieldHandler("addressLine1", e.target.value)
              }
            />
          </div>
          <div className="form-control form-group">
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              required
              value={data.addressLine2 || ""}
              onChange={(e) =>
                updateFieldHandler("addressLine2", e.target.value)
              }
            />
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressInfo;
