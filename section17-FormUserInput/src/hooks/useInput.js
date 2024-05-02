import { useState } from "react";

export function useInput(value, validationFn) {
  const [enteredValue, setEnteredValue] = useState({
    value,
    isEdited: false,
  });

  const valueIsValid = validationFn(enteredValue.value);

  function handleInputChange(event) {
    const target = event.target;
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        value: target.value,
        isEdited: false,
      };
    });
  }

  function handleInputBlur() {
    // const target = event.target;
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        isEdited: true,
      };
    });
  }
  return {
    value: enteredValue.value,
    hasError: enteredValue.isEdited && !valueIsValid,
    handleInputChange,
    handleInputBlur,
  };
}
