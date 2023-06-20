import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Status from "./Status";

type Story = StoryObj<typeof Status>;

const meta: Meta<typeof Status> = {
  title: "data-display/Status",
  component: Status,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <Status {...args} />,
  args: {
    children: 'Sucesso',
    colors: 'success',
  },
  argTypes: {
    colors: {
      description: 'Componente para indicar o status',
      defaultValue: 'success',
    },
  },
};
