const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title = props.title;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>Written by {blog.author}</p>
          <button>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
