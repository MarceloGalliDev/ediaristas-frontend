import React from "react";
import Footer from "./Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "surfaces/Footer",
  component: Footer,
  //args:{children: "click me!"}, aqui passo uma parametro se existir no ButtonProps
  //argTypes: {size: { control: "select" }}. aqui mudo o modelo dos botões do storybook
  //argTypes: {size: { control: "select" }, children: {options: ['Italic'], mapping: {Italic: <em>Italic text</em>}}}.
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const FooterBox: Story = {
  render: (args: any) => <Footer {...args} />,
  args: {},
};
