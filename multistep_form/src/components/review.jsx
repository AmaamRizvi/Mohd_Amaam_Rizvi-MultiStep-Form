import './review.css'

const review = ({data}) => {
  return (
    <div className="review-container">
      <h2>Confimation</h2>
      <p>Thanks for signing up in our website.</p>
      <p>Your account has been created successfully.</p>
      <p>You can review your information here.</p>
      <div className="review-data">
        <span>
          Personal Information:{data.name} , {data.email} , {data.phone}.
        </span>
      </div>
      <div className="review-data">
        <span>
          Address Information:{data.addressLine1} , {data.addressLine2} ,
          {data.city} , {data.state} , {data.zipcode}
        </span>
      </div>
    </div>
  );
}

export default review