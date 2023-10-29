import { useState, useEffect } from "react";
import Users from "./components/Users.jsx";
import CreateUser from "./components/CreateUser.jsx";
import useHttp from "./hooks/use-http";

const serverUrl = "http://localhost:3000";

export default function App() {
  const [users, setUsers] = useState([]);
  const [apiError, setApiError] = useState(null);
  const { isLoading, error, sendRequest: fetchUsers } = useHttp();

  const handleSetUsers = (data) => {
    data.sort((a, b) => {
      return a.id - b.id;
    });

    setUsers(data);
  };

  const handleUpdateUsers = (data) => {
    fetchUsers({ url: serverUrl + "/api/users" }, handleSetUsers);
  };

  useEffect(() => {
    fetchUsers({ url: serverUrl + "/api/users" }, handleSetUsers);
  }, [fetchUsers]);

  function addUser(name, email, password) {
    const config = {
      url: serverUrl + "/api/users",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };

    fetchUsers(config, handleUpdateUsers);
  }

  function updateUser(id, name, email, password) {
    const config = {
      url: serverUrl + "/api/users/" + id,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };

    console.log(config.body);

    fetchUsers(config, handleUpdateUsers);
  }

  function deleteUser(id) {
    const config = {
      url: serverUrl + "/api/users/" + id,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetchUsers(config, handleUpdateUsers);
  }

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Server error: {error}</p>}
      <CreateUser addUser={addUser} />
      <Users users={users} apiError={error} onUpdateUser={updateUser} onDeleteUser={deleteUser} />
    </div>
  );
}
