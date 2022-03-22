import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spacer from "./Spacer";

export default {
  title: "atoms/Spacer",
  component: Spacer,
} as ComponentMeta<typeof Spacer>;

export const Primary: ComponentStory<typeof Spacer> = (args) => (
  <Spacer size={12} isVisible />
);
export const Horizontal: ComponentStory<typeof Spacer> = (args) => (
  <Spacer.Horizontal size={12} isVisible />
);
export const Vertical: ComponentStory<typeof Spacer> = (args) => (
  <Spacer.Vertical size={12} isVisible />
);
