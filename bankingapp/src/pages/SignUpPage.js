import React, { useState } from "react";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5001", // Change to your server's URL
});

function SignUpPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    date_of_birth: "",
    contact_number: "",
    address: "",
    account_type: "",
  });

  const sendFormData = async () => {
    try {
      const response = await axiosInstance.post("/api/users/signup", formData);
      // Handle the response, e.g., show a success message to the user
      console.log("Sign-up successful:", response.data);
    } catch (error) {
      // Handle any errors, e.g., show an error message to the user
      console.error("Error signing up:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFormData();
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div>
          <label>Account Type:</label>
          <select
            name="account_type"
            value={formData.account_type}
            onChange={handleChange}
            required
          >
            <option value="">Select an account type</option>
            <option value="Checking">Checking</option>
            <option value="Savings">Savings</option>
          </select>
        </div> */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
