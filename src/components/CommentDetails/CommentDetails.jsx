import { useLoaderData, useNavigate } from "react-router-dom";

const CommentDetails = () => {
  const comment = useLoaderData();
  const navigate = useNavigate();
  const { name, body } = comment;

  const handleClickGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="user">
      <h3>{name}</h3>
      <h3>{body}</h3>
      <button onClick={handleClickGoBack}>Go back</button>
    </div>
  );
};

export default CommentDetails;
