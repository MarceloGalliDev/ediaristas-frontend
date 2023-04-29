// Button.stories.js|jsx|ts|tsx
import type { Meta, StoryObj } from "@storybook/react";
import TextFieldMask from "./TextFieldMask";
import React, { Children, PropsWithChildren } from "react";
import InputMask from "react-input-mask";
import TextField from "../TextField/TextField";
import { OutlinedTextFieldProps } from "@mui/material";

type Story = StoryObj<typeof TextFieldMask>;

const meta: Meta<typeof TextFieldMask> = {
  title: "inputs/TextFieldMask",
  component: TextFieldMask,
  args: {
    mask: '99/99/9999'
  }
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <TextFieldMask variant="outlined" {...args} />,
};

