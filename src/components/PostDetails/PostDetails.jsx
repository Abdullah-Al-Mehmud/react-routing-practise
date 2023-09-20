import { useLoaderData } from "react-router-dom";
const PostDetails = () => {
  const post = useLoaderData();
  const { title, body } = post;
  return (
    <div>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
