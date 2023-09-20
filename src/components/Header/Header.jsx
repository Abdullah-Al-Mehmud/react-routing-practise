import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <ul className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/comments">Comments</Link>
      </ul>
    </div>
  );
};

export default Header;
