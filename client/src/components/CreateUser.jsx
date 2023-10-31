/**
 * Create user component.
 * @param {object} props.addUser - Add user function
 * 
 * This component is responsible for creating new users. It
 * renders a form, then passes the form data to the addUser
 * function. This function is passed in from the App component.
 * 
 * Topics involved:
 * - React refs
 * - Form handling via refs
 * - Passing props
 * 
 * Refs vs State:
 * - Refs are used to access DOM nodes directly
 * - Refs do not cause a re-render when changed
 * - State is mainly used with objects and primitive types
 * - State causes re-renders when changed
 */
import { useRef } from "react";

export default function CreateUser(props) {
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
    props.addUser(name, email, password);

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
