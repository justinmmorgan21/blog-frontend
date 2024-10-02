import {useLoaderData} from "react-router-dom";

export function PostsShowPage() {
  const post = useLoaderData();
  console.log("in show page: " + post);

  return (
    <div>
      <h2>Title: {post.title}</h2>
      <p>{post.body}</p>
      <img src={post.image} />
    </div>
  );
}