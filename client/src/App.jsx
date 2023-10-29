import { useState } from "react";
import Users from "./components/Users.jsx";
import CreateUser from "./components/CreateUser.jsx";

const serverUrl = "http://localhost:3000";

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  function fetchUsers() {
    fetch(serverUrl + "/api/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        console.log("Returned users:", users)
        setUsers(users);
      });
  }

  function addUser(name, email, password) {
    fetch(serverUrl + "/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]);
      });
  }

  return (
    <div>
      <CreateUser addUser={addUser} />
      <button onClick={fetchUsers}>Fetch Users</button>
      <Users users={users} />
    </div>
  );
}
