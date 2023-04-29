import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

type Story = StoryObj<typeof TextField>;

const meta: Meta<typeof TextField> = {
  title: "inputs/TextField",
  component: TextField,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <TextField {...args} />,
  args: {},
};
