import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  return (
    <div className="blog-details">
      <h1>Blog details - {id}</h1>
    </div>
  );
};

export default BlogDetails;
