import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import { MenuItem } from "@mui/material";

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  title: "inputs/Select",
  component: Select,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => (
    <Select {...args} >
      <MenuItem value={''}>Selecione um item</MenuItem>
      <MenuItem value={10}>Dez</MenuItem>
      <MenuItem value={20}>Vinte</MenuItem>
      <MenuItem value={30}>Trinta</MenuItem>
    </Select>
  ),
  args: {
    label: ""
  },
};
