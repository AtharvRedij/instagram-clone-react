import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import CommonModal from "./CommonModal";
import { auth } from "./../firebase";

const SignUpModal = ({ open, setOpen }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) =>
        authUser.user.updateProfile({
          displayName: username,
        })
      )
      .catch((error) => console.log(error.message));

    setOpen(false);
  };

  return (
    <CommonModal open={open} setOpen={setOpen}>
      <Input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth={true}
      />

      <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth={true}
      />

      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth={true}
      />

      <Button onClick={signUp}>Sign Up</Button>
    </CommonModal>
  );
};

export default SignUpModal;
