import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextFieldMask from "./TextFieldMask";

type Story = StoryObj<typeof TextFieldMask>;

const meta: Meta<typeof TextFieldMask> = {
  title: "inputs/TextFieldMask",
  component: TextFieldMask,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <TextFieldMask {...args} />,
  args: {},
};
