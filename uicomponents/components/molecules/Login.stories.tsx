import React from "react";
import { Primary as Button } from "../atoms/Button/Button.stories";
import { Primary as Input } from "../atoms/Input/Input.stories";

export default {
  title: "Molecules/Login",
};

const PrimaryLogin = () => (
  <>
    <Input placeholder="hola" />
    <Button />
  </>
);
