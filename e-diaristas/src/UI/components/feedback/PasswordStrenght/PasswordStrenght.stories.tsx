import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PasswordStrenght from "./PasswordStrenght";

type Story = StoryObj<typeof PasswordStrenght>;

const meta: Meta<typeof PasswordStrenght> = {
  title: "feedback/PasswordStrenght",
  component: PasswordStrenght,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <PasswordStrenght {...args} />,
  args: {
    password: 'string',
  },
  argTypes: {
    password: {
      description: 'Componente para verificar o nível de força de password',
      defaultValue: '',
    },
  },
};
