import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from 'axios'

import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";
import { PostsNewPage } from "./PostsNewPage";
import { PostsIndexPage } from "./PostsIndexPage";
import { PostsShowPage } from "./PostsShowPage";
import { LogoutLink } from "./LogoutLink";

const router = createBrowserRouter([
  {
    element: (
      <div className="container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <PostsIndexPage />,
        loader: () =>
          axios.get("http://localhost:3000/posts.json").then(response => response.data)
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/logout",
        element: <LogoutLink />
      },
      {
        path: "/posts/new",
        element: <PostsNewPage />
      },
      {
        path: "/posts",
        element: <PostsIndexPage />,
        loader: () =>
          axios.get("http://localhost:3000/posts.json").then(response => response.data)
      },
      {
        path: "/posts/:id",
        element: <PostsShowPage />,
        loader: ({ params }) => axios.get(`http://localhost:3000/posts/${params.id}.json`).then(response => response.data)
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;