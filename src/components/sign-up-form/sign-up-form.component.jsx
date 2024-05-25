import { useState } from "react";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component.jsx";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component.jsx";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const ResetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {
        displayName,
      });
      ResetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot  create user, email already in use");
      } else {
        console.log("user creation encountered an error", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
        />
        <FormInput
          label="Email"
          name="email"
          required
          type="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          name="password"
          required
          type="password"
          onChange={handleChange}
          value={password}
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          required
          type="password"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit" buttonType={"inverted"}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
