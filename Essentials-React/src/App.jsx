import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 120000,
    expectedReturn: 4,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleInputChange} userInput={userInput} />
      {inputIsValid && <Results Input={userInput} />}
      {!inputIsValid && <p className="center">기간은 0보다 큰값을 입력해주세요.</p>}
    </>
  );
}

export default App;
