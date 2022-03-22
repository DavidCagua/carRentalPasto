import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    placeholder: { control: "text" },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  placeholder: "Input",
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: "Input",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Input",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "Input",
};
