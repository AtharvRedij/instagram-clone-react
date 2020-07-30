import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import "./App.css";
import { db, POSTS_COLLECTION_NAME } from "./firebase";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection(POSTS_COLLECTION_NAME).onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

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
