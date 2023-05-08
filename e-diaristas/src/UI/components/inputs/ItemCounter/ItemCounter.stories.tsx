import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ItemCounter from "./ItemCounter";

type Story = StoryObj<typeof ItemCounter>;

const meta: Meta<typeof ItemCounter> = {
  title: 'inputs/ItemCounter',
  component: ItemCounter,
  tags: ['autodocs'],
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <ItemCounter {...args} />,
  args: {
    label: 'Cozinha',
    plural: 'Cozinhas',
    counter: 0,
  },
  argTypes: {
    label: {
      description: 'Valor do label no singular',
      defaultValue: 'Cozinha',
    },
    plural: {
      description: 'Valor do label no plural',
      defaultValue: 'Cozinha',
    },
    counter: {
      description: 'Valor da contagem',
    },
  },
};
