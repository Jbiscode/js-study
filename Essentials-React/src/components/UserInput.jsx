import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 120000,
    expectedReturn: 4,
    duration: 10,
  });
  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="">Initial Investment</label>
            <input
              type="number"
              value={userInput.initialInvestment}
              required
              onChange={(event) =>
                handleInputChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="">Annual Investment</label>
            <input
              type="number"
              value={userInput.annualInvestment}
              required
              onChange={(event) =>
                handleInputChange("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="">Expected return</label>
            <input
              type="number"
              value={userInput.expectedReturn}
              required
              onChange={(event) =>
                handleInputChange("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="">Duration</label>
            <input
              type="number"
              value={userInput.duration}
              required
              onChange={(event) =>
                handleInputChange("duration", event.target.value)
              }
            />
          </p>
        </div>
      </section>
    </>
  );
}
