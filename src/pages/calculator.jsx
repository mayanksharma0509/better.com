import { useState } from "react";

export default function MortgageCalculator() {
  const [principal, setPrincipal] = useState(200000);
  const [rate, setRate] = useState(5.0);
  const [years, setYears] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculatePayment = () => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    const payment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="mortgage-container">
      <h2 className="mortgage-title">Mortgage Calculator</h2>

      <div className="slider-container">
        <label>Loan Amount ($): {principal}</label>
        <input
          type="range"
          min="50000"
          max="1000000"
          step="10000"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>

      <div className="slider-container">
        <label>Interest Rate (%): {rate}</label>
        <input
          type="range"
          min="1"
          max="10"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>

      <div className="slider-container">
        <label>Loan Term (Years): {years}</label>
        <input
          type="range"
          min="5"
          max="40"
          step="1"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>

      <button onClick={calculatePayment} className="calculate-button">
        Calculate
      </button>

      {monthlyPayment > 0 && (
        <div className="result-container">
          <strong>Monthly Payment:</strong> ${monthlyPayment}
        </div>
      )}
    </div>
  );
}
