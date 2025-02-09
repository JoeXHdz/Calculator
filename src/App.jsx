import { useState } from "react";
import "./App.css";

function ChangeCalculator() {
  const [amountDue, setAmountDue] = useState("");
  const [amountReceived, setAmountReceived] = useState("");
  const [change, setChange] = useState({
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  });

  const calculateChange = () => {
    let due = parseFloat(amountDue);
    let received = parseFloat(amountReceived);
    let remainingChange = received - due;

    if (remainingChange < 0) {
      alert("Amount received must be greater than or equal to amount due.");
      return;
    }

    let dollars = Math.floor(remainingChange);
    remainingChange = (remainingChange - dollars) * 100;

    let quarters = Math.floor(remainingChange / 25);
    remainingChange %= 25;

    let dimes = Math.floor(remainingChange / 10);
    remainingChange %= 10;

    let nickels = Math.floor(remainingChange / 5);
    remainingChange %= 5;

    let pennies = Math.round(remainingChange);

    setChange({ dollars, quarters, dimes, nickels, pennies });
  };

  return (
    <div className="container">
      <h1>Change Calculator</h1>
      <label>Amount Due:</label>
      <input
        type="number"
        value={amountDue}
        onChange={(e) => setAmountDue(e.target.value)}
        placeholder="Enter sale price"
        required
      />

      <label>Amount Received:</label>
      <input
        type="number"
        value={amountReceived}
        onChange={(e) => setAmountReceived(e.target.value)}
        placeholder="Enter amount received"
        required
      />

      <button onClick={calculateChange}>Calculate Change</button>

      <h2>Change Due:</h2>
      <div id="change-output">
        <div className="output-box">
          <span className="output-label">Dollars:</span>{" "}
          <span>{change.dollars}</span>
        </div>
        <div className="output-box">
          <span className="output-label">Quarters:</span>{" "}
          <span>{change.quarters}</span>
        </div>
        <div className="output-box">
          <span className="output-label">Dimes:</span>{" "}
          <span>{change.dimes}</span>
        </div>
        <div className="output-box">
          <span className="output-label">Nickels:</span>{" "}
          <span>{change.nickels}</span>
        </div>
        <div className="output-box">
          <span className="output-label">Pennies:</span>{" "}
          <span>{change.pennies}</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <ChangeCalculator />;
}

export default App;
