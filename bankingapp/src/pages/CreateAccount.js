import React, { useState } from "react";
import axios from "axios";
//import "./CreateAccount.css";

//this is currently for new bank accounts and now new User accounts 
//It currently does not have proper logic and is not coded according to the database schema 

function CreateAccount() {
  const [accountData, setAccountData] = useState({
    accountNumber: "",
    accountName: "",
    balance: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData({
      ...accountData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to create a new account
      const response = await axios.post("/api/accounts", accountData);

      if (response.status === 201) {
        // Account created successfully
        console.log("Account created successfully");
      }
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div>
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={accountData.accountNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Account Name:</label>
          <input
            type="text"
            name="accountName"
            value={accountData.accountName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Balance:</label>
          <input
            type="number"
            name="balance"
            value={accountData.balance}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
