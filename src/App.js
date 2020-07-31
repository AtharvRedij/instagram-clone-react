import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
import Post from "./components/Post";
import { db, auth, POSTS_COLLECTION_NAME } from "./firebase";
import ImageUpload from "./components/ImageUpload";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [user]);

  useEffect(() => {
    db.collection(POSTS_COLLECTION_NAME)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
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
      {user ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3>Login to upload</h3>
      )}

      <SignInModal open={signInOpen} setOpen={setSignInOpen} />
      <SignUpModal open={signUpOpen} setOpen={setSignUpOpen} />
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
      </div>
      {user ? (
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      ) : (
        <div className="app__sign-in-container">
          <Button onClick={() => setSignInOpen(true)}>Sign In</Button>
          <Button onClick={() => setSignUpOpen(true)}>Sign Up</Button>
        </div>
      )}

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
