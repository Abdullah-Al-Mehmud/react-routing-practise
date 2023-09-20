import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";
const Users = () => {
  const users = useLoaderData();

  return (
    <div className="user-container">
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
