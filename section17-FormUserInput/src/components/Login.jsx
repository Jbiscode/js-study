import { useState } from "react";
import Input from "./Input";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: {
      value: "",
      isEdited: false,
    },
    password: {
      value: "",
      isEdited: false,
    },
  });

  const emailIsInvalid =
    enteredValues.email.isEdited && !enteredValues.email.value.includes("@");
  const passwordIsInvalid =
    enteredValues.password.isEdited &&
    enteredValues.password.value.trim().length < 8;

  function handleSubmit(event) {
    event.preventDefault(); // 기본 제출 동작 방지
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log("Email:", enteredValues.email.value);
    console.log("Password", enteredValues.password.value);
  }

  function handleInputChange(event) {
    const target = event.target;
    setEnteredValues((prevState) => {
      return {
        ...prevState,
        [target.name]: {
          value: target.value,
          isEdited: false,
        },
      };
    });
  }

  function handleInputBlur(event) {
    const target = event.target;
    setEnteredValues((prevState) => {
      return {
        ...prevState,
        [target.name]: {
          ...prevState[target.name],
          isEdited: true,
        },
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={enteredValues.email.value}
          error={emailIsInvalid && "이메일 형식이 아닙니다."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={enteredValues.password.value}
          error={passwordIsInvalid && "비밀번호는 8자 이상이어야 합니다."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
