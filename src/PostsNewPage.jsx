import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export function PostsNewPage() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params).then( response => {
      console.log(response.data);
      navigate('/');
    })
  }

  return (
    <>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
      Title: <input type="text" name="title" /><br />
      Body: <input type="text" name="body" /><br />
      Image: <input type="text" name="image" /><br />
      <button type="submit">Submit</button>
      </form>
    </>
  );
}
