import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BreadCrumb from "./BreadCrumb";

type Story = StoryObj<typeof BreadCrumb>;

const meta: Meta<typeof BreadCrumb> = {
  title: "navigation/BreadCrumb",
  component: BreadCrumb,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <BreadCrumb {...args} />,
  args: {
    items: ['Detalhes', 'Identificação', 'Pagamento'],
    selected: 'Identificação',
  },
};
