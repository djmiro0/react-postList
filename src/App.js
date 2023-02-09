import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PostList from "./components/PostList/PostList";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  const [posts, setPosts] = useState([
    { title: "Hello", description: "This is a test desc" },
  ]);
  return (
    <div className="App">
      <Navbar title="Homepage" />
      <div className="container">
        <CreatePost postsprop={posts} setPosts={setPosts} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
