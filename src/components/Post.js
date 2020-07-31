import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Input, Button } from "@material-ui/core";
import firebase, { db, POSTS_COLLECTION_NAME } from "../firebase";
import "./Post.css";

const Post = ({ postId, username, caption, imageUrl, signedInUser }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribeFromComments;

    if (postId) {
      unsubscribeFromComments = db
        .collection(POSTS_COLLECTION_NAME)
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribeFromComments();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();

    db.collection(POSTS_COLLECTION_NAME)
      .doc(postId)
      .collection("comments")
      .add({
        text: comment,
        username: signedInUser.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

    setComment("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/broken-image.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="post" />

      <h4 className="post__text">
        <strong>{username}</strong>
        {caption}
      </h4>

      {signedInUser ? (
        <form>
          <Input
            fullWidth={true}
            type="text"
            placeholder="Enter a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <Button onClick={postComment}>Post</Button>
        </form>
      ) : null}

      <div className="post__comments-container">
        {comments.map((comment, index) => (
          <p key={index}>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Post;
