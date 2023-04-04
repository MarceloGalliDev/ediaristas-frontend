import React from 'react';
import RoundedButton from './RoundedButton';
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RoundedButton> = {
  title: "inputs/RoundedButton",
  component: RoundedButton,
  //args:{children: "click me!"}, aqui passo uma parametro se existir no ButtonProps
  //argTypes: {size: { control: "select" }}. aqui mudo o modelo dos botões do storybook
  //argTypes: {size: { control: "select" }, children: {options: ['Italic'], mapping: {Italic: <em>Italic text</em>}}}.
};

export default meta;
type Story = StoryObj<typeof RoundedButton>;

export const MeuBotao1: Story = {
  render: (args) => <RoundedButton {...args}>Click</RoundedButton>,
  args: {
    variant: "contained",
    color: "error"
  },
};

export const MeuBotao2: Story = {
  render: (args) => <RoundedButton {...args}>Click</RoundedButton>,
  args: {
    variant: "contained",
    color: "primary"
  },
};