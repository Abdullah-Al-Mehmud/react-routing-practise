import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div className="user">
      <h4>title: {title}</h4>
      <Link to={`/post/${id}`}>Post Details</Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
