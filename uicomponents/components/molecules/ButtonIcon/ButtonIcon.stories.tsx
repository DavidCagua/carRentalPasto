import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonIcon from "./ButtonIcon";

export default {
  title: "Molecules/ButtonIcon",
} as ComponentMeta<typeof ButtonIcon>;
const Default: ComponentStory<typeof ButtonIcon> = () => (
  <ButtonIcon icon="search">buttonIcon</ButtonIcon>
);
