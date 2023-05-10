import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FileField from "./FileField";

type Story = StoryObj<typeof FileField>;

const meta: Meta<typeof FileField> = {
  title: "inputs/FileField",
  component: FileField,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <FileField {...args}/>,
  args: {},
  argTypes: {
    children: {
      description: 'Componente para upload de arquivos',
      defaultValue: 'Selecione o arquivo',
    },
  },
};
