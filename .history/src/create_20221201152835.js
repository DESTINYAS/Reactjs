const Create = () => {
  return (
    <div className="create">
      <h1>Add a New Blog</h1>
      <form action="#">
        <label>Blog title:</label>
        <input type="text" required />
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
