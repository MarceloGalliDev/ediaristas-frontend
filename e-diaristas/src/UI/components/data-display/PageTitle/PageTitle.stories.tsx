import React from "react";
import PageTitle from "./PageTitle";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof PageTitle>;

const meta: Meta<typeof PageTitle> = {
  title: "data-display/PageTitle",
  component: PageTitle,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <PageTitle {...args} />,
  args: {
    title: 'Conheça os Profissionais',
    subtitle: 'Preencha seu endereço e veja todos os profissionais da sua localidade',
  },
};
