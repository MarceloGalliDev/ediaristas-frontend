import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";

type Story = StoryObj<typeof Dialog>;

const meta: Meta<typeof Dialog> = {
  title: "feedback/Dialog",
  component: Dialog,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <Dialog {...args} />,
  args: {},
  argTypes: {
    argumentoName: {
      description: 'Componente para verificar o nível de força de password',
      defaultValue: '',
    },
  },
};
