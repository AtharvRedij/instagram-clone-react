import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import firebase, {
  storage,
  db,
  POST_IMAGE_STORAGE_NAME,
  POSTS_COLLECTION_NAME,
} from "../firebase";
import "./ImageUpload.css";

const ImageUpload = ({ username }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage
      .ref(`${POST_IMAGE_STORAGE_NAME}/${image.name}`)
      .put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const currentProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(currentProgress);
      },
      (error) => console.log(error),
      () => {
        storage
          .ref(POST_IMAGE_STORAGE_NAME)
          .child(image.name)
          .getDownloadURL()
          .then((imageUrl) => {
            db.collection(POSTS_COLLECTION_NAME).add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption,
              imageUrl,
              username,
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="image-upload">
      <progress value={progress} max="100" />
      <Input
        type="text"
        onChange={(event) => setCaption(event.target.value)}
        placeholder="Enter a caption"
      />
      <Input type="file" onChange={handleChange} />

      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default ImageUpload;
