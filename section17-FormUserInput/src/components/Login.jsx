import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault(); // 기본 제출 동작 방지
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log("Email:", enteredValues.email);
    console.log("Password", enteredValues.password);
  }

  function handleInputChange(event) {
    const target = event.target;
    setEnteredValues((prevState) => {
      return {
        ...prevState,
        [target.name]: target.value,
      };
    });
  }

  // function handleEmailChange(event) {
  //   setEnteredValues((prevState) => {
  //     return {
  //       ...prevState,
  //       email: event.target.value,
  //     };
  //   });
  // }

  // function handlePasswordChange(event) {
  //   setEnteredValues((prevState) => {
  //     return {
  //       ...prevState,
  //       password: event.target.value,
  //     };
  //   });
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleInputChange}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
