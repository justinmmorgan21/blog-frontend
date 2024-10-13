import {useLoaderData} from "react-router-dom";
import { useState } from 'react';
import { Rating } from '@smastrom/react-rating'

export function PostsShowPage() {
  const post = useLoaderData();
  const [rating, setRating] = useState(0) // Initial value

  return (
    <div>
      <form>
      <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} />
      <input type="text" hidden="true" value={rating}/>
      </form>
      <h1>{rating}</h1>
      <h2>Title: {post.title}</h2>
      <p>{post.body}</p>
      <img src={post.image} />

    </div>
  );
}