import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign Up</h2>

      <form onSubmit={handleSubmit} className="mt-4">

        {/* Username */}
        <div className="mb-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* First Name */}
        <div className="mb-3">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="form-control"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="form-control"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;