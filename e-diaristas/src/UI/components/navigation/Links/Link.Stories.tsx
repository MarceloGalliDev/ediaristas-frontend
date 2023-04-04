import React from "react";
import Link from "./Links";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "navigation/Link",
  component: Link,
  //args:{children: "click me!"}, aqui passo uma parametro se existir no ButtonProps
  //argTypes: {size: { control: "select" }}. aqui mudo o modelo dos botões do storybook
  //argTypes: {size: { control: "select" }, children: {options: ['Italic'], mapping: {Italic: <em>Italic text</em>}}}.
};

export default meta;
type Story = StoryObj<typeof Link>;
