import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Comment = ({ comment }) => {
  const { id, name, body } = comment;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/comment/${id}`);
  };
  return (
    <div className="user">
      <h4>{name}</h4>
      <h4>{body}</h4>
      <Link to={`/comment/${id}`}>Comment details</Link>
      <button onClick={handleClick}>see more</button>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
