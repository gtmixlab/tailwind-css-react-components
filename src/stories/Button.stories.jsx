import React from "react";

import { Button, ButtonVariants } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", ...Object.keys(ButtonVariants)],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button variant={args.variant}>{args.label}</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: ButtonVariants.primary,
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonVariants.secondary,
  label: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
