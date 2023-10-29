import { useState } from "react";
import Users from "./components/Users.jsx";
import CreateUser from "./components/CreateUser.jsx";

const serverUrl = "http://localhost:3000";

export default function App() {
  const [users, setUsers] = useState([]);
  const [apiError, setApiError] = useState(null);

  function fetchUsers() {
    fetch(serverUrl + "/api/users")
      .then((res) => {
        if (res.status === 200) return res.json();
        else {
          throw new Error(res.json());
        }
      })
      .then((users) => {
        console.log("Returned users:", users);

        users.sort((a, b) => {
          return a.id - b.id;
        });

        setUsers(users);
      }).catch((error) => {
        setApiError(error.message);
      })
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
      .then((res) => {
        if (res.status === 200) return res.json();
        else {
          throw new Error(res.json());
        }
      })
      .then((data) => {
        setApiError(null);
        setUsers([...users, data]);
      })
      .catch((error) => {
        setApiError(error.message);
      });
  }

  function updateUser(id, name, email, password) {
    fetch(serverUrl + "/api/users/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        else {
          throw new Error(res.json());
        }
      })
      .then((data) => {
        setApiError(null);
        // setUsers([...users, data]);
        fetchUsers();
      })
      .catch((error) => {
        setApiError(error.message);
      });
  }
  
  function deleteUser(id) {
    fetch(serverUrl + "/api/users/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        else {
          throw new Error(res.json());
        }
      })
      .then((data) => {
        setApiError(null);
        // setUsers([...users, data]);
        fetchUsers();
      })
      .catch((error) => {
        setApiError(error.message);
      });
  }

  return (
    <div>
      <CreateUser addUser={addUser} />
      <button onClick={fetchUsers}>Fetch Users</button>
      <Users users={users} apiError={apiError} onUpdateUser={updateUser} onDeleteUser={deleteUser} />
    </div>
  );
}
