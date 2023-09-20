import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div className="user">
      <h3>Name : {name}</h3>
      <h3>Email : {email}</h3>
      <Link to={`/user/${id}`}>show details</Link>
    </div>
  );
};

export default User;
