import React, { useState } from 'react';

const AddCar = () => {
  const [carDetails, setCarDetails] = useState({
    id: '',
    make: '',
    model: '',
    color: '',
    owner: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission, e.g., send data to server
    console.log('Submitted:', carDetails);
    // Clear form fields after submission
    setCarDetails({
      id: '',
      make: '',
      model: '',
      color: '',
      owner: ''
    });
  };

  return (
    <div className="container">
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Car ID</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={carDetails.id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Make</label>
          <input
            type="text"
            className="form-control"
            name="make"
            value={carDetails.make}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            className="form-control"
            name="model"
            value={carDetails.model}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Color</label>
          <input
            type="text"
            className="form-control"
            name="color"
            value={carDetails.color}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Owner</label>
          <input
            type="text"
            className="form-control"
            name="owner"
            value={carDetails.owner}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCar;
