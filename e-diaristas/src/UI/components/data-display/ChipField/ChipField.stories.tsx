import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChipField from "./ChipField";

type Story = StoryObj<typeof ChipField>;

const meta: Meta<typeof ChipField> = {
  title: "data-display/ChipField",
  component: ChipField,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <ChipField {...args} />,
  args: {},
  argTypes: {
    itemsList: {
      description: 'Componente para incluir botões dinâmicos de cidades',
      defaultValue: '',
    },
    emptyMessage: {
      description: 'Componente opcional para demonstrar uma mensagem se estiver o campo vazio',
      defaultValue: '',
    }
  },
};
