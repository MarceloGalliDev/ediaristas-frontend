import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ToggleButtonGroup, { ToggleButton } from "./ToggleButtonGroup";

type Story = StoryObj<typeof ToggleButtonGroup>;

const meta: Meta<typeof ToggleButtonGroup> = {
  title: "inputs/ToggleButtonGroup",
  component: ToggleButtonGroup,
};

export default meta;

export const ComponentStory: Story = {
  render: (args) => (
  <ToggleButtonGroup {...args} >
    <ToggleButton value='1'>
      <i className='twf-cleaning-1'/>Limpeza de rotina
    </ToggleButton>
    <ToggleButton value='2'>
      <i className='twf-cleaning-2'/>Limpeza pesada
    </ToggleButton>
    <ToggleButton value='3'>
      <i className='twf-cleaning-3'/>Limpeza pós obra
    </ToggleButton>
  </ToggleButtonGroup>
  ),
  args: { 
    value: '1'
  },
};
