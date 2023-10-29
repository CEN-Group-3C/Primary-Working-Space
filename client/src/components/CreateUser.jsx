import PropTypes from "prop-types";
import { useRef } from "react";

export default function CreateUser({ addUser }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function resetForm() {
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  }

  function submitHandler(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    addUser(name, email, password);

    resetForm();
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="name" ref={nameInputRef} />
      <input type="text" placeholder="email" ref={emailInputRef} />
      <input type="text" placeholder="password" ref={passwordInputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

CreateUser.propTypes = {
  addUser: PropTypes.func.isRequired,
};
