import React from "react";
import "./Home.css";
import "../components/Navbar";
import Navbar from "../components/Navbar";
function HomePage() {
  return (
    <div>
      {<Navbar />}
      <header>
        <h1>Welcome to City National Bank</h1>
      </header>
      <main>
        <section className="account-summary">
          <h2>Account Summary</h2>
          <p>Account Number: 1234567890</p>
          <p>Balance: $10,000.00</p>
        </section>
        <section className="transaction-history">
          <h2>Transaction History</h2>
          <ul>
            <li>
              <span>Withdrawal</span>
              <span>- $500.00</span>
            </li>
            <li>
              <span>Deposit</span>
              <span>+ $1,000.00</span>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Wassim Lkorchy, Angelo Bechtold, and Neil Hansaria</p>
      </footer>
    </div>
  );
}

export default HomePage;
