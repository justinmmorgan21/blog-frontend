import {useLoaderData, useNavigate} from 'react-router-dom';

export function PostsIndexPage() {

  const posts = useLoaderData();
  const navigate = useNavigate();

  const handleShow = post => {
    console.log("SHOW");
    navigate(`/posts/${post.id}`);
  };

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="cards">
      {
        posts.map(post => (
          <div className="card" key={post.id}>
          <h3 className="title">{post.title}</h3>
          <p>{post.body}</p>
          <img src={post.image} />
          <button onClick={()=>handleShow(post)}>More Info</button>
        </div>
        ))
      }
      </div>
    </div>
  );
}
