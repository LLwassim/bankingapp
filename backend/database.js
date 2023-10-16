const { Sequelize } = require("sequelize"); // Import Sequelize
const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  host: "banking-app.cs4588usvttt.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "neil1234",
  database: "banking",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Create a Sequelize instance
const sequelize = new Sequelize({
  dialect: "mysql",
  logging: (query) => {
    console.log(query);
  },
  database: "banking",
  username: "admin",
  password: "neil1234",
  host: "banking-app.cs4588usvttt.us-east-2.rds.amazonaws.com",
  pool: pool, // Use the MySQL connection pool
});

// Export the Sequelize instance to be used by other parts of your application
module.exports = sequelize;
