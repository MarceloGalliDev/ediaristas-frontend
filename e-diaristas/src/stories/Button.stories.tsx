// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Button as MuiButton } from '@mui/material'


const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  //args:{children: "click me!"}, aqui passo uma parametro se existir no ButtonProps
  //argTypes: {size: { control: "select" }}. aqui mudo o modelo dos botões do storybook
  //argTypes: {size: { control: "select" }, children: {options: ['Italic'], mapping: {Italic: <em>Italic text</em>}}}.
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button primary'
  }
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button secondary'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  }
};

export const Teste = {
  render: (args: any) => <MuiButton {...args}>Click</MuiButton>,
  args: {
    variant: 'contained'
  }
}