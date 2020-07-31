import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import CommonModal from "./CommonModal";
import { auth } from "../firebase";

const SignInModal = ({ open, setOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error.message));

    setOpen(false);
  };

  return (
    <CommonModal open={open} setOpen={setOpen}>
      <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={signIn}>Sign In</Button>
    </CommonModal>
  );
};

export default SignInModal;
