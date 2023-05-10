import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserForm from "./UserForm";

type Story = StoryObj<typeof UserForm>;

const meta: Meta<typeof UserForm> = {
  title: "inputs/UserForm",
  component: UserForm,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <UserForm {...args} />,
  args: {},
  argTypes: {
    argumentoName: {
      description: 'Componente para verificar o nível de força de password',
      defaultValue: '',
    },
  },
};
