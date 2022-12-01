import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  return (
    <div className="create">
      <h1>Add a New Blog</h1>
      <form action="#">
        <label>Blog title:</label>
        <input type="text" required value={title} />
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
