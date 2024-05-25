import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
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
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          name="displayName"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          name="email"
          required
          type="email"
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          name="password"
          required
          type="password"
          onChange={handleChange}
          value={password}
        />
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          required
          type="password"
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
