import { useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react'

export function PostsIndexPage() {

  const posts = useLoaderData();
  const navigate = useNavigate();

  const [searchTerms ,setSearchTerms] = useState("");

  const searchFilter = post => {
     return (
      post.title.toLowerCase().includes(searchTerms.toLowerCase())
     )
  }

  const handleShow = post => {
    console.log("SHOW");
    navigate(`/posts/${post.id}`);
  };

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <input type="text" name="search" id="search" value={searchTerms} onChange={(event)=>setSearchTerms(event.target.value)}/>
      <div className="row ">
      {posts.filter(searchFilter).map(post => (
        <div key={post.id} className="card col-sm-3 mb-3 mb-sm-0 m-3" >
          <img src={post.image} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <a onClick={()=>handleShow(post)} className="btn btn-primary">More info</a>
                 {/* <button onClick={()=>handleShow(post)}>More Info</button> */}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
