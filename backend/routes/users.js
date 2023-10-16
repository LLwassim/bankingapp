const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import the User model
const Account = require("../models/Account");
const Transactions = require("../models/Transactions");
const { v4: uuidv4 } = require("uuid"); // Import the UUID library

// Create a new user and ensure an associated account exists
router.post("/signup", async (req, res) => {
  try {
    const uniqueCustomerId = uuidv4(); // Generate a unique customer ID using UUID
    const uniqueAccountID = uuidv4();
    function generateUniqueAccountNumber() {
      // You can use a prefix or identifier for your accounts (e.g., "ACC-").
      const prefix = "ACC-";

      // Generate a random number or use a unique ID as the account number.
      // For example, you can use a random number with a specified length.
      const randomPart = Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0");

      // Combine the prefix and the random part to create the account number.
      const accountNumber = `${prefix}${randomPart}`;

      return accountNumber;
    }

    // Check if the customer_id exists in the accounts table
    const existingAccount = await Account.findOne({
      where: { customer_id: uniqueCustomerId },
    });

    if (existingAccount) {
      // If an account with this customer_id exists, create the user
      const newUser = await User.create({
        ...req.body,
        account_id: uniqueAccountID,
        customer_id: uniqueCustomerId,
      });
      res.json(newUser);
    } else {
      // If the account doesn't exist, create the account first
      const newAccount = await Account.create({
        account_id: uniqueAccountID,
        customer_id: uniqueCustomerId,
        account_number: generateUniqueAccountNumber(),
        balance: 0,
        account_type: "Savings",
        status: "Active",
        date_opened: new Date(),
      });

      // Insert a placeholder transaction with the account_id
      await Transactions.create({
        account_id: newAccount.account_id,
        transaction_type: "Account Created",
        amount: 0,
        date_time: new Date(),
        description: "New account created",
      });

      // Now, create the user with the generated customer_id
      const newUser = await User.create({
        ...req.body,
        customer_id: uniqueCustomerId,
      });

      res.json(newUser);
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add more routes for CRUD operations
// ...

module.exports = router;
