import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
  const comments = useLoaderData();

  return (
    <div className="user-container">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment}></Comment>
      ))}
    </div>
  );
};

export default Comments;
