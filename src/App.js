import React, { useState } from "react";
import Post from "./components/Post";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([
    {
      username: "Atharv",
      caption: "Title 1",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png",
    },
    {
      username: "Omakr",
      caption: "Title 2",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png",
    },
    {
      username: "Shukla",
      caption: "Title 3",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png",
    },
  ]);

  return (
    <div className="app">
      <div className="app-header">
        <img
          className="app-header__image"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
      </div>

      {posts.map(({ username, caption, imageUrl }, index) => (
        <Post
          key={index}
          username={username}
          caption={caption}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

export default App;
