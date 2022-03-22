import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "./Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/Heading",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Heading",
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Heading",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  label: "Heading",
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: "xsm",
  label: "Heading",
};
