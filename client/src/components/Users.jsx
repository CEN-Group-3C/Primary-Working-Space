/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Users({ users, apiError, onDeleteUser, onUpdateUser }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  function updateSelectedUser(user) {
    setSelectedUser(user.id);

    setEnteredValues({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

  function inputChangeHandler(event) {
    setEnteredValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    onUpdateUser(selectedUser, enteredValues.name, enteredValues.email, enteredValues.password);
    setSelectedUser(null);
    setEnteredValues({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {selectedUser === user.id && (
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={enteredValues.name}
                  onChange={inputChangeHandler}
                />
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  value={enteredValues.email}
                  onChange={inputChangeHandler}
                />
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  value={enteredValues.password}
                  onChange={inputChangeHandler}
                />
                <button type="submit">Submit</button>
              </form>
            )}
            {selectedUser !== user.id && (
              <div>
                <p>
                  {user.name} - {user.email} - {user.password}
                </p>
                <button onClick={(e) => updateSelectedUser(user)}>Update</button>
              </div>
            )}
            <button onClick={(e) => onDeleteUser(user.id)}>Delete</button>{" "}
          </li>
        ))}
      </ul>
      {apiError && <p>{apiError}</p>}
    </div>
  );
}
